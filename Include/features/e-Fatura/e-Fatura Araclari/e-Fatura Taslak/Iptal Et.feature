Feature: e-Fatura Taslak Iptal Et

  Scenario Outline: e-Fatura Taslak Iptal Et
    * Giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki e-Fatura Taslak seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan İptal Et isimli butona tıklanır
    * Popup mesajı İşleme devam etmek istiyor musunuz içeriyor mu
    * Yönetim popupında OnaylaOnaylaOnayla seçilir
    * Popup mesajı Başarılı durumdaki belgeler iptal edilmiştir içeriyor mu
    * Yönetim popupında Tamam seçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
      | veri_Adi 		            |
      | Yeni Adres Anonim A.Ş. 	|