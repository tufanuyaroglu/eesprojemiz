$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/otomasyonprojeler/EES/Include/features/Ayarlar/Araclar/Adres Defteri/Adres Defteri Olusturma/e-Arsiv Adresi VKN.feature");
formatter.feature({
  "name": "VKN Ile e-Arsiv Adresi Olusturma",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "VKN Ile e-Arsiv Adresi Olusturma",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı ELOGOGIB ve Şifre 123456 olarak giriş yapılır",
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
  "name": "Unvan alanına \u003cunvan\u003e yazılır",
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
        "unvan",
        "il",
        "ilce",
        "ulke_deger"
      ]
    },
    {
      "cells": [
        "VirgosolArsivVKN",
        "5422405266",
        "VirgosolOtomasyon",
        "İstanbul",
        "Maltepe",
        "Türkiye"
      ]
    }
  ]
});
formatter.scenario({
  "name": "VKN Ile e-Arsiv Adresi Olusturma",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı ELOGOGIB ve Şifre 123456 olarak giriş yapılır",
  "keyword": "* "
});
formatter.match({
  "location": "girisSayfasi.login(String,String)"
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
  "name": "Adres defteri Kısaltma textboxına VirgosolArsivVKN yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri VKN/TCKN No textboxına 5422405266 yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Unvan alanına VirgosolOtomasyon yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.kisaltmaYazilir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri İl textboxına İstanbul yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri İlçe textboxına Maltepe yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres olarak Ülke dropdownından Türkiye seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.dropdowndanSec(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres defteri butonlarından Kaydet butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.adresDefteriButonlarindanTiklanir(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtre alanlarında Kısaltma var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtrelerden Kısaltma filtresine VirgosolArsivVKN textini yaz",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreTexboxinaYaz(String,String)"
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