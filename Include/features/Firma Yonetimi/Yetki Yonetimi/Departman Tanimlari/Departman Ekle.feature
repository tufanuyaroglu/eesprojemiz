Feature: Departman Eklenir

  Scenario Outline: Departman Eklenir
    * Giriş yapılır
    * Ana menüden Firma Yönetimi seçilir
    * Alt menüden Yetki Yönetimi seçilir
    * Sekmelerden Departman Tanımları seçilir
    * Butonlardan Departman Ekle isimli butona tıklanır
    * Departman bilgileri <departman>, <aciklama>, <posta>, <atayabilirMi> olarak girilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | departman         | aciklama  | posta                  | atayabilirMi |
      | VirgosolDepartman | Otomasyon | otomasyon@virgosol.com | Atayamaz     |
