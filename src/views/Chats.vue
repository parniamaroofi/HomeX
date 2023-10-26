<template>
  <div class="chats_list">
    <!-- Header box -->
    <div class="pa-4 pt-1 bg-[--header-bg] h-[100px] d-flex justify-space-between align-center">
      <div class="w-full">
        <Transition name="fade" mode="out-in">
          <!-- Title -->
          <div v-if="!searchMode" key="title" class="text-2xl text-white">
            <v-badge
              v-if="newMessages"
              color="primary"
              :content="`${newMessages} New messages`"
              inline
            >
              <span class="pr-2">Chats</span>
            </v-badge>
          </div>

          <!-- Search field -->
          <div v-else key="search" class="search_field w-full">
            <v-text-field
              placeholder="Search..."
              density="comfortable"
              variant="solo"
              hide-details
              class="mr-4"
              id="search_field"
              v-model="search"
            ></v-text-field>
          </div>
        </Transition>
      </div>

      <!-- Search button -->
      <v-btn @click="openSearch()" color="primary" variant="tonal" class="rounded-[16px]" icon>
        <v-icon class="primary-icon">{{ !searchMode ? 'svg:magnify' : 'mdi-close' }}</v-icon>
      </v-btn>
    </div>

    <!-- Content box -->
    <div class="pa-4 bg-white mt-[-10px] rounded-[--md-radius]">
      <!-- Chat box -->
      <div
        v-for="(item, index) in computedChats"
        :key="index"
        class="hover:bg-[#ccd6fa61] cursor-pointer rounded-[5px] px-1.5"
      >
        <div class="d-flex justify-space-between align-center pt-2.5">
          <div class="d-flex align-center">
            <!-- Profile image -->
            <img :src="item.imageUrl" width="58" height="58" class="rounded-full" />

            <div class="ml-3">
              <!-- Title -->
              <p class="mb-1 text-[1.05rem]">{{ item.chatTitle }}</p>

              <!-- Last message -->
              <div>
                <!-- When there is last message to show -->
                <p v-if="item.hasMessage" class="w-[75%] text-grey text-[0.88rem] text-overflow">
                  <b v-if="item.lastMessage.self">You:</b> {{ item.lastMessage.text }}
                </p>

                <!-- When there is no last message -->
                <p v-else class="text-grey text-sm">No messages</p>
              </div>
            </div>
          </div>

          <div class="text-right">
            <!-- Unseen number -->
            <v-badge
              inline
              color="primary"
              class="mb-2 translate-x-[3px]"
              :content="item.unseen"
              v-if="item.unseen"
            ></v-badge>
            <div v-else class="h-[28px]">&nbsp;</div>

            <!-- Last message time -->
            <p v-if="item.hasMessage" class="text-grey text-xs">{{ item.lastMessage.time }}</p>
          </div>
        </div>
        <v-divider class="mt-2.5" color="#fff"></v-divider>
      </div>

      <div v-if="chats.length && !computedChats.length" class="text-grey text-center mt-10">
        There is no result for <b>"{{ search }}"</b>.
      </div>

      <div v-if="!chats.length" class="text-grey text-center mt-10">
        You have not started any chat yet!
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Chats',

  setup() {
    const searchMode = ref(false);
    const newMessages = ref(0);
    const search = ref('');
    const chats = ref([]);

    return {
      searchMode,
      newMessages,
      search,
      chats,
    };
  },

  created() {
    this.getData();
  },

  methods: {
    test(num) {
      alert(num);
    },
    openSearch() {
      this.searchMode = !this.searchMode;
      this.search = '';
      setTimeout(() => {
        if (this.searchMode) {
          document.querySelector('#search_field').focus();
        }
      }, 400);
    },

    getData() {
      this.$http
        .get('/static/api/chats.json', {
          headers: {
            Authorization: 'Bearer: ' + localStorage.getItem('token'),
          },
        })

        .then((res) => {
          this.newMessages = res.data.newMessages;
          this.chats = res.data.chats;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  computed: {
    computedChats() {
      let filtered = this.chats.filter((x) =>
        x.chatTitle.toLowerCase().includes(this.search.toLowerCase())
      );
      return filtered;
    },
  },
};
</script>

<style lang="scss">
.chats_list {
  .search_field {
    .v-field {
      box-shadow: none;
      border-radius: 16px;
      background-color: #222636;

      ::placeholder {
        font-size: 0.9rem;
        color: #f0f8ff;
      }

      input {
        caret-color: #5378f7;
        color: #fff;
      }
    }
  }
}
</style>
