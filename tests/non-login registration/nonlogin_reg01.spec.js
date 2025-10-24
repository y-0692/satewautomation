import { test, expect } from '@playwright/test';
import {FlightRegData} from '../../data/FlightRegData.js';
import * as NonLoginFlightRegPage from '../../pages/NonLoginFlightRegPage.js';
import * as NonLoginPostRegPage from '../../pages/NonLoginPostRegPage.js';

test('Verify non-login form filled', async ({ page }) => {
  const nonLoginFlightRegPage = new NonLoginFlightRegPage.NonLoginFlightRegPage(page);
  const nonLoginPostRegPage = new NonLoginPostRegPage.NonLoginPostRegPage(page);

  await nonLoginFlightRegPage.goToNonLoginFlightRegPage();

  await nonLoginFlightRegPage.fillFullName(FlightRegData.fullNameInfo);

  await nonLoginFlightRegPage.fillPrimaryTravelerInfo();

  await nonLoginFlightRegPage.fillDependentInfo();

  await nonLoginFlightRegPage.selectActiveDuty('No');

  await nonLoginFlightRegPage.selectDepartureLocations();

  await nonLoginFlightRegPage.selectTravelOutsideUS('No');

  await nonLoginFlightRegPage.inputEmailForRegistration();

  await nonLoginFlightRegPage.inputEPC('Nang Khay', '660801145432');

  await nonLoginFlightRegPage.nonLoginagreesToTermsAndConditions();

  await nonLoginFlightRegPage.submitsTheForm();
  await page.pause();

  await nonLoginFlightRegPage.agreesToAcknowledgements();

  await nonLoginFlightRegPage.submitWithSendImmediatelyOption();

  await nonLoginFlightRegPage.verifyPopupToConfirmTheEmail();

  await nonLoginFlightRegPage.closePopup();
  
  await nonLoginPostRegPage.verifySubmittedInfo(NonLoginFlightRegData.fullNameInfo);


});
  