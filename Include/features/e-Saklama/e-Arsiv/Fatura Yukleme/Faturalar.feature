Feature: e-Arsiv Fatura Yukleme Faturalar

  Scenario Outline: e-Arsiv Fatura Yukleme Faturalar
    * Giriş yapılır
    * Ana menüden e-Saklama seçilir
    * Alt menü e-Arşiv başlığı altındaki Fatura Yükleme seçilir
    * Tablodaki <veri_Adi> isimli verinin Faturalar adlı butonuna tıklanır
    * Yeni açılan sekmeye geçilir
    * Ana sekmeye geçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    
    Examples:
    |	veri_Adi	|
    |	envelope	|