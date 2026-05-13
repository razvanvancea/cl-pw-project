import { test, expect } from '../../custom-page-fixture';

test.describe('Visual tests test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
  });

  test('visual test: validate the thank you page design', async ({ registrationFormPage, page }) => {
    // Complete the registration form to reach the thank you page
    await registrationFormPage.completeRegistration('68901', 'john doe', 'jd@gmail.com', '0765666666');

    // Verify the thank you page is displayed
    await expect(page.getByRole('heading')).toContainText('Thank you!');

    // Capture a visual snapshot of the thank you page
    await expect(page).toHaveScreenshot('thank-you-page.png', {
      fullPage: true,
    });
  });
});
