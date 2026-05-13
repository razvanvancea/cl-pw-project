import { test, expect } from '../../custom-page-fixture';
import { faker } from '@faker-js/faker';

test.describe('Registration test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
  });

  test('the user should be able to register successfully', async ({
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

  test('the user should see an error message for an empty Name field', async ({
    registrationFormPage,
    page,
  }) => {
    const randomEmail = faker.internet.email();

    await registrationFormPage.enterZipCode('68901');
    await registrationFormPage.clickNext();

    await registrationFormPage.selectIconOption(4);
    await registrationFormPage.clickNext();

    await registrationFormPage.selectQuizCard();
    await registrationFormPage.clickNext();

    await registrationFormPage.enterName('');
    await registrationFormPage.enterEmail(randomEmail);
    await registrationFormPage.clickGoToEstimate();

    await expect(page.locator('div.helpBlock > div')).toContainText('Please enter your name.');
  });

  test('the user should include in Name field both first name and last name', async ({
    registrationFormPage,
    page,
  }) => {
    const randomEmail = faker.internet.email();

    await registrationFormPage.enterZipCode('68901');
    await registrationFormPage.clickNext();

    // Step 2: Select icon option
    await registrationFormPage.selectIconOption(4);
    await registrationFormPage.clickNext();

    // Step 3: Select quiz card
    await registrationFormPage.selectQuizCard();
    await registrationFormPage.clickNext();

    // Step 4: Enter name and email
    await registrationFormPage.enterName('first');
    await registrationFormPage.enterEmail(randomEmail);
    await registrationFormPage.clickGoToEstimate();

    await expect(page.locator('div.helpBlock > div')).toContainText(
      'Your full name should contain both first and last name.'
    );
  });
});
