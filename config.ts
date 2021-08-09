import {browser} from "protractor";
import {Config} from "protractor";

export let config: Config = {
    // The address of a running selenium server.
      seleniumAddress: 'http://localhost:4444/wd/hub',
      //directConnect : true,
       
      specs: ['testspec.js'],
      
      onPrepare: function() {
          console.log("Print OnPrepare func");
          browser.driver.manage().window().maximize();
          /*jasmine.getEnv().addReporter(
                    new Jasmine2HtmlReporter({
                      savePath: 'target/screenshots'
                    })
                  );  */
      },
          
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
      }
    
    };