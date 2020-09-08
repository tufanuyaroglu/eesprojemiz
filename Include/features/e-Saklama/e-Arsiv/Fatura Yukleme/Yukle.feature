Feature: e-Arsiv Fatura Yukle

  Scenario Outline: e-Arsiv Fatura Yukle
    * Giriş yapılır
    * Ana menüden e-Saklama seçilir
    * Alt menü e-Arşiv başlığı altındaki Fatura Yükleme seçilir
    * Butonlardan Yükle isimli butona tıklanır
		* Dosya Yükleme alanına <dosya> dizinindeki dosya yüklenir
		* Yükleme ekranından çıkılır
		* Tabloda deneme ünvanlı veri oluşturuldu mu
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    
    Examples:
    |	dosya														|
    |	C:\\otomasyonupfiles\\enes.zip	|