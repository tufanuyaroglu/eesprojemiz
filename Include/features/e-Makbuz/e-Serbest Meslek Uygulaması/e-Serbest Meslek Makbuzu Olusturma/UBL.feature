Feature: e-Serbest Meslek Makbuzu UBL

  Scenario Outline: e-Serbest Meslek Makbuzu UBL
    * Giriş yapılır
    * Ana menüden e-Makbuz seçilir
    * Alt menü e-Serbest Meslek Uygulaması başlığı altındaki e-Serbest Meslek Makbuzu Oluşturma seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan UBL isimli butona tıklanır
    * Yeni açılan sekmeye geçilir
		* <tag> tagli ubl geldi mi
    * Ana sekmeye geçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
      | veri_Adi 	 	      | tag				  |
      | VirgosolOtomasyon | CreditNote  |