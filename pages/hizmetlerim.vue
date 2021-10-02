<template>
  <v-container>
    <h2>Hizmetlerim</h2>
    <v-row>
      <v-card
        v-for="item in myServices"
        :key="item.title"
        class="mx-auto my-12"
        max-width="500"
      >
        <v-img height="400" :src="require(`@/static/images/${item.imgPath}`)" />

        <v-card-text>
          <h3>{{ item.title }}</h3>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // require(`@/static/robil/robil_hello.png`)
  name: 'Hizmetlerim',
  data() {
    return {
      myServices: [
        {
          title: 'Obezite ve Kilo Kontrolü',
          imgPath: 'obezite.jpg',
        },
        {
          title: 'Kilo alma ve Kilo Verme Programları',
          imgPath: 'kilo-kontrol.jpg',
        },
        {
          title: 'Hastalıklarda Beslenme Tedavisi',
          imgPath: 'hastaliklarda-beslenme.jpg',
        },
        {
          title: 'Diyabetik Bireylerde Beslenme',
          imgPath: 'diyabet-beslenme.jpg',
        },
        {
          title: 'Gebelik Döneminde Beslenme ve Kilo Kontrolü',
          imgPath: 'hamile.jpg',
        },
        {
          title: 'Emziklilik Döneminde Beslenme ve Kilo Kontrolü',
          imgPath: 'emziklik.jpg',
        },
        {
          title: 'Yeme Davranış Bozukluklarında Beslenme',
          imgPath: 'yeme-bozukugu.jpg',
        },
        {
          title: 'Çocukluk çağı ve Ergenlik Döneminde Beslenme',
          imgPath: 'ergen.jpg',
        },
        {
          title: 'Kurumsal Beslenme Danışmanlığı',
          imgPath: 'kurumsal.jpg',
        },
        {
          title: 'Online Diyet ve Beslenme Danışmanlığı',
          imgPath: 'online-diyet.png',
        },
      ],
    }
  },
}
</script>
