function Resfresh1()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  //Compares the textnodeTimerVal Stores item with the image of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object.
  Regions.textnodeTimerVal.Check(Aliases.browser.pageTitantypes.FindElement("#timer-val"));
  //Selects the 1 item of the 'selectDuration' combo box.
  Aliases.browser.pageTitantypes.selectDuration.ClickItem(1);
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTitantypes.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object equals '60'.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#timer-val"), "contentText", cmpEqual, "60");
  //Clicks the 'button' button.
  Aliases.browser.pageTitantypes.button.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTitantypes.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object equals '60'.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#timer-val"), "contentText", cmpEqual, "60");
  //Clicks the 'button' button.
  Aliases.browser.pageTitantypes.button.ClickButton();
}