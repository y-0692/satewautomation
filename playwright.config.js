// playwright.config.js
// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Path to your test files
  timeout: 30000, // Test timeout in ms
  retries: 0, // Number of retries on failure
  use: {
    headless: true, // Run tests in headless mode
    baseURL: 'https://satew.dev.onifytech.net', // Change to your app’s URL
    //baseURL : 'https://web.uat.satew.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    slowMo: 5000000000000, // Slow down by 500ms
  
  },
  reporter: [['list'], ['html', { outputFolder: 'test-results' }]],
});
