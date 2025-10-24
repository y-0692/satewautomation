
import { FlightRegPage } from "./FlightRegPage.js";
 /**
  * @typedef {import('@playwright/test').Page} Page
  */
export class LoginFlightRegPage extends FlightRegPage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    super(page);
    this.scheduleAndSendButton = page.getByRole('button',{name:'Scheduld & Send'});
    this.sendImmediatelyButton = page.getByRole('button',{name:'Send Immediately'});
    
  }

  
  
  async loginAgreesToTermsAndConditions(){
  await this.page.getByRole('checkbox', { name: 'I certify that I am eligible for' }).check();
  await this.page.getByRole('checkbox', { name: 'I certify that I did not provide any' }).check();
}

    async clickScheduleAndSendButton( ){
        this.scheduleAndSendButton.click();
    }
    async clickSendImmediatelyButton(){
        this.sendImmediatelyButton.click();
    }

}