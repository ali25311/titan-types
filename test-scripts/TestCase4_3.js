function TestCase4_3() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  Aliases.browser.pageTitantypes.Wait();
  Aliases.browser.BrowserWindow.Maximize();
  Aliases.browser.pageTitantypes.selectDuration.ClickItem("1 Minute");
  Aliases.browser.pageTitantypes.Wait();
  Aliases.browser.pageTitantypes.FindElement("//div[contains(@class, 'segment-container')]").Click();
  Aliases.browser.pageTitantypes.textnodeTitantypes.Keys("z");
  Delay(61000);
  if (Aliases.browser.pageTitantypes.FindElement("#modal-heading").textContent == "Cumulative Statistics") {
    Log.Message("Test completed successfully");
  }
  else {
    Log.Message("Test not completed successfully");
  }
}