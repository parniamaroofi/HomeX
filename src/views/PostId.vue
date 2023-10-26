<template>
  <div class="post_id">
    <!-- Post Images -->
    <div class="image_box" :style="`background-image: url(${postData.imageUrl})`">
      <div class="pa-4 d-flex justify-space-between">
        <v-btn
          color="white"
          icon="svg:chevronLeft"
          width="40"
          height="40"
          @click="$router.push('/')"
        ></v-btn>

        <v-btn
          color="white"
          :icon="postData.saved ? 'svg:bookmarkFilled' : 'svg:bookmark'"
          width="40"
          height="40"
          @click="postData.saved = !postData.saved"
        ></v-btn>
      </div>
    </div>

    <!-- Post Content -->
    <div class="bg-white mt-[-20px] rounded-[22px] pa-5">
      <!-- Title -->
      <p class="text-[1.1rem] mb-1">{{ postData.title }}</p>

      <!-- Location -->
      <p class="translate-x-[-4px] text-grey text-[0.88rem] mb-1">
        <v-icon
          size="small"
          icon="svg:location"
          class="primary-icon translate-y-[-1px] mr-1"
        ></v-icon>
        <span>{{ postData.location }}</span>
      </p>

      <!-- Options details -->
      <div class="mt-6 pa-4 rounded-full bg-[--lighten-gray]">
        <div class="d-flex justify-space-between">
          <div>
            <v-icon icon="svg:bed" size="small"></v-icon>
            <span class="text-sm pl-1"
              >{{ postData.bed }} {{ Number(postData.bed) == 1 ? 'Bed' : 'Beds' }}</span
            >
          </div>
          <v-divider vertical></v-divider>
          <!-- ------------------------------------------------------------- -->
          <div>
            <v-icon icon="svg:bath" size="small"></v-icon>
            <span class="text-sm pl-1">{{ postData.bath }} Bath</span>
          </div>
          <v-divider vertical></v-divider>
          <!-- ------------------------------------------------------------- -->
          <div>
            <v-icon icon="svg:parking" size="small"></v-icon>
            <span class="text-sm pl-1"
              >{{ postData.parking }}
              {{ Number(postData.parking) == 1 ? 'Parking' : 'Parkings' }}</span
            >
          </div>
          <v-divider vertical></v-divider>
          <!-- ------------------------------------------------------------- -->
          <div>
            <v-icon icon="svg:area" size="small"></v-icon>
            <span class="text-sm pl-1">{{ postData.area }}ft</span>
          </div>
        </div>
      </div>

      <!-- Description -->
      <div class="mt-6" v-if="postData.description">
        <p class="text-xl mb-2">Description</p>
        <!-- when description character length is more than 80 -->
        <p class="text-gray-500 text-[0.9rem]" v-if="postData.description.length > 80">
          {{ !showMore ? `${postData.description.slice(0, 80)}...` : postData.description }}

          <!-- Show more/Show less button -->
          <span class="text-primary text-sm whitespace-pre cursor-pointer">
            <span v-if="!showMore" @click="showMore = true">Show more </span>
            <span v-else @click="showMore = false">Show less </span>
          </span>
        </p>

        <!-- when description character length is equal to or less than 80 -->
        <p v-else>
          {{ postData.description }}
        </p>
      </div>

      <!-- Contact info -->
      <div class="mt-6 border border-gray pa-2 rounded-full d-flex justify-space-between">
        <div class="d-flex align-center">
          <!-- Contact Avatar -->
          <img :src="postData.contactAvatar" width="50" height="50" class="rounded-full mr-3" />

          <!-- Contact Name and Role -->
          <div>
            <p>{{ postData.contactName }}</p>
            <p class="text-grey text-sm">{{ postData.contactRole }}</p>
          </div>
        </div>

        <div>
          <v-btn
            color="primary"
            variant="tonal"
            icon="svg:phone"
            class="rounded-full primary-icon mr-3"
          ></v-btn>
          <v-btn
            color="primary"
            variant="tonal"
            class="rounded-full primary-icon"
            icon="svg:chat"
          ></v-btn>
        </div>
      </div>

      <!-- Location -->
      <div class="mt-6">
        <p class="text-xl">Location</p>
        <p class="text-gray-500 text-[0.9rem]">{{ postData.locationDes }}</p>

        <div class="mt-3 mb-6">
          <iframe
            :src="postData.locationSrc"
            width="100%"
            height="200"
            class="rounded-lg"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Booking -->
      <div
        class="sticky bottom-4 pa-2 rounded-full bg-white w-full d-flex justify-space-between align-center shadow-md"
      >
        <div class="ml-2">
          <span class="text-primary font-bold">${{ Number(postData.price).toLocaleString() }}</span>
          <span class="text-grey">/{{ postData.per }}</span>
        </div>

        <div>
          <v-btn color="primary" class="rounded-full" height="48" width="150">Book now</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'PostId',

  setup() {
    const postData = ref({});
    const showMore = ref(false);

    return {
      postData,
      showMore,
    };
  },

  created() {
    this.getData();
  },

  methods: {
    getData() {
      this.$http
        .get('/static/api/posts.json', {
          headers: {
            Authorization: 'Bearer: ' + localStorage.getItem('token'),
          },
        })

        .then((res) => {
          this.postData = res.data.filter((x) => x.id == this.$route.params.id)[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
.post_id {
  .image_box {
    aspect-ratio: 16 / 11;
    background-position: center;
    background-size: cover;
  }
}
</style>
