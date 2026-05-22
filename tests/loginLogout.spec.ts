import {test, expect} from '@playwright/test';

test('Test Login-Logout', async ({page}) => {
    // Step 1: Navigate to the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Step 2: Verify the page title & heading
    await expect(page).toHaveTitle(/Test Login/);
    await expect(page.getByRole('heading', {name: 'Test login'})).toBeVisible();

    // Step 3: Fill in the username and password fields
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');

    // Step 4: Click the submit button
    await page.getByRole('button', {name: 'Submit'}).click();

    // Step 5: Verify the success message
    await expect(page).toHaveTitle(/Logged In Successfully/);
    await expect(page.getByRole('heading', {name: 'Logged In Successfully'})).toBeVisible();
    
    // Step 6: Click the logout button
    await page.getByRole('link', {name: 'Log out'}).click();

    // Step 7: Verify return to login page
    await expect(page.getByRole('heading', {name: 'Test login'})).toBeVisible();
});