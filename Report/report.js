$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdactinProject.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality for adactin application",
  "description": "",
  "id": "login-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Successful login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successful-login-into-the-adactin-application-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-functionality-for-adactin-application;successful-login-into-the-adactin-application-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "login-functionality-for-adactin-application;successful-login-into-the-adactin-application-with-valid-credential;;1"
    },
    {
      "cells": [
        "Prabhuvenkat",
        "prabhu9619"
      ],
      "line": 17,
      "id": "login-functionality-for-adactin-application;successful-login-into-the-adactin-application-with-valid-credential;;2"
    },
    {
      "cells": [
        "anuamu04",
        "9003881833"
      ],
      "line": 18,
      "id": "login-functionality-for-adactin-application;successful-login-into-the-adactin-application-with-valid-credential;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 502000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is loggedin the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionLogin.the_user_is_loggedin_the_application()"
});
formatter.result({
  "duration": 204652300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogin.goes_to_landing_page()"
});
formatter.result({
  "duration": 126000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Successful login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successful-login-into-the-adactin-application-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter \"Prabhuvenkat\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter \"prabhu9619\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionLogin.user_enter_application_url()"
});
formatter.result({
  "duration": 33627500,
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-ROO5GIO\u0027, ip: \u0027192.168.43.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:58230}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6ddb0e655e875afe61615f3d527653af\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.adactin.baseclass.BaseClass.getUrl(BaseClass.java:57)\r\n\tat com.adactin.stepdefinition.StepDefinitionLogin.user_enter_application_url(StepDefinitionLogin.java:36)\r\n\tat ✽.When user enter application url(AdactinProject.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prabhuvenkat",
      "offset": 12
    }
  ],
  "location": "StepDefinitionLogin.user_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "prabhu9619",
      "offset": 12
    }
  ],
  "location": "StepDefinitionLogin.user_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionLogin.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 361940800,
  "error_message": "java.io.FileNotFoundException: null\\ScreenShot\\login-functionality-for-adactin-application;successful-login-into-the-adactin-application-with-valid-credential;;2.png (The system cannot find the path specified)\r\n\tat java.io.FileOutputStream.open0(Native Method)\r\n\tat java.io.FileOutputStream.open(FileOutputStream.java:270)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:213)\r\n\tat com.google.common.io.Files$FileByteSink.openStream(Files.java:192)\r\n\tat com.google.common.io.Files$FileByteSink.openStream(Files.java:180)\r\n\tat com.google.common.io.ByteSource.copyTo(ByteSource.java:268)\r\n\tat com.google.common.io.Files.copy(Files.java:319)\r\n\tat com.adactin.baseclass.BaseClass.Screenshot(BaseClass.java:119)\r\n\tat com.adactin.stepdefinition.Hooks.afterscenario(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 2312300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is loggedin the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionLogin.the_user_is_loggedin_the_application()"
});
formatter.result({
  "duration": 154600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogin.goes_to_landing_page()"
});
formatter.result({
  "duration": 128200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successful-login-into-the-adactin-application-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter \"anuamu04\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter \"9003881833\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionLogin.user_enter_application_url()"
});
formatter.result({
  "duration": 19746400,
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-ROO5GIO\u0027, ip: \u0027192.168.43.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:58230}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6ddb0e655e875afe61615f3d527653af\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.adactin.baseclass.BaseClass.getUrl(BaseClass.java:57)\r\n\tat com.adactin.stepdefinition.StepDefinitionLogin.user_enter_application_url(StepDefinitionLogin.java:36)\r\n\tat ✽.When user enter application url(AdactinProject.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "anuamu04",
      "offset": 12
    }
  ],
  "location": "StepDefinitionLogin.user_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9003881833",
      "offset": 12
    }
  ],
  "location": "StepDefinitionLogin.user_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionLogin.user_verify_the_username_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 296241800,
  "error_message": "java.io.FileNotFoundException: null\\ScreenShot\\login-functionality-for-adactin-application;successful-login-into-the-adactin-application-with-valid-credential;;3.png (The system cannot find the path specified)\r\n\tat java.io.FileOutputStream.open0(Native Method)\r\n\tat java.io.FileOutputStream.open(FileOutputStream.java:270)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:213)\r\n\tat com.google.common.io.Files$FileByteSink.openStream(Files.java:192)\r\n\tat com.google.common.io.Files$FileByteSink.openStream(Files.java:180)\r\n\tat com.google.common.io.ByteSource.copyTo(ByteSource.java:268)\r\n\tat com.google.common.io.Files.copy(Files.java:319)\r\n\tat com.adactin.baseclass.BaseClass.Screenshot(BaseClass.java:119)\r\n\tat com.adactin.stepdefinition.Hooks.afterscenario(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 410600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is loggedin the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionLogin.the_user_is_loggedin_the_application()"
});
formatter.result({
  "duration": 136100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogin.goes_to_landing_page()"
});
formatter.result({
  "duration": 136600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successfully searching hotel into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfully-searching-hotel-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@SearchHotel"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user select location",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user select hotels",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user select roomtype",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user select roomno",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user select checkin date",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user select checkout date",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user select adultroom",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user select childroom",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user click submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionSearch.user_select_location()"
});
formatter.result({
  "duration": 88388600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@id\u003d\"location\"]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-ROO5GIO\u0027, ip: \u0027192.168.43.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:58230}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6ddb0e655e875afe61615f3d527653af\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\"location\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.adactin.baseclass.BaseClass.dropdown(BaseClass.java:61)\r\n\tat com.adactin.stepdefinition.StepDefinitionSearch.user_select_location(StepDefinitionSearch.java:15)\r\n\tat ✽.When user select location(AdactinProject.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitionSearch.user_select_hotels()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionSearch.user_select_roomtype()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionSearch.user_select_roomno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionSearch.user_select_checkin_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionSearch.user_select_checkout_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionSearch.user_select_adultroom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionSearch.user_select_childroom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionSearch.user_click_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 325323200,
  "error_message": "java.io.FileNotFoundException: null\\ScreenShot\\login-functionality-for-adactin-application;successfully-searching-hotel-into-the-adactin-application-with-valid-credential.png (The system cannot find the path specified)\r\n\tat java.io.FileOutputStream.open0(Native Method)\r\n\tat java.io.FileOutputStream.open(FileOutputStream.java:270)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:213)\r\n\tat com.google.common.io.Files$FileByteSink.openStream(Files.java:192)\r\n\tat com.google.common.io.Files$FileByteSink.openStream(Files.java:180)\r\n\tat com.google.common.io.ByteSource.copyTo(ByteSource.java:268)\r\n\tat com.google.common.io.Files.copy(Files.java:319)\r\n\tat com.adactin.baseclass.BaseClass.Screenshot(BaseClass.java:119)\r\n\tat com.adactin.stepdefinition.Hooks.afterscenario(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 166000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is loggedin the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionLogin.the_user_is_loggedin_the_application()"
});
formatter.result({
  "duration": 97700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogin.goes_to_landing_page()"
});
formatter.result({
  "duration": 87100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Successfully clicked confirmation  into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfully-clicked-confirmation--into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Confirmation"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user click select radio button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user click continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionConfirmation.user_click_select_radio_button()"
});
formatter.result({
  "duration": 27028900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"radiobutton_0\"]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-ROO5GIO\u0027, ip: \u0027192.168.43.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:58230}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6ddb0e655e875afe61615f3d527653af\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"radiobutton_0\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.adactin.baseclass.BaseClass.clickOnElement(BaseClass.java:85)\r\n\tat com.adactin.stepdefinition.StepDefinitionConfirmation.user_click_select_radio_button(StepDefinitionConfirmation.java:12)\r\n\tat ✽.When user click select radio button(AdactinProject.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitionConfirmation.user_click_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 410212200,
  "error_message": "java.io.FileNotFoundException: null\\ScreenShot\\login-functionality-for-adactin-application;successfully-clicked-confirmation--into-the-adactin-application-with-valid-credential.png (The system cannot find the path specified)\r\n\tat java.io.FileOutputStream.open0(Native Method)\r\n\tat java.io.FileOutputStream.open(FileOutputStream.java:270)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:213)\r\n\tat com.google.common.io.Files$FileByteSink.openStream(Files.java:192)\r\n\tat com.google.common.io.Files$FileByteSink.openStream(Files.java:180)\r\n\tat com.google.common.io.ByteSource.copyTo(ByteSource.java:268)\r\n\tat com.google.common.io.Files.copy(Files.java:319)\r\n\tat com.adactin.baseclass.BaseClass.Screenshot(BaseClass.java:119)\r\n\tat com.adactin.stepdefinition.Hooks.afterscenario(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 157000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user is loggedin the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionLogin.the_user_is_loggedin_the_application()"
});
formatter.result({
  "duration": 107800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLogin.goes_to_landing_page()"
});
formatter.result({
  "duration": 97800,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Successfully  booked adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfully--booked-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Booking"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "user enter firstname",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user enter lastname",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user enter address",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user enter creditcardno",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user enter creditcardtype",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user enter expmon of creditcard",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user enter expyear of creditcard",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user enter cvv",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user  booKnow button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user click logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionBooking.user_enter_firstname()"
});
formatter.result({
  "duration": 47284500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"first_name\"]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-ROO5GIO\u0027, ip: \u0027192.168.43.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:58230}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6ddb0e655e875afe61615f3d527653af\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"first_name\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.adactin.baseclass.BaseClass.inputOnElement(BaseClass.java:81)\r\n\tat com.adactin.stepdefinition.StepDefinitionBooking.user_enter_firstname(StepDefinitionBooking.java:12)\r\n\tat ✽.When user enter firstname(AdactinProject.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitionBooking.user_enter_lastname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionBooking.user_enter_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionBooking.user_enter_creditcardno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionBooking.user_enter_creditcardtype()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionBooking.user_enter_expmon_of_creditcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionBooking.user_enter_expyear_of_creditcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionBooking.user_enter_cvv()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionBooking.user_booKnow_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionBooking.user_click_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 424239600,
  "error_message": "java.io.FileNotFoundException: null\\ScreenShot\\login-functionality-for-adactin-application;successfully--booked-adactin-application-with-valid-credential.png (The system cannot find the path specified)\r\n\tat java.io.FileOutputStream.open0(Native Method)\r\n\tat java.io.FileOutputStream.open(FileOutputStream.java:270)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:213)\r\n\tat com.google.common.io.Files$FileByteSink.openStream(Files.java:192)\r\n\tat com.google.common.io.Files$FileByteSink.openStream(Files.java:180)\r\n\tat com.google.common.io.ByteSource.copyTo(ByteSource.java:268)\r\n\tat com.google.common.io.Files.copy(Files.java:319)\r\n\tat com.adactin.baseclass.BaseClass.Screenshot(BaseClass.java:119)\r\n\tat com.adactin.stepdefinition.Hooks.afterscenario(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
});