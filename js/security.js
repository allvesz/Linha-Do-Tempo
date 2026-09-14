// Valida se os inputs não são maliciosos e se as datas fazem sentido
export function validateInputs(theme, start, end, apiKey) {
    if (!apiKey || apiKey.trim() === '') {
        throw new Error("API Key é obrigatória para usar a IA.");
    }
    if (!theme || theme.trim() === '') {
        throw new Error("O tema não pode estar vazio.");
    }
    
    const startNum = parseInt(start);
    const endNum = parseInt(end);

    if (!isNaN(startNum) && !isNaN(endNum)) {
        if (startNum > endNum) {
            throw new Error("O ano de início não pode ser maior que o ano de fim.");
        }
    }
    
    return true;
}

// Sanitizador defensivo extra (embora usemos textContent na renderização)
export function sanitizeText(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[^\w. çãõáéíóúâêîôûàèìòù]/gi, function (c) {
        return '&#' + c.charCodeAt(0) + ';';
    });
}
