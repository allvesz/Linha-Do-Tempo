// Simulando a lógica de addEvents (desacoplada do DOM para testabilidade)
function sortEvents(timeline) {
    return timeline.sort((a, b) => a.year - b.year);
}

describe('Lógica de Timeline', () => {
    test('Deve reordenar cronologicamente eventos misturados da IA', () => {
        const mockIA = [
            { year: 2020, title: "Fim" },
            { year: 1990, title: "Início" },
            { year: 2005, title: "Meio" }
        ];
        
        const sorted = sortEvents(mockIA);
        
        expect(sorted[0].year).toBe(1990);
        expect(sorted[2].year).toBe(2020);
    });
});
