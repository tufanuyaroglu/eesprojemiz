Feature: Rol Eklenir

  Scenario Outline: Rol Eklenir
    * Giriş yapılır
    * Ana menüden Firma Yönetimi seçilir
    * Alt menüden Yetki Yönetimi seçilir
    * Sekmelerden Rol ve Yetki Tanımları seçilir
    * Butonlardan Rol Ekle isimli butona tıklanır
		* Rol Bilgileri <adi>, <aciklamasi> girilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples:
      |	adi 		    | aciklamasi |
      |	VirgosolRol | Otomasyon  |
 