$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/otomasyonprojeler/EES/Include/features/e-Makbuz/e-Serbest Meslek Uygulaması/e-Serbest Meslek Makbuzu Olusturma/Ekle/Elektronik Tipinde.feature");
formatter.feature({
  "name": "e-Serbest Meslek Makbuzu Olusturma",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Serbest Meslek Makbuzu Olusturma",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden e-Makbuz seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menü e-Serbest Meslek Uygulaması başlığı altındaki e-Serbest Meslek Makbuzu Oluşturma seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Görsel tasarım sayfasının Makbuz Bilgileri başlığını içerdiği kontrol edilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alıcı adı alanına \u003calici_Adi\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Gönderim Şekli Elektronik olarak seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ekle butonuna basılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ürün ekleme alanında Ücretin Ne İçin Alındığı başlığına \u003cmalzeme_adi\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ürün ekleme alanında Brüt Ücret başlığına \u003cucret\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ürün ekleme alanında G.V Stopaj Oranı% başlığına \u003cstopaj_Orani\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Notlar alanına \u003cnot\u003e girilir",
  "keyword": "* "
});
formatter.step({
  "name": "Kaydet butonu seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda \u003cunvan\u003e ünvanlı veri oluşturuldu mu",
  "keyword": "* "
});
formatter.step({
  "name": "Kullanıcı işlemlerinden Çıkış seçilir",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "alici_Adi",
        "malzeme_adi",
        "ucret",
        "stopaj_Orani",
        "not",
        "unvan"
      ]
    },
    {
      "cells": [
        "VirgosolSerbestMeslekVKN",
        "Otomasyon",
        "400",
        "10",
        "Otomasyon Not",
        "VirgosolOtomasyon"
      ]
    }
  ]
});
formatter.scenario({
  "name": "e-Serbest Meslek Makbuzu Olusturma",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Giriş yapılır",
  "keyword": "* "
});
formatter.match({
  "location": "girisSayfasi.login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ana menüden e-Makbuz seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menü e-Serbest Meslek Uygulaması başlığı altındaki e-Serbest Meslek Makbuzu Oluşturma seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Görsel tasarım sayfasının Makbuz Bilgileri başlığını içerdiği kontrol edilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.gorselTasarimSayfasininBasligindaVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alıcı adı alanına VirgosolSerbestMeslekVKN girilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.aliciSec(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Olusturma/Genel/AliciSecilir\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat olusturma.genel.aliciSec(genel.groovy:56)\r\n\tat ✽.Alıcı adı alanına VirgosolSerbestMeslekVKN girilir(C:/otomasyonprojeler/EES/Include/features/e-Makbuz/e-Serbest Meslek Uygulaması/e-Serbest Meslek Makbuzu Olusturma/Ekle/Elektronik Tipinde.feature:9)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Unable to verify image \u0027Object Repository/Sayfalar/Yetki_Yonetimi/Departman_Bilgileri/frame\u0027 present\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SwitchToFrameKeyword.switchToFrame(SwitchToFrameKeyword.groovy:84)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SwitchToFrameKeyword.execute(SwitchToFrameKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.switchToFrame(WebUiBuiltInKeywords.groovy:2895)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$switchToFrame$10.call(Unknown Source)\r\n\tat AliciSecilir.run(AliciSecilir:22)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:339)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:330)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:309)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:301)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:235)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:114)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat olusturma.genel.aliciSec(genel.groovy:56)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:169)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Elektronik Tipinde.run(Elektronik Tipinde:17)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:339)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:330)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:309)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:301)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:235)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:191)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:141)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:90)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1599642026378.run(TempTestSuite1599642026378.groovy:39)\r\nCaused by: java.lang.IllegalArgumentException: Cannot find elements when the XPath is null.\r\n\tat org.openqa.selenium.By$ByXPath.\u003cinit\u003e(By.java:339)\r\n\tat org.openqa.selenium.By.xpath(By.java:92)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.buildLocator(WebUiCommonHelper.java:521)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementByNormalMethods(WebUiCommonHelper.java:985)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsBySelectedMethod(WebUiCommonHelper.java:894)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsWithSelfHealing(WebUiCommonHelper.java:791)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElements(WebUiCommonHelper.java:717)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1349)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SwitchToFrameKeyword$_switchToFrame_closure1.doCall(SwitchToFrameKeyword.groovy:77)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SwitchToFrameKeyword$_switchToFrame_closure1.call(SwitchToFrameKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\t... 58 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Gönderim Şekli Elektronik olarak seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.gonderimSekliSecilir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ekle butonuna basılır",
  "keyword": "* "
});
formatter.match({
  "location": "genel.ekleButonunaBasilir()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ürün ekleme alanında Ücretin Ne İçin Alındığı başlığına Otomasyon girilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.malzemeMalHizmetBilgileriGirilir(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ürün ekleme alanında Brüt Ücret başlığına 400 girilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.malzemeMalHizmetBilgileriGirilir(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ürün ekleme alanında G.V Stopaj Oranı% başlığına 10 girilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.malzemeMalHizmetBilgileriGirilir(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Notlar alanına Otomasyon Not girilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.notGirilir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kaydet butonu seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "genel.kaydetSecilir()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Tabloda VirgosolOtomasyon ünvanlı veri oluşturuldu mu",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodaUnvanliVeriOlusturulduMi(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanıcı işlemlerinden Çıkış seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "kullaniciIslemleri.kullaniciIslemi(String)"
});
formatter.result({
  "status": "skipped"
});
});