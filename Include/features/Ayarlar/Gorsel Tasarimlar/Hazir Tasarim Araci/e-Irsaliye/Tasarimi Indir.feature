Feature: e-Irsaliye Hazir Tasarim Araci Tasarimi Indir

  Scenario Outline: e-Irsaliye Hazir Tasarim Araci Tasarimi Indir
    * Giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Görsel Tasarımlar başlığı altındaki Hazır Tasarım Aracı seçilir
    * Sekmelerden e-İrsaliye seçilir
    * <sablon> adlı şablonun Tasarımı İndir adlı butonuna tıkla
    * Ön eki <sablon> olan dosya indirildi mi
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    
    Examples:
    | sablon                        |
    | e-İrsaliye Hal Şablon Tasarım |