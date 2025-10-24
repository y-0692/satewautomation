import { FlightRegPage } from "./FlightRegPage.js";
 /**
  * @typedef {import('@playwright/test').Page} Page
  */
export class NonLoginFlightRegPage extends FlightRegPage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    super(page);
    this.emailAddressField = page.getByRole('textbox', { name: 'Your Email Address' })
    this.confirmationEmailField =page.getByRole('textbox', { name: 'Your Confirm Email Address' })

  }
  async fillEmailForRegistration(){
    this.emailAddressField.fill("abc@gmail.com");
    this.confirmationEmailField.fill("abc@gmail.com");
  }
  async nonLoginagreesToTermsAndConditions(){
  await this.page.getByRole('checkbox', { name: 'I certify that I am eligible' }).check();
  await this.page.getByRole('checkbox', { name: 'I certify that I did not' }).check();
  await this.page.getByRole('checkbox', { name: 'I certify that I have read' }).check();
}

}
