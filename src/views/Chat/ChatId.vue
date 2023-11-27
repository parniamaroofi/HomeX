<template>
  <div class="chat_id" v-if="isLoaded">
    <!-- Header box -->
    <div
      class="pa-4 pt-1 bg-[--header-bg] h-[100px] d-flex justify-space-between align-center"
    >
      <v-btn
        variant="tonal"
        color="white"
        width="45"
        height="45"
        icon
        @click="$router.push('/chats')"
        ><v-icon class="white-icon">svg:chevronLeft</v-icon></v-btn
      >

      <div class="text-center">
        <p class="text-white text-[18px]">{{ chatData.chatTitle }}</p>
        <p v-if="!chatData.isOnline" class="text-grey text-sm">
          {{ chatData.lastseen }}
        </p>
        <p v-else class="text-primary text-sm">Online</p>
        <!-- <p class="text-grey text-sm">Is typing...</p> -->
      </div>

      <img
        :src="chatData.imageUrl"
        width="45"
        height="45"
        class="rounded-full"
      />
    </div>

    <!-- Content box -->
    <div class="pa-3 pt-1 bg-white mt-[-12px] rounded-[--md-radius]">
      <chat-content
        class="chat_body"
        :class="{
          hasReplyBox: hasReply, // set appropriate div height when the replay box is displayed
          'scroll-smooth': smoothScroll, // defines the behavior of the scroll
        }"
        :chatData="chatData"
        @doReply="doReply"
      />

      <!-- Reply box -->
      <div
        v-if="hasReply"
        @click="showMessage(selectedMessage.id)"
        class="pa-4 my-2 h-[54px] bg-[--lighten-gray] rounded-[--sm-radius] d-flex align-center justify-space-between shadow-inner"
      >
        <div>
          <v-icon size="large" color="primary" class="scale-x-[-1]"
            >mdi-reply</v-icon
          >
        </div>

        <div class="mx-4 text-[0.92rem] w-[75%]">
          <!-- Sender name -->
          <p class="text-primary">{{ selectedMessage.senderName }}</p>
          <!-- Message text -->
          <p class="text-sm text-grey text-overflow">
            {{ removeBrTags(selectedMessage.text) }}
          </p>
        </div>

        <!-- Close icon -->
        <div>
          <v-icon @click="closeReply" color="grey">mdi-close</v-icon>
        </div>
      </div>

      <!-- Footer box -->
      <div class="d-flex">
        <v-textarea
          rows="1"
          no-resize
          hideDetails
          variant="solo"
          id="message_field"
          placeholder="Message..."
          class="custom_textarea w-full"
          v-model.trim="messageField"
          @click="doScroll"
        >
          <template v-slot:prepend-inner>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-icon icon="svg:attach" class="mr-2" v-bind="props"></v-icon>
              </template>

              <v-card class="pa-3 rounded-lg">
                <div @click="openMapDialog()">
                  <v-icon icon="svg:location" class="gray-icon mr-1"></v-icon>
                  <span class="text-sm text-[#868686]">Location</span>
                </div>
              </v-card>
            </v-menu>
          </template>
        </v-textarea>
        <v-btn
          @click="messageField ? sendMessage() : ''"
          color="primary"
          class="rounded-[10px] ml-2"
          width="56"
          height="56"
          icon
          flat
        >
          <v-icon class="white-icon" size="x-large" icon="svg:send"></v-icon>
        </v-btn>
      </div>
    </div>

    <v-dialog
      v-model="mapDialog"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <div class="lg:max-w-[400px] mx-auto w-full h-full relative">
          <Map />

          <div class="absolute right-4 bottom-[110px] z-[400]">
            <v-btn icon color="white" class="ml-3">
              <v-icon class="gray-icon">svg:currentLocation</v-icon>
            </v-btn>
          </div>

          <div class="w-full d-flex gap-x-3 pa-4">
            <v-btn icon color="primary" flat>
              <v-icon class="white-icon">svg:location</v-icon>
            </v-btn>
            <div>
              <p class="text-[#868686]">Send selected location</p>
              <p class="text-[#868686] text-sm">
                (35.796198683501956, 51.417160039142345)
              </p>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid"; // id generator package
