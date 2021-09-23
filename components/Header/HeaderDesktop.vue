<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn class="mt-2" color="white" to="/" icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        v-for="link in headerElements"
        :key="link.name"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.path"
      >
        {{ link.name }}
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['headerElements'])
  }
}
</script>
