$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/otomasyonprojeler/EES/Include/features/Ayarlar/Gorsel Tasarimlar/Hazir Tasarim Araci/e-Serbest Meslek Makbuzu/Buton Kontrolu.feature");
formatter.feature({
  "name": "e-Serbest Meslek Makbuzu Hazir Tasarim Araci On Deger Ata",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "e-Serbest Meslek Makbuzu Hazir Tasarim Araci On Deger Ata",
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
  "name": "Sekmelerden e-Serbest Meslek Makbuzu seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "e-Serbest Meslek Makbuz Öndeğer Şablon Tasarım adlı şablonun Tasarımı İndir adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "e-Serbest Meslek Makbuz Öndeğer Şablon Tasarım adlı şablonun Önizleme adlı butonu var mı",
  "keyword": "* "
});
formatter.step({
  "name": "e-Serbest Meslek Makbuz Öndeğer Şablon Tasarım adlı şablonun Ön Değer Ata adlı butonu var mı",
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
        ""
      ]
    },
    {
      "cells": [
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "e-Serbest Meslek Makbuzu Hazir Tasarim Araci On Deger Ata",
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
  "name": "Sekmelerden e-Serbest Meslek Makbuzu seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.sekmeSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e-Serbest Meslek Makbuz Öndeğer Şablon Tasarım adlı şablonun Tasarımı İndir adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e-Serbest Meslek Makbuz Öndeğer Şablon Tasarım adlı şablonun Önizleme adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e-Serbest Meslek Makbuz Öndeğer Şablon Tasarım adlı şablonun Ön Değer Ata adlı butonu var mı",
  "keyword": "* "
});
formatter.match({
  "location": "gorselTasarimlar.sablonButonuVarMi(String,String)"
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