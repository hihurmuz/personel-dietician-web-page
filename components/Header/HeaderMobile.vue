<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list dense>
        <v-list-item
          v-for="item in headerElements"
          :key="item.name"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HeaderMobile',
  data () {
    return {
      drawer: null,
    }
  },
  computed: {
    ...mapState(['headerElements'])
  }
}
</script>
