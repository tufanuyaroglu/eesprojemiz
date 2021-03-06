Feature: e-Fatura Gelen Kutusu Uygulama Yanıtlari UBL - Indir

  Scenario Outline: e-Fatura Gelen Kutusu Uygulama Yanıtlari UBL - Indir
    * Giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Gelen Kutusu başlığı altındaki Uygulama Yanıtları seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan UBL isimli butona tıklanır
    * Alt butonlardan İndir butonuna tıklanır
    * Ön eki ApplicationResponse olan dosya indirildi mi
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | filtreDegeri | filtreDegeri2 | veri_Adi   | tag                 |
      | 01.01.2019   | 31.12.2019    | 5555551292 | ApplicationResponse |
