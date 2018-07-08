$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("allscenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Order T-shirt and verify in order history",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User able to order a Tshirt",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history;user-able-to-order-a-tshirt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user selects a product and add it to cart",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user orders a Tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "order is reflecting in order history",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderandUpdateinformation.user_login_to_the_application()"
});
formatter.result({
  "duration": 21817620282,
  "status": "passed"
});
formatter.match({
  "location": "OrderandUpdateinformation.user_selects_a_product_and_add_it_to_cart()"
});
formatter.result({
  "duration": 41501059,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.10.0\u0027, revision: \u0027176b4a9\u0027, time: \u00272018-03-02T19:03:16.397Z\u0027\nSystem info: host: \u0027VIVEK-VAIO\u0027, ip: \u0027172.20.10.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\vivek\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: 830437abfdce8c76a9ec6ea76853d1eb\n*** Element info: {Using\u003dxpath, value\u003d//p[contains(text(),\u0027Catalog\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\r\n\tat pageObjects.ProductSelectionPage.chkSelectionPage(ProductSelectionPage.java:32)\r\n\tat pageObjects.ProductSelectionPage.selectProduct(ProductSelectionPage.java:63)\r\n\tat Stepdefinition.OrderandUpdateinformation.user_selects_a_product_and_add_it_to_cart(OrderandUpdateinformation.java:43)\r\n\tat ✽.When user selects a product and add it to cart(allscenarios.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OrderandUpdateinformation.order_summary_page_displayed_and_user_clicks_I_confirm_Order_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderandUpdateinformation.order_is_reflecting_in_order_history()"
});
formatter.result({
  "status": "skipped"
});
});