describe('Calculator', () => {
    it('should calculate the sum of two numbers', async () => {
        await browser.get('');
		    await element(by.css('.ng-pristine .input-small.ng-valid:nth-of-type(1)')).sendKeys('2');
		    await element(by.xpath('html//form/input[2]')).sendKeys('3');
    		await element(by.id('gobutton')).click();
    		let subtraction = element(by.css('.ng-binding'));
    		expect(await subtraction.getText()).toEqual('5');
	  });
});

describe('Calculator', () => {
    it('should substract one number from another', async () => {
        await browser.get('');
    		await element(by.css('.ng-pristine .input-small.ng-valid:nth-of-type(1)')).sendKeys('10');
		    await element(by.model('operator')).sendKeys('-');
        // in this 'Super Calculator' you can not work with dropdown
        // for exxample:
        // await element(by.model('operator')).click().element.$('[value='SUBTRACTION']').click();
        // await element(cssContainingText('operator', 'SUBTRACTION')).click();
        //await browser.actions().mouseMove(element(by.css('[value='SUBTRACTION']'))).click();
		    await element(by.xpath('html//form/input[2]')).sendKeys('2');
		    await element(by.id('gobutton')).click();
		    let subtraction = element(by.css('.ng-binding'));
    		expect(await subtraction.getText()).toEqual('8');
	  });
});
