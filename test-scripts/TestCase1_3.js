function Test3() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate(
    "https://titan-types-finalized-testing-environment.vercel.app/"
  );
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#word-count-val") object equals '0'.
  aqObject.CheckProperty(
    Aliases.browser.pageTitantypes.FindElement("#word-count-val"),
    "contentText",
    cmpEqual,
    "0"
  );
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#accuracy-val") object equals '100.00%'.
  aqObject.CheckProperty(
    Aliases.browser.pageTitantypes.FindElement("#accuracy-val"),
    "contentText",
    cmpEqual,
    "100.00%"
  );
  //Selects the '1 Minute' item of the 'selectDuration' combo box.
  Aliases.browser3.pageTitantypes.selectDuration.ClickItem("1 Minute");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser3.pageTitantypes.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object equals '60'.
  aqObject.CheckProperty(
    Aliases.browser.pageTitantypes.FindElement("#timer-val"),
    "contentText",
    cmpEqual,
    "60"
  );
  //Clicks the 'textnodeE2' control.
  Aliases.browser3.pageTitantypes.textnodeE2.Click();
  //Enters 'I dewci[BS][BS]cided that itwas n[BS][BS]' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys(
    "I dewci[BS][BS]cided that itwas n[BS][BS]"
  );
  //Selects the '1 Minute' item of the 'selectDuration' combo box.
  Aliases.browser3.pageTitantypes.selectDuration.ClickItem("1 Minute");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser3.pageTitantypes.Wait();
  //Selects the '2 Minutes' item of the 'selectDuration' combo box.
  Aliases.browser3.pageTitantypes.selectDuration.ClickItem("2 Minutes");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser3.pageTitantypes.Wait();
  //Clicks the 'button' button.
  Aliases.browser3.pageTitantypes.button.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser3.pageTitantypes.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object equals '120'.
  aqObject.CheckProperty(
    Aliases.browser.pageTitantypes.FindElement("#timer-val"),
    "contentText",
    cmpEqual,
    "120"
  );
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#word-count-val") object equals '0'.
  aqObject.CheckProperty(
    Aliases.browser.pageTitantypes.FindElement("#word-count-val"),
    "contentText",
    cmpEqual,
    "0"
  );
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#accuracy-val") object equals '100.00%'.
  aqObject.CheckProperty(
    Aliases.browser.pageTitantypes.FindElement("#accuracy-val"),
    "contentText",
    cmpEqual,
    "100.00%"
  );
  //Clicks the 'panel' control.
  Aliases.browser3.pageTitantypes.panel.Click();
  //Enters 'It is impossible to escape' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys(
    "It is impossible to escape"
  );
  //Selects the '3 Minutes' item of the 'selectDuration' combo box.
  Aliases.browser3.pageTitantypes.selectDuration.ClickItem("3 Minutes");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser3.pageTitantypes.Wait();
  //Clicks the 'button' button.
  Aliases.browser3.pageTitantypes.button.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser3.pageTitantypes.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object equals '180'.
  aqObject.CheckProperty(
    Aliases.browser.pageTitantypes.FindElement("#timer-val"),
    "contentText",
    cmpEqual,
    "180"
  );
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#word-count-val") object equals '0'.
  aqObject.CheckProperty(
    Aliases.browser.pageTitantypes.FindElement("#word-count-val"),
    "contentText",
    cmpEqual,
    "0"
  );
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#accuracy-val") object equals '100.00%'.
  aqObject.CheckProperty(
    Aliases.browser.pageTitantypes.FindElement("#accuracy-val"),
    "contentText",
    cmpEqual,
    "100.00%"
  );
  //Clicks the 'textnodeK' control.
  Aliases.browser3.pageTitantypes.textnodeK.Click();
  //Enters 'The way a woman carries herself' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys(
    "The way a woman carries herself"
  );
  //Clicks the 'button' button.
  Aliases.browser3.pageTitantypes.button.ClickButton();
}
