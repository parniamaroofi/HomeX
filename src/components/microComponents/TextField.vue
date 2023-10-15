<template>
  <div class="text_field">
    <v-text-field
      variant="solo"
      :type="type ? type : 'text'"
      :label="label ? label : undefined"
      :density="density ? density : 'default'"
      :hide-details="hideDetails ? hideDetails : false"
      :placeholder="placeholder ? placeholder : undefined"
      :append-icon="appendIcon ? appendIcon : undefined"
      :prepend-icon="prependIcon ? prependIcon : undefined"
      :prepend-inner-icon="prependInnerIcon ? prependInnerIcon : undefined"
      @input="updateValue"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'TextField',

  props: [
    'type',
    'label',
    'density',
    'hideDetails',
    'placeholder',
    'appendIcon',
    'prependIcon',
    'prependInnerIcon',
  ],

  mounted() {},

  methods: {
    updateValue(event) {
      this.$emit('input', event);
    },
  },
};
</script>

<style lang="scss">
.text_field {
  .v-field {
    box-shadow: none;
    border-radius: 10px;
    background-color: #f5f5f5;
  }
}
</style>
