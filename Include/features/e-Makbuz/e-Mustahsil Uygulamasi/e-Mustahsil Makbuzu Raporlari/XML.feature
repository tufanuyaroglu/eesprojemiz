Feature: e-Mustahsil Makbuzu Raporlari XML

  Scenario Outline: e-Mustahsil Makbuzu Raporlari XML
    * Giriş yapılır
    * Ana menüden e-Makbuz seçilir
    * Alt menü e-Müstahsil Uygulaması başlığı altındaki e-Müstahsil Makbuzu Raporları seçilir
    * Filtrelerden Bölüm Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Bölüm Tarihi filtresine <filtreDegeri2> bitis degerini yaz    
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan XML isimli butona tıklanır
		* Yeni açılan sekmeye geçilir
		* <tag> tagli ubl geldi mi
    * Ana sekmeye geçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
      | filtreDegeri	| filtreDegeri2	| veri_Adi | tag 								 |
      | 01.01.2020		| 31.01.2020		| 917   	 | earsiv:eArsivRaporu |
            
 