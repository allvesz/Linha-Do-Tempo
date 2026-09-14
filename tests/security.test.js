import { validateInputs } from '../js/security.js';

describe('Testes de Segurança e Validação', () => {
    
    test('Deve lançar erro se Ano de Início for maior que Ano de Fim', () => {
        expect(() => {
            validateInputs("História", "2000", "1990", "AIzaSy_FAKE_KEY");
        }).toThrow("O ano de início não pode ser maior que o ano de fim.");
    });

    test('Deve falhar se a API Key estiver vazia', () => {
        expect(() => {
            validateInputs("História", "1990", "2000", "");
        }).toThrow("API Key é obrigatória");
    });

    test('Deve passar com inputs válidos', () => {
        expect(validateInputs("História", "1990", "2000", "AIzaSy_FAKE_KEY")).toBe(true);
    });
});
