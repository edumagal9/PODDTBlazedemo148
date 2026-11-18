const {test, expect} = require("@playwright/test");

import {parse} from 'csv-parse/sync'
import { readFileSync } from 'node:fs';
import HomePage from '../pages/home.page'
import LoginPage from '../pages/login.page'

const massa = parse(readFileSync('data/csv/login.csv'), {
    columns: true
    })

massa.forEach(({
    email,
    password,
    mensagem
}) =>{
test('Realizar Login PO DDT', async ({page}) => {

// Instanciar os objetos 
const homePage = new HomePage(page)
const loginPage = new LoginPage(page)

// Página Principal - Home
await page.goto('https://blazedemo.com/')
await homePage.locator(this.btnhome).click()

// Página de Login
await expect(page).toHaveURL(loginPage.url)
await expect(page.locator(loginPage.tutulosecao))
.toHaveText('Login')

await loginPage.preencher_email(email)
await loginPage.preencher_password(password)
await loginPage.lembrar_de_mim()
await loginPage.clicar_para_concluir_login()
await expect(page.locator(loginPage.mensagem))
.toHaveText('419 Page Expired')

})