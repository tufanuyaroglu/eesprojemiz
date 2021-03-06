Feature: TCKNo ile Temel Irsaliye senaryosunda ve SEVK tipinde irsaliye olusturulmasi

  Scenario Outline: TCKNo ile Temel Irsaliye senaryosunda ve SEVK tipinde irsaliye olusturulmasi
    * Giriş yapılır
    * Ana menüden e-İrsaliye seçilir
    * Alt menü e-İrsaliye Araçları başlığı altındaki e-İrsaliye Oluşturma seçilir
    * Butonlardan Ekle isimli butona tıklanır
    * Görsel tasarım sayfasının İrsaliye Bilgileri başlığını içerdiği kontrol edilir
    * Alıcı adı alanına <alici_Adi> girilir
    * Senaryo alanından Temel İrsaliye seçilir
    * Ekle butonuna basılır
    * Ürün ekleme alanında Malzeme Adı başlığına <malzeme_adi> girilir
    * Ürün ekleme alanında Açıklaması başlığına <aciklamasi> girilir
    * Ürün ekleme alanında Miktarı başlığına <miktari> girilir
    * Ürün ekleme alanında Birim Fiyat başlığına <birimFiyat> girilir
    * Şöför Bilgileri Virgosol,Otomasyon,11111111110 olarak girilir
    * Notlar alanına <not> girilir
    * Kaydet butonu seçilir
    * Tabloda <unvan> ünvanlı veri oluşturuldu mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | alici_Adi           | malzeme_adi | aciklamasi | miktari | birimFiyat | not           | unvan                   |
      | VirgosolIrsaliyeVKN | Otomasyon   | Virgosol   |     400 |        100 | Otomasyon Not | VirgosolOtomasyon646758 |
