let timelineState = [];

export function addEvents(newEvents) {
    // Garante que a IA não quebrou o array
    if (!Array.isArray(newEvents)) return;

    timelineState = [...timelineState, ...newEvents];
    
    // Ordena do evento mais antigo para o mais recente
    timelineState.sort((a, b) => a.year - b.year);
    
    renderTimeline();
}

function renderTimeline() {
    const container = document.getElementById("timeline-container");
    container.textContent = ''; // Limpa o container de forma segura

    timelineState.forEach((event, index) => {
        // Criação de elementos isolados (evita XSS injection)
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.style.animationDelay = `${index * 0.1}s`;

        const dateEl = document.createElement('div');
        dateEl.className = 'timeline-date';
        dateEl.textContent = event.year; // textContent escapa automaticamente tags HTML

        const contentEl = document.createElement('div');
        contentEl.className = 'timeline-content';

        const titleEl = document.createElement('h3');
        titleEl.textContent = event.title;

        const descEl = document.createElement('p');
        descEl.textContent = event.description;

        contentEl.appendChild(titleEl);
        contentEl.appendChild(descEl);
        item.appendChild(dateEl);
        item.appendChild(contentEl);
        
        container.appendChild(item);
    });
}
