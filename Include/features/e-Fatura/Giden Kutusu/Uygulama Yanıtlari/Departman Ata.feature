Feature: Uygulama Yaniti departman ata

  Scenario Outline: Uygulama Yaniti departman ata
    * Giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü Giden Kutusu başlığı altındaki Uygulama Yanıtları seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Departman Ata isimli butona tıklanır
    * Yeni açılan sekmeye geçilir
    * <departman> isimli departman checkboxı seçilir
    * Departman kaydedilir
    * Popup mesajı Seçilen belgeler ilgili departmanlara aktarılmıştır içeriyor mu
    * Yönetim popupında Tamam seçilir
    * Ana sekmeye geçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | filtreDegeri | filtreDegeri2 | veri_Adi   | departman |
      | 01.09.2020   | 16.09.2020    | 6090408038 | Muhasebe  |
