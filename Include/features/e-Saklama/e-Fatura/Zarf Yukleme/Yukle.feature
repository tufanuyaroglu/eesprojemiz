Feature: e-Defter Saklama Zarf Yukle

  Scenario Outline: e-Defter Saklama Zarf Yukle
    * Giriş yapılır
    * Ana menüden e-Saklama seçilir
    * Alt menü e-Fatura başlığı altındaki Zarf Yükleme seçilir
    * Butonlardan Yükle isimli butona tıklanır
    * Dosya Yükleme alanına <dosya> dizinindeki dosya yüklenir
    * Yükleme ekranından çıkılır
    * Tabloda Envelope11062020104656.zip ünvanlı veri oluşturuldu mu
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | dosya                                                                              |
      | C:\\otomasyonupfiles\\e-Saklama\\e-Fatura\\ZarfYukleme\\Envelope11062020104656.zip |
