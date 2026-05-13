# Playwright Boilerplate - Final Project

Project built for CapsLock assessment

The project is built using **Playwright** and includes several types of automated tests, covering different aspects of a web application.

---

## 🧪 Test Types

The following test types are included in this project:

- **E2E tests** – full end-to-end flows
- **Visual tests** – screenshot comparison inside a Docker container

---

## ⚙️ Prerequisites

Before running the tests, make sure you have the following installed:

- [Node.js](https://nodejs.org/) **v20** or above
- **npm** (comes with Node.js)
- **git**
- **Google Chrome** browser

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
npm install

```

# 🧪 Running tests

## Run E2E tests in headless mode

```bash
npm run test:e2e

```

## Run visual regression tests (inside Docker)

```bash
npm run test:visual

```

## 🧪 CI/CD

GitHub Actions pipelines enabled, with:

- 4 parallel web e2e jobs
- 1 visual tests job

Optional scheduled cron config set, commented for the moment

## Code formatter

Initially prettier used, but in this project I mgrated to oxfmt, which is 30x times faster
Optional, eslint could be configured for static syntax checking in combination with husky for pre-commit triggers both for code formatter and linter

## Optional - AI Layer

I created playwright AI agents - planner, generator, healer.
MCP Playwright server is already configured, so the agents can have access to the real application in the browser.
To be added: custom-instructions file for guardrails, and custom skills to boost the agents
To be added: custom agents (code-reviewer-specialist, etc)

## Dynamic URL

I added cross-env package to handle dynamic URL (prod, dev, stg) passed directly from the CLI. Otherwise, a hardcoded app URL will be used as fallback (it is set in the pw config files).

```bash
npx cross-env BASE_URL=https://test-qa.capslock.global playwright test

```

## Random data generator - faker

I used faker to generate realistic random data. An alternative would have been ChanceJS, a smaller npm package.
docs: https://fakerjs.dev/api/

## Other potential improvements

Adding accessibility layer using axe-core or adding API test automation layer if it applies to the application under test.

Other visual tests may require mask property based on a selector to ignore dynamic sections from the web page.

I added dotenv placeholder to store sensitive login credentials

Adding in the pipeline a new job 'check-branch-up-to-date-with-main' to fail and stop the pipeline execution if any potential feature branch is not up to date with main.

If the application contains login flows, then a global auth login flow should have been included in the framework to bypass login for each test (it will go through login just once, save browser cookies into a json file then inject the file into each and every browser session used by each test).

# User scenarios included in the automation test suite

1. the user should be able to register successfully - we always need to start with the happy paths focusing on end to end scenarios
2. the user should see an error message for an invalid ZIP code - invalid scenario to make sure the user gets notified when inserts invalid code format
3. the user should include in Name field both first name and last name
4. the user should see an error message for an empty Name field
5. visual test: validate the thank you page design

## Potential defects report format

If I had to document a defect, I would have inserted the following information:

- Title
- Description
- Reproduction steps
- Actual results
- Expected results
- Priority and Severity levels
- Attachments (gif, image, logs, recording)
