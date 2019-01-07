<template>
  <v-app>
    <navigation></navigation>
    <tool-bar/>
    <v-content>
      <v-container fluid>
        <router-view/>
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
  components: { Navigation, ToolBar }
}
</script>
