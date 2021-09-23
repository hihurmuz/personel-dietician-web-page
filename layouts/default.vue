<template>
  <v-app>
    <header-desktop v-if="mobileHeader" />
    <header-mobile v-else/>
    <v-main >
      <Nuxt />
    </v-main>
    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-col>
          <v-row justify="center" no-gutters>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} | <strong>Betül HÜRMÜZ</strong> Tüm Hakları Saklıdır
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderDesktop from '@/components/Header/HeaderDesktop'
import HeaderMobile from '@/components/Header/HeaderMobile'
export default {
  components: {
    HeaderMobile,
    HeaderDesktop
  },
  data () {
    return {
      icons: [
        'mdi-whatsapp',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  },
  computed: {
    mobileHeader() {
      return this.$vuetify.breakpoint.width > 1000
    }
  }
}
</script>
