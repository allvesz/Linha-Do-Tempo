export function buildTimelinePrompt(theme, startYear, endYear) {
    let dateContext = "";
    if (startYear && endYear) {
        dateContext = `A linha do tempo deve ocorrer EXCLUSIVAMENTE entre os anos ${startYear} e ${endYear}.`;
    } else if (startYear) {
        dateContext = `A linha do tempo deve começar a partir do ano ${startYear}.`;
    } else if (endYear) {
        dateContext = `A linha do tempo deve ir apenas até o ano ${endYear}.`;
    }

    return `
    Atue como um historiador. Crie uma linha do tempo sobre: "${theme}".
    ${dateContext}
    Retorne APENAS um JSON válido. Sem formatação markdown, sem texto extra.
    Formato estrito:
    [
      { "year": 1990, "title": "Título", "description": "Descrição curta" }
    ]
    `;
}
