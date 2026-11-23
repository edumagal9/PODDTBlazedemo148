class HomePage {
    // Arrange - Prepara
    // Mapear os elementos da página
    constructor(page) {
        // interno = externo
        this.page = page  // Playwright
        this.btnhome = 'a[href="home"]' // class
    } // fecha constructor

    // Act - Ação
    // Mapear as ações que serão realizadas na página
    async selectOption (home) {
        await this.page.locator(this.btnhome).click()
    } // fechar ação
    // Assert - Validação - // Será feita nos testes
} // fecha classe

module.exports = {HomePage}