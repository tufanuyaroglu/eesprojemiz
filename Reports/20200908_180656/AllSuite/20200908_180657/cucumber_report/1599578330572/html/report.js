$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/otomasyonprojeler/EES/Include/features/Ayarlar/Gorsel Tasarimlar/Hazir Tasarim Araci/e-Mustahsil Makbuzu/Onizleme.feature");
formatter.feature({
  "name": "e-Mustahsil Makbuzu Hazir Tasarim Araci Onizleme",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Mustahsil Makbuzu Hazir Tasarim Araci Onizleme",
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
  "name": "Alt menü Görsel Tasarımlar başlığı altındaki Hazır Tasarım Aracı seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Sekmelerden e-Müstahsil Makbuzu seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "\u003csablon\u003e adlı şablonun Önizleme adlı butonuna tıkla",
  "keyword": "* "
});
formatter.step({
  "name": "Yeni açılan sekmeye geçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Yeni sekme başlığında e-Müstahsil Makbuzu var mı kontrol edilir",
  "keyword": "* "
});
formatter.step({
  "name": "Ana sekmeye geçilir",
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
        "sablon"
      ]
    },
    {
      "cells": [
        "e-Müstahsil Makbuz Öndeğer Şablon Tasarım"
      ]
    }
  ]
});
formatter.scenario({
  "name": "e-Mustahsil Makbuzu Hazir Tasarim Araci Onizleme",
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
  "name": "Alt menü Görsel Tasarımlar başlığı altındaki Hazır Tasarım Aracı seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sekmelerden e-Müstahsil Makbuzu seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.sekmeSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e-Müstahsil Makbuz Öndeğer Şablon Tasarım adlı şablonun Önizleme adlı butonuna tıkla",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonunaTikla(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yeni açılan sekmeye geçilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.yeniAcilanSekmeyeGecilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yeni sekme başlığında e-Müstahsil Makbuzu var mı kontrol edilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.yeniSekmedeVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ana sekmeye geçilir",
  "keyword": "* "
});
formatter.match({
  "location": "sekmeler.anaSekmeyeGecilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanıcı işlemlerinden Çıkış seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "kullaniciIslemleri.kullaniciIslemi(String)"
});
formatter.result({
  "status": "passed"
});
});