<template>
  <v-card height="100%">
    <v-card-title class="pa-0 py-2">
      <v-btn icon @click="back">
        <v-icon color="primary">arrow_back</v-icon>
      </v-btn>
    </v-card-title>

    <v-tabs dark v-model="active" centered color="primary" slider-color="#f98507" fixed-tabs class="elevation-1">
      <v-tab v-for="tab in tabs" :key="tab">{{tab}}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="active" class="tab_content">
      <v-tab-item>
        <LearnerProfile :item="item"></LearnerProfile>
      </v-tab-item>
      <v-tab-item class="pa-4 pt-0">
        <LearnerAssessments></LearnerAssessments>
      </v-tab-item>
      <v-tab-item class="pa-4 pt-0">3</v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import LearnerAssessments from '../../../components/LearnerAssessments'
import LearnerProfile from '../../../components/LearnerProfile'

export default {
  name: 'LearnerEdit',
  components: { LearnerProfile, LearnerAssessments },
  data: () => ({
    active: null,
    tabs: ['Profile', 'Assessments', 'WishList'],
    item: {
      'id': 493,
      'active': 'yes',
      'name': 'Arvind Kannan',
      'email': 'arvindkannan2005@gmail.com',
      'since': '14 Jan 2019',
      'avatar': 'https://res.cloudinary.com/ahamlearning/image/upload/c_thumb,h_80,w_80/aham_icon_m6ljr5.jpg',
      'lifetime': null,
      'preferred_locations': [{
        'id': 2,
        'name': 'Aham Learning Hub @ Gachibowli',
        'slug': 'aham-learning-hubatgachibowli',
        'code': 'ALH0000001',
        'street_address': 'Synergy Building, 3rd Floor, Plot No: 6-11, Survey No. 40, Above Andhra Bank, Khajaguda,  Naga Hills Rd, Madhura Nagar Colony, Gachibowli, Hyderabad',
        'landmark': 'Synergy Building, Andhra Bank, Near Delhi Public School',
        'city_id': 1,
        'country_id': 1,
        'pincode': 500008,
        'latitude': 17.419,
        'longitude': 78.375,
        'deleted_at': null,
        'created_at': '2016-09-08 21:38:51',
        'updated_at': '2019-01-12 14:20:29',
        'locality_id': 2,
        'active': 1,
        'currency_type': 'INR',
        'credits_type': 'global',
        'repeat_class': 0,
        'color': '#E9B2D3',
        'frontend_slug': 'aham-gachibowli',
        'type': 'aham_learning_hub',
        'tutor_id': null,
        'pivot': { 'student_id': 493, 'location_id': 2 }
      }],
      'code': 'STA0000093',
      'joined_on': '14th Jan 2019',
      'credits': 30,
      'user': {
        'id': 1169,
        'email': 'arvindkannan2005@gmail.com',
        'permissions': [],
        'last_login': null,
        'created_at': '2019-01-13 11:17:55',
        'updated_at': '2019-01-13 11:17:55',
        'deleted_at': null,
        'name': 'Arvind Kannan',
        'username': 'arvindkannan',
        'who_are_you': 'user',
        'interested_in': 'student',
        'photo': null,
        'locality_id': null,
        'city_id': 1,
        'mobile': null,
        'interested_subjects': null,
        'interested_subcategories': null,
        'linkedin': null,
        'resume_file': null,
        'current_profession': null,
        'why_teacher': null,
        'grade': '5-8',
        'what_learn': null,
        'public_profile': null,
        'description': null,
        'gender': null,
        'birthday': null,
        'Aadhar_card': null,
        'pan_card': null,
        'form_16': null,
        'cheque': null,
        'school': null,
        'country_id': 1,
        'picture': null,
        'country': {
          'id': 1,
          'name': 'India',
          'slug': 'india',
          'code': 'IN',
          'deleted_at': null,
          'created_at': '2018-12-17 15:00:26',
          'updated_at': '2019-01-12 12:57:03',
          'currency': 'INR',
          'current_price_per_credit': 1100,
          'status': 1
        }
      },
      'country': {
        'id': 1,
        'name': 'India',
        'slug': 'india',
        'code': 'IN',
        'deleted_at': null,
        'created_at': '2018-12-17 15:00:26',
        'updated_at': '2019-01-12 12:57:03',
        'currency': 'INR',
        'current_price_per_credit': 1100,
        'status': 1
      }
    }
  }),
  methods: {
    save () {

    },
    reset () {
      this.item = {
        'id': 493,
        'active': 'yes',
        'name': 'Arvind Kannan',
        'email': 'arvindkannan2005@gmail.com',
        'since': '14 Jan 2019',
        'avatar': 'https://res.cloudinary.com/ahamlearning/image/upload/c_thumb,h_80,w_80/aham_icon_m6ljr5.jpg',
        'lifetime': null,
        'preferred_locations': [{
          'id': 2,
          'name': 'Aham Learning Hub @ Gachibowli',
          'slug': 'aham-learning-hubatgachibowli',
          'code': 'ALH0000001',
          'street_address': 'Synergy Building, 3rd Floor, Plot No: 6-11, Survey No. 40, Above Andhra Bank, Khajaguda,  Naga Hills Rd, Madhura Nagar Colony, Gachibowli, Hyderabad',
          'landmark': 'Synergy Building, Andhra Bank, Near Delhi Public School',
          'city_id': 1,
          'country_id': 1,
          'pincode': 500008,
          'latitude': 17.419,
          'longitude': 78.375,
          'deleted_at': null,
          'created_at': '2016-09-08 21:38:51',
          'updated_at': '2019-01-12 14:20:29',
          'locality_id': 2,
          'active': 1,
          'currency_type': 'INR',
          'credits_type': 'global',
          'repeat_class': 0,
          'color': '#E9B2D3',
          'frontend_slug': 'aham-gachibowli',
          'type': 'aham_learning_hub',
          'tutor_id': null,
          'pivot': { 'student_id': 493, 'location_id': 2 }
        }],
        'code': 'STA0000093',
        'joined_on': '14th Jan 2019',
        'credits': 30,
        'user': {
          'id': 1169,
          'email': 'arvindkannan2005@gmail.com',
          'permissions': [],
          'last_login': null,
          'created_at': '2019-01-13 11:17:55',
          'updated_at': '2019-01-13 11:17:55',
          'deleted_at': null,
          'name': 'Arvind Kannan',
          'username': 'arvindkannan',
          'who_are_you': 'user',
          'interested_in': 'student',
          'photo': null,
          'locality_id': null,
          'city_id': 1,
          'mobile': null,
          'interested_subjects': null,
          'interested_subcategories': null,
          'linkedin': null,
          'resume_file': null,
          'current_profession': null,
          'why_teacher': null,
          'grade': '5-8',
          'what_learn': null,
          'public_profile': null,
          'description': null,
          'gender': null,
          'birthday': null,
          'Aadhar_card': null,
          'pan_card': null,
          'form_16': null,
          'cheque': null,
          'school': null,
          'country_id': 1,
          'picture': null,
          'country': {
            'id': 1,
            'name': 'India',
            'slug': 'india',
            'code': 'IN',
            'deleted_at': null,
            'created_at': '2018-12-17 15:00:26',
            'updated_at': '2019-01-12 12:57:03',
            'currency': 'INR',
            'current_price_per_credit': 1100,
            'status': 1
          }
        },
        'country': {
          'id': 1,
          'name': 'India',
          'slug': 'india',
          'code': 'IN',
          'deleted_at': null,
          'created_at': '2018-12-17 15:00:26',
          'updated_at': '2019-01-12 12:57:03',
          'currency': 'INR',
          'current_price_per_credit': 1100,
          'status': 1
        }
      }
    },
    back () {
      this.$router.push({ name: 'learners' })
    }
  }
}
</script>

<style scoped>

</style>
