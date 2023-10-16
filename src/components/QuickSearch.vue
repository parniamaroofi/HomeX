<template>
  <div class="quick_search">
    <!-- Tab items -->
    <v-tabs v-model="tab" fixed-tabs>
      <v-tab>Buy</v-tab>
      <v-tab>Rent</v-tab>
      <v-tab>Sold</v-tab>
    </v-tabs>

    <!-- Tab windows -->
    <v-window v-model="tab">
      <!-- "Buy" tab window -->
      <v-window-item>
        <div class="pa-4">
          <!-- Location serach field -->
          <TextField
            :density="'comfortable'"
            :hideDetails="true"
            :prependInnerIcon="'svg:location'"
            :placeholder="'Search location, street...'"
            v-model="locationSearch"
          />

          <!-- House Options -->
          <div class="options_box d-flex justify-space-between py-4">
            <v-btn>
              <v-icon icon="svg:bed" size="x-large" class="mr-2"></v-icon>
              <span class="text-grey">Bed</span>
            </v-btn>
            <!-- ------------------------------------------------------- -->
            <v-btn
              ><v-icon icon="svg:bath" size="x-large" class="mr-2"></v-icon>
              <span class="text-grey">Bath</span></v-btn
            >
            <!-- ------------------------------------------------------- -->
            <v-btn
              ><v-icon icon="svg:parking" size="x-large" class="mr-2"></v-icon>
              <span class="text-grey">Parking</span></v-btn
            >
          </div>

          <div>
            <v-btn color="primary" block rounded height="46" class="mt-1">Find House</v-btn>
          </div>
        </div>
      </v-window-item>

      <!-- "Rent" tab window -->
      <v-window-item>
        <div class="pa-4">
          <!-- Location serach field -->
          <TextField
            :density="'comfortable'"
            :hideDetails="true"
            :prependInnerIcon="'svg:location'"
            :placeholder="'Search location, street...'"
            v-model="locationSearch"
          />

          <!-- House Options -->
          <div class="options_box d-flex justify-space-between py-4">
            <v-btn>
              <v-icon icon="svg:bed" size="x-large" class="mr-2"></v-icon>
              <span class="text-grey">Bed</span>
            </v-btn>
            <!-- ------------------------------------------------------- -->
            <v-btn
              ><v-icon icon="svg:bath" size="x-large" class="mr-2"></v-icon>
              <span class="text-grey">Bath</span></v-btn
            >
            <!-- ------------------------------------------------------- -->
            <v-btn
              ><v-icon icon="svg:parking" size="x-large" class="mr-2"></v-icon>
              <span class="text-grey">Parking</span></v-btn
            >
          </div>

          <div>
            <v-btn color="primary" block rounded height="46" class="mt-1">Find House</v-btn>
          </div>
        </div>
      </v-window-item>

      <!-- "Sold" tab window -->
      <v-window-item>
        <div class="pa-4">
          <!-- Location serach field -->
          <TextField
            :density="'comfortable'"
            :hideDetails="true"
            :prependInnerIcon="'svg:location'"
            :placeholder="'Search location, street...'"
            v-model="locationSearch"
          />

          <!-- House Options -->
          <div class="options_box d-flex justify-space-between py-4">
            <v-btn>
              <v-icon icon="svg:bed" size="x-large" class="mr-2"></v-icon>
              <span class="text-grey">Bed</span>
            </v-btn>
            <!-- ------------------------------------------------------- -->
            <v-btn
              ><v-icon icon="svg:bath" size="x-large" class="mr-2"></v-icon>
              <span class="text-grey">Bath</span></v-btn
            >
            <!-- ------------------------------------------------------- -->
            <v-btn
              ><v-icon icon="svg:parking" size="x-large" class="mr-2"></v-icon>
              <span class="text-grey">Parking</span></v-btn
            >
          </div>

          <div>
            <v-btn color="primary" block rounded height="46" class="mt-1">Find House</v-btn>
          </div>
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import TextField from '@/components/microComponents/TextField.vue';
export default {
  name: 'QuickSearch',

  components: {
    TextField,
  },

  data() {
    return {
      tab: null,
      locationSearch: '',
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
.quick_search {
  // tab style
  .v-slide-group__content {
    border-bottom: 3px solid #ebebeb;
    .v-btn--active > .v-btn__overlay {
      opacity: 0; // Remove "Active mode overlay"
    }
  }

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
