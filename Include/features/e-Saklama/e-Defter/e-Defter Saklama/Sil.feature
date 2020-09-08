Feature: e-Defter Saklama Goster

  Scenario Outline: e-Defter Saklama Goster
    * Giriş yapılır
    * Ana menüden e-Saklama seçilir
    * Alt menü e-Defter başlığı altındaki e-Defter Saklama seçilir
    * Filtre butonlarından Listele seçilir
    * 2020 adlı klasör açılır
    * Ocak 2020 adlı klasör açılır
    * Kebir Dosyaları adlı klasör açılır
		* <dosyaIsmi> adlı klasör seçilir
    * Butonlardan Sil isimli butona tıklanır
    * Popup mesajı Seçili e-Defter dosyaları silinecektir içeriyor mu
    * Yönetim popupında İptal seçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    
    Examples:
    |	dosyaIsmi														|
    |	6090408038-202001-K-000000-7011.zip	|