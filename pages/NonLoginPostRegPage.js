import { expect, test } from "@playwright/test";

/**
 * @typedef {import('@playwright/test').Page} Page
 */

export class NonLoginPostRegPage {
     /**
   * @param {Page} page
   */
    constructor
    (page) {
        this.page = page;
        this.fullnameValue = page.locator("xpath=(//span[@class='text-dark'])[1]");
        this.branchOfServiceValue = page.locator("xpath=(//span[@class='text-dark'])[2]");
        this.rankValue = page.locator("xpath=(//span[@class='text-dark'])[3]");
        this.dodIDValue = page.locator("xpath=(//span[@class='text-dark'])[4]");
        this.travelCategoryValue = page.locator("xpath=(//span[@class='text-dark'])[5]");
        this.toVerifyEmailBanner = page.getByText('Please check for an email from SATEW and click on the link to verify your email address. We will send your registration after you verify your email.')
        this.loginInfoBanner = page.getByText('Logging in will allow you to view all of your email registrations and easily resend registration emails in the future')
        this.traveleranddependentsValue = page.locator("xpath=//span[@class='text-blue']")
        this.primaryTravelerLabel = page.getByText('Primary Traveler');
        this.primaryTravlerValue = page.locator("xpath=(//span[@class='text-dark'])[6]");
        this.DependentsSectionLabel = page.getByText('Dependents');
    }

     /**
   * @param {{ firstName: string, middleName?: string, lastName: string, suffix: string, branchOfService: string, rank: string, dodID: string,travelCategory:string ,travelersAndDependentsNumber:string}} expectedData
   */

    async verifySubmittedInfo(expectedData) {
        const expectedFullname = [
            expectedData.firstName,
            expectedData.middleName,
            expectedData.lastName,
            expectedData.suffix,
            
        ]
        .filter(Boolean) // Remove any undefined or empty values
        .join(" ");
        
        await expect(this.fullnameValue).toHaveText(expectedFullname);

        if (expectedData.branchOfService)
            await expect(this.branchOfServiceValue).toHaveText(expectedData.branchOfService);
        if (expectedData.rank)
            await expect(this.rankValue).toHaveText(expectedData.rank);
        if (expectedData.dodID)
            await expect(this.dodIDValue).toHaveText(expectedData.dodID);
        if (expectedData.travelCategory)
            await expect(this.travelCategoryValue).toHaveText(expectedData.travelCategory);
        
        const fullName = await this.fullnameValue.textContent();
        test.info().annotations.push({ type: 'Full Name', description: fullName });
        
        await expect(this.toVerifyEmailBanner).toBeVisible();
        const toVerifyEmailBannerText = await this.toVerifyEmailBanner.textContent();
        test.info().annotations.push({ type: 'Verify Email Banner', description: toVerifyEmailBannerText });

        await expect(this.loginInfoBanner).toBeVisible();
        const loginInfoBannerText = await this.loginInfoBanner.textContent();
        test.info().annotations.push({ type: 'Login Info Banner', description: loginInfoBannerText });

        if (expectedData.travelersAndDependentsNumber)
            await expect(this.traveleranddependentsValue).toHaveText(expectedData.travelersAndDependentsNumber);

        if (this.primaryTravelerLabel.isVisible) {
            await expect(this.primaryTravlerValue).toHaveText(expectedFullname);      
        }
        





}
}
