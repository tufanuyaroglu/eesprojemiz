Feature: Departman Silme

  Scenario Outline: Departman Silme
    * Giriş yapılır
    * Ana menüden Firma Yönetimi seçilir
    * Alt menüden Yetki Yönetimi seçilir
    * Sekmelerden Departman Tanımları seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <departman_Adi> isimli veri seçilir
    * Butonlardan Sil isimli butona tıklanır
    * Yönetim popupında Onayla seçilir
    * Yönetim popupında Tamam seçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples:
      |	departman_Adi	     |
      |	VirgosolDepartman |
            
 