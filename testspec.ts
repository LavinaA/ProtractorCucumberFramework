import {browser} from "protractor";
import {element,by} from "protractor";
import { Calculator } from "./pageObjects/calculator";
import { async } from "q";
import { angularHomePage } from "./pageObjects/angularHomePage";

describe('chain locators Demo',async ()=>{
	//The fat pipe is another way of defining an application
	
	it('Open angular JS website',async function(){
		/*browser.waitForAngularEnabled(false)
		browser.get('http;//google.com');*/
		let ca = new Calculator();

		await browser.get('http://juliemr.github.io/protractor-demo/');
		console.log("****************** before first Sendkey")
		await ca.firstEditBox.sendKeys("3");
		console.log("****************** After first Sendkeys")
		await ca.secondEditBox.sendKeys("4");
		await ca.go.click();
		ca.getResult.getText().then(function(text){
			console.log(text);
		})
	})

	
    it('Angular home page title validation', async () => {
       	let ah = new angularHomePage;
        await browser.get("https://angularjs.org/");
        await ah.angularLink.click();
        await browser.sleep(3000);
        await ah.search.sendKeys("hello");

    })
	
	
})