// @ts-nocheck
import { test, expect } from '@playwright/test';
import { promises } from 'dns';


test('Basic Test Udemy page',async({page})=>{
 await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=774088017322&hvpos=&hvnetw=g&hvrand=4165742226263755213&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062114&hvtargid=kwd-64107830&hydadcr=14452_2429115&gad_source=1');
} )



test('RahulshettyPage', async ({browser})=>{
const brows=await browser.newContext();
const page= await brows.newPage();
const p=await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
await page.waitForLoadState("networkidle");
const username= page.locator("#username");

const password= page.locator("#password");

await username.fill("rahulshettyacademy")
await password.fill("learning");
const dropdown=page.locator("select.form-control");
 await dropdown.selectOption("Consultant");
 await page.pause();
//await expect(dropdown).toBeVisible();
})


test('Window Handling', async ({browser})=>{
const brows=await browser.newContext();
const page= await brows.newPage();
const linkclick=page.locator("[href*='documents-request']")
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
await page.waitForLoadState("networkidle");

const [newPage] = await Promise.all(
  [
 brows.waitForEvent('page'),
 
 linkclick.click(),
 await page.waitForLoadState("networkidle"),
]
)
  await expect(newPage.locator('#interview-material-container')).toContainText('mentor@rahulshettyacademy.com');
newPage.pause();
await page.pause();
 

})
