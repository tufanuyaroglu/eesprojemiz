Feature: e-Fatura Taslak Onaylama

  Scenario Outline: e-Fatura Taslak Onaylama
    * Giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki e-Fatura Oluşturma seçilir
    * Filtrelerden Alıcı Ünvan filtresine <filtreDegeri> textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Onayla isimli butona tıklanır
    * Popup mesajı Devam etmek istiyor musunuz içeriyor mu
    * Yönetim popupında Onayla seçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
      | filtreDegeri            | veri_Adi 		            |
      | Yeni Adres Anonim A.Ş.  | Yeni Adres Anonim A.Ş.  |