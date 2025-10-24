import { expect, test} from '@playwright/test';
import { BasePage } from './BasePage.js';
/**
 * @typedef {import('@playwright/test').Page} Page
 */

export class FlightRegPage extends BasePage {
     /**
   * @param {Page} page
   */
  constructor(page) {
    super(page);
    this.yourFirstNameField = page.getByRole('textbox', { name: 'Your First Name' });
    this.yourMiddleNameField = page.getByRole('textbox', { name: 'Your Middle Name' });
    this.yourLastNameField = page.getByRole('textbox', { name: 'Your Last Name' });
    this.dodIDFiedld = page.getByRole('textbox', { name: 'Your DOD ID' })
    this.dependentDropdownField = page.getByRole('button', { name: /^1$/ });
    this.dependentInfo1 = page.getByRole('button', { name: /^2$/ });
    this.dependentFullNameField = page.getByRole('textbox', { name: 'Dependent Full Name' });
    this.passportTypeDropdown = page.getByRole('button', { name: 'Passport Type' });
    this.selectUSPassport = this.page.getByRole('button', { name: 'US' });
    this.activeDutyNo = page.locator('#activeDutyNo');
    this.activeDutyYes = page.locator('#activeDutyYes');
    this.startOfLeaveDateField = page.getByRole('textbox', { name: 'Start of Leave' });
    this.endOfLeaveDateField = page.getByRole('textbox', { name: 'End of Leave' });
    this.departureLocationField = page.getByRole('textbox', { name: 'Search Bases or Terminal' });
    this.travelOutsideUsNo = page.locator('#outsideUsNo');
    this.travelOutsideUsYes = page.locator('#outsideUsYes');
    this.borderClearnanceYes = page.locator('#borderClearanceYes');
    this.borderClearanceNo = page.locator('#borderClearanceNo');
    this.destinationCountryField = page.getByRole('textbox', { name: 'Search Country' })
    this.emailAddressField = page.getByRole('textbox', { name: 'Your Email Address' })
    this.confirmationEmailField =page.getByRole('textbox', { name: 'Your Confirm Email Address' })
    this.emergencyContactFullNameField = page.getByPlaceholder(/^Full Name$/);
    this.emergencyPhoneField = page.getByRole('textbox', { name: 'Phone Number' });
    this.emailField = page.getByRole('textbox', { name: 'Your Email' });
    this.suffixDropdown = page.getByRole('button', { name: 'Your Suffix' });
    this.selectedSuffix = page.getByRole('button', { name: 'Jr.' });
    this.branchDropdown = page.getByRole('button', { name: 'Your Branch of Service' });
    this.selectedBranch = page.getByRole('button', { name: 'Air Force' });
    this.rankDropdown = page.getByRole('button', { name: 'Your Rank' });
    this.selectedRank = page.getByRole('button', { name: 'E-1' });
    this.travelCategoryDropdown = page.getByRole('button', { name: 'Your Travel Category' });
    this.selectedTravelCategory = page.getByRole('button', { name: 'Cat I (1) Emergency Leave' });
    this.relationshipDropdown = page.getByRole('button', { name: 'Select Relationship' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.ackEligibilityCheckbox = page.locator ('#POR');
    this.ackRegistrationCheckbox = page.locator('#spaceA');
    this.ackDependentsCheckbox = page.locator('#TDY');
    this.ackTermsCheckbox = page.locator('#travel');
    this.sendImmediatleyButton = page.getByRole('button', { name: 'Send Immediately' });
    this.sendNowSignupLaterButton = page.getByRole('button', { name: 'Send Now, Sign Up Later' });
    this.verifyEmailHeader = page.getByRole('heading', { name: 'You’re almost there!' });
    this.verifyEmailText = page.getByText('We have sent an email to');
    this.phoneFlagSelector = page.getByRole('button', { name: 'United States: +' });
    this.prefixThailand = page.getByText('+66');
    this.closeButton = page.getByRole('button', { name: 'Close' })
  }

  async goToNonLoginFlightRegPage() {
    //await this.page.setViewportSize({ width: 375, height: 667 }); 
    await this.navigateTo('/registration');
  }
  /**
   * @param {{ firstName: string, middleName?: string, lastName: string, suffix: string }} data
   */
  async fillFullName(data){
    await this.yourFirstNameField.fill(data.firstName);
    await this.yourMiddleNameField.fill(data.middleName); 
    await this.yourLastNameField.fill(data.lastName);
    await this.suffixDropdown.first().click();
    await this.selectedSuffix.click();
  }

  async fillPrimaryTravelerInfo (){
    await this.branchDropdown.click();
    await this. selectedBranch.click();
    await this.rankDropdown.click();
    await this.selectedRank.click();
    await this.dodIDFiedld.fill('1234567890');
    await this.travelCategoryDropdown.click();
    await this.selectedTravelCategory.click();
  }
  async fillDependentInfo(){
    await this.dependentDropdownField.first().click();
    await this.dependentInfo1.click();
    await this.dependentFullNameField.fill('Khay Nay');
    await this.passportTypeDropdown.click();
    await this.selectUSPassport.click();

}
  /**
 * @param {string} status
 */
  async selectActiveDuty(status){ {
 
    if (status === 'Yes') {
      await this.activeDutyYes.check();
    } else {
      await this.activeDutyNo.check();
    }
}
  
}
async selectDepartureLocations( ){
  await this.departureLocationField.click();
  await this.page.getByRole('listitem').filter({ hasText: 'Andersen AFB' }).click()
  await this.page.mouse.click(0, 0);
  }
/**
 * @param {string} status
 */
async selectTravelOutsideUS(status){
  if (status== 'Yes'){
    await this.travelOutsideUsYes.click();
  } else {
    await this.travelOutsideUsNo.click();
  }
} 


async inputEmailForRegistration(){
  this.email = 'evelyn1@onifytech.com';
  await this.emailAddressField.fill(this.email);
  await this.confirmationEmailField.fill(this.email);
}

/**
 * @param {string} name
 * @param {string} phone
 */

async inputEPC(name, phone){
  await this.emergencyContactFullNameField.fill(name);
  await this.phoneFlagSelector.click();
  await this.prefixThailand.click();
  await this.emergencyPhoneField.fill(phone);
  await this.relationshipDropdown.click();
  await this.page.getByRole('button', { name: 'Child' }).click();
}

async agreesToTermsAndConditions(){
  await this.page.getByRole('checkbox', { name: 'I certify that I am eligible' }).check();
  await this.page.getByRole('checkbox', { name: 'I certify that I did not' }).check();
  await this.page.getByRole('checkbox', { name: 'I certify that I have read' }).check();
}

async submitsTheForm(){
  await this.continueButton.click();
}

async agreesToAcknowledgements(){
  await this.ackEligibilityCheckbox.waitFor({ state: 'visible' });
  await this.ackEligibilityCheckbox.check();
  await this.ackRegistrationCheckbox.check();
  await this.ackDependentsCheckbox.check();
  await this.ackTermsCheckbox.check();
}

async submitWithSendImmediatelyOption(){
  await this.sendImmediatleyButton.click();
  await this.sendNowSignupLaterButton.click();
}


async verifyPopupToConfirmTheEmail(){
await expect (this.verifyEmailText).toContainText(this.email);
console.log(await this.verifyEmailText.textContent());
const popupText = await this.verifyEmailText.textContent();
test.info().annotations.push({ type: 'PopupText', description: popupText });
}

async closePopup(){
  if (await (this.closeButton.isVisible())) {
    await this.closeButton.click();
  }
  await expect(this.page).toHaveURL(/registration\/details\?/);

}
}