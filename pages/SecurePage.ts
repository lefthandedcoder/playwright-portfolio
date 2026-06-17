import { Page, Locator, expect} from '@playwright/test'

export class SecurePage {
    readonly page: Page;
    readonly messageAlert: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.messageAlert = page.locator('#flash');
        this.logoutButton = page.locator('a.button.secondary')
    }

    async logout() {
        await this.logoutButton.click();
    }

    async expectLoaded() {
        await expect(this.page).toHaveURL('/secure');
        await expect(this.logoutButton).toBeVisible();
    }

    async expectLoggedOut() {
        await expect(this.messageAlert).toContainText('You logged out of the secure area!');
        expect(this.page).toHaveURL('/login');
    }

}