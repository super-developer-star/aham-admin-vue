<template>
  <v-layout row wrap class="card">
    <v-flex xs12 sm4 v-for="(learner, i) in learners.data" :key="i">
      <v-card height="100%">
        <v-card-title class="pr-0">
          <span class="headline">{{learner.name}}</span>
          <v-spacer></v-spacer>
          <v-menu offset-y bottom left>
            <v-btn slot="activator" icon>
              <v-icon>more_vert</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile @click="edit(learner)">
                <v-list-tile-title>Edit</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-layout row wrap>
            <v-flex shrink align-self-center>
              <v-img :src="learner.avatar" width="40px" height="40px" contain></v-img>
            </v-flex>
            <v-flex grow align-self-center>
              <p class="subheading font-weight-bold mb-0">{{learner.name}}</p>
              <span>{{learner.email}}</span>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-text class="pt-0">
          <v-layout row wrap>
            <v-flex shrink align-self-center>
              <v-icon>event_available</v-icon>
            </v-flex>
            <v-flex align-self-center>
              <p class="my-0">{{learner.since | moment('DD MMM YYYY')}}</p>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex shrink align-self-center>
              <v-icon>location_searching</v-icon>
            </v-flex>
            <v-flex align-self-center style="width: 100px">
              <p class="my-0">Home Location(s):</p>
              <p class="my-0" v-for="(location, k) in learner.preferred_locations" :key="k">{{location.name}}</p>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex shrink align-self-center>
              <v-icon>location_on</v-icon>
            </v-flex>
            <v-flex align-self-center>
              <p class="my-0">Country: {{learner.country.name}}</p>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex shrink align-self-center>
              <v-icon>done_outline</v-icon>
            </v-flex>
            <v-flex align-self-center>
                <span class="py-1 px-2 active white--text"
                      v-bind:class="{'activated': learner.active === 'yes', 'inactivated': learner.active !== 'yes'}">active: {{learner.active}}</span>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'LearnersCardView',
  props: ['learners'],
  methods: {
    edit (item) {
      this.$emit('edit', item.id)
    }
  }
}
</script>

<style scoped>
.card > .flex {
  padding: 6px;
}

.flex {
  padding: 4px;
}

.active {
  border-radius: 4px;
}

.activated {
  background: #34bfa3;
}

.inactivated {
  background: #f4516c;
}
</style>
