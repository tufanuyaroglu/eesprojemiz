Feature: Tasarim Araclari Sil

  Scenario Outline: Tasarim Araclari Sil
    * Giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Görsel Tasarımlar başlığı altındaki Tasarım Araçları seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodaki <name> ünvanlı veriye tıklanır
    * Butonlardan Sil isimli butona tıklanır
    * Popup mesajı Seçilen tasarım silinecektir, Onaylıyor musunuz ? içeriyor mu
    * Yönetim popupında Onayla seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | name              |
      | VirgosolOtomasyon |