import Map from "@/components/Map.vue";
import ChatContent from "./ChatContent.vue";
import TextField from "@/components/microComponents/TextField.vue";
export default {
  name: "ChatId",

  components: {
    Map,
    TextField,
    ChatContent,
  },

  setup() {
    const map = ref(null);
    const chatData = ref({});
    const hasReply = ref(false);
    const isLoaded = ref(false);
    const mapDialog = ref(false);
    const messageField = ref("");
    const selectedMessage = ref({});
    const smoothScroll = ref(false);

    return {
      map,
      chatData,
      hasReply,
      isLoaded,
      mapDialog,
      messageField,
      smoothScroll,
      selectedMessage,
    };
  },

  created() {
    this.getData();

    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(latitude);

      // Do something with the position
    };

    const error = (err) => {
      console.log("error");
    };

    // This will open permission popup
    navigator.geolocation.getCurrentPosition(success, error);
  },

  mounted() {
    this.emitter.on("doScrollToEnd", () => {
      this.scrollToEnd();
    });

    setTimeout(() => {
      this.smoothScroll = true;
    }, 1000);
  },

  onBeforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },

  methods: {
    getData() {
      this.$http
        .get("/static/api/chats.json", {
          headers: {
            Authorization: "Bearer: " + localStorage.getItem("token"),
          },
        })

        .then((res) => {
          this.chatData = res.data.chats.filter(
            (x) => x.id == this.$route.params.id
          )[0];
          setTimeout(() => {
            this.isLoaded = true;
          }, 200);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // This function is called to get current time
    currentTime() {
      let today = new Date();
      let hour, minute;
      hour = ("0" + today.getHours()).slice(-2);
      minute = ("0" + today.getMinutes()).slice(-2);

      return hour + ":" + minute;
    },

    // This function is called to get current date
    currentDate() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth()).padStart(2, "0");
      let yyyy = today.getFullYear();

      return yyyy + "-" + mm + "-" + dd;
    },

    // this function scroll the page to the bottom in every refreshing
    scrollToEnd() {
      var container = document.querySelector(".chat_body");
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    },

    sendMessage() {
      let message = {
        id: uuidv4(),
        self: true,
        senderName: "You",
        text: this.parsedText,
        time: this.currentTime(),
        repliedMessage: this.hasReply ? this.selectedMessage : {},
      };

      if (this.chatData.messages.length) {
        // Checks if there are any messages or not
        let lastIndex = this.chatData.messages.length - 1; // Index of the last object in messages array

        if (
          this.currentDate() == this.chatData.messages[lastIndex].date // Checks today's date and the date of the last message
        ) {
          // In case of equality, the new message object will be pushed in messages of the last object of messagesByDate
          this.chatData.messages[lastIndex].messages.push(message);
        } else {
          // If not equal, a new object will be created with today's date and the new message object will be pushed in its messages.
          this.chatData.messages.push({
            date: this.currentDate(),
            messages: [message],
          });
        }
      } else {
        // If no message already exists, a new object will be created with today's date and the new message object will be pushed in its messages.
        this.chatData.messages.push({
          date: this.currentDate(),
          messages: [message],
        });
      }

      this.hasReply = false;
      this.messageField = "";
      this.selectedMessage = {};
      document.getElementById("message_field").focus();
      setTimeout(() => {
        this.scrollToEnd();
      }, 5);
    },

    // This function is called to open reply box and send a reply message
    doReply(message) {
      this.hasReply = true;
      this.selectedMessage = message;
      document.getElementById("message_field").focus();
      setTimeout(() => {
        this.scrollToEnd();
      }, 10);

      // let content = document.querySelector('.chat_body');
      // if (content.scrollTop > content.scrollHeight - 500) {
      //   setTimeout(() => {
      //     this.scrollToEnd();
      //   }, 800);
      // }
    },

    closeReply() {
      this.hasReply = false;
      this.selectedMessage = "";
    },

    showMessage(id) {
      this.emitter.emit("showRepliedMessage", id);
    },

    removeBrTags(str) {
      if (str) {
        return str.replaceAll("<br>", " ");
      }
    },

    doScroll() {
      setTimeout(() => {
        this.scrollToEnd();
      }, 500);
    },

    openMapDialog() {
      this.mapDialog = true;
    },
  },

  computed: {
    parsedText() {
      return this.messageField.replace(/\n/g, "<br>");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/chat.scss";
</style>
