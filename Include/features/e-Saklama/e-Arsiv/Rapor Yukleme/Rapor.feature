Feature: e-Arsiv Rapor Yukle

  Scenario Outline: e-Arsiv Rapor Yukle
    * Giriş yapılır
    * Ana menüden e-Saklama seçilir
    * Alt menü e-Arşiv başlığı altındaki Rapor Yükleme seçilir
    * Tablodaki <veri_Adi> isimli verinin Rapor adlı butonuna tıklanır
    * Yeni açılan sekmeye geçilir
    * Ana sekmeye geçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    
    Examples:
    |	veri_Adi	|
    |	envelope	|