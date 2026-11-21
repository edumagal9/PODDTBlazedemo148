class LoginPage {
    // Arrange ´Prepara
    // Mapear os elementos da página
    constructor(page) {
        // interno = externo
        this.page = page
        this.url = /login/ // endereço da página
        this.titulosecao = '.panel-heading'
        this.email= '#email'
        this.password = '#password'
        this.rememberme = '[name= "remember"]'
        this.btnlogin = '.btn.btn-primary'
    }
    // Act - Ação
    async realizar_login (login) {
        await this.page.locator(this.email).fill(email)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.rememberme).check()
        await this.page.locator(this.btnlogin).click()
    } 
}
module.exports = LoginPage