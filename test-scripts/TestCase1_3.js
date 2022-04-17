function Test6()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("//div[contains(., 'Seconds Remaining')]") object equals 'Seconds Remaining
  //180
  //Word Count
  //0
  //Accuracy
  //100.00%
  //Duration
  //Select Duration
  //1 Minute
  //2 Minutes
  //3 Minutes
  //Type
  //Select Type
  //Words
  //Quotes
  //Reset'.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("//div[contains(., 'Seconds Remaining')]"), "contentText", cmpEqual, "Seconds Remaining\n180\nWord Count\n0\nAccuracy\n100.00%\nI\nn\nd\nw\ne\nl\nl\ni\nn\ng\n,\nl\ni\nv\ne\nc\nl\no\ns\ne\nt\no\nt\nh\ne\ng\nr\no\nu\nn\nd\n.\nI\nn\nt\nh\ni\nn\nk\ni\nn\ng\n,\nk\ne\ne\np\nt\no\nt\nh\ne\ns\ni\nm\np\nl\ne\n.\nI\nn\nc\no\nn\nf\nl\ni\nc\nt\n,\nb\ne\nf\na\ni\nr\na\nn\nd\ng\ne\nn\ne\nr\no\nu\ns\n.\nI\nn\ng\no\nv\ne\nr\nn\ni\nn\ng\n,\nd\no\nn\n'\nt\nt\nr\ny\nt\no\nc\no\nn\nt\nr\no\nl\n.\nI\nn\nw\no\nr\nk\n,\nd\no\nw\nh\na\nt\ny\no\nu\ne\nn\nj\no\ny\n.\nI\nn\nf\na\nm\ni\nl\ny\nl\ni\nf\ne\n,\nb\ne\nc\no\nm\np\nl\ne\nt\ne\nl\ny\np\nr\ne\ns\ne\nn\nt\n.\nT\ne\nc\nh\nn\no\nl\no\ng\ny\nf\nr\ni\ng\nh\nt\ne\nn\ns\nm\ne\nt\no\nd\ne\na\nt\nh\n.\nI\nt\n'\ns\nd\ne\ns\ni\ng\nn\ne\nd\nb\ny\ne\nn\ng\ni\nn\ne\ne\nr\ns\nt\no\ni\nm\np\nr\ne\ns\ns\no\nt\nh\ne\nr\ne\nn\ng\ni\nn\ne\ne\nr\ns\n.\nA\nn\nd\nt\nh\ne\ny\na\nl\nw\na\ny\ns\nc\no\nm\ne\nw\ni\nt\nh\ni\nn\ns\nt\nr\nu\nc\nt\ni\no\nn\nb\no\no\nk\nl\ne\nt\ns\nt\nh\na\nt\na\nr\ne\nw\nr\ni\nt\nt\ne\nn\nb\ny\ne\nn\ng\ni\nn\ne\ne\nr\ns\nf\no\nr\no\nt\nh\ne\nr\ne\nn\ng\ni\nn\ne\ne\nr\ns\n—\nw\nh\ni\nc\nh\ni\ns\nw\nh\ny\na\nl\nm\no\ns\nt\nn\no\nt\ne\nc\nh\nn\no\nl\no\ng\ny\ne\nv\ne\nr\nw\no\nr\nk\ns\n.\nDuration\nSelect Duration\n1 Minute\n2 Minutes\n3 Minutes\nType\nSelect Type\nWords\nQuotes\nReset");
  //Clicks the 'textnodeP' control.
  Aliases.browser3.pageTitantypes.textnodeP.Click();
  //Enters 'In dwelling, live close' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys("In dwelling, live close");
  //Clicks the 'button' button.
  Aliases.browser3.pageTitantypes.button.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser3.pageTitantypes.Wait();
  //Clicks the 'selectDuration' object.
  Aliases.browser3.pageTitantypes.selectDuration.Click(19, 10);
  OCR.Recognize(Aliases.browser3.wndChrome_WidgetWin_1.Chrome_RenderWidgetHostHWND).BlockByText("Minutes", spNearestToCenter).Click();
  //Clicks the 'textnodeG' control.
  Aliases.browser3.pageTitantypes.textnodeG.Click();
  //Enters 'Take up one idea. Make that one idea' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys("Take up one idea. Make that one idea");
  //Clicks the 'button' button.
  Aliases.browser3.pageTitantypes.button.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser3.pageTitantypes.Wait();
  //Clicks the 'selectDuration' object.
  Aliases.browser3.pageTitantypes.selectDuration.Click(42, 15);
  OCR.Recognize(Aliases.browser3.wndChrome_WidgetWin_1.Chrome_RenderWidgetHostHWND).BlockByText("Minute", spLeftMost).Click();
  //Enters 'Sometimes I am happy and sometimes not. I am [BS] [BS], aftre' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys("Sometimes I am happy and sometimes not. I am [BS] [BS], aftre");
  //Clicks the 'button' button.
  Aliases.browser3.pageTitantypes.button.ClickButton();
}