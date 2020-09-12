$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/otomasyonprojeler/EES/Include/features/Firma Yonetimi/Yetki Yonetimi/Kullanici Tanimlari/Rol ve Departman Tanimla.feature");
formatter.feature({
  "name": "Departman ve Rol tanimlama",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Departman ve Rol tanimlama",
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
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda veri var mı kontrol edilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tablodan \u003ckullanici_Adi\u003e isimli veri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Rol ve Departman Tanımla isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Firma kodu \u003cfirma_Kodu\u003e olan firma seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Kullanıcının departmanı \u003cdepartman\u003e olarak seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Kullanıcın rolü \u003crol\u003e olarak secilir",
  "keyword": "* "
});
formatter.step({
  "name": "Rol ve Departman tanımlama kaydedilir",
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
        "kullanici_Adi",
        "firma_Kodu",
        "departman",
        "rol"
      ]
    },
    {
      "cells": [
        "VirgosolKullanici",
        "ELOGOGIB",
        "VirgosolDepartman",
        "VirgosolRol"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Departman ve Rol tanimlama",
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
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreButonSec(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tabloda veri var mı kontrol edilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodaVeriVarMi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tablodan VirgosolKullanici isimli veri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodanVeriSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butonlardan Rol ve Departman Tanımla isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Firma kodu ELOGOGIB olan firma seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.firmaKodluFirmaSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanıcının departmanı VirgosolDepartman olarak seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.kullanicininDepartmaniSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanıcın rolü VirgosolRol olarak secilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.kullanicinRoluSecilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Rol ve Departman tanımlama kaydedilir",
  "keyword": "* "
});
formatter.match({
  "location": "yetkiYonetimi.rolveDepartmanTanimlamaKaydedilir()"
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