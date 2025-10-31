import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.waitForLoadState("networkidle");
  
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('sanketstilkari@gmail.com');
 
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Principal@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState("networkidle");
  await expect(page.getByText('AutomationAutomation Practice HOME ORDERS Cart Sign Out')).toBeVisible();
await page.getByText('ZARA COAT').click();
await page.waitForLoadState("networkidle");
await page.getByRole('button', { name: ' Add To Cart' }).first().click();
await expect(page.getByRole('navigation')).toContainText('Cart 1');
await page.getByRole('button', { name: '   Cart' }).click();
await page.waitForLoadState("networkidle");
await expect(page.locator('app-profile')).toMatchAriaSnapshot(`- heading "ZARA COAT 3" [level=3]`);
await expect(page.locator('app-profile')).toMatchAriaSnapshot(`- paragraph: /MRP \\$ \\d+/`);

await expect(page.locator('app-profile')).toMatchAriaSnapshot(`- paragraph: In Stock`);
await page.getByRole('button', { name: 'Buy Now❯' }).click();
await page.waitForLoadState("networkidle");
await expect(page.getByText('Personal Information')).toBeVisible();
await expect(page.getByText('Shipping Information')).toBeVisible();
await page.locator('input[type="text"]').nth(1).click();
await page.locator('input[type="text"]').nth(1).fill('123');
await page.locator('input[type="text"]').nth(2).click();
await page.locator('input[type="text"]').nth(2).fill('xyz');


// Focus on the textbox
await page.getByRole('textbox', { name: 'Select Country' }).click();

// Type partial input using keyboard
await page.keyboard.type('indi');

await page.getByRole('button', { name: ' India' }).click();
await page.locator('input[name="coupon"]').click();
await page.locator('input[name="coupon"]').fill('rahulshettyacadamy');
await page.getByRole('button', { name: 'Apply Coupon' }).click();
await expect(page.locator('form')).toContainText('* Invalid Coupon');
await page.getByText('Place Order').click();
await page.waitForLoadState("networkidle");
await expect(page.getByRole('heading', { name: 'Thankyou for the order.' })).toContainText('Thankyou for the order.');
const OrderId =await page.getByRole('cell', { name: 'Thankyou for the order. You' }).nth(1).textContent();
console.log(OrderId);

// const match = OrderId?.match(/\b[a-f0-9]{24}\b/);
// //match(/\b[a-f0-9]{24}\b/);

// if (match) {
//   console.log("Extracted ID:", match[0]);
// } else {
//   console.log("No matching ID found.");
// }

await expect(page.locator('#htmlData')).toContainText('ZARA COAT 3');
await expect(page.locator('#htmlData')).toContainText('$ 11500');
await expect(page.getByRole('strong')).toContainText('Ready to Ship');
const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Click To Download Order' }).click();
  const download = await downloadPromise;
await page.getByRole('button', { name: '   ORDERS' }).click();
await page.waitForLoadState("networkidle");
//await expect(page.getByRole('rowheader')).toContainText(OrderId);
await expect(page.locator('tbody')).toContainText('ZARA COAT 3');
await expect(page.locator('tbody')).toContainText('$ 11500');
await page.getByRole('button', { name: 'Go Back to Shop' }).click();
});
