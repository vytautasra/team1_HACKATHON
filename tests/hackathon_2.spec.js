const { test, expect }   = require('@playwright/test');
const { PageInitialization }  = require('../pages/pageInit');

test.describe('', ()=> {
  let page;
  test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    startPage = new PageInitialization(page);
    await startPage.goto_test2();
  });

 

  test.only(`TEST ID: 2 - SPACE BATTLE`, async () => {
    const hrefElement = await page.$('a');
    await hrefElement.click();



    for(let i = 0; i <= 100; i++) {
    await page.keyboard.press('Space');
    }
   

});


});