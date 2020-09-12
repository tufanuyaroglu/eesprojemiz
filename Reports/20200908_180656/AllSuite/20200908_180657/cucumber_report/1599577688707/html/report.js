$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/otomasyonprojeler/EES/Include/features/Ayarlar/Araclar/Adres Defteri/Adres Defteri Olusturma/e-Mustahsil Makbuz TCKN.feature");
formatter.feature({
  "name": "TC Kimlik Numarasi Ile e-Mustahsil Adresi olusturma",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC Kimlik Numarasi Ile e-Mustahsil Adresi olusturma",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden Ayarlar seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menü Araçlar başlığı altındaki Adres Defteri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri Adres Ekle başlıklı popup geldi mi",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri Kısaltma textboxına \u003ckisaltma\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri VKN/TCKN No textboxına \u003cvkntckn\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adı alanına \u003cadi\u003e, Soyadı alanına \u003csoyadi\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri İl textboxına \u003cil\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri İlçe textboxına \u003cilce\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres olarak Ülke dropdownından \u003culke_deger\u003e seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri butonlarından Kaydet butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Kısaltma var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtrelerden Kısaltma filtresine \u003ckisaltma\u003e textini yaz",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda veri var mı kontrol edilir",
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
        "kisaltma",
        "vkntckn",
        "adi",
        "soyadi",
        "il",
        "ilce",
        "ulke_deger"
      ]
    },
    {
      "cells": [
        "VirgosolMüstahsilTCKN",
        "05531351645",
        "Virgosol",
        "Otomasyon",
        "İstanbul",
        "Maltepe",
        "Türkiye"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC Kimlik Numarasi Ile e-Mustahsil Adresi olusturma",
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
  "name": "Ana menüden Ayarlar seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menü Araçlar başlığı altındaki Adres Defteri seçilir",
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
  "name": "Adres defteri Adres Ekle başlıklı popup geldi mi",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.baslikliPopupGeldiMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri Kısaltma textboxına VirgosolMüstahsilTCKN yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepErrorException: Call Test Case \u0027Test Cases/Sayfalar/Ayarlar/Adres_Defteri/AdresDefteriTexboxaYaz\u0027 failed because of error(s)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:66)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat sayfalar.adresDefteri.soldakiTextboxaYaz(adresDefteri.groovy:59)\r\n\tat ✽.Adres defteri Kısaltma textboxına VirgosolMüstahsilTCKN yazılır(C:/otomasyonprojeler/EES/Include/features/Ayarlar/Araclar/Adres Defteri/Adres Defteri Olusturma/e-Mustahsil Makbuz TCKN.feature:9)\r\nCaused by: org.codehaus.groovy.runtime.InvokerInvocationException: java.awt.datatransfer.UnsupportedFlavorException: Unicode String\r\n\tat Method.invokeMethod(Method.groovy)\r\n\tat com.kms.katalon.core.main.CustomKeywordDelegatingMetaClass.invokeStaticMethod(CustomKeywordDelegatingMetaClass.java:50)\r\n\tat AdresDefteriTexboxaYaz.run(AdresDefteriTexboxaYaz:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:339)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:330)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:309)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:301)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:235)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:114)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat sayfalar.adresDefteri.soldakiTextboxaYaz(adresDefteri.groovy:59)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:169)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat e-Mustahsil Makbuz TCKN.run(e-Mustahsil Makbuz TCKN:19)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:339)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:330)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:309)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:301)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:235)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:191)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:141)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:90)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1599577617867.run(TempTestSuite1599577617867.groovy:39)\r\nCaused by: java.awt.datatransfer.UnsupportedFlavorException: Unicode String\r\n\tat Method.TextDegerineEsitElementinAltindakiTextboxtaYazgecici(Method.groovy:214)\r\n\t... 55 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Adres defteri VKN/TCKN No textboxına 05531351645 yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adı alanına Virgosol, Soyadı alanına Otomasyon yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.adiYazilir(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adres defteri İl textboxına İstanbul yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adres defteri İlçe textboxına Maltepe yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adres olarak Ülke dropdownından Türkiye seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.dropdowndanSec(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adres defteri butonlarından Kaydet butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.adresDefteriButonlarindanTiklanir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Filtre alanlarında Kısaltma var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Filtrelerden Kısaltma filtresine VirgosolMüstahsilTCKN textini yaz",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreTexboxinaYaz(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreButonSec(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Tabloda veri var mı kontrol edilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodaVeriVarMi()"
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