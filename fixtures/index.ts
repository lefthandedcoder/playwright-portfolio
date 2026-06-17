import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { SecurePage } from '../pages/SecurePage';
import { CheckboxesPage } from '../pages/CheckboxesPage';
import { DropdownPage } from '../pages/DropdownPage';


type PageFixtures = {
    loginPage: LoginPage;
    securePage: SecurePage;
    checkboxesPage: CheckboxesPage;
    dropdownPage: DropdownPage;
}

export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    securePage: async ({ page }, use) => {
        await use(new SecurePage(page));
    },
    dropdownPage: async ({ page }, use) => {
        await use(new DropdownPage(page));
    },
    checkboxesPage: async ({ page }, use) => {
        await use(new CheckboxesPage(page));
    }
});

export { expect } from '@playwright/test'

export const VALID_USER = { username: 'tomsmith', password: 'SuperSecretPassword!' };

export const INVALID_USERS = [
    { username: 'wronguser', password: 'SuperSecretPassword!', desc: 'invalid username' },
    { username: 'tomsmith', password: 'wrongpassword', dec: 'invalid password'},
    { username: '', password: '', desc: 'empty credentials'},
];