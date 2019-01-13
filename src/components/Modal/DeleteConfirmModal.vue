<template>
  <v-card>
    <v-toolbar color="primary" dark>
      <v-toolbar-title class="text-capitalize">Delete</v-toolbar-title>
    </v-toolbar>
    <v-card-text>Do you really want to delete?</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn flat @click="cancel">No</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="white--text" color="primary" @click="agree">Yes</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DeleteConfirmModal',
  methods: {
    agree () {
      this.$emit('agree', this.name)
    },
    cancel () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
