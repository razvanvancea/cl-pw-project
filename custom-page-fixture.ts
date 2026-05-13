import { test as baseTest } from '@playwright/test';
import { RegistrationFormPage } from './pages/registration-form-page';

type MyFixtures = {
  registrationFormPage: RegistrationFormPage;
};

export const test = baseTest.extend<MyFixtures>({
  registrationFormPage: async ({ page }, use) => {
    await use(new RegistrationFormPage(page));
  },
});

export { expect } from '@playwright/test';
