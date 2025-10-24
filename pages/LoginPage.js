import {expect,test} from '@playwright/test';
import { BasePage } from './BasePage.js';
/**
 * @typedef {import('@playwright/test').Page} Page
 */

export class LoginPage extends BasePage {
        /**
         * @param {Page} page
         */
        constructor(page) {
            super(page);
            this.emailField = page.getByRole('textbox', { name: 'Enter your email' });
            this.passwordField = page.getByRole('textbox', { name: 'Enter your password' });
            this.loginButton = page.getByRole('button', { name: 'Login' })
        }

        async goToLoginPage() {
            await this.navigateTo('/auth/login');
        }
        /**
         * 
         * @param {String} email 
         * @param {String} password 
         */

        async loginWithValidCredentials(email, password) {
            await this.emailField.fill(email);
            await this.passwordField.fill(password);
            await this.loginButton.click();
        }

        async goToLoginFlightRegPage() {
    await expect(this.page).toHaveURL("https://satew.dev.onifytech.net/home");
    await expect(this.page.getByRole('button', { name: 'Log Out' })).toBeVisible({ timeout: 30000 });

    // Fix: select the specific instance of the link
    const flightRegLink = this.page.getByRole('link', { name: 'Flight Registration' }).first();
    await flightRegLink.click();

    await this.page.waitForLoadState('networkidle');
}


}
