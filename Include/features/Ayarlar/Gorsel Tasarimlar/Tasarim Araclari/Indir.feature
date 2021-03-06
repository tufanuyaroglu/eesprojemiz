Feature: Tasarim Araclari Indir

  Scenario Outline: Tasarim Araclari Indir
    * Giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Görsel Tasarımlar başlığı altındaki Tasarım Araçları seçilir
    * Filtrelerden Oluşturma Zamanı filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Zamanı filtresine <filtreDegeri2> bitis degerini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodaki <name> ünvanlı veriye tıklanır
    * Butonlardan İndir isimli butona tıklanır
    * Ön eki <name> olan dosya indirildi mi
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | filtreDegeri	| filtreDegeri2	| name  |
      | 01.06.2020		| 15.06.2020		| 13899 |