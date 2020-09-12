$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/otomasyonprojeler/EES/Include/features/Firma Yonetimi/Yetki Yonetimi/Kullanici Tanimlari/Kullanici Ekle.feature");
formatter.feature({
  "name": "Kullanici Eklenir",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Kullanici Eklenir",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden Firma Yönetimi seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menüden Yetki Yönetimi seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Kullanıcı Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Kullanıcı bilgileri \u003ckullanici_Kodu\u003e,\u003ce-Posta\u003e,\u003cadi\u003e,\u003csoyadi\u003e,\u003ctelefon\u003e,\u003cunvan\u003e,\u003cfirma_Secimi\u003e olarak girilir",
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
        "kullanici_Kodu",
        "e-Posta",
        "adi",
        "soyadi",
        "telefon",
        "unvan",
        "firma_Secimi"
      ]
    },
    {
      "cells": [
        "VirgosolKullanici",
        "otomasyon@virgosol.com",
        "Virgosol",
        "Otomasyon",
        "5555555555",
        "Firma",
        "ELOGOGIB"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Kullanici Eklenir",
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
  "name": "Ana menüden Firma Yönetimi seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alt menüden Yetki Yönetimi seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.altMenuSecimi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Kullanıcı Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanıcı bilgileri VirgosolKullanici,otomasyon@virgosol.com,Virgosol,Otomasyon,5555555555,Firma,ELOGOGIB olarak girilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.kullaniciOlusturulur(String,String,String,String,String,String,String)"
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