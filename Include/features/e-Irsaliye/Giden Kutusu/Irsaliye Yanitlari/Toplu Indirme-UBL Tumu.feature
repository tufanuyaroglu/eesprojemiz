Feature: e-Irsaliye Giden Kutusu Uygulama Yanıtları Toplu Indirme - UBL Tumunun indirilmesi

  Scenario Outline: e-Irsaliye Giden Kutusu Uygulama Yanıtları Toplu Indirme - UBL Tumunun indirilmesi
    * Giriş yapılır
    * Ana menüden e-İrsaliye seçilir
    * Alt menü Giden Kutusu başlığı altındaki İrsaliye Yanıtları seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Toplu İndirme isimli butona tıklanır
    * Alt butonlardan UBL Tümünü İndir butonuna tıklanır
    * Ön eki ReceiptAdvice olan dosya indirildi mi
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
      | filtreDegeri	| filtreDegeri2	| veri_Adi 	               |
      | 01.04.2020		| 30.04.2020		| Logo Elektronik GIB Test |