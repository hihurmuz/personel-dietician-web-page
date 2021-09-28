<template>
  <div class="header-bar">
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list dense>
        <v-list-item
          v-for="item in headerElements"
          :key="item.name"
          :to="item.path"
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
    <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />
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

<style lang="scss" scoped>
.header-bar {
  background-color: #2196F3;
  height: 40px;
}
</style>
