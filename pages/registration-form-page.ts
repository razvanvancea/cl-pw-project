import { Locator, Page } from '@playwright/test';

export class RegistrationFormPage {
  page: Page;
  formContainer: Locator;
  zipCodeField: Locator;
  nextButton: Locator;
  nameField: Locator;
  emailField: Locator;
  phoneField: Locator;
  goToEstimateButton: Locator;
  submitButton: Locator;
  thankYouHeading: Locator;
  errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formContainer = page.locator('#form-container-1');
    this.zipCodeField = this.formContainer.getByRole('textbox', { name: 'Enter ZIP Code' });
    this.nextButton = this.formContainer.getByRole('button', { name: 'Next ' });
    this.nameField = this.formContainer.getByRole('textbox', { name: 'Enter Your Name' });
    this.emailField = this.formContainer.getByRole('textbox', { name: 'Enter Your Email' });
    this.phoneField = this.formContainer.getByRole('textbox', { name: '(XXX)XXX-XXXX' });
    this.goToEstimateButton = this.formContainer.getByRole('button', { name: 'Go To Estimate' });
    this.submitButton = this.formContainer.getByRole('button', { name: 'Submit Your Request' });
    this.thankYouHeading = page.getByRole('heading');
    this.errorMessage = this.formContainer;
  }

  /**
   * Fill in the ZIP code field
   */
  async enterZipCode(zipCode: string) {
    await this.zipCodeField.click();
    await this.zipCodeField.fill(zipCode);
  }

  /**
   * Click the next button
   */
  async clickNext() {
    await this.nextButton.click();
  }

  /**
   * Select an icon option (used in step 2)
   * @param index - The index of the icon to click
   */
  async selectIconOption(index: number) {
    await this.page.locator('i').nth(index).click();
  }

  /**
   * Select a quiz card option (used in step 3)
   */
  async selectQuizCard() {
    await this.page
      .locator(
        '.steps.step-3 > div:nth-child(2) > div > .formSide > form > div > div > .row > div:nth-child(2) > .quizCard > .flex-md-column > .quizCard__icon > .lavin-ok'
      )
      .first()
      .click();
  }

  /**
   * Fill in the name field
   */
  async enterName(name: string) {
    await this.nameField.click();
    await this.nameField.fill(name);
  }

  /**
   * Fill in the email field
   */
  async enterEmail(email: string) {
    await this.emailField.fill(email);
  }

  /**
   * Click the "Go To Estimate" button
   */
  async clickGoToEstimate() {
    await this.goToEstimateButton.click();
  }

  /**
   * Fill in the phone field
   */
  async enterPhoneNumber(phoneNumber: string) {
    await this.phoneField.fill(phoneNumber);
  }

  /**
   * Click the "Submit Your Request" button
   */
  async submitForm() {
    await this.submitButton.click();
  }

  /**
   * Complete the entire registration form
   */
  async completeRegistration(zipCode: string, name: string, email: string, phone: string) {
    // Step 1: Enter ZIP code
    await this.enterZipCode(zipCode);
    await this.clickNext();

    // Step 2: Select icon option
    await this.selectIconOption(4);
    await this.clickNext();

    // Step 3: Select quiz card
    await this.selectQuizCard();
    await this.clickNext();

    // Step 4: Enter name and email
    await this.enterName(name);
    await this.enterEmail(email);
    await this.clickGoToEstimate();

    // Step 5: Enter phone and submit
    await this.enterPhoneNumber(phone);
    await this.submitForm();
  }

  /**
   * Check if error message is displayed
   */
  async isErrorMessageVisible(message: string): Promise<boolean> {
    return await this.errorMessage.locator(`text="${message}"`).isVisible();
  }

  /**
   * Check if thank you page is displayed
   */
  async isThankYouPageVisible(text: string = 'Thank you!'): Promise<boolean> {
    return await this.thankYouHeading.locator(`text="${text}"`).isVisible();
  }
}
