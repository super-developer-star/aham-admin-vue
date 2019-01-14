<template>
  <v-card>
    <v-toolbar color="primary" dark>
      <v-toolbar-title class="text-capitalize" v-if="isShow">"{{item.name}}" Edit</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-form ref="form" v-model="form">
        <v-text-field v-model="name" :rules="requiredRules" label="Name *" required></v-text-field>
        <v-autocomplete v-model="country" :items="countries" item-text="name" menu-props="auto" label="Country *"
                        clearable required>
          <template slot="selection" slot-scope="data">
            <flag :iso="data.item.code"/>&nbsp;{{ data.item.name }}
          </template>
          <template slot="item" slot-scope="data">
            <v-list-tile-content>
              <v-list-tile-title><flag :iso="data.item.code"/>&nbsp;{{ data.item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </template>
        </v-autocomplete>

        <v-combobox v-model="location" :items="locations" item-text="name" label="Home locations" chips clearable
                    multiple cache-items>
          <template slot="selection" slot-scope="data">
            <v-chip :selected="data.selected" close @input="remove(data.item)">
              <span>{{ data.item.name }}</span>
            </v-chip>
          </template>
        </v-combobox>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn flat @click="close">Cancel</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat @click="reset">Reset</v-btn>
      <v-btn :disabled="!form" class="white--text" color="primary" @click="save">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LearnerModal',
  props: ['item', 'isShow'],
  data: () => ({
    name: '',
    country: null,
    requiredRules: [
      v => !!v || 'This field is required'
    ],
    form: false,
    countries: [
      {
        'id': 1,
        'name': 'India',
        'code': 'IN',
        'hubs': [{
          'id': 1,
          'name': 'Aham Learning Hub @ Manikonda',
          'slug': 'aham-learning-hub-at-manikonda',
          'code': 'ALH0000000',
          'street_address': 'Mitti\'s Building, 3rd Floor,  Plot No. 19, Manikonda, Rajendra Nagar, Hyderabad.',
          'landmark': 'Near Lanco Incubation Centre',
          'city_id': 1,
          'country_id': 1,
          'pincode': 500089,
          'latitude': 17.415,
          'longitude': 78.366,
          'deleted_at': null,
          'created_at': '2016-09-08 21:36:34',
          'updated_at': '2019-01-12 16:09:15',
          'locality_id': 1,
          'active': 1,
          'currency_type': 'INR',
          'credits_type': 'global',
          'repeat_class': 0,
          'color': '#EBBB72',
          'frontend_slug': 'aham-manikonda',
          'type': 'aham_learning_hub',
          'tutor_id': null
        }, {
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
          'tutor_id': null
        }, {
          'id': 4,
          'name': 'Aham Learning Hub @ Online Engagement',
          'slug': 'aham-learning-hub-at-online-engagement',
          'code': 'ALH0000003',
          'street_address': 'No Real location involved',
          'landmark': 'Not Applicable',
          'city_id': 1,
          'country_id': null,
          'pincode': 500008,
          'latitude': 0,
          'longitude': 0,
          'deleted_at': null,
          'created_at': '2016-11-02 06:37:35',
          'updated_at': '2016-11-02 06:37:35',
          'locality_id': 2,
          'active': 1,
          'currency_type': 'INR',
          'credits_type': 'global',
          'repeat_class': 0,
          'color': '#89E5E3',
          'frontend_slug': 'aham-engagement',
          'type': 'aham_learning_hub',
          'tutor_id': null
        }, {
          'id': 6,
          'name': 'Aham Learning Hub @ BanjaraHills',
          'slug': 'ahamatbanjara',
          'code': 'AHA0000000',
          'street_address': '8-2-682/B/5, Rd Number 12, Anand Banjara Colony, Banjara Hills, Hyderabad, Telangana 500034',
          'landmark': 'Opposite to Kaman, Above Kotak Mahindra Bank,',
          'city_id': 1,
          'country_id': 1,
          'pincode': 500034,
          'latitude': -0.0040000000000000036,
          'longitude': 0.002,
          'deleted_at': null,
          'created_at': '2018-01-21 13:48:36',
          'updated_at': '2019-01-12 16:09:42',
          'locality_id': 4,
          'active': 1,
          'currency_type': 'INR',
          'credits_type': 'global',
          'repeat_class': 0,
          'color': '#9295CC',
          'frontend_slug': 'aham-banjara-hills',
          'type': 'aham_learning_hub',
          'tutor_id': null
        }, {
          'id': 7,
          'name': 'Aham Learning Hub @ Kukatpally',
          'slug': 'ahamlearninghubatkukatpally',
          'code': 'ALH0000004',
          'street_address': 'Above Pista House, Near JNTU Metro Station, Kukatpally, Hyderabad.',
          'landmark': 'Above Pista House',
          'city_id': 1,
          'country_id': 1,
          'pincode': 500072,
          'latitude': 0,
          'longitude': 0,
          'deleted_at': null,
          'created_at': '2018-07-05 12:40:38',
          'updated_at': '2019-01-12 14:20:13',
          'locality_id': 5,
          'active': 1,
          'currency_type': 'INR',
          'credits_type': 'global',
          'repeat_class': 1,
          'color': '#fffaff',
          'frontend_slug': 'aham-kukatpally',
          'type': 'aham_learning_hub',
          'tutor_id': null
        }]
      }, { 'id': 2, 'name': 'Afghanistan', 'code': 'AF', 'hubs': [] }, {
        'id': 3,
        'name': '\u00c5land Islands',
        'code': 'AX',
        'hubs': []
      }, { 'id': 4, 'name': 'Albania', 'code': 'AL', 'hubs': [] }, {
        'id': 5,
        'name': 'Algeria',
        'code': 'DZ',
        'hubs': []
      }, { 'id': 6, 'name': 'American Samoa', 'code': 'AS', 'hubs': [] }, {
        'id': 7,
        'name': 'Andorra',
        'code': 'AD',
        'hubs': []
      }, { 'id': 8, 'name': 'Angola', 'code': 'AO', 'hubs': [] }, {
        'id': 9,
        'name': 'Anguilla',
        'code': 'AI',
        'hubs': []
      }, { 'id': 10, 'name': 'Antarctica', 'code': 'AQ', 'hubs': [] }, {
        'id': 11,
        'name': 'Antigua and Barbuda',
        'code': 'AG',
        'hubs': []
      }, { 'id': 12, 'name': 'Argentina', 'code': 'AR', 'hubs': [] }, {
        'id': 13,
        'name': 'Armenia',
        'code': 'AM',
        'hubs': []
      }, { 'id': 14, 'name': 'Aruba', 'code': 'AW', 'hubs': [] }, {
        'id': 15,
        'name': 'Australia',
        'code': 'AU',
        'hubs': []
      }, { 'id': 16, 'name': 'Austria', 'code': 'AT', 'hubs': [] }, {
        'id': 17,
        'name': 'Azerbaijan',
        'code': 'AZ',
        'hubs': []
      }, { 'id': 18, 'name': 'Bahamas', 'code': 'BS', 'hubs': [] }, {
        'id': 19,
        'name': 'Bahrain',
        'code': 'BH',
        'hubs': []
      }, { 'id': 20, 'name': 'Bangladesh', 'code': 'BD', 'hubs': [] }, {
        'id': 21,
        'name': 'Barbados',
        'code': 'BB',
        'hubs': []
      }, { 'id': 22, 'name': 'Belarus', 'code': 'BY', 'hubs': [] }, {
        'id': 23,
        'name': 'Belgium',
        'code': 'BE',
        'hubs': []
      }, { 'id': 24, 'name': 'Belize', 'code': 'BZ', 'hubs': [] }, {
        'id': 25,
        'name': 'Benin',
        'code': 'BJ',
        'hubs': []
      }, { 'id': 26, 'name': 'Bermuda', 'code': 'BM', 'hubs': [] }, {
        'id': 27,
        'name': 'Bhutan',
        'code': 'BT',
        'hubs': []
      }, { 'id': 28, 'name': 'Bolivia', 'code': 'BO', 'hubs': [] }, {
        'id': 29,
        'name': 'Bosnia and Herzegovina',
        'code': 'BA',
        'hubs': []
      }, { 'id': 30, 'name': 'Botswana', 'code': 'BW', 'hubs': [] }, {
        'id': 31,
        'name': 'Bouvet Island',
        'code': 'BV',
        'hubs': []
      }, { 'id': 32, 'name': 'Brazil', 'code': 'BR', 'hubs': [] }, {
        'id': 33,
        'name': 'British Indian Ocean Territory',
        'code': 'IO',
        'hubs': []
      }, { 'id': 34, 'name': 'Brunei Darussalam', 'code': 'BN', 'hubs': [] }, {
        'id': 35,
        'name': 'Bulgaria',
        'code': 'BG',
        'hubs': []
      }, { 'id': 36, 'name': 'Burkina Faso', 'code': 'BF', 'hubs': [] }, {
        'id': 37,
        'name': 'Burundi',
        'code': 'BI',
        'hubs': []
      }, { 'id': 38, 'name': 'Cambodia', 'code': 'KH', 'hubs': [] }, {
        'id': 39,
        'name': 'Cameroon',
        'code': 'CM',
        'hubs': []
      }, { 'id': 40, 'name': 'Canada', 'code': 'CA', 'hubs': [] }, {
        'id': 41,
        'name': 'Cape Verde',
        'code': 'CV',
        'hubs': []
      }, { 'id': 42, 'name': 'Cayman Islands', 'code': 'KY', 'hubs': [] }, {
        'id': 43,
        'name': 'Central African Republic',
        'code': 'CF',
        'hubs': []
      }, { 'id': 44, 'name': 'Chad', 'code': 'TD', 'hubs': [] }, {
        'id': 45,
        'name': 'Chile',
        'code': 'CL',
        'hubs': []
      }, { 'id': 46, 'name': 'China', 'code': 'CN', 'hubs': [] }, {
        'id': 47,
        'name': 'Christmas Island',
        'code': 'CX',
        'hubs': []
      }, { 'id': 48, 'name': 'Cocos (Keeling) Islands', 'code': 'CC', 'hubs': [] }, {
        'id': 49,
        'name': 'Colombia',
        'code': 'CO',
        'hubs': []
      }, { 'id': 50, 'name': 'Comoros', 'code': 'KM', 'hubs': [] }, {
        'id': 51,
        'name': 'Congo',
        'code': 'CG',
        'hubs': []
      }, { 'id': 52, 'name': 'Congo, The Democratic Republic of the', 'code': 'CD', 'hubs': [] }, {
        'id': 53,
        'name': 'Cook Islands',
        'code': 'CK',
        'hubs': []
      }, { 'id': 54, 'name': 'Costa Rica', 'code': 'CR', 'hubs': [] }, {
        'id': 55,
        'name': 'Cote D\'Ivoire',
        'code': 'CI',
        'hubs': []
      }, { 'id': 56, 'name': 'Croatia', 'code': 'HR', 'hubs': [] }, {
        'id': 57,
        'name': 'Cuba',
        'code': 'CU',
        'hubs': []
      }, { 'id': 58, 'name': 'Cyprus', 'code': 'CY', 'hubs': [] }, {
        'id': 59,
        'name': 'Czech Republic',
        'code': 'CZ',
        'hubs': []
      }, { 'id': 60, 'name': 'Denmark', 'code': 'DK', 'hubs': [] }, {
        'id': 61,
        'name': 'Djibouti',
        'code': 'DJ',
        'hubs': []
      }, { 'id': 62, 'name': 'Dominica', 'code': 'DM', 'hubs': [] }, {
        'id': 63,
        'name': 'Dominican Republic',
        'code': 'DO',
        'hubs': []
      }, { 'id': 64, 'name': 'Ecuador', 'code': 'EC', 'hubs': [] }, {
        'id': 65,
        'name': 'Egypt',
        'code': 'EG',
        'hubs': []
      }, { 'id': 66, 'name': 'El Salvador', 'code': 'SV', 'hubs': [] }, {
        'id': 67,
        'name': 'Equatorial Guinea',
        'code': 'GQ',
        'hubs': []
      }, { 'id': 68, 'name': 'Eritrea', 'code': 'ER', 'hubs': [] }, {
        'id': 69,
        'name': 'Estonia',
        'code': 'EE',
        'hubs': []
      }, { 'id': 70, 'name': 'Ethiopia', 'code': 'ET', 'hubs': [] }, {
        'id': 71,
        'name': 'Falkland Islands (Malvinas)',
        'code': 'FK',
        'hubs': []
      }, { 'id': 72, 'name': 'Faroe Islands', 'code': 'FO', 'hubs': [] }, {
        'id': 73,
        'name': 'Fiji',
        'code': 'FJ',
        'hubs': []
      }, { 'id': 74, 'name': 'Finland', 'code': 'FI', 'hubs': [] }, {
        'id': 75,
        'name': 'France',
        'code': 'FR',
        'hubs': []
      }, { 'id': 76, 'name': 'French Guiana', 'code': 'GF', 'hubs': [] }, {
        'id': 77,
        'name': 'French Polynesia',
        'code': 'PF',
        'hubs': []
      }, { 'id': 78, 'name': 'French Southern Territories', 'code': 'TF', 'hubs': [] }, {
        'id': 79,
        'name': 'Gabon',
        'code': 'GA',
        'hubs': []
      }, { 'id': 80, 'name': 'Gambia', 'code': 'GM', 'hubs': [] }, {
        'id': 81,
        'name': 'Georgia',
        'code': 'GE',
        'hubs': []
      }, { 'id': 82, 'name': 'Germany', 'code': 'DE', 'hubs': [] }, {
        'id': 83,
        'name': 'Ghana',
        'code': 'GH',
        'hubs': []
      }, { 'id': 84, 'name': 'Gibraltar', 'code': 'GI', 'hubs': [] }, {
        'id': 85,
        'name': 'Greece',
        'code': 'GR',
        'hubs': []
      }, { 'id': 86, 'name': 'Greenland', 'code': 'GL', 'hubs': [] }, {
        'id': 87,
        'name': 'Grenada',
        'code': 'GD',
        'hubs': []
      }, { 'id': 88, 'name': 'Guadeloupe', 'code': 'GP', 'hubs': [] }, {
        'id': 89,
        'name': 'Guam',
        'code': 'GU',
        'hubs': []
      }, { 'id': 90, 'name': 'Guatemala', 'code': 'GT', 'hubs': [] }, {
        'id': 91,
        'name': 'Guernsey',
        'code': 'GG',
        'hubs': []
      }, { 'id': 92, 'name': 'Guinea', 'code': 'GN', 'hubs': [] }, {
        'id': 93,
        'name': 'Guinea-Bissau',
        'code': 'GW',
        'hubs': []
      }, { 'id': 94, 'name': 'Guyana', 'code': 'GY', 'hubs': [] }, {
        'id': 95,
        'name': 'Haiti',
        'code': 'HT',
        'hubs': []
      }, { 'id': 96, 'name': 'Heard Island and Mcdonald Islands', 'code': 'HM', 'hubs': [] }, {
        'id': 97,
        'name': 'Holy See (Vatican City State)',
        'code': 'VA',
        'hubs': []
      }, { 'id': 98, 'name': 'Honduras', 'code': 'HN', 'hubs': [] }, {
        'id': 99,
        'name': 'Hong Kong',
        'code': 'HK',
        'hubs': []
      }, { 'id': 100, 'name': 'Hungary', 'code': 'HU', 'hubs': [] }, {
        'id': 101,
        'name': 'Iceland',
        'code': 'IS',
        'hubs': []
      }, { 'id': 102, 'name': 'Indonesia', 'code': 'ID', 'hubs': [] }, {
        'id': 103,
        'name': 'Iran, Islamic Republic Of',
        'code': 'IR',
        'hubs': []
      }, { 'id': 104, 'name': 'Iraq', 'code': 'IQ', 'hubs': [] }, {
        'id': 105,
        'name': 'Ireland',
        'code': 'IE',
        'hubs': []
      }, { 'id': 106, 'name': 'Isle of Man', 'code': 'IM', 'hubs': [] }, {
        'id': 107,
        'name': 'Israel',
        'code': 'IL',
        'hubs': []
      }, { 'id': 108, 'name': 'Italy', 'code': 'IT', 'hubs': [] }, {
        'id': 109,
        'name': 'Jamaica',
        'code': 'JM',
        'hubs': []
      }, { 'id': 110, 'name': 'Japan', 'code': 'JP', 'hubs': [] }, {
        'id': 111,
        'name': 'Jersey',
        'code': 'JE',
        'hubs': []
      }, { 'id': 112, 'name': 'Jordan', 'code': 'JO', 'hubs': [] }, {
        'id': 113,
        'name': 'Kazakhstan',
        'code': 'KZ',
        'hubs': []
      }, { 'id': 114, 'name': 'Kenya', 'code': 'KE', 'hubs': [] }, {
        'id': 115,
        'name': 'Kiribati',
        'code': 'KI',
        'hubs': []
      }, { 'id': 116, 'name': 'Democratic People\'s Republic of Korea', 'code': 'KP', 'hubs': [] }, {
        'id': 117,
        'name': 'Korea, Republic of',
        'code': 'KR',
        'hubs': []
      }, { 'id': 118, 'name': 'Kosovo', 'code': 'XK', 'hubs': [] }, {
        'id': 119,
        'name': 'Kuwait',
        'code': 'KW',
        'hubs': []
      }, { 'id': 120, 'name': 'Kyrgyzstan', 'code': 'KG', 'hubs': [] }, {
        'id': 121,
        'name': 'Lao People\'s Democratic Republic',
        'code': 'LA',
        'hubs': []
      }, { 'id': 122, 'name': 'Latvia', 'code': 'LV', 'hubs': [] }, {
        'id': 123,
        'name': 'Lebanon',
        'code': 'LB',
        'hubs': []
      }, { 'id': 124, 'name': 'Lesotho', 'code': 'LS', 'hubs': [] }, {
        'id': 125,
        'name': 'Liberia',
        'code': 'LR',
        'hubs': []
      }, { 'id': 126, 'name': 'Libyan Arab Jamahiriya', 'code': 'LY', 'hubs': [] }, {
        'id': 127,
        'name': 'Liechtenstein',
        'code': 'LI',
        'hubs': []
      }, { 'id': 128, 'name': 'Lithuania', 'code': 'LT', 'hubs': [] }, {
        'id': 129,
        'name': 'Luxembourg',
        'code': 'LU',
        'hubs': []
      }, { 'id': 130, 'name': 'Macao', 'code': 'MO', 'hubs': [] }, {
        'id': 131,
        'name': 'Macedonia, The Former Yugoslav Republic of',
        'code': 'MK',
        'hubs': []
      }, { 'id': 132, 'name': 'Madagascar', 'code': 'MG', 'hubs': [] }, {
        'id': 133,
        'name': 'Malawi',
        'code': 'MW',
        'hubs': []
      }, { 'id': 134, 'name': 'Malaysia', 'code': 'MY', 'hubs': [] }, {
        'id': 135,
        'name': 'Maldives',
        'code': 'MV',
        'hubs': []
      }, { 'id': 136, 'name': 'Mali', 'code': 'ML', 'hubs': [] }, {
        'id': 137,
        'name': 'Malta',
        'code': 'MT',
        'hubs': []
      }, { 'id': 138, 'name': 'Marshall Islands', 'code': 'MH', 'hubs': [] }, {
        'id': 139,
        'name': 'Martinique',
        'code': 'MQ',
        'hubs': []
      }, { 'id': 140, 'name': 'Mauritania', 'code': 'MR', 'hubs': [] }, {
        'id': 141,
        'name': 'Mauritius',
        'code': 'MU',
        'hubs': []
      }, { 'id': 142, 'name': 'Mayotte', 'code': 'YT', 'hubs': [] }, {
        'id': 143,
        'name': 'Mexico',
        'code': 'MX',
        'hubs': []
      }, { 'id': 144, 'name': 'Micronesia, Federated States of', 'code': 'FM', 'hubs': [] }, {
        'id': 145,
        'name': 'Moldova, Republic of',
        'code': 'MD',
        'hubs': []
      }, { 'id': 146, 'name': 'Monaco', 'code': 'MC', 'hubs': [] }, {
        'id': 147,
        'name': 'Mongolia',
        'code': 'MN',
        'hubs': []
      }, { 'id': 148, 'name': 'Montenegro', 'code': 'ME', 'hubs': [] }, {
        'id': 149,
        'name': 'Montserrat',
        'code': 'MS',
        'hubs': []
      }, { 'id': 150, 'name': 'Morocco', 'code': 'MA', 'hubs': [] }, {
        'id': 151,
        'name': 'Mozambique',
        'code': 'MZ',
        'hubs': []
      }, { 'id': 152, 'name': 'Myanmar', 'code': 'MM', 'hubs': [] }, {
        'id': 153,
        'name': 'Namibia',
        'code': 'NA',
        'hubs': []
      }, { 'id': 154, 'name': 'Nauru', 'code': 'NR', 'hubs': [] }, {
        'id': 155,
        'name': 'Nepal',
        'code': 'NP',
        'hubs': []
      }, { 'id': 156, 'name': 'Netherlands', 'code': 'NL', 'hubs': [] }, {
        'id': 157,
        'name': 'Netherlands Antilles',
        'code': 'AN',
        'hubs': []
      }, { 'id': 158, 'name': 'New Caledonia', 'code': 'NC', 'hubs': [] }, {
        'id': 159,
        'name': 'New Zealand',
        'code': 'NZ',
        'hubs': []
      }, { 'id': 160, 'name': 'Nicaragua', 'code': 'NI', 'hubs': [] }, {
        'id': 161,
        'name': 'Niger',
        'code': 'NE',
        'hubs': []
      }, { 'id': 162, 'name': 'Nigeria', 'code': 'NG', 'hubs': [] }, {
        'id': 163,
        'name': 'Niue',
        'code': 'NU',
        'hubs': []
      }, { 'id': 164, 'name': 'Norfolk Island', 'code': 'NF', 'hubs': [] }, {
        'id': 165,
        'name': 'Northern Mariana Islands',
        'code': 'MP',
        'hubs': []
      }, { 'id': 166, 'name': 'Norway', 'code': 'NO', 'hubs': [] }, {
        'id': 167,
        'name': 'Oman',
        'code': 'OM',
        'hubs': []
      }, { 'id': 168, 'name': 'Pakistan', 'code': 'PK', 'hubs': [] }, {
        'id': 169,
        'name': 'Palau',
        'code': 'PW',
        'hubs': []
      }, { 'id': 170, 'name': 'Palestinian Territory, Occupied', 'code': 'PS', 'hubs': [] }, {
        'id': 171,
        'name': 'Panama',
        'code': 'PA',
        'hubs': []
      }, { 'id': 172, 'name': 'Papua New Guinea', 'code': 'PG', 'hubs': [] }, {
        'id': 173,
        'name': 'Paraguay',
        'code': 'PY',
        'hubs': []
      }, { 'id': 174, 'name': 'Peru', 'code': 'PE', 'hubs': [] }, {
        'id': 175,
        'name': 'Philippines',
        'code': 'PH',
        'hubs': []
      }, { 'id': 176, 'name': 'Pitcairn', 'code': 'PN', 'hubs': [] }, {
        'id': 177,
        'name': 'Poland',
        'code': 'PL',
        'hubs': []
      }, { 'id': 178, 'name': 'Portugal', 'code': 'PT', 'hubs': [] }, {
        'id': 179,
        'name': 'Puerto Rico',
        'code': 'PR',
        'hubs': []
      }, { 'id': 180, 'name': 'Qatar', 'code': 'QA', 'hubs': [] }, {
        'id': 181,
        'name': 'Reunion',
        'code': 'RE',
        'hubs': []
      }, { 'id': 182, 'name': 'Romania', 'code': 'RO', 'hubs': [] }, {
        'id': 183,
        'name': 'Russian Federation',
        'code': 'RU',
        'hubs': []
      }, { 'id': 184, 'name': 'Rwanda', 'code': 'RW', 'hubs': [] }, {
        'id': 185,
        'name': 'Saint Helena',
        'code': 'SH',
        'hubs': []
      }, { 'id': 186, 'name': 'Saint Kitts and Nevis', 'code': 'KN', 'hubs': [] }, {
        'id': 187,
        'name': 'Saint Lucia',
        'code': 'LC',
        'hubs': []
      }, { 'id': 188, 'name': 'Saint Pierre and Miquelon', 'code': 'PM', 'hubs': [] }, {
        'id': 189,
        'name': 'Saint Vincent and the Grenadines',
        'code': 'VC',
        'hubs': []
      }, { 'id': 190, 'name': 'Samoa', 'code': 'WS', 'hubs': [] }, {
        'id': 191,
        'name': 'San Marino',
        'code': 'SM',
        'hubs': []
      }, { 'id': 192, 'name': 'Sao Tome and Principe', 'code': 'ST', 'hubs': [] }, {
        'id': 193,
        'name': 'Saudi Arabia',
        'code': 'SA',
        'hubs': []
      }, { 'id': 194, 'name': 'Senegal', 'code': 'SN', 'hubs': [] }, {
        'id': 195,
        'name': 'Serbia',
        'code': 'RS',
        'hubs': []
      }, { 'id': 196, 'name': 'Seychelles', 'code': 'SC', 'hubs': [] }, {
        'id': 197,
        'name': 'Sierra Leone',
        'code': 'SL',
        'hubs': []
      }, { 'id': 198, 'name': 'Singapore', 'code': 'SG', 'hubs': [] }, {
        'id': 199,
        'name': 'Slovakia',
        'code': 'SK',
        'hubs': []
      }, { 'id': 200, 'name': 'Slovenia', 'code': 'SI', 'hubs': [] }, {
        'id': 201,
        'name': 'Solomon Islands',
        'code': 'SB',
        'hubs': []
      }, { 'id': 202, 'name': 'Somalia', 'code': 'SO', 'hubs': [] }, {
        'id': 203,
        'name': 'South Africa',
        'code': 'ZA',
        'hubs': []
      }, { 'id': 204, 'name': 'South Georgia and the South Sandwich Islands', 'code': 'GS', 'hubs': [] }, {
        'id': 205,
        'name': 'Spain',
        'code': 'ES',
        'hubs': []
      }, { 'id': 206, 'name': 'Sri Lanka', 'code': 'LK', 'hubs': [] }, {
        'id': 207,
        'name': 'Sudan',
        'code': 'SD',
        'hubs': []
      }, { 'id': 208, 'name': 'Suriname', 'code': 'SR', 'hubs': [] }, {
        'id': 209,
        'name': 'Svalbard and Jan Mayen',
        'code': 'SJ',
        'hubs': []
      }, { 'id': 210, 'name': 'Swaziland', 'code': 'SZ', 'hubs': [] }, {
        'id': 211,
        'name': 'Sweden',
        'code': 'SE',
        'hubs': []
      }, { 'id': 212, 'name': 'Switzerland', 'code': 'CH', 'hubs': [] }, {
        'id': 213,
        'name': 'Syrian Arab Republic',
        'code': 'SY',
        'hubs': []
      }, { 'id': 214, 'name': 'Taiwan', 'code': 'TW', 'hubs': [] }, {
        'id': 215,
        'name': 'Tajikistan',
        'code': 'TJ',
        'hubs': []
      }, { 'id': 216, 'name': 'Tanzania, United Republic of', 'code': 'TZ', 'hubs': [] }, {
        'id': 217,
        'name': 'Thailand',
        'code': 'TH',
        'hubs': []
      }, { 'id': 218, 'name': 'Timor-Leste', 'code': 'TL', 'hubs': [] }, {
        'id': 219,
        'name': 'Togo',
        'code': 'TG',
        'hubs': []
      }, { 'id': 220, 'name': 'Tokelau', 'code': 'TK', 'hubs': [] }, {
        'id': 221,
        'name': 'Tonga',
        'code': 'TO',
        'hubs': []
      }, { 'id': 222, 'name': 'Trinidad and Tobago', 'code': 'TT', 'hubs': [] }, {
        'id': 223,
        'name': 'Tunisia',
        'code': 'TN',
        'hubs': []
      }, { 'id': 224, 'name': 'Turkey', 'code': 'TR', 'hubs': [] }, {
        'id': 225,
        'name': 'Turkmenistan',
        'code': 'TM',
        'hubs': []
      }, { 'id': 226, 'name': 'Turks and Caicos Islands', 'code': 'TC', 'hubs': [] }, {
        'id': 227,
        'name': 'Tuvalu',
        'code': 'TV',
        'hubs': []
      }, { 'id': 228, 'name': 'Uganda', 'code': 'UG', 'hubs': [] }, {
        'id': 229,
        'name': 'Ukraine',
        'code': 'UA',
        'hubs': []
      }, { 'id': 230, 'name': 'United Arab Emirates', 'code': 'AE', 'hubs': [] }, {
        'id': 231,
        'name': 'United Kingdom',
        'code': 'GB',
        'hubs': []
      }, {
        'id': 232,
        'name': 'United States Of America',
        'code': 'US',
        'hubs': [{
          'id': 253,
          'name': 'Aham Certified Location @ 1132 Chancery Way, San Ramon, CA, USA',
          'slug': 'certifiedlocationatsanramon',
          'code': 'CLS0000000',
          'street_address': '1132 Chancery Way, San Ramon, CA, USA',
          'landmark': 'Walking Distance From Windemere Ranch Middle School',
          'city_id': 4,
          'country_id': 232,
          'pincode': 94582,
          'latitude': 37.753,
          'longitude': -121.902,
          'deleted_at': null,
          'created_at': '2019-01-03 12:32:04',
          'updated_at': '2019-01-12 23:26:44',
          'locality_id': 6,
          'active': 1,
          'currency_type': 'USD',
          'credits_type': 'Global',
          'repeat_class': 0,
          'color': '#FF8C00',
          'frontend_slug': 'certifiedlocationatsanramon',
          'type': 'certified_hub',
          'tutor_id': 164
        }]
      }, { 'id': 233, 'name': 'United States Minor Outlying Islands', 'code': 'UM', 'hubs': [] }, {
        'id': 234,
        'name': 'Uruguay',
        'code': 'UY',
        'hubs': []
      }, { 'id': 235, 'name': 'Uzbekistan', 'code': 'UZ', 'hubs': [] }, {
        'id': 236,
        'name': 'Vanuatu',
        'code': 'VU',
        'hubs': []
      }, { 'id': 237, 'name': 'Venezuela', 'code': 'VE', 'hubs': [] }, {
        'id': 238,
        'name': 'Viet Nam',
        'code': 'VN',
        'hubs': []
      }, { 'id': 239, 'name': 'Virgin Islands, British', 'code': 'VG', 'hubs': [] }, {
        'id': 240,
        'name': 'Virgin Islands, U.S.',
        'code': 'VI',
        'hubs': []
      }, { 'id': 241, 'name': 'Wallis and Futuna', 'code': 'WF', 'hubs': [] }, {
        'id': 242,
        'name': 'Western Sahara',
        'code': 'EH',
        'hubs': []
      }, { 'id': 243, 'name': 'Yemen', 'code': 'YE', 'hubs': [] }, {
        'id': 244,
        'name': 'Zambia',
        'code': 'ZM',
        'hubs': []
      }, { 'id': 245, 'name': 'Zimbabwe', 'code': 'ZW', 'hubs': [] }
    ],
    location: [],
    locations: [
      { name: 'Aham Learning Hub @ Manikonda' },
      { name: 'Aham Learning Hub @ Gachibowli' },
      { name: 'Aham Learning Hub @ Online Engagement' },
      { name: 'Aham Learning Hub @ BanjaraHills' },
      { name: 'Aham Learning Hub @ Kukatpally' }
    ]
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

</style>
