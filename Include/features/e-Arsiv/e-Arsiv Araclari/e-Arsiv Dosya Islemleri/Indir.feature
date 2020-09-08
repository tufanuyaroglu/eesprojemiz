Feature: e-Arsiv Dosya Islemleri Indir

  Scenario Outline: e-Arsiv Dosya Islemleri Indir
    * Giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Araçları başlığı altındaki e-Arşiv Dosya İşlemleri seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan İndir isimli butona tıklanır
    * Ön eki zip olan dosya indirildi mi
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
      | veri_Adi |										
      | 2020     |