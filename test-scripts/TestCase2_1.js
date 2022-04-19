function TestCase2_1() {
 //Opens the specified URL in a running instance of the specified browser.
 Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
 Aliases.browser.pageTitantypes.Wait();
 //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object equals '60'.
 aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#timer-val"), "contentText", cmpEqual, "60");
 //Clicks the 'selectDuration' object.
 Aliases.browser.pageTitantypes.selectDuration.ClickItem("1 Minute");
 Aliases.browser.pageTitantypes.Wait();
 //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object equals '60'.
 aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#timer-val"), "contentText", cmpEqual, "60");
}