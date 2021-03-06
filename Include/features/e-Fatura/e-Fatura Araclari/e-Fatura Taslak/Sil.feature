Feature: e-Fatura Taslak Sil

  Scenario Outline: e-Fatura Taslak Sil
    * Giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki e-Fatura Taslak seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Sil isimli butona tıklanır
    * Popup mesajı Seçilen kayıtlar silinecektir içeriyor mu
    * Yönetim popupında OnaylaOnaylaOnayla seçilir
    * Popup mesajı Numara atanan makbuzlar silinemez içeriyor mu
    * Yönetim popupında Tamam seçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
      | veri_Adi 	 	           | tag				 |
      | Yeni Adres Anonim A.Ş. | CreditNote  |