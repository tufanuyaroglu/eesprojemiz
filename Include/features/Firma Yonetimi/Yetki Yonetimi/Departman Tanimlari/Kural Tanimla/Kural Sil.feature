Feature: Kural silme

  Scenario Outline: Kural silme
    * Giriş yapılır
    * Ana menüden Firma Yönetimi seçilir
    * Alt menüden Yetki Yönetimi seçilir
    * Sekmelerden Departman Tanımları seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <departman_Adi> isimli veri seçilir
    * Butonlardan Kural Tanımla isimli butona tıklanır
		* Kural silinir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples:
      |	departman_Adi      |
      |	VirgosolDepartman |
 