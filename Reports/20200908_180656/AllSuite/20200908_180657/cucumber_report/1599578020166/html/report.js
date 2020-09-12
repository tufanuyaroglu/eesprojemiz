$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/otomasyonprojeler/EES/Include/features/Ayarlar/Araclar/Ayarlarim/Fatura ve Zarflar Icin Sayfadaki Kayit Sayisi.feature");
formatter.feature({
  "name": "Fatura ve Zarflar Icin Sayfadaki Kayit Sayisi",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Fatura ve Zarflar Icin Sayfadaki Kayit Sayisi",
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
  "name": "Alt menü Araçlar başlığı altındaki Ayarlarım seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tablodaki Fatura ve Zarflar İçin Sayfadaki Kayıt Sayısı isimli verinin Düzenle adlı butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Düzenleme formu popupı çıktı mı",
  "keyword": "* "
});
formatter.step({
  "name": "Düzenleme formunda Değeri alanına \u003cdeger\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Düzenleme formunda Kaydet butonuna tıkla",
  "keyword": "* "
});
formatter.step({
  "name": "Tablodaki Fatura ve Zarflar İçin Sayfadaki Kayıt Sayısı isimli verinin diğer değerini \u003cdeger\u003e olduğu kontrol edilir",
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
        "deger"
      ]
    },
    {
      "cells": [
        "50"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Fatura ve Zarflar Icin Sayfadaki Kayit Sayisi",
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
  "name": "Alt menü Araçlar başlığı altındaki Ayarlarım seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tablodaki Fatura ve Zarflar İçin Sayfadaki Kayıt Sayısı isimli verinin Düzenle adlı butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodakiVerininButonunaTiklanir(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Düzenleme formu popupı çıktı mı",
  "keyword": "* "
});
formatter.match({
  "location": "ayarlarim.duzenlemeFormuPopupiCiktiMi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Düzenleme formunda Değeri alanına 50 yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "ayarlarim.duzenlmeFormunaYazilir(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Düzenleme formunda Kaydet butonuna tıkla",
  "keyword": "* "
});
formatter.match({
  "location": "ayarlarim.duzenlemeFormuButonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tablodaki Fatura ve Zarflar İçin Sayfadaki Kayıt Sayısı isimli verinin diğer değerini 50 olduğu kontrol edilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodakiIsimliVerininDigerDegeriKontrolEdilir(String,String)"
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