<template>
  <div class="quick_search">
    <!-- Location serach field -->
    <TextField
      :density="'comfortable'"
      :hideDetails="true"
      :prependInnerIcon="'svg:location'"
      :placeholder="'Search location, street...'"
      v-model="search.field"
    />

    <!-- House Options -->
    <div class="options_box d-flex justify-space-between py-4">
      <!-- -------------------------- Bed ----------------------------- -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            <v-icon icon="svg:bed" size="x-large" class="mr-1.5"></v-icon>
            <span :class="search.bedsNum > 0 ? 'text-xs' : 'text-grey'">
              <span>{{ search.bedsNum }}</span>
              <span>{{ search.bedsNum > 1 ? ' Beds' : ' Bed' }}</span>
            </span>
          </v-btn>
        </template>
        <v-list density="compact">
          <v-list-item
            v-for="(num, index) in 6"
            :key="index"
            :class="search.bedsNum == num ? 'bg-[#eaeaea]' : ''"
            @click="search.bedsNum = num"
            class="cursor-pointer"
          >
            <v-list-item-title>
              {{ num + (num > 1 ? ' Beds' : ' Bed') }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- -------------------------- Bath ----------------------------- -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            <v-icon icon="svg:bath" size="x-large" class="mr-1.5"></v-icon>
            <span :class="search.bathNum > 0 ? 'text-xs' : 'text-grey'">
              <span>{{ search.bathNum }}</span>
              <span> Bath</span>
            </span>
          </v-btn>
        </template>
        <v-list density="compact">
          <v-list-item
            v-for="(num, index) in 4"
            :key="index"
            :class="search.bathNum == num ? 'bg-[#eaeaea]' : ''"
            @click="search.bathNum = num"
            class="cursor-pointer"
          >
            <v-list-item-title>
              {{ num + ' Bath' }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- ---------------------------- Parking --------------------------- -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            <v-icon icon="svg:parking" size="x-large" class="mr-1.5"></v-icon>
            <span :class="search.parkingsNum > 0 ? 'text-xs' : 'text-grey'">
              <span>{{ search.parkingsNum }}</span>
              <span>
                {{ search.parkingsNum > 1 ? ' Parkings' : ' Parking' }}
              </span>
            </span>
          </v-btn>
        </template>
        <v-list density="compact">
          <v-list-item
            v-for="(num, index) in 3"
            :key="index"
            :class="search.parkingsNum == num ? 'bg-[#eaeaea]' : ''"
            @click="search.parkingsNum = num"
            class="cursor-pointer"
          >
            <v-list-item-title>
              {{ num + (num > 1 ? ' Parkings' : ' Parking') }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- Extra option for Rent -->
    <div
      v-if="type == 'rent'"
      class="border border-gray-500 rounded-lg d-flex align-center pr-3 pl-4 py-1 mb-4"
    >
      <!-- lable icon -->
      <div class="mr-4">
        <v-icon icon="svg:label" class="scale-[1.9] rotate-[10deg]"></v-icon>
      </div>

      <div class="text-sm text-grey-darken-1">only show listings with deals or promotions</div>

      <div><v-checkbox v-model="search.hasDeal" hide-details color="primary"></v-checkbox></div>
    </div>

    <!-- Extra option for Sold -->
    <div v-if="type == 'sold'" class="mb-4">
      <Select
        :label="'Sold within'"
        :density="'comfortable'"
        :items="soldWithinOptions"
        :hideDetails="true"
        v-model="search.soldWithin"
      />
    </div>

    <div>
      <v-btn color="primary" block rounded height="46" class="mt-1">Find House</v-btn>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import Select from '@/components/microComponents/Select.vue';
import TextField from '@/components/microComponents/TextField.vue';
export default {
  name: 'QuickSearch',

  props: ['type'],

  components: {
    Select,
    TextField,
  },

  setup() {
    const search = reactive({
      field: '',
      bedsNum: null,
      bathNum: null,
      parkingsNum: null,
      hasDeal: false,
      soldWithin: 'Last 6 months',
    });

    const soldWithinOptions = reactive([
      'Last 7 days',
      'Last 1 month',
      'Last 3 months',
      'Last 6 months',
      'Last 1 year',
      'Last 2 years',
      'Last 3 years',
      'last 5 years',
    ]);

    return {
      search,
      soldWithinOptions,
    };
  },

  mounted() {},

  methods: {
    test(num) {
      console.log(num);
    },
  },
};
</script>

<style lang="scss">
.quick_search {
  .options_box {
    .v-btn {
      width: 31%;
      height: 46px;
      border-radius: var(--sm-radius);
      background-color: var(--lighten-gray) !important;
    }
  }
}
</style>
