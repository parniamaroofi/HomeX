import { h } from 'vue';
import bed from '@/components/icons/Bed.vue';
import chat from '@/components/icons/Chat.vue';
import area from '@/components/icons/Area.vue';
import home from '@/components/icons/Home.vue';
import bell from '@/components/icons/Bell.vue';
import bath from '@/components/icons/Bath.vue';
import send from '@/components/icons/Send.vue';
import user from '@/components/icons/User.vue';
import label from '@/components/icons/Label.vue';
import phone from '@/components/icons/Phone.vue';
import parking from '@/components/icons/Parking.vue';
import location from '@/components/icons/Location.vue';
import bookmark from '@/components/icons/Bookmark.vue';
import document from '@/components/icons/Document.vue';
import chevronLeft from '@/components/icons/ChevronLeft.vue';
import bookmarkFilled from '@/components/icons/BookmarkFilled.vue';

const iconsComponent = {
  bed,
  chat,
  area,
  home,
  bell,
  bath,
  send,
  user,
  label,
  phone,
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
