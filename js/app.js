import { validateInputs } from './security.js';
import { buildTimelinePrompt } from './prompts.js';
import { fetchGemini } from './api.js';
import { addEvents } from './timeline.js';

document.getElementById('btnGenerate').addEventListener('click', async () => {
    const apiKey = document.getElementById('apiKey').value;
    const theme = document.getElementById('theme').value;
    const startYear = document.getElementById('startYear').value;
    const endYear = document.getElementById('endYear').value;
    const errorBox = document.getElementById('error-message');
    
    errorBox.className = 'error-hidden';
    errorBox.textContent = '';

    try {
        validateInputs(theme, startYear, endYear, apiKey);
        
        const prompt = buildTimelinePrompt(theme, startYear, endYear);
        
        // Pode ser salvo em sessionStorage se o usuário quiser manter durante a navegação
        sessionStorage.setItem('gemini_api_key_temp', apiKey); 

        // Adiciona um botão de loading visual
        document.getElementById('btnGenerate').textContent = 'Gerando...';
        
        const resultJSON = await fetchGemini(prompt, apiKey);
        addEvents(resultJSON);
        
    } catch (error) {
        errorBox.textContent = error.message;
        errorBox.className = 'error-visible';
    } finally {
        document.getElementById('btnGenerate').textContent = 'Gerar com IA';
    }
});
