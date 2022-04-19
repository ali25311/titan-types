function checkElements() {
  // Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  Aliases.browser.pageTitantypes.Wait();
  
  // Check to make sure elements are present
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("//h1[.='TitanTypes']"), "contentText", cmpEqual, "TitanTypes");
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("//h2[.='Seconds Remaining']"), "contentText", cmpEqual, "Seconds Remaining");
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("//h2[.='Word Count']"), "contentText", cmpEqual, "Word Count");
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("//h2[.='Accuracy']"), "contentText", cmpEqual, "Accuracy");
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("//h2[.='Duration']"), "contentText", cmpEqual, "Duration");
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("//h2[.='Type']"), "contentText", cmpEqual, "Type");
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("//h2[.='Reset']"), "contentText", cmpEqual, "Reset");
  Delay(250);
}



function main() {
  checkElements();
  Aliases.browser.BrowserWindow.Position(0, 0, 2000, 1080);
  Log.Message("Initial size check completed");
    
  // Resizes our browser window
  Aliases.browser.BrowserWindow.Position(0, 0, 1700, 1080);
  checkElements();
  Log.Message("Near full size check completed");
    
  // Resizes our browser window
  Aliases.browser.BrowserWindow.Position(0, 0, 1400, 1080);
  checkElements();
  Log.Message("Medium size check completed");
    
  // Resizes our browser window
  Aliases.browser.BrowserWindow.Position(0, 0, 1100, 1080);
  checkElements();
  Log.Message("Small size check completed");
    
  // Resizes our browser window
  Aliases.browser.BrowserWindow.Position(0, 0, 800, 1080);
  checkElements();
  Log.Message("Mobile size check completed");
    
  // Resizes our browser window
  Aliases.browser.BrowserWindow.Position(0, 0, 500, 1080);
  checkElements();
  Log.Message("Extra small size check completed");
  Aliases.browser.BrowserWindow.Maximize();
}