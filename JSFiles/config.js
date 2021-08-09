"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect : true,
    specs: ['testspec.js'],
    onPrepare: function () {
        console.log("Print OnPrepare func");
        protractor_1.browser.driver.manage().window().maximize();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFtQztBQUd4QixRQUFBLE1BQU0sR0FBVztJQUN4Qiw0Q0FBNEM7SUFDMUMsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyx1QkFBdUI7SUFFdkIsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBRXRCLFNBQVMsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1Qzs7OztzQkFJYztJQUNsQixDQUFDO0lBRUgsZUFBZSxFQUFFO1FBQ2IsVUFBVSxFQUFFLElBQUksRUFBRSx5Q0FBeUM7S0FDNUQ7Q0FFRixDQUFDIn0=