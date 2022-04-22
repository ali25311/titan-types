// ==========================================================
// Authors: Stephen Landaas, Emily Le, Ali Hussain
// ==========================================================
// Licensing Information: MIT License
// ==========================================================
// Description: This corresponds to test scenario 2, where we check the timer functionality to ensure that selecting the different times appear properly on the application. This is test case 4, in which we are checking to see if refreshing the page will keep the same time selection that was chosen.

function TestCase2_4() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  Aliases.browser.pageTitantypes.Wait();
 
  // Selects 1 minute duration
  Aliases.browser.pageTitantypes.selectDuration.ClickItem("1 Minute");
  Aliases.browser.pageTitantypes.Wait();
  t1 = Aliases.browser.pageTitantypes.FindElement("#timer-val").textContent;
 
  // Refresh the page/click reset button
  Aliases.browser.pageTitantypes.button.ClickButton();
  Aliases.browser.pageTitantypes.Wait();
  t2 = Aliases.browser.pageTitantypes.FindElement("#timer-val").textContent;
  
  // Test if the time duration stayed the same
  if (t1 == t2) {
    Log.Message("1 Minute time limit preserved");
  }
  else {
    Log.message("1 Minute time limit not preserved");
  }
 
 // Selects 2 minute duration
 Aliases.browser.pageTitantypes.selectDuration.ClickItem("2 Minutes");
 Aliases.browser.pageTitantypes.Wait();
 t1 = Aliases.browser.pageTitantypes.FindElement("#timer-val").textContent;
 
 // Refresh the page/click reset button
 Aliases.browser.pageTitantypes.button.ClickButton();
 Aliases.browser.pageTitantypes.Wait();
 t2 = Aliases.browser.pageTitantypes.FindElement("#timer-val").textContent;
 
 // Test if the time duration stayed the same
  if (t1 == t2) {
    Log.Message("2 Minute time limit preserved");
  }
  else {
    Log.message("2 Minute time limit not preserved");
  }
 
  // Selects 3 minute duration
  Aliases.browser.pageTitantypes.selectDuration.ClickItem("3 Minutes");
  Aliases.browser.pageTitantypes.Wait();
  t1 = Aliases.browser.pageTitantypes.FindElement("#timer-val").textContent;
  
  // Refresh the page/click reset button
  Aliases.browser.pageTitantypes.button.ClickButton();
  Aliases.browser.pageTitantypes.Wait();
  t2 = Aliases.browser.pageTitantypes.FindElement("#timer-val").textContent;
  
  // Test if the time duration stayed the same
  if (t1 == t2) {
    Log.Message("3 Minute time limit preserved");
  }
  else {
    Log.message("3 Minute time limit not preserved");
  }
 
  Aliases.browser.pageTitantypes.selectDuration.ClickItem("1 Minute");
  Aliases.browser.pageTitantypes.Wait();
}