<template>
  <v-data-table
    :headers="headers"
    :items="learners.data"
    :pagination.sync="pagination"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <tr>
        <td class="text-xs-left cursor-pointer" @click="props.expanded = !props.expanded">
          <v-icon v-if="props.expanded">keyboard_arrow_down</v-icon>
          <v-icon v-else>keyboard_arrow_right</v-icon>
        </td>
        <td>
          {{ props.item.name }}
        </td>
        <td>
          <p class="my-0" v-for="(location, k) in props.item.preferred_locations" :key="k">{{location.name}}</p>
        </td>
        <td>
          <flag :iso="props.item.country.code"/>
          {{ props.item.country.name }}
        </td>
        <td>{{props.item.since | moment('DD MMM YYYY')}}</td>
        <td class="text-xs-center">
          <v-tooltip top>
             <span icon slot="activator" class="cursor-default">
               <v-icon color="green" v-if="props.item.active">fiber_manual_record</v-icon>
               <v-icon color="gray" v-else>fiber_manual_record</v-icon>
            </span>
            <span v-if="props.item.active">Active</span>
            <span v-else>Inactive</span>
          </v-tooltip>
        </td>
        <td>
          <v-btn icon @click="edit(props.item)">
            <v-icon color="primary">edit</v-icon>
          </v-btn>
        </td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-card-text class="expandContent">
        <v-layout row wrap>
          <v-flex xs1 align-self-center class="text-xs-center">
            <v-img class="ma-auto" :src="props.item.avatar" width="40px" height="40px" contain></v-img>
          </v-flex>
          <v-flex xs11>
            <v-layout row wrap>
              <v-flex xs4><p class="ma-0 font-weight-bold">Email: <span class="font-weight-regular">{{props.item.email}}</span></p></v-flex>
              <v-flex xs4><p class="ma-0 font-weight-bold">Interested In: <span class="font-weight-regular">{{props.item.user.interested_in}}</span></p></v-flex>
              <v-flex xs4><p class="ma-0 font-weight-bold">Mobile: <span class="font-weight-regular">{{props.item.user.mobile}}</span></p></v-flex>
              <v-flex xs4><p class="ma-0 font-weight-bold">Why do you want to teach: <span class="font-weight-regular">{{props.item.user.why_teacher}}</span></p></v-flex>
              <v-flex xs4><p class="ma-0 font-weight-bold">LinkedIn: <span class="font-weight-regular">{{props.item.user.linkedin}}</span></p></v-flex>
              <v-flex xs4><p class="ma-0 font-weight-bold">Current Profession: <span class="font-weight-regular">{{props.item.user.current_profession}}</span></p></v-flex>
              <v-flex xs4><p class="ma-0 font-weight-bold">Interested Subjects: <span class="font-weight-regular">{{props.item.user.interested_subjects}}</span></p></v-flex>
              <v-flex xs4><p class="ma-0 font-weight-bold">Resume: <span class="font-weight-regular">{{props.item.user.resume_file}}</span></p></v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card-text>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'LearnersListView',
  props: ['learners'],
  data: () => ({
    headers: [
      { text: '', value: '', sortable: false, align: 'left' },
      { text: 'Name', value: 'name' },
      { text: 'Home Location(s)', value: 'preferred_locations' },
      { text: 'Country', value: 'country.name' },
      { text: 'Since', value: 'since' },
      { text: 'Status', value: 'active' },
      { text: '', value: '', sortable: false, align: 'center' }
    ],
    pagination: {
      sortBy: 'active',
      rowsPerPage: 10
    }
  }),
  methods: {
    edit (item) {
      this.$emit('edit', JSON.stringify(item))
    }
  }
}
</script>

<style scoped>
.expandContent {
  background: #f9f9f9;
}

.cursor-default {
  cursor: default;
}

.cursor-pointer {
  cursor: pointer;
}

table.v-table tbody td:first-child {
  padding: 0 0 0 24px;
}

table.v-table tbody td:last-child {
  padding: 0;
}
</style>
