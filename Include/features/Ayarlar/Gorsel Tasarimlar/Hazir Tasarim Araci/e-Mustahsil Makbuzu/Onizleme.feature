Feature: e-Mustahsil Makbuzu Hazir Tasarim Araci Onizleme

  Scenario Outline: e-Mustahsil Makbuzu Hazir Tasarim Araci Onizleme
    * Giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Görsel Tasarımlar başlığı altındaki Hazır Tasarım Aracı seçilir
    * Sekmelerden e-Müstahsil Makbuzu seçilir
    * <sablon> adlı şablonun Önizleme adlı butonuna tıkla
    * Yeni açılan sekmeye geçilir
    * Yeni sekme başlığında e-Müstahsil Makbuzu var mı kontrol edilir
    * Ana sekmeye geçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    
    Examples:
    | sablon                                    |
    | e-Müstahsil Makbuz Öndeğer Şablon Tasarım |