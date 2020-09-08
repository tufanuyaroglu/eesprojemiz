Feature: Kullanici Eklenir

  Scenario Outline: Kullanici Eklenir
    * Giriş yapılır
    * Ana menüden Firma Yönetimi seçilir
    * Alt menüden Yetki Yönetimi seçilir
    * Butonlardan Kullanıcı Ekle isimli butona tıklanır
		* Kullanıcı bilgileri <kullanici_Kodu>,<e-Posta>,<adi>,<soyadi>,<telefon>,<unvan>,<firma_Secimi> olarak girilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples:
      |	kullanici_Kodu    | e-Posta 							 | adi	    | soyadi    | telefon     | unvan | firma_Secimi |
      |	VirgosolKullanici | otomasyon@virgosol.com | Virgosol | Otomasyon | 5555555555  | Firma | ELOGOGIB		 |
            
