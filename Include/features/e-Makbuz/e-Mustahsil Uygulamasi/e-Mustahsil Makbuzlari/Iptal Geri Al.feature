Feature: e-Mustahsil Faturasi Iptal Geri Al

  Scenario Outline: e-Mustahsil Faturasi Iptal Geri Al
    * Giriş yapılır
    * Ana menüden e-Makbuz seçilir
    * Alt menü e-Müstahsil Uygulaması başlığı altındaki e-Müstahsil Makbuzları seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan İptal Geri Al isimli butona tıklanır
    * Popup mesajı Seçilen makbuzlar için iptal işlemi geri alınacaktır onaylıyor musunuz içeriyor mu
    * Yönetim popupında Onayla seçilir
    * Popup mesajı İptal Edildi durumunda olan ve raporlanmayan 1 adet belge için iptal işlemi geri alınmıştır içeriyor mu
    * Yönetim popupında Tamam seçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
      | filtreDegeri	| filtreDegeri2	| veri_Adi 		        |
      | 01.01.2020		| 31.01.2020		| Fuat Gardrop Ltd. 	|