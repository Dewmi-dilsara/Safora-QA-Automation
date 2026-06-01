const { test, expect } = require('@playwright/test');

test.setTimeout(60000);

// TC-01: Successful Contact Form Submission
test('Successful Contact Form Submission', async ({ page }) => {

  await page.goto(
    'https://safora.se/en/contact.html',
    { waitUntil: 'domcontentloaded' }
  );

  await page.getByRole('textbox', { name: 'Your Name' })
    .fill('Dewmi Dilsara');

  await page.getByRole('textbox', { name: 'Email Address' })
    .fill('test@gmail.com');

  await page.getByRole('textbox', { name: 'Phone Number' })
    .fill('+94728711221');

  await page.getByRole('textbox', { name: 'Your Message' })
    .fill('This is a Playwright automation test.');

  await page.getByRole('button', { name: 'Send Message' })
    .click();

  // Wait for submission process
  await page.waitForTimeout(3000);
});


// TC-02: Empty Form Validation
test('Empty Form Validation', async ({ page }) => {

  await page.goto(
    'https://safora.se/en/contact.html',
    { waitUntil: 'domcontentloaded' }
  );

  await page.getByRole('button', { name: 'Send Message' })
    .click();

  await expect(
    page.getByText('Full name is required.')
  ).toBeVisible();

  await expect(
    page.getByText('Phone number is required.')
  ).toBeVisible();

  await expect(
    page.getByText('Message is required.')
  ).toBeVisible();
});


// TC-03: Invalid Email Format Validation
test('Invalid Email Format Validation', async ({ page }) => {

  await page.goto(
    'https://safora.se/en/contact.html',
    { waitUntil: 'domcontentloaded' }
  );

  await page.getByRole('textbox', { name: 'Your Name' })
    .fill('Dewmi Dilsara');

  await page.getByRole('textbox', { name: 'Email Address' })
    .fill('dewmidilsaara125');

  await page.getByRole('textbox', { name: 'Phone Number' })
    .fill('+94728711221');

  await page.getByRole('textbox', { name: 'Your Message' })
    .fill('Testing invalid email address');

  await page.getByRole('button', { name: 'Send Message' })
    .click();

  await expect(
    page.getByText('Please enter a valid email address.')
  ).toBeVisible();
});
