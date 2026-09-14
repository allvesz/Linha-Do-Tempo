export async function fetchGemini(prompt, apiKey) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!response.ok) {
            // Não expõe detalhes do erro da API para o usuário comum (DevSecOps)
            throw new Error(`Erro na comunicação com a API. Status: ${response.status}`);
        }

        const data = await response.json();
        const jsonString = data.candidates[0].content.parts[0].text;
        
        // Limpeza defensiva do JSON retornado pela IA (remover markdowns indesejados)
        const cleanJson = jsonString.replace(/```json/gi, '').replace(/```/gi, '').trim();
        return JSON.parse(cleanJson);
        
    } catch (error) {
        console.error("[Segurança/Log Interno]:", error.message);
        throw new Error("Falha ao gerar os dados. Verifique sua chave de API ou tente novamente.");
    }
}
