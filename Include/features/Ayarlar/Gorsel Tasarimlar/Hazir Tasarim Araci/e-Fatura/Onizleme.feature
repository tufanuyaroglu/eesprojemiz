Feature: e-Fatura Hazir Tasarim Araci Onizleme

  Scenario Outline: e-Fatura Hazir Tasarim Araci Onizleme
    * Giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Görsel Tasarımlar başlığı altındaki Hazır Tasarım Aracı seçilir
    * Sekmelerden e-Fatura seçilir
    * <sablon> adlı şablonun Önizleme adlı butonuna tıkla
    * Yeni açılan sekmeye geçilir
    * Yeni sekme başlığında e-Fatura var mı kontrol edilir
    * Ana sekmeye geçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    
    Examples:
    | sablon                                        |
    | Mavi Temalı e-Fatura Öndeğer Şablon Tasarım 2 |