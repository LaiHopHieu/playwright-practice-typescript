import { test, expect, Browser, BrowserContext, chromium, Page } from '@playwright/test';

test('Centr has title', async ({ page }) => {
  // // Create browser
  // const browser: Browser = await chromium.launch();
  // // Create a new context
  // const context: BrowserContext = await browser.newContext();
  // // Create a new page
  // const page: Page = await context.newPage();

  // await page.goto('https://centr.com/');

  // // Expect a title "to contain" a substring.
  // console.log('Page title:', await page.title());
  // await expect(page).toHaveTitle(/Fitness App & Wellness Programs Inspired by Chris Hemsworth | Centr/);
  // await browser.close();

  // Using fixtures available in Playwright Test
  await page.goto('https://centr.com/');
  await expect(page).toHaveTitle(/Centr/);
  await page.close();
});

