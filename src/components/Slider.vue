<template>
  <div class="slider_component">
    <!-- Slider header -->
    <div class="d-flex justify-space-between align-center px-5">
      <!-- Slider title -->
      <b class="text-lg">Recomended</b>

      <span class="text-primary text-[16px]">See more</span>
    </div>

    <!-- Slider items -->
    <div class="slider_box inline-flex mt-3 pb-4">
      <!-- Slider item box -->
      <div
        v-for="(item, index) in items"
        :key="index"
        class="slider_item w-[290px] min-w-[290px] relative mr-5"
        :class="index == 0 ? 'ml-5' : ''"
      >
        <!-- item image -->
        <img class="rounded-[--lg-radius] h-[180px] w-full" :src="item.imageUrl" />

        <!-- item price and SAVE icon -->
        <div class="absolute top-3.5 left-0 px-3 d-flex w-full justify-space-between">
          <div class="bg-white rounded-full text-[15px] d-flex align-center px-3">
            <b class="text-primary">${{ item.price }}</b>
            <span class="text-grey">/{{ item.per }}</span>
          </div>

          <div class="bg-white pa-1 rounded-full"><v-icon icon="svg:bookmark"></v-icon></div>
        </div>

        <!-- item details -->
        <div class="mt-2 px-1">
          <!-- item title -->
          <p class="text-[18px] mb-1">{{ item.title }}</p>

          <!-- item location -->
          <p class="translate-x-[-4px] text-grey mb-1">
            <v-icon
              size="small"
              icon="svg:location"
              class="primary-icon translate-y-[-1px] mr-1"
            ></v-icon>
            <span>{{ item.location }}</span>
          </p>

          <!-- item options -->
          <div class="d-flex justify-space-between">
            <div>
              <v-icon icon="svg:bed" size="small"></v-icon>
              <span class="text-grey text-sm pl-2"
                >{{ item.bed }} {{ Number(item.bed) == 1 ? 'Bed' : 'Beds' }}</span
              >
            </div>
            <!-- ------------------------------------------------------------- -->
            <div>
              <v-icon icon="svg:bath" size="small"></v-icon>
              <span class="text-grey text-sm pl-2">{{ item.bath }} Bath</span>
            </div>
            <!-- ------------------------------------------------------------- -->
            <div>
              <v-icon icon="svg:parking" size="small"></v-icon>
              <span class="text-grey text-sm pl-2"
                >{{ item.parking }} {{ Number(item.parking) == 1 ? 'Parking' : 'Parkings' }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',

  data() {
    return {
      items: [
        {
          imageUrl:
            'https://static.vecteezy.com/system/resources/previews/023/308/053/non_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-free-photo.jpg',
          title: 'Premium modern house 1',
          location: 'Duo Tower, Penn Street, London',
          per: 'month',
          price: 850,
          bed: 4,
          bath: 2,
          parking: 1,
          saved: false,
        },
        {
          imageUrl:
            'https://cdn.houseplansservices.com/content/driar5vsn9j6vdvam33js5o8bo/w991x660.jpg?v=2',
          title: 'Premium modern house 2',
          location: 'Duo Tower, Penn Street, London',
          per: 'month',
          price: 1020,
          bed: 5,
          bath: 3,
          parking: 3,
          saved: false,
        },
        {
          imageUrl: 'https://photos.zillowstatic.com/fp/da982f8d7dcdd0f81daa8a9d76e672c9-p_e.jpg',
          title: 'Premium modern house 3',
          location: 'Duo Tower, Penn Street, London',
          per: 'month',
          price: 600,
          bed: 1,
          bath: 1,
          parking: 1,
          saved: false,
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
.slider_component {
  overflow: hidden;
  .slider {
    &_box {
      max-width: 100%;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }
    &_item {
      img {
        object-fit: cover;
      }
    }
  }
}
</style>
