Feature: e-Fatura Tumunu Excel e Aktar

  Scenario Outline: e-Fatura Tumunu Excel e Aktar
    * Giriş yapılır
    * Ana menüden e-Fatura seçilir
    * Alt menü e-Fatura Araçları başlığı altındaki e-Fatura Oluşturma seçilir
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Excel isimli butona tıklanır
    * Alt butonlardan Tümünü Excel'e Aktar butonuna tıklanır
    * Ön eki UserInvoice olan dosya indirildi mi
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | veri_Adi                |
      | VirgosolOtomasyon600413 |
