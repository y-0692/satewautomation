import { test } from '@playwright/test';
import * as ResetPasswordPage from '../../pages/ResetPasswordPage.js';

test('Verify reset password popup', async ({ page }) => {
  const resetPage = new ResetPasswordPage.ResetPasswordPage(page);

  await resetPage.goToResetPasswordPage();

  await resetPage.submitResetRequest('nangyingkyeinkhaykhay@gmail.com');

  await resetPage.verifySuccessPopup();

  await resetPage.closePopup();

  await page.pause();
});

