<template>
  <div class="home_page bg-[#fafafa] min-h-[100dvh]">
    <!-- Page Header -->
    <div class="w-full h-[180px] bg-[#1b1b1b]">
      <!-- Header content -->
      <div class="px-4 py-6">
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
            <span class="pl-1.5 text-[16px] font-bold">HomeX</span>
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
        <v-card flat class="rounded-[15px]">
          <QuickSearch />
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import QuickSearch from '@/components/QuickSearch.vue';
export default {
  name: 'Home',

  components: {
    QuickSearch,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
