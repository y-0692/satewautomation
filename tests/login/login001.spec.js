import {test, expect} from '@playwright/test';
import {FlightRegData} from '../../data/FlightRegData.js';
import {LoginPage} from '../../pages/LoginPage.js';

test('Verify user can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToLoginPage();

  await loginPage.loginWithValidCredentials('nangyingkyeinkhaykhay@gmail.com','aaAA11@@')
  await loginPage.goToLoginFlightRegPage();
  await page.pause();


 

  });
