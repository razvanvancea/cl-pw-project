import { test, expect } from '../../custom-page-fixture';

test.describe('Registration test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
  });

  test('the user should be able to register successfully @db', async ({ registrationFormPage, page }) => {
    // Complete the registration form with all required information
    await registrationFormPage.completeRegistration('68901', 'john doe', 'jd@gmail.com', '0765666666');

    // Verify the thank you page is displayed
    await expect(page.getByRole('heading')).toContainText('Thank you!');
  });

  test('the user should see an error message for an invalid ZIP code', async ({ registrationFormPage }) => {
    // Enter an invalid ZIP code
    await registrationFormPage.enterZipCode('123');
    await registrationFormPage.clickNext();

    // Verify the error message is displayed
    await expect(registrationFormPage.formContainer).toContainText('Wrong ZIP code.');
  });
});
