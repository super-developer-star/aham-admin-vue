<template>
  <v-card>
    <v-toolbar color="primary" dark>
      <v-toolbar-title class="text-capitalize">{{type}}</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-form ref="form" v-model="form">
        <v-text-field v-model="name" :rules="requiredRules" label="Name *" required></v-text-field>
        <v-textarea v-model="desc" label="Description"></v-textarea>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn flat @click="close">Cancel</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat @click="reset">Reset</v-btn>
      <v-btn :disabled="!form" class="white--text" color="primary" v-show="type === 'create category'" @click="create(true)">Create</v-btn>
      <v-btn :disabled="!form" class="white--text" color="primary" v-show="type === 'create'" @click="create(false)">Create</v-btn>
      <v-btn :disabled="!form" class="white--text" color="primary" v-show="type === 'edit'" @click="save">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CatalogueModal',
  props: ['item', 'type', 'isShow'],
  data: () => ({
    name: null,
    desc: null,
    requiredRules: [
      v => !!v || 'This field is required'
    ],
    form: false
  }),
  watch: {
    isShow (d) {
      if (d) this.reset()
    }
  },
  methods: {
    reset () {
      this.name = this.item.name
      this.desc = null
    },
    create (flag) {
      this.$emit('create', this.name, flag)
    },
    save () {
      this.$emit('save', this.name)
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
