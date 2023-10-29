<template>
  <div
    class="chat_content relative"
    @scroll="computedGoDownButton()"
    :class="{
      hasReplyBox: hasReply, // set appropriate div height when the replay box is displayed
      'scroll-smooth': smoothScroll, // defines the behavior of the scroll
    }"
  >
    <!-- NO CONTENT box when there is no messages for a chat -->
    <div
      class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      v-if="chatData && chatData.messages && !chatData.messages.length"
    >
      <v-chip small><span class="text-grey">There are no messages yet...</span></v-chip>
    </div>

    <!-- Box of Messages by the date they were sent -->
    <div
      class="messages_by_date text-center"
      v-for="(item, index) in messages"
      :key="index"
      :id="item.date"
    >
      <!-- The sticky date -->
      <v-chip
        small
        @click="goToDate(item.date)"
        class="date_chip text-white sticky top-[10px] z-10 my-4"
      >
        <span class="text-xs">{{ formattedDate(item.date) }}</span>
      </v-chip>

      <!-- Message box -->
      <div v-for="(message, index2) in item.messages" :key="index2" :id="message.id">
        <v-row @dblclick="doReplyMessage(message)">
          <v-col class="py-1">
            <div :style="message.id == repliedMessageID ? boldMessageStyle : ''">
              <v-menu :location="message.self ? 'start' : 'end'">
                <template v-slot:activator="{ props }">
                  <div class="w-fit" :class="!message.self ? 'mr-auto' : 'ml-auto'">
                    <!-- Text message -->
                    <div
                      class="message_box w-fit min-w-[50px] max-w-[300px] text-[0.83rem] text-left mt-1"
                      :class="{
                        own_message: message.self,
                        user_message: !message.self,
                        'mb-1.5': !computedMessageTime(item.messages, index2),
                      }"
                    >
                      <!-- Replied message -->
                      <div
                        v-if="message.repliedMessage && message.repliedMessage.text"
                        class="replied_message cursor-pointer text-left"
                        @click="showMessage(message.repliedMessage.id)"
                      >
                        <p class="message_sender mb-0">
                          {{ message.repliedMessage.senderName }}
                        </p>
                        <p
                          class="message_text mb-0"
                          :dir="messageDirection(message.repliedMessage.text)"
                        >
                          {{
                            message.repliedMessage.text.length > 30
                              ? `${removeBrTags(message.repliedMessage.text).slice(0, 30)}...`
                              : removeBrTags(message.repliedMessage.text)
                          }}
                        </p>
                      </div>

                      <div v-bind="props" class="d-flex">
                        <div class="d-flex" style="align-items: center">
                          <!-- Message box when message type is TEXT -->
                          <span
                            :dir="messageDirection(message.text)"
                            v-html="message.text"
                            class="text-left"
                          ></span>
                        </div>

                        <v-spacer></v-spacer>

                        <div class="d-flex flex-column justify-end">
                          <span v-if="message.self" class="pl-4">
                            <div>
                              <v-icon size="sm" color="#fff" v-if="message.seen"
                                >mdi-check-all</v-icon
                              >
                              <v-icon size="sm" color="#fff" v-else>mdi-check</v-icon>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Message time -->
                    <div
                      v-if="computedMessageTime(item.messages, index2)"
                      class="text-xs text-grey my-1"
                      style="user-select: none"
                      :class="message.self ? ' text-right' : 'text-left'"
                    >
                      {{ message.time }}
                    </div>
                  </div>
                </template>

                <v-card class="pa-2 rounded-lg">
                  <div
                    class="pa-2 d-flex align-center hover:bg-[#ebebeb] rounded-md cursor-pointer"
                  >
                    <v-icon icon="svg:reply" size="small" class="mr-2"></v-icon>
                    <span class="text-[0.9rem]">Reply</span>
                  </div>

                  <div
                    class="pa-2 d-flex align-center hover:bg-[#ebebeb] rounded-md cursor-pointer"
                  >
                    <v-icon icon="svg:copy" size="small" class="mr-2"></v-icon>
                    <span class="text-[0.9rem]">Copy</span>
                  </div>

                  <div
                    class="pa-2 d-flex align-center hover:bg-[#ebebeb] rounded-md cursor-pointer"
                  >
                    <v-icon icon="svg:trash" size="small" class="mr-2"></v-icon>
                    <span class="text-[0.9rem]">Delete</span>
                  </div>
                </v-card>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import chatScript from './ChatContent.js';
export default chatScript;
</script>

<style lang="scss">
@import '@/assets/chat.scss';
</style>
