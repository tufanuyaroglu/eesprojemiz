Feature: e-Serbest Meslek Makbuzu Sil

  Scenario Outline: e-Serbest Meslek Makbuzu Sil
    * Giriş yapılır
    * Ana menüden e-Makbuz seçilir
    * Alt menü e-Serbest Meslek Uygulaması başlığı altındaki e-Serbest Meslek Makbuzu Oluşturma seçilir
    * Butonlardan Ekle isimli butona tıklanır
    * Görsel tasarım sayfasının Makbuz Bilgileri başlığını içerdiği kontrol edilir
    * Alıcı adı alanına <alici_Adi> girilir
    * Gönderim Şekli Elektronik olarak seçilir
    * Ekle butonuna basılır
    * Ürün ekleme alanında Ücretin Ne İçin Alındığı başlığına <malzeme_adi> girilir
    * Ürün ekleme alanında Brüt Ücret başlığına <ucret> girilir
    * Ürün ekleme alanında G.V Stopaj Oranı% başlığına <stopaj_Orani> girilir
    * Notlar alanına <not> girilir
    * Kaydet butonu seçilir
    * Tabloda <unvan> ünvanlı veri oluşturuldu mu
    * Tablodan <unvan> isimli veri seçilir
    * Butonlardan Sil isimli butona tıklanır
    * Popup mesajı Seçilen makbuzlar silinecektir, devam etmek istiyor musunuz içeriyor mu
    * Yönetim popupında Onayla seçilir
    * Popup mesajı Seçtiğiniz makbuzlar başarıyla silinmiştr içeriyor mu
    * Yönetim popupında Tamam seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | alici_Adi                | malzeme_adi | ucret | stopaj_Orani | not           | unvan             |
      | VirgosolSerbestMeslekVKN | Otomasyon   |   400 |           10 | Otomasyon Not | VirgosolOtomasyon |
