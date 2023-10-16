import { h } from 'vue';
import bed from '@/components/icons/Bed.vue';
import home from '@/components/icons/Home.vue';
import bell from '@/components/icons/Bell.vue';
import bath from '@/components/icons/Bath.vue';
import parking from '@/components/icons/Parking.vue';
import location from '@/components/icons/Location.vue';
import bookmark from '@/components/icons/Bookmark.vue';

const iconsComponent = {
  bed,
  home,
  bell,
  bath,
  parking,
  location,
  bookmark,
};

const customIcons = {
  component: (props) => h(iconsComponent[props.icon]),
};

export { customIcons /* aliases */ };
