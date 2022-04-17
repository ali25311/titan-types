function Test2() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate(
    "https://titan-types-finalized-testing-environment.vercel.app/"
  );
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("//div[contains(@class, 'stats-container')]") object equals 'Seconds Remaining
  //60
  //Word Count
  //0
  //Accuracy
  //100.00%'.
  aqObject.CheckProperty(
    Aliases.browser.pageTitantypes.FindElement(
      "//div[contains(@class, 'stats-container')]"
    ),
    "contentText",
    cmpEqual,
    "Seconds Remaining\n60\nWord Count\n0\nAccuracy\n100.00%"
  );
  //Clicks the 'button' button.
  Aliases.browser.pageTitantypes.button.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTitantypes.Wait();
  //Clicks the 'button' button.
  Aliases.browser.pageTitantypes.button.ClickButton();
}
