<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="d-flex flex-column align-center my-4 mx-4">
        <v-img
          height="300"
          width="400"
          :src="myImage"
        />
      </v-col>
      <v-col>
        <p>
          İlk ve orta öğrenimini İstanbul’da tamamladıktan sonra 2013 yılında İstanbul Çapa Fen Lisesi’nden mezun oldum. 2017 yılında Marmara Üniversitesi Beslenme ve Diyetetik bölümünü diyetisyen ünvanı alarak başarıyla bitirdim.
        </p>
        <ul>
          <li>İstanbul Üniversitesi Çapa Tıp Fakültesi</li>
          <li>Marmara Üniversitesi Eğitim ve Araştırma Hastanesi</li>
          <li>Kartal Dr. Lütfi Kırdar Eğitim ve Araştırma Hastanesi</li>
          <li>Özel Pendik Bölge Hastanesi</li>
        </ul>
        <p>
          başta olmak üzere pek çok farklı klinik ve özel merkezde yaptığı stajlar ile teorik ve pratik bilgiyi birleştirdim, birçok farklı danışan görme fırsatı yakaladım.
        </p>
        <p>
          Lisans eğitimimi <strong>Üniversite Öğrencileri’nin Kahvaltı Yapma Durumunun Beden Kitle İndeksi ve Okul Başarısına Etkisi</strong> adlı tez çalışmamla bitirdikten sonra Kadın ve Yaşam Spor Merkezi’nde mesleğine ilk adımımı attım. Ardından Özel Dr. Fevzi Özgönül Kliniğinde 1 yıl süreyle çalışmıştım.
        </p>
        <p>
          Hala poliklinik hizmetlerim sürdürmekteyim. Aynı zamanda <strong>2017 yılından beri</strong> sürdürdüğüm online diyet hizmetine devam etmekteyim.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
name: "Hakkimda",
  data () {
    return {
      myImage: require('@/static/images/betull.png')
    }
  }
}
</script>
