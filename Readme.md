# Playwright Enterprise Framework

[Badges]

An enterprise-grade UI and API automation framework built using Playwright and TypeScript. The framework follows industry-standard design principles, emphasizing scalability, maintainability, and reusable components.

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

## Overview

This project is an enterprise-grade UI and API automation framework built using Playwright and TypeScript. It follows scalable design principles such as the Page Object Model, reusable services, centralized configuration management, and a generic API client to support maintainable and extensible test automation.

## Features
- ✅ UI Automation
- ✅ API Automation
- ✅ Page Object Model
- ✅ Page Manager
- ✅ API Manager
- ✅ Generic API Client
- ✅ CRUD Operations
- ✅ Configuration Management
- ✅ Logging
- ✅ Global Setup
- ✅ Authentication
- ✅ Fixtures

## Tech Stack
| Technology     | Purpose              |
| -------------- | -------------------- |
| Playwright     | UI Automation        |
| TypeScript     | Programming Language |
| Node.js        | Runtime              |
| GitHub Actions | CI/CD                |
| REST API       | API Testing          |

## Folder Structure

```text
src
├── api
├── pages
├── fixtures
├── managers
├── services
├── utils
└── models

tests
config
playwright.config.ts
```
## Framework Architecture

```text
Tests
   │
   ▼
Fixtures
   │
   ▼
PageManager / ApiManager
   │
   ▼
Pages / API Classes
   │
   ▼
Services
   │
   ▼
Playwright
```

## Installation

```bash
git clone https://github.com/kstvds24/playwright-enterprise-framework.git

cd playwright-enterprise-framework

npm install

npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run API tests:

```bash
npx playwright test tests/api
```

Run UI tests:

```bash
npx playwright test tests/ui
```

## Roadmap

- [ ] Authentication Manager
- [ ] API Schema Validation
- [ ] Docker Support
- [ ] Allure Reporting
- [ ] GitHub Actions CI/CD
- [ ] Cross-browser Execution Matrix
- [ ] Test Data Builder Pattern

## Author

Kaustav Das

Senior SDET

GitHub: [Kaustav](https://github.com/kstvds24/)

## License

This project is licensed under the MIT License.




