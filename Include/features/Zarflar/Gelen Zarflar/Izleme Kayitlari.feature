Feature: Gelen Zarf Gecmis

  Scenario Outline: Gelen Zarf Gecmis
    * Giriş yapılır
    * Ana menüden Zarflar seçilir
    * Alt menüden Gelen Zarflar seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan İzleme Kayıtları isimli butona tıklanır
    * Yeni açılan sekmeye geçilir
    * <baslik> baslikli gecmis sayfasi geldi mi
    * Ana sekmeye geçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | filtreDegeri | filtreDegeri2 | veri_Adi                    | baslik                |
      | 01.01.2020   | 31.01.2020    | GÜMRÜK VE TİCARET BAKANLIĞI | Zarf İzleme Kayıtları |
