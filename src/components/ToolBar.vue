<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="primary"
    dark
    app
    fixed
  >
    <v-toolbar-title class="ml-0">
      <v-toolbar-side-icon @click.stop="showNavigation()"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">Aham - Administrator Panel</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <v-btn slot="activator" flat outline dark>{{location}}</v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click="changeLocation(item)"
        >
          <v-list-tile-title>{{ item }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn icon>
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'ToolBar',
  data: () => ({
    drawer: true,
    items: ['USA', 'India', 'online'],
    location: 'USA'
  }),
  methods: {
    showNavigation () {
      console.log('use vuex')
      this.drawer = !this.drawer
    },
    changeLocation (location) {
      this.location = location
    }
  }
}
</script>

<style scoped>

</style>
