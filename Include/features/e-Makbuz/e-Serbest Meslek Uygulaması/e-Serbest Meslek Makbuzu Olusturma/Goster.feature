Feature: e-Serbest Meslek Makbuzu Goster

  Scenario Outline: e-Serbest Meslek Makbuzu Goster
    * Giriş yapılır
    * Ana menüden e-Makbuz seçilir
    * Alt menü e-Serbest Meslek Uygulaması  başlığı altındaki e-Serbest Meslek Makbuzu Oluşturma seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Göster isimli butona tıklanır
    * Yeni açılan sekmeye geçilir
    * Yeni sekme başlığında e-Serbest Meslek Makbuzu var mı kontrol edilir
    * Ana sekmeye geçilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
      | veri_Adi 	  	    |
      | VirgosolOtomasyon	|
            
 