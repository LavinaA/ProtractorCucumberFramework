import {Config} from "protractor";
//import * as reporter from "cucumber-html-reporter";


export let config: Config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
   //directConnect:true,
   framework:'custom',
   frameworkPath: require.resolve('protractor-cucumber-framework'),
   
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        tags:"@calculatortesting",
        format:'json:./cucumberreport.json',

        require: [
          './stepdefination/*.js'
        
        ]
      },
      

  
  
  };
  