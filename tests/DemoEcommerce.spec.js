import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

  await page.locator('input#userEmail').waitFor();
  await page.locator('input#userEmail').fill('sanketstilkari@gmail.com');
  await page.locator('input#userPassword').fill('Principal@123');
  await page.locator('input#login').click();
  const productList = await page.locator('div.card-body');
  const productName='ADIDAS ORIGINAL';
  const cont=await productList.count();
  for(let i=0;i<=cont;i++){
    if(await productList.nth(i).locator('b').textContent === productName){
        await productList.nth(i).locator("text= Add To Cart").click();
    }
  }
  await page.pause();



    });


   test('@Webst Client App login', async ({ page }) => {
   
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
   await page.getByRole('button',{name:"Login"}).click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   
   await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
   .getByRole("button",{name:"Add to Cart"}).click();
 
   await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
 
   //await page.pause();
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
 
   await page.getByRole("button",{name :"Checkout"}).click();
 
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
 
   await page.getByRole("button",{name :"India"}).nth(1).click();
   await page.getByText("PLACE ORDER").click();
 
   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
})