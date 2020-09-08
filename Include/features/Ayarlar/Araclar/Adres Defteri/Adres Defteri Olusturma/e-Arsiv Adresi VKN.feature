Feature: VKN Ile e-Arsiv Adresi Olusturma

  Scenario Outline: VKN Ile e-Arsiv Adresi Olusturma
    * Kullanıcı adı ELOGOGIB ve Şifre 123456 olarak giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Adres Defteri seçilir
    * Butonlardan Ekle isimli butona tıklanır
    * Adres defteri Adres Ekle başlıklı popup geldi mi
    * Adres defteri Kısaltma textboxına <kisaltma> yazılır
    * Adres defteri VKN/TCKN No textboxına <vkntckn> yazılır
    * Unvan alanına <unvan> yazılır
    * Adres defteri İl textboxına <il> yazılır
    * Adres defteri İlçe textboxına <ilce> yazılır
    * Adres olarak Ülke dropdownından <ulke_deger> seçilir
    * Adres defteri butonlarından Kaydet butonuna tıklanır
    * Filtre alanlarında Kısaltma var mı
    * Filtrelerden Kısaltma filtresine <kisaltma> textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
		* Kullanıcı işlemlerinden Çıkış seçilir
    
    Examples: 
     | kisaltma       	| vkntckn    | unvan        		 | il 			| ilce 		| ulke_deger |
     | VirgosolArsivVKN | 5422405266 | VirgosolOtomasyon | İstanbul | Maltepe | Türkiye    |
            
 