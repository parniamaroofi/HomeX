import { h } from "vue";
import bed from "@/components/icons/Bed.vue";
import chat from "@/components/icons/Chat.vue";
import area from "@/components/icons/Area.vue";
import home from "@/components/icons/Home.vue";
import bell from "@/components/icons/Bell.vue";
import bath from "@/components/icons/Bath.vue";
import send from "@/components/icons/Send.vue";
import user from "@/components/icons/User.vue";
import copy from "@/components/icons/Copy.vue";
import trash from "@/components/icons/Trash.vue";
import reply from "@/components/icons/Reply.vue";
import label from "@/components/icons/Label.vue";
import phone from "@/components/icons/Phone.vue";
import attach from "@/components/icons/Attach.vue";
import magnify from "@/components/icons/Magnify.vue";
import parking from "@/components/icons/Parking.vue";
import location from "@/components/icons/Location.vue";
import bookmark from "@/components/icons/Bookmark.vue";
import document from "@/components/icons/Document.vue";
import chevronLeft from "@/components/icons/ChevronLeft.vue";
import bookmarkFilled from "@/components/icons/BookmarkFilled.vue";

const iconsComponent = {
  bed,
  chat,
  area,
  home,
  bell,
  bath,
  send,
  user,
  copy,
  trash,
  reply,
  label,
  phone,
  attach,
  magnify,
  parking,
  location,
  bookmark,
  document,
  chevronLeft,
  bookmarkFilled,
};

const customIcons = {
  component: (props) => h(iconsComponent[props.icon]),
};

export { customIcons /* aliases */ };
