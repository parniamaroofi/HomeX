<template>
  <div class="select_component">
    <v-select
      variant="solo"
      v-model="value"
      :items="items ? items : undefined"
      :label="label ? label : undefined"
      :density="density ? density : 'default'"
      :hide-details="hideDetails ? hideDetails : false"
      :placeholder="placeholder ? placeholder : undefined"
      :append-icon="appendIcon ? appendIcon : undefined"
      :prepend-icon="prependIcon ? prependIcon : undefined"
      :prepend-inner-icon="prependInnerIcon ? prependInnerIcon : undefined"
      @update:modelValue="updateValue"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'Select',

  props: [
    'modelValue',
    'items',
    'label',
    'density',
    'hideDetails',
    'placeholder',
    'appendIcon',
    'prependIcon',
    'prependInnerIcon',
  ],

  setup(props) {
    const value = ref(props.modelValue);

    return {
      value,
    };
  },

  created() {},

  methods: {
    updateValue(event) {
      console.log(event);
      this.$emit('update:modelValue', event);
    },
  },
};
</script>

<style lang="scss">
.select_component {
  .v-field {
    box-shadow: none;
    border-radius: 10px;
    background-color: var(--lighten-gray);

    ::placeholder {
      font-size: 0.9rem;
    }

    .v-label {
      color: #9e9e9e;
    }
  }
}
</style>
