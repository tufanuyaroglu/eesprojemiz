Feature: e-Fatura Taslak Gecmis

  Scenario Outline: e-Fatura Taslak Gecmis
    * Giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki e-Fatura Taslak seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Geçmiş isimli butona tıklanır
    * Yeni açılan sekmeye geçilir
		* <baslik> baslikli gecmis sayfasi geldi mi
    * Ana sekmeye geçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
      | veri_Adi   	            | baslik				  	    |
      | Yeni Adres Anonim A.Ş.	| Taslak Fatura Geçmişi |