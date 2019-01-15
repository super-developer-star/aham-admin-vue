<template>
  <v-card>
    <v-toolbar color="primary" dark>
      <v-toolbar-title class="text-capitalize" v-if="isShow">"{{item.name}}" Edit</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-tabs v-model="active" slider-color="primary" fixed-tabs>
        <v-tab v-for="tab in tabs" :key="tab">{{tab}}</v-tab>

        <v-tabs-items v-model="active" class="tab_content">
          <v-tab-item>
            <LearnerProfileForm :item="item"></LearnerProfileForm>
          </v-tab-item>
          <v-tab-item>2</v-tab-item>
          <v-tab-item>3</v-tab-item>
          <v-tab-item>4</v-tab-item>
        </v-tabs-items>
      </v-tabs>

    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn flat @click="close">Cancel</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat @click="reset">Reset</v-btn>
      <v-btn class="white--text" color="primary" @click="save">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import LearnerProfileForm from '../LearnerProfileForm'
export default {
  name: 'LearnerModal',
  components: { LearnerProfileForm },
  props: ['item', 'isShow'],
  data: () => ({
    active: null,
    tabs: ['profile', 'Assessments', 'Credits', 'WishList']
  }),
  watch: {
    isShow (d) {
      if (d) this.reset()
    }
  },
  methods: {
    reset () {
      this.name = this.item.name
      this.country = this.item.country.name
      this.location = [...this.item.preferred_locations]
    },
    save () {
      this.$emit('save', this.name)
    },
    close () {
      this.$emit('close')
    },
    remove (item) {
      this.location.splice(this.location.indexOf(item), 1)
      this.location = [...this.location]
    }
  }
}
</script>

<style scoped>
.tab_content {
  border-top: 1px solid rgba(0, 0, 0, .12);
}
</style>
