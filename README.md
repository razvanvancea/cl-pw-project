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

npm run test:e2e


## Run visual regression tests (inside Docker)

npm run test:visual


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


## Other potential improvements

Adding accessibility layer using axe-core or adding API test automation layer if it applies to the application under test.

Other visual tests may require mask property based on a selector to ignore dynamic sections from the web page.
