import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';   
import { LoginFlightRegPage } from '../../pages/LoginFlightRegPage.js';
import { FlightRegData } from '../../data/FlightRegData.js';


test('Verify login form filled', async ({ page }) => {
    
    //const nonLoginPostRegPage = new NonLoginPostRegPage(page);
    const loginPage = new LoginPage(page);
    const loginFlightRegPage = new LoginFlightRegPage(page);
    await loginPage.goToLoginPage();
    await loginPage.loginWithValidCredentials('conaj91944@fixwap.com','aaAA11@@')
    await loginPage.goToLoginFlightRegPage();
    
    
    await loginFlightRegPage.selectActiveDuty('No');

  await loginFlightRegPage.selectDepartureLocations();

  await loginFlightRegPage.selectTravelOutsideUS('No');

  await loginFlightRegPage.loginAgreesToTermsAndConditions();

  //await loginFlightRegPage.clickSendImmediatelyButton();
  //await page.pause();


    
          
});



