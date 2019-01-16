<template>
  <v-app>
    <navigation></navigation>
    <tool-bar/>
    <v-content>
      <v-container fluid style="height: 100%">
        <router-view/>
        <v-snackbar v-model="snackbar" :timeout="2000" :color="status" top right>{{ text }}</v-snackbar>
      </v-container>
    </v-content>
    <v-footer app>
      <span class="ml-3">&copy; 2019 - Aham administrator panel</span>
    </v-footer>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar'
import Navigation from './components/Navigation'

export default {
  components: { Navigation, ToolBar },
  data: () => ({
    snackbar: false,
    status: null,
    text: null
  }),
  mounted () {
    const that = this
    this.$root.$on('snackbar', (status, text) => {
      that.snackbar = true
      that.status = status
      that.text = text
    })
  }
}
</script>
