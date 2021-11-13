const { test, expect }   = require('@playwright/test');
const { PageInitialization }  = require('../../pages/pageInit');

test.describe('', ()=> {
  let page;
  test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    startPage = new PageInitialization(page);
    await startPage.goto_test31();
  });

  


  test(`TEST ID: 3 - MUSIC, BEETHOVEN SYMPHONY NO 100`, async () => {

    
    await page.mouse.click(0, 500);

    
   for(let i = 0; i <= 10; i++) {
    await page.keyboard.press('A');
    await page.keyboard.press('S');
    await page.keyboard.press('D');
    await page.keyboard.press('A');
    await page.keyboard.press('S');
    await page.keyboard.press('D');
    await page.keyboard.press('H');
    await page.keyboard.press('J');
    await page.keyboard.press('H');
    await page.keyboard.press('J');
    await page.keyboard.press('K');
    await page.keyboard.press('K');
    await page.keyboard.press('A');
    await page.keyboard.press('S');
    await page.keyboard.press('D');
    await page.keyboard.press('A');
    await page.keyboard.press('S');
    await page.keyboard.press('D');
    await page.keyboard.press('H');
    await page.keyboard.press('J');
    await page.keyboard.press('H');
    await page.keyboard.press('J');
    await page.keyboard.press('K');
    await page.keyboard.press('K');
    await page.keyboard.press('A');
    await page.keyboard.press('S');
    await page.keyboard.press('D');
    await page.keyboard.press('A');
    await page.keyboard.press('S');
    await page.keyboard.press('D');
    await page.keyboard.press('H');
    await page.keyboard.press('J');
    await page.keyboard.press('H');
    await page.keyboard.press('J');
    await page.keyboard.press('K');
    await page.keyboard.press('K');
    await page.keyboard.press('A');
    await page.keyboard.press('S');
    await page.keyboard.press('D');
    await page.keyboard.press('A');
    await page.keyboard.press('S');
    await page.keyboard.press('D');

   }

    
});



});