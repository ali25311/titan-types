function TestCase2_3() {
 //Opens the specified URL in a running instance of the specified browser.
 Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
 //Maximizes the specified Window object.
 Aliases.browser.BrowserWindow.Maximize();
 //Clicks the 'selectDuration' object.
 Aliases.browser.pageTitantypes.selectDuration.ClickItem("3 Minutes");
 Aliases.browser.pageTitantypes.Wait();
 //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object equals '180'.
 aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#timer-val"), "contentText", cmpEqual, "180");
}