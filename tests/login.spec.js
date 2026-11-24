import {test, expect} from '@playwright/test';

import {parse} from 'csv-parse/sync';
import { readFileSync } from 'node:fs';
import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';

const massa = parse(readFileSync('data/csv/login.csv'), {
    columns: true
    })

massa.forEach(({
    email,
    password,
    mensagem
}) =>{  
test(`Realizar Login PO DDT - ${email}`, async ({page}) => {

// Instanciar os objetos 
const homePage = new HomePage(page)
const loginPage = new LoginPage(page)

// Página Principal - Home
await page.goto('https://blazedemo.com/')
await page.locator(homePage.btnhome).click()

// Página de Login
await expect(page).toHaveURL(loginPage.url)
await expect(page.locator(loginPage.titulosecao))
.toHaveText('Login')

await loginPage.realizar_login(email, password)
await expect(page.locator(loginPage.mensagem))
.toHaveText('419 Page Expired')
})
})