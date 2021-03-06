Feature: Departman ve Rol tanimlama

  Scenario Outline: Departman ve Rol tanimlama
    * Giriş yapılır
    * Ana menüden Firma Yönetimi seçilir
    * Alt menüden Yetki Yönetimi seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <kullanici_Adi> isimli veri seçilir
    * Butonlardan Rol ve Departman Tanımla isimli butona tıklanır
    * Firma kodu <firma_Kodu> olan firma seçilir
    * Kullanıcının departmanı <departman> olarak seçilir
    * Kullanıcın rolü <rol> olarak secilir
    * Rol ve Departman tanımlama kaydedilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullanici_Adi     | firma_Kodu | departman         | rol         |
      | VirgosolKullanici | ELOGOGIB   | VirgosolDepartman | VirgosolRol |
