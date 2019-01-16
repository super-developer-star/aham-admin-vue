<template>
  <div>
    <v-layout row wrap class="pa-3 align-center">
      <v-flex xs8>
        <v-combobox v-model="topic" :items="topicLists" item-text="name" label="Select" chips clearable
                    multiple hide-details>
          <template slot="item" slot-scope="data">
            <v-list-tile>
              <v-checkbox color="primary" :value="data.tile.props.value"></v-checkbox>
            </v-list-tile>
            <v-list-tile-content>{{ data.item.name }} ( {{ data.item.type }} )</v-list-tile-content>
          </template>
          <template slot="selection" slot-scope="data">
            <v-chip :selected="data.selected" close @input="remove(data.item)">
              <span>{{ data.item.name }} ( {{ data.item.type }} )</span>
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
      <v-flex xs3 offset-xs1>
        <v-btn block class="primary"><v-icon>add</v-icon> Add Assessment</v-btn>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap class="pa-3">
      <v-flex sm12 md8 class="pa-1">
        <div class="border">
          <v-card-text class="pa-2">
            <h3>Assessed Topics</h3>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="pa-2">
            <p v-for="(topic, i) in assessedTopics" :key="i" class="ma-0">
              <a href="#">{{topic.topic.name}}</a>
            </p>
          </v-card-text>
        </div>
      </v-flex>
      <v-flex sm12 md4 class="pa-1">
        <v-layout row wrap>
          <v-flex xs12>
            <div class="border">
              <v-card-text class="pa-2">
                <h3>Marked Courses</h3>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="pa-2"></v-card-text>
            </div>
          </v-flex>
          <v-flex xs12 class="pt-2">
            <div class="border">
              <v-card-text class="pa-2">
                <h3>Assessed Courses</h3>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="pa-2"></v-card-text>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'LearnerAssessments',
  props: ['item'],
  data: () => ({
    topic: [],
    assessedTopics: [
      {
        'topic_id': 2112,
        'topic': {
          'id': 2112,
          'name': 'Distance & Displacement',
          'slug': 'distancedisplacement',
          'code': 'TMD0000001',
          'type': 'topic',
          'parent_id': 4,
          'order': 0,
          'description': null,
          'deleted_at': null,
          'created_at': '2018-08-04 14:59:46',
          'updated_at': '2018-12-24 15:17:55',
          'minimum_enrollment': null,
          'maximum_enrollment': null,
          'status': 'active',
          'google_slide': null,
          'graph_level': null,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 0,
          'hub_id': 6,
          'visibility': 0,
          'algindex': 0
        }
      }, {
        'topic_id': 2118,
        'topic': {
          'id': 2118,
          'name': 'Moment Of A Force',
          'slug': 'momentofaforce',
          'code': 'TMO0000010',
          'type': 'topic',
          'parent_id': 4,
          'order': 0,
          'description': null,
          'deleted_at': null,
          'created_at': '2018-08-14 09:44:52',
          'updated_at': '2018-12-24 15:17:55',
          'minimum_enrollment': null,
          'maximum_enrollment': null,
          'status': 'active',
          'google_slide': null,
          'graph_level': null,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 2007,
        'topic': {
          'id': 2007,
          'name': 'Free Body Diagrams - Problem Solving',
          'slug': 'freebodydiagramsproblemsolving',
          'code': 'TFB0000015',
          'type': 'topic',
          'parent_id': 4,
          'order': 0,
          'description': null,
          'deleted_at': null,
          'created_at': '2018-05-23 08:08:08',
          'updated_at': '2018-12-24 15:17:40',
          'minimum_enrollment': null,
          'maximum_enrollment': null,
          'status': 'active',
          'google_slide': null,
          'graph_level': null,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 2009,
        'topic': {
          'id': 2009,
          'name': 'Vectors In Physics',
          'slug': 'vectorsinphysics',
          'code': 'TVI0000000',
          'type': 'topic',
          'parent_id': 4,
          'order': 0,
          'description': null,
          'deleted_at': null,
          'created_at': '2018-05-23 09:23:49',
          'updated_at': '2018-12-24 15:17:41',
          'minimum_enrollment': null,
          'maximum_enrollment': null,
          'status': 'active',
          'google_slide': null,
          'graph_level': null,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 7,
        'topic': {
          'id': 7,
          'name': 'One Dimensional Motion (Level 1 & Level 2)',
          'slug': 'one-dimensional-kinematics',
          'code': 'TOD0000000',
          'type': 'topic',
          'parent_id': 4,
          'order': 2,
          'description': null,
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:25',
          'updated_at': '2018-12-24 15:11:02',
          'minimum_enrollment': 5,
          'maximum_enrollment': 20,
          'status': 'active',
          'google_slide': null,
          'graph_level': 3,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 8,
        'topic': {
          'id': 8,
          'name': 'Two Dimensional Motion (Level 2)',
          'slug': 'two-dimensional-kinematics',
          'code': 'TTD0000000',
          'type': 'topic',
          'parent_id': 4,
          'order': 3,
          'description': '',
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:25',
          'updated_at': '2018-12-24 15:11:03',
          'minimum_enrollment': 5,
          'maximum_enrollment': 20,
          'status': 'active',
          'google_slide': '',
          'graph_level': 3,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 438,
        'topic': {
          'id': 438,
          'name': 'Forces & Motion ( Level 1)',
          'slug': 'forcesmotionlevel1',
          'code': 'TFM0000001',
          'type': 'topic',
          'parent_id': 4,
          'order': 5,
          'description': null,
          'deleted_at': null,
          'created_at': '2016-12-14 21:45:30',
          'updated_at': '2018-12-24 15:12:11',
          'minimum_enrollment': 0,
          'maximum_enrollment': 0,
          'status': 'obsolete',
          'google_slide': '',
          'graph_level': 3,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 529,
        'topic': {
          'id': 529,
          'name': 'Collision & Momentum (Level 1)',
          'slug': 'collision-momentum-level-1',
          'code': 'TCM0000003',
          'type': 'topic',
          'parent_id': 4,
          'order': 6,
          'description': '',
          'deleted_at': null,
          'created_at': '2017-01-28 15:32:48',
          'updated_at': '2018-12-24 15:12:27',
          'minimum_enrollment': 0,
          'maximum_enrollment': 0,
          'status': 'active',
          'google_slide': '',
          'graph_level': 1,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 439,
        'topic': {
          'id': 439,
          'name': 'Work, Energy & Power (Level 1)',
          'slug': 'workenergypowerlevel1',
          'code': 'TWE0000002',
          'type': 'topic',
          'parent_id': 4,
          'order': 7,
          'description': null,
          'deleted_at': null,
          'created_at': '2016-12-14 21:46:47',
          'updated_at': '2018-12-24 15:12:12',
          'minimum_enrollment': 1,
          'maximum_enrollment': 8,
          'status': 'active',
          'google_slide': '',
          'graph_level': 3,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 9,
        'topic': {
          'id': 9,
          'name': 'Forces & Newton\u2019s Laws Of Motion (Level 2)',
          'slug': 'forcesnewtonslawsofmotionlevel2',
          'code': 'TDF0000000',
          'type': 'topic',
          'parent_id': 4,
          'order': 8,
          'description': null,
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:25',
          'updated_at': '2018-12-24 15:11:03',
          'minimum_enrollment': 5,
          'maximum_enrollment': 15,
          'status': 'active',
          'google_slide': '',
          'graph_level': 3,
          'show_on_homepage': 1,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 248,
        'topic': {
          'id': 248,
          'name': 'Relative Motion (Level 2)',
          'slug': 'relativemotionlevel2',
          'code': 'TRM0000001',
          'type': 'topic',
          'parent_id': 4,
          'order': 10,
          'description': null,
          'deleted_at': null,
          'created_at': '2016-09-10 16:38:22',
          'updated_at': '2018-12-24 15:11:38',
          'minimum_enrollment': 5,
          'maximum_enrollment': 20,
          'status': 'active',
          'google_slide': '',
          'graph_level': 2,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 10,
        'topic': {
          'id': 10,
          'name': 'Work, Energy & Power (Level 2)',
          'slug': 'work-energy-power',
          'code': 'TWE0000000',
          'type': 'topic',
          'parent_id': 4,
          'order': 11,
          'description': '',
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:25',
          'updated_at': '2018-12-24 15:11:03',
          'minimum_enrollment': 5,
          'maximum_enrollment': 20,
          'status': 'active',
          'google_slide': '',
          'graph_level': 4,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 11,
        'topic': {
          'id': 11,
          'name': ' Collisions & Momentum (Level 2)',
          'slug': 'collisions-momentum',
          'code': 'TCM0000000',
          'type': 'topic',
          'parent_id': 4,
          'order': 12,
          'description': '',
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:25',
          'updated_at': '2018-12-24 15:11:03',
          'minimum_enrollment': 2,
          'maximum_enrollment': 5,
          'status': 'active',
          'google_slide': '',
          'graph_level': 4,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 4,
        'topic': {
          'id': 4,
          'name': 'Linear Motion (Non Calculus)',
          'slug': 'linear-motion',
          'code': 'SLM0000000',
          'type': 'sub-category',
          'parent_id': 2,
          'order': 2,
          'description': '',
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:25',
          'updated_at': '2016-09-09 15:26:04',
          'minimum_enrollment': null,
          'maximum_enrollment': null,
          'status': 'active',
          'google_slide': null,
          'graph_level': 1,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 1
        }
      }, {
        'topic_id': 1287,
        'topic': {
          'id': 1287,
          'name': 'Circular Motion & Gravitation ( Level 1)',
          'slug': 'circularmotiongravitationlevel1',
          'code': 'TG0000046',
          'type': 'topic',
          'parent_id': 5,
          'order': 0,
          'description': null,
          'deleted_at': null,
          'created_at': '2017-10-31 13:55:42',
          'updated_at': '2018-12-24 15:15:10',
          'minimum_enrollment': null,
          'maximum_enrollment': null,
          'status': 'active',
          'google_slide': null,
          'graph_level': 2,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 108,
        'topic': {
          'id': 108,
          'name': 'Uniform Circular Motion & Universal Law Of Gravitation (Level 2)',
          'slug': 'uniform-circular-motion-universal-law-of-gravitation',
          'code': 'TUC0000000',
          'type': 'topic',
          'parent_id': 5,
          'order': 0,
          'description': '',
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:26',
          'updated_at': '2018-12-24 15:11:17',
          'minimum_enrollment': 0,
          'maximum_enrollment': 0,
          'status': 'active',
          'google_slide': '',
          'graph_level': 4,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 109,
        'topic': {
          'id': 109,
          'name': 'Rotational Mechanics (Level 2)',
          'slug': 'rotational-mechanics',
          'code': 'TRM0000000',
          'type': 'topic',
          'parent_id': 5,
          'order': 0,
          'description': '',
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:26',
          'updated_at': '2018-12-24 15:11:17',
          'minimum_enrollment': 0,
          'maximum_enrollment': 0,
          'status': 'active',
          'google_slide': '',
          'graph_level': 4,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 5,
        'topic': {
          'id': 5,
          'name': 'Rotational Motion ( Non Calculus ) ',
          'slug': 'rotational-motion',
          'code': 'SRM0000000',
          'type': 'sub-category',
          'parent_id': 2,
          'order': 3,
          'description': '',
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:25',
          'updated_at': '2016-12-12 16:46:44',
          'minimum_enrollment': null,
          'maximum_enrollment': null,
          'status': 'active',
          'google_slide': null,
          'graph_level': 4,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 1
        }
      }, {
        'topic_id': 110,
        'topic': {
          'id': 110,
          'name': 'Simple Harmonic Motion (Level 2)',
          'slug': 'simple-harmonic-motion',
          'code': 'TSH0000000',
          'type': 'topic',
          'parent_id': 6,
          'order': 0,
          'description': 'What do an ocean buoy, a child in a swing, the cone inside a speaker, a guitar, atoms in a crystal, the motion of chest cavities, and the beating of hearts all have in common? They all oscillate\u2014-that is, they move back and forth between two points. Many systems oscillate, and they have certain characteristics in common. All oscillations involve force and energy. You push a child in a swing to get the motion started. The energy of atoms vibrating in a crystal can be increased with heat. You put energy into a guitar string when you pluck it.\r\n\r\nSome oscillations create waves. A guitar creates sound waves. You can make water waves in a swimming pool by slapping the water with your hand. You can no doubt think of other types of waves. Some, such as water waves, are visible. Some, such as sound waves, are not. But every wave is a disturbance that moves from its source and carries energy. Other examples of waves include earthquakes and visible light. Even subatomic particles, such as electrons, can behave like waves.\r\n\r\nBy studying oscillatory motion and waves, we shall find that a small number of underlying principles describe all of them and that wave phenomena are more common than you have ever imagined. We begin by studying the type of force that underlies the simplest oscillations and waves. We will then expand our exploration of oscillatory motion and waves to include concepts such as simple harmonic motion, uniform circular motion, and damped harmonic motion.',
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:26',
          'updated_at': '2018-12-24 15:11:18',
          'minimum_enrollment': 1,
          'maximum_enrollment': 15,
          'status': 'active',
          'google_slide': '',
          'graph_level': 4,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 111,
        'topic': {
          'id': 111,
          'name': 'Wave Motion & String Waves (Level 2)',
          'slug': 'wave-motion-string-waves',
          'code': 'TWM0000000',
          'type': 'topic',
          'parent_id': 6,
          'order': 0,
          'description': '',
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:26',
          'updated_at': '2018-12-24 15:11:18',
          'minimum_enrollment': 5,
          'maximum_enrollment': 15,
          'status': 'in_future',
          'google_slide': '',
          'graph_level': 4,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 472,
        'topic': {
          'id': 472,
          'name': 'Simple Harmonic Motion (Level 2)',
          'slug': 'simple-harmonic-motion-level-2',
          'code': 'TSH0000001',
          'type': 'topic',
          'parent_id': 6,
          'order': 0,
          'description': '',
          'deleted_at': null,
          'created_at': '2016-12-21 01:01:18',
          'updated_at': '2018-12-24 15:12:20',
          'minimum_enrollment': 5,
          'maximum_enrollment': 15,
          'status': 'obsolete',
          'google_slide': '',
          'graph_level': 3,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 6,
        'topic': {
          'id': 6,
          'name': 'Oscillatory Motion(Non Calculus)',
          'slug': 'oscillatory-motion',
          'code': 'SOM0000000',
          'type': 'sub-category',
          'parent_id': 2,
          'order': 4,
          'description': '',
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:25',
          'updated_at': '2016-12-14 23:00:30',
          'minimum_enrollment': null,
          'maximum_enrollment': null,
          'status': 'active',
          'google_slide': null,
          'graph_level': 4,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 1
        }
      }, {
        'topic_id': 13,
        'topic': {
          'id': 13,
          'name': 'Introduction To Physics',
          'slug': 'introduction-to-physics',
          'code': 'TIT0000000',
          'type': 'topic',
          'parent_id': 12,
          'order': 0,
          'description': '',
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:25',
          'updated_at': '2018-12-24 15:11:03',
          'minimum_enrollment': 5,
          'maximum_enrollment': 35,
          'status': 'active',
          'google_slide': '',
          'graph_level': 1,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 1834,
        'topic': {
          'id': 1834,
          'name': 'Sources Of Energy',
          'slug': 'sourcesofenergy',
          'code': 'TER0000014',
          'type': 'topic',
          'parent_id': 12,
          'order': 0,
          'description': null,
          'deleted_at': null,
          'created_at': '2018-05-21 18:12:03',
          'updated_at': '2018-12-24 15:16:59',
          'minimum_enrollment': null,
          'maximum_enrollment': null,
          'status': 'active',
          'google_slide': null,
          'graph_level': null,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 112,
        'topic': {
          'id': 112,
          'name': 'Units And Conversion',
          'slug': 'unitsandconversion',
          'code': 'TUC0000001',
          'type': 'topic',
          'parent_id': 12,
          'order': 0,
          'description': null,
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:26',
          'updated_at': '2018-12-24 15:11:18',
          'minimum_enrollment': 5,
          'maximum_enrollment': 25,
          'status': 'active',
          'google_slide': '',
          'graph_level': 2,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 215,
        'topic': {
          'id': 215,
          'name': 'Scientific Method',
          'slug': 'scientificmethod',
          'code': 'TSM0000000',
          'type': 'topic',
          'parent_id': 12,
          'order': 0,
          'description': null,
          'deleted_at': null,
          'created_at': '2016-09-08 20:31:26',
          'updated_at': '2018-12-24 15:11:32',
          'minimum_enrollment': 0,
          'maximum_enrollment': 0,
          'status': 'active',
          'google_slide': '',
          'graph_level': 1,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 891,
        'topic': {
          'id': 891,
          'name': 'Measurement Techniques & Uncertainties',
          'slug': 'measurementtechniquesuncertainties',
          'code': 'TSF0000000',
          'type': 'topic',
          'parent_id': 12,
          'order': 5,
          'description': null,
          'deleted_at': null,
          'created_at': '2017-05-29 21:14:21',
          'updated_at': '2018-12-24 15:13:42',
          'minimum_enrollment': 0,
          'maximum_enrollment': 0,
          'status': 'active',
          'google_slide': '',
          'graph_level': 1,
          'show_on_homepage': 0,
          'notes': '',
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 252,
        'topic': {
          'id': 252,
          'name': 'Dimensional Analysis & Significant Digits',
          'slug': 'dimensionalanalysissignificantdigits',
          'code': 'TDI0000000',
          'type': 'topic',
          'parent_id': 12,
          'order': 20,
          'description': null,
          'deleted_at': null,
          'created_at': '2016-09-15 14:02:37',
          'updated_at': '2018-12-24 15:11:39',
          'minimum_enrollment': 5,
          'maximum_enrollment': 20,
          'status': 'active',
          'google_slide': null,
          'graph_level': 3,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }, {
        'topic_id': 12,
        'topic': {
          'id': 12,
          'name': 'Science Fundamentals',
          'slug': 'sciencefundamentals',
          'code': 'SPF0000000',
          'type': 'sub-category',
          'parent_id': 14,
          'order': 1,
          'description': null,
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:25',
          'updated_at': '2018-06-26 18:10:05',
          'minimum_enrollment': null,
          'maximum_enrollment': null,
          'status': 'active',
          'google_slide': null,
          'graph_level': null,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 1
        }
      }, {
        'topic_id': 16,
        'topic': {
          'id': 16,
          'name': 'Physical Science : Properties Of Matter',
          'slug': 'physicalsciencepropertiesofmatter',
          'code': 'TSA0000000',
          'type': 'topic',
          'parent_id': 15,
          'order': 0,
          'description': null,
          'deleted_at': null,
          'created_at': '2016-08-25 15:12:25',
          'updated_at': '2018-12-24 15:11:04',
          'minimum_enrollment': 5,
          'maximum_enrollment': 20,
          'status': 'active',
          'google_slide': '',
          'graph_level': 1,
          'show_on_homepage': 0,
          'notes': null,
          'file_name': null,
          'file_url': null,
          'approve': 1,
          'hub_id': null,
          'visibility': 1,
          'algindex': 0
        }
      }
    ],
    topicLists: [
      { id: 15, name: 'Physical Science : Matter & Change', slug: 'physicalsciencematterchange', type: 'sub-category' },
      { id: 17, name: 'Organic Chemistry', slug: 'organic-chemistry', code: 'SOC0000000', type: 'sub-category' },
      { id: 24, name: 'Rename: Algebra', slug: 'renamealgebra1', code: 'SA0000000', type: 'sub-category' },
      { id: 25, name: 'PSAT Mathematics', slug: 'psatmathematics', code: 'SG0000000', type: 'sub-category' },
      { id: 27, name: 'Rename: Trigonometry', slug: 'renametrigonometry', code: 'ST0000000', type: 'topic' },
      { id: 29, name: 'Rename: Calculus', slug: 'renamecalculus', code: 'SC0000001', type: 'sub-category' },
      { id: 31, name: 'Rename: Probability', slug: 'renameprobability', code: 'SP0000003', type: 'topic' },
      { id: 40, name: 'Communication', slug: 'communication', code: 'SC0000002', type: 'sub-category' },
      { id: 41, name: 'Personality Development', slug: 'personality-development', code: 'SPD0000000', type: 'topic' },
      { id: 42, name: 'Writing Effective Emails', slug: 'writingeffectiveemails', code: 'TWE0000001', type: 'topic' },
      { id: 43, name: 'Presentation Skills', slug: 'improve-presentation-skills', code: 'TIP0000000', type: 'topic' },
      { id: 49, name: 'Reading', slug: 'reading', code: 'SR0000001', type: 'sub-category', parent_id: 48 },
      { id: 50, name: 'Writing Skills', slug: 'writing', code: 'SW0000000', type: 'sub-category' },
      { id: 51, name: 'Vocabulary', slug: 'vocabulary', code: 'SV0000000', type: 'sub-category' },
      { id: 52, name: 'Interviewing Skills', slug: 'interviewingskills', code: 'TIS0000000', type: 'topic' },
      { id: 54, name: 'Data Structures', slug: 'data-structures-1', code: 'SDS0000001', type: 'sub-category' },
      { id: 66, name: 'Rename: Arithmetic Fundamentals', slug: 'renamearithmeticfundamentals', type: 'sub-category' },
      { id: 67, name: 'Whole Numbers & Integers', slug: 'wholenumbersintegers', code: 'TWN0000000', type: 'topic' },
      { id: 68, name: 'Factors & Multiples', slug: 'factorsmultiples', code: 'TFM0000000', type: 'topic' },
      { id: 69, name: 'Fractions & Decimals', slug: 'fractionsdecimals', code: 'TFD0000000', type: 'topic' },
      { id: 70, name: 'Properties Of Logarithms', slug: 'propertiesoflogarithms', code: 'TER0000000', type: 'topic' }
    ]
  }),
  methods: {
    remove (item) {
      this.topic.splice(this.topic.indexOf(item), 1)
      this.topic = [...this.topic]
    }
  }
}
</script>

<style scoped>
.border {
  border: 1px solid rgba(0, 0, 0, .12);
  border-radius: 4px;
}
</style>
