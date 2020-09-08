Feature: Fatura ve Zarflar Icin Sayfadaki Kayit Sayisi

  Scenario Outline: Fatura ve Zarflar Icin Sayfadaki Kayit Sayisi
    * Giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Ayarlarım seçilir
    * Tablodaki Fatura ve Zarflar İçin Sayfadaki Kayıt Sayısı isimli verinin Düzenle adlı butonuna tıklanır
    * Düzenleme formu popupı çıktı mı
    * Düzenleme formunda Değeri alanına <deger> yazılır
    * Düzenleme formunda Kaydet butonuna tıkla
    * Tablodaki Fatura ve Zarflar İçin Sayfadaki Kayıt Sayısı isimli verinin diğer değerini <deger> olduğu kontrol edilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples:
    | deger |
    | 50 		|