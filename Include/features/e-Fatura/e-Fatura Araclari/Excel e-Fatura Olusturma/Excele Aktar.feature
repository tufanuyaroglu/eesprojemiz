Feature: Excel e-Fatura Olusturma Excel e Aktar

  Scenario Outline: Excel e-Fatura Olusturma Excel e Aktar
    * Giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki Excel e-Fatura Oluşturma seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Excel isimli butona tıklanır
    * Ön eki eLogoExcelFatura olan dosya indirildi mi
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
      | veri_Adi 		               |
      | efaturaolusturexcelden.xls |