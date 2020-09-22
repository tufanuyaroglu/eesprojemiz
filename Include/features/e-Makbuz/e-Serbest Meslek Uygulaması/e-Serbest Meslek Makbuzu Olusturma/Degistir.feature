Feature: e-Serbest Meslek Makbuzu Degistir

  Scenario Outline: e-Serbest Meslek Makbuzu Degistir
    * Giriş yapılır
    * Ana menüden e-Makbuz seçilir
    * Alt menü e-Serbest Meslek Uygulaması  başlığı altındaki e-Serbest Meslek Makbuzu Oluşturma seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Değiştir isimli butona tıklanır
    * Görsel tasarım sayfasının Makbuz Bilgileri başlığını içerdiği kontrol edilir
    * Notlar alanına <not> girilir
    * Kaydet butonu seçilir
    * Tabloda <unvan> ünvanlı veri oluşturuldu mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | veri_Adi          | not                    | unvan             |
      | VirgosolOtomasyon | Otomasyon Not Degistir | VirgosolOtomasyon |
