import { h } from 'vue';
import bed from '@/components/icons/Bed.vue';
import chat from '@/components/icons/Chat.vue';
import area from '@/components/icons/Area.vue';
import home from '@/components/icons/Home.vue';
import bell from '@/components/icons/Bell.vue';
import bath from '@/components/icons/Bath.vue';
import label from '@/components/icons/Label.vue';
import phone from '@/components/icons/Phone.vue';
import parking from '@/components/icons/Parking.vue';
import location from '@/components/icons/Location.vue';
import bookmark from '@/components/icons/Bookmark.vue';
import chevronLeft from '@/components/icons/ChevronLeft.vue';

const iconsComponent = {
  bed,
  chat,
  area,
  home,
  bell,
  bath,
  label,
  phone,
  parking,
  location,
  bookmark,
  chevronLeft,
};

const customIcons = {
  component: (props) => h(iconsComponent[props.icon]),
};

export { customIcons /* aliases */ };
