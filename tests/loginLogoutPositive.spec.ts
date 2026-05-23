import {test, expect} from '@playwright/test';

    const BASE_URL = 'https://practicetestautomation.com/practice-test-login/';

test('Positive Login-Logout', async ({page}) => {
    // Step 1: Navigate to the login page
    await page.goto(BASE_URL);

    // Step 2: Verify the page title & heading
    await expect(page).toHaveTitle(/Test Login/);
    await expect(page.getByRole('heading', {name: 'Test login'})).toBeVisible();

    // Step 3: Fill in the username and password fields
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');

    // Step 4: Click the submit button
    await page.getByRole('button', {name: 'Submit'}).click();

    // Step 5: Verify the success message
    await expect(page).toHaveURL(/.*\/logged-in-successfully\//);
    await expect(page.getByRole('heading', {name: 'Logged In Successfully'})).toBeVisible();
    
    // Step 6: Click the logout button
    await page.getByRole('link', {name: 'Log out'}).click();

    // Step 7: Verify return to login page
    await expect(page).toHaveURL(/.*\/practice-test-login\//);
    await expect(page.getByRole('heading', {name: 'Test login'})).toBeVisible();

    // Add screenshot
    await page.screenshot({ path: 'screenshots/login-logout-positive.png'});

    await page.close();
});