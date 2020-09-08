Feature: e-Mustahsil Makbuzu Hazir Tasarim Araci Tasarimi Indir

  Scenario Outline: e-Mustahsil Makbuzu Hazir Tasarim Araci Tasarimi Indir
    * Giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Görsel Tasarımlar başlığı altındaki Hazır Tasarım Aracı seçilir
    * Sekmelerden e-Müstahsil Makbuzu seçilir
    * <sablon> adlı şablonun Tasarımı İndir adlı butonuna tıkla
    * Ön eki <sablon> olan dosya indirildi mi
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    
    Examples:
    | sablon                                    |
    | e-Müstahsil Makbuz Öndeğer Şablon Tasarım |