<template>
  <div>
    <v-card-text>
      <v-layout row wrap>
        <v-flex shrink align-self-center>
          <v-img :src="item.avatar" width="40px" height="40px" contain></v-img>
        </v-flex>
        <v-flex grow align-self-center class="pl-3">
          <p class="subheading font-weight-bold mb-0">{{item.name}}</p>
          <span>{{item.email}}</span>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-divider></v-divider>
    <v-layout row wrap class="pa-3 align-center">
      <v-flex xs9>
        <v-combobox v-model="topic" :items="topicLists" item-text="name" label="Select" chips clearable
                    multiple hide-details>
          <template slot="selection" slot-scope="data">
            <v-chip :selected="data.selected" close @input="remove(data.item)">
              <span>{{ data.item.name }}</span>
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
      <v-flex xs2 offset-xs1>
        <v-btn block class="primary" @click="add">
          <v-icon>add</v-icon>
          Add
        </v-btn>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap class="pa-3 wishlists">
      <v-flex xs3>
        <div class="border">
          <v-card-text class="pa-2 category-title">
            <h3 class="white--text">Category</h3>
          </v-card-text>
          <v-divider></v-divider>
          <div class="pa-2">
            <template v-for="(topic, i) in viewTopics">
              <v-card-actions :key="i" v-if="topic.type === 'category'" class="pa-0 py-1 ma-0">
                <a href="#">{{topic.name}}</a>
                <v-spacer></v-spacer>
                <v-btn icon small @click="deleteItem(topic)">
                  <v-icon color="#666" small>delete</v-icon>
                </v-btn>
              </v-card-actions>
            </template>
          </div>
        </div>
      </v-flex>
      <v-flex xs3>
        <div class="border">
          <v-card-text class="pa-2 category-title">
            <h3 class="white--text">Subject</h3>
          </v-card-text>
          <v-divider></v-divider>
          <div class="pa-2">
            <template v-for="(topic, i) in viewTopics">
              <v-card-actions :key="i" v-if="topic.type === 'subject'" class="pa-0 py-1 ma-0">
                <a href="#">{{topic.name}}</a>
                <v-spacer></v-spacer>
                <v-btn icon small @click="deleteItem(topic)">
                  <v-icon color="#666" small>delete</v-icon>
                </v-btn>
              </v-card-actions>
            </template>
          </div>
        </div>
      </v-flex>
      <v-flex xs3>
        <div class="border">
          <v-card-text class="pa-2 category-title">
            <h3 class="white--text">Sub-Category</h3>
          </v-card-text>
          <v-divider></v-divider>
          <div class="pa-2">
            <template v-for="(topic, i) in viewTopics">
              <v-card-actions :key="i" v-if="topic.type === 'sub-category'" class="pa-0 py-1 ma-0">
                <a href="#">{{topic.name}}</a>
                <v-spacer></v-spacer>
                <v-btn icon small @click="deleteItem(topic)">
                  <v-icon color="#666" small>delete</v-icon>
                </v-btn>
              </v-card-actions>
            </template>
          </div>
        </div>
      </v-flex>
      <v-flex xs3>
        <div class="border">
          <v-card-text class="pa-2 category-title">
            <h3 class="white--text">Topic</h3>
          </v-card-text>
          <v-divider></v-divider>
          <div class="pa-2">
            <template v-for="(topic, i) in viewTopics">
              <v-card-actions :key="i" v-if="topic.type === 'topic'" class="pa-0 py-1 ma-0">
                <a href="#">{{topic.name}}</a>
                <v-spacer></v-spacer>
                <v-btn icon small @click="deleteItem(topic)">
                  <v-icon color="#666" small>delete</v-icon>
                </v-btn>
              </v-card-actions>
            </template>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'LearnerWishList',
  props: ['item'],
  data: () => ({
    topic: [],
    viewTopics: [
      { name: 'Imaginary & Complex Numbers - Advanced', type: 'topic', id: 86, wishlist_id: 43 },
      { name: 'Basic Geometrical Transformations', type: 'sub-category', id: 84, wishlist_id: 44 },
      { name: 'Inorganic Chemistry Concept', type: 'topic', id: 81, wishlist_id: 45 },
      { name: 'Science', type: 'category', id: 1, wishlist_id: 46 },
      { name: 'Physics', type: 'subject', id: 2, wishlist_id: 47 }
    ],
    topicLists: [
      { id: 15, name: 'Physical Science : Matter & Change', slug: 'physicalsciencematterchange', type: 'category' },
      { id: 17, name: 'Organic Chemistry', slug: 'organic-chemistry', code: 'SOC0000000', type: 'category' },
      { id: 24, name: 'Rename: Algebra', slug: 'renamealgebra1', code: 'SA0000000', type: 'category' },
      { id: 25, name: 'PSAT Mathematics', slug: 'psatmathematics', code: 'SG0000000', type: 'subject' },
      { id: 27, name: 'Rename: Trigonometry', slug: 'renametrigonometry', code: 'ST0000000', type: 'subject' },
      { id: 29, name: 'Rename: Calculus', slug: 'renamecalculus', code: 'SC0000001', type: 'subject' },
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
    },
    add () {
      const that = this
      this.topic.map((d) => {
        that.viewTopics.push(d)
      })
      this.topic = []
    },
    deleteItem (item) {
      this.viewTopics = this.viewTopics.filter((d) => (d !== item))
    }
  }
}
</script>

<style scoped>
.wishlists .flex {
  padding: 8px;
}

.border {
  border: 1px solid rgba(0, 0, 0, .12);
  border-radius: 4px;
}

.category-title {
  background: #006598;
  border-radius: 4px 4px 0 0;
}
</style>
