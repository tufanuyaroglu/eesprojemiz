Feature: e-Serbest Meslek Makbuzu Hazir Tasarim Araci Onizleme

  Scenario Outline: e-Serbest Meslek Makbuzu Hazir Tasarim Araci Onizleme
    * Giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Görsel Tasarımlar başlığı altındaki Hazır Tasarım Aracı seçilir
    * Sekmelerden e-Serbest Meslek Makbuzu seçilir
    * <sablon> adlı şablonun Önizleme adlı butonuna tıkla
    * Yeni açılan sekmeye geçilir
    * Yeni sekme başlığında e-Serbest Meslek Makbuzu var mı kontrol edilir
    * Ana sekmeye geçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    
    Examples:
    | sablon                                         |
    | e-Serbest Meslek Makbuz Öndeğer Şablon Tasarım |