const { test, expect }   = require('@playwright/test');
const { PageInitialization }  = require('../pages/pageInit');

test.describe('', ()=> {
  let page;
  test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    startPage = new PageInitialization(page);
    await startPage.goto_test6();
  });

  


  var checkEachBuild = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  checkEachBuild.forEach(builds => {

  test(`TEST ID: 6 - FLAG, QUESTIONS: ${builds}`, async () => {

    // get image url
    let image     = await page.$$eval('.flag img[src]', imgs => imgs.map(img => img.src));
    let imgString = image.toString();
    let imgFinal  = imgString.slice(49,-11);

    
    // get answers
    
    let getAnswer_1  = await page.inputValue('input#guess0');
    let finalAnswer_1 = getAnswer_1.slice(0,2);

    let getAnswer_2  = await page.inputValue('input#guess1');
    let finalAnswer_2 = getAnswer_2.slice(0,2);

    let getAnswer_3  = await page.inputValue('input#guess2');
    let finalAnswer_3 = getAnswer_3.slice(0,2);

    let getAnswer_4  = await page.inputValue('input#guess3');
    let finalAnswer_4 = getAnswer_4.slice(0,2);
    
console.log(finalAnswer_1 + " " + finalAnswer_2 + " " + finalAnswer_3 + " " + finalAnswer_4 + " :::" + imgFinal);

    // check which answer is correct
    if(imgFinal == finalAnswer_1)
    {
      await page.check('input#guess0');
      console.log("No1");
    }
    if(imgFinal == finalAnswer_2)
    {
      await page.check('input#guess1');
      console.log("No2");
    }
    if(imgFinal == finalAnswer_3)
    {
      await page.check('input#guess2');
      console.log("No3");
    }
    if(imgFinal == finalAnswer_4)
    {
      await page.check('input#guess3');
      console.log("No4");
    }
    
    await page.click('#continueButton');
    await page.click('#continueButton');




});


});

});