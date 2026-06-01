const { test, expect } = require('@playwright/test');
test.setTimeout(60000);
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

  await expect(page.getByText('Success!'))
    .toBeVisible();

});