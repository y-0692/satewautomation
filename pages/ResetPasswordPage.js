import { expect } from '@playwright/test';
import { BasePage } from './BasePage.js';
/**
 * @typedef {import('@playwright/test').Page} Page
 */

export class ResetPasswordPage extends BasePage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    super(page);
    this.emailField = page.getByRole('textbox', { name: 'Enter your email' });
    this.submitButton = page.getByRole('button', { name: 'Reset Password' })
    this.successPopupText = page.locator('text=If an account with that email exists, you’ll receive a reset link shortly.');
    this.secondaryText = page.locator('text=Please check your spam folder if you do not receive the email.');
    this.closeButton = page.getByRole('button', { name: 'Close' });
  }

  async goToResetPasswordPage() {
    await this.navigateTo('/auth/forgot-password');
  }

  async submitResetRequest(email) {
    await this.emailField.fill(email);
    await this.submitButton.click(); 
 }
  
  async verifySuccessPopup() {
    await expect (this.successPopupText).toBeVisible();
    await expect(this.secondaryText).toBeVisible();
  }

  async closePopup() {
    if (await (this.closeButton.isVisible())) {
      await this.closeButton.click();
    }
  }
}
