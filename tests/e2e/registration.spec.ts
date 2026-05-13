import { test, expect } from '../../custom-page-fixture';
import { faker } from '@faker-js/faker';

test.describe('Registration test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
  });

  test('the user should be able to register successfully @db', async ({
    registrationFormPage,
    page,
  }) => {
    const randomfullName = `John ${faker.person.lastName()}`;
    const randomEmail = faker.internet.email();

    await registrationFormPage.completeRegistration(
      '68901',
      randomfullName,
      randomEmail,
      '0765666666'
    );

    await expect(page.getByRole('heading')).toContainText('Thank you!');
  });

  test('the user should see an error message for an invalid ZIP code', async ({
    registrationFormPage,
  }) => {
    await registrationFormPage.enterZipCode('123');
    await registrationFormPage.clickNext();

    await expect(registrationFormPage.formContainer).toContainText('Wrong ZIP code.');
  });
});
