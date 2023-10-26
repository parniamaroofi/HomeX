<template>
  <div class="home_page bg-[#fafafa] min-h-[100dvh] h-full">
    <!-- Page Header -->
    <div class="w-full h-[180px] bg-[--header-bg]">
      <!-- Header content -->
      <div class="px-5 py-6">
        <v-row>
          <!-- Account image -->
          <v-col cols="4">
            <img
              src="/images/user.jpg"
              alt="account_image"
              class="rounded-full w-[50px] h-[50px]"
            />
          </v-col>

          <!-- App title -->
          <v-col cols="4" class="text-white d-flex justify-center align-center">
            <v-icon icon="svg:home"></v-icon>
            <span class="pl-2 text-[1.6rem]" style="font-family: 'Dancing Script'">HomeX</span>
          </v-col>

          <!-- Notification -->
          <v-col cols="4">
            <div
              class="w-[50px] h-[50px] rounded-full bg-[#313131] d-flex justify-center align-center ms-auto"
            >
              <v-badge color="error" dot>
                <v-icon color="white" icon="svg:bell"></v-icon>
              </v-badge>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full mt-[-100px]">
      <div class="pa-4">
        <!-- Saerch Card -->
        <v-card flat class="rounded-[--lg-radius]">
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
                <QuickSearch :type="'buy'" />
              </div>
            </v-window-item>

            <!-- "Rent" tab window -->
            <v-window-item>
              <div class="pa-4">
                <QuickSearch :type="'rent'" />
              </div>
            </v-window-item>

            <!-- "Sold" tab window -->
            <v-window-item>
              <div class="pa-4">
                <QuickSearch :type="'sold'" />
              </div>
            </v-window-item>
          </v-window>
        </v-card>

        <!-- Special offer box -->
        <div
          class="bg-[#e6edfb] rounded-[--lg-radius] d-flex justify-space-between align-center pa-4 mt-4"
        >
          <div>
            <b class="text-primary">Get special offer now!</b>
            <p class="mb-0 text-grey text-sm">Verify your account to get Special offer</p>
          </div>

          <div>
            <v-btn
              color="primary"
              variant="tonal"
              class="rounded-[16px]"
              icon="mdi-arrow-right"
            ></v-btn>
          </div>
        </div>
      </div>
      <!-- Recomended slider -->
      <div class="mb-4">
        <Slider :title="'Recomended'" :items="homeData.recomended" />
      </div>
      <!-- The latest slider -->
      <div class="mb-6">
        <Slider :title="'The latest'" :items="homeData.theLatest" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import QuickSearch from '@/components/QuickSearch.vue';
import Slider from '@/components/Slider.vue';
export default {
  name: 'Home',

  setup() {
    const tab = ref(0);
    const homeData = ref({});

    return {
      tab,
      homeData,
    };
  },

  components: {
    QuickSearch,
    Slider,
  },

  created() {
    this.getData();
  },

  methods: {
    getData() {
      this.$http
        .get('/static/api/homeContent.json', {
          headers: {
            Authorization: 'Bearer: ' + localStorage.getItem('token'),
          },
        })

        .then((res) => {
          this.homeData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
.home_page {
  // tab style
  .v-slide-group__content {
    border-bottom: 3px solid #ebebeb;
    .v-btn--active > .v-btn__overlay {
      opacity: 0; // Remove "Active mode overlay"
    }
  }
}
</style>
