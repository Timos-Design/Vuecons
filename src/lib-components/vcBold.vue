<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M56.748 100c21.414 0 34.93-11.296 34.93-28.829 0-13.306-10.672-23.354-24.186-23.978v-.554c11.086-1.525 19.54-10.464 19.54-21.691C87.032 9.494 75.182 0 55.5 0H9v100zM34.433 18.018h14.345c8.524 0 13.514 4.158 13.514 11.157 0 7.207-5.544 11.573-14.761 11.573h-13.1zm0 63.964v-25.78h14.969c10.464 0 16.424 4.574 16.424 12.751 0 8.455-5.821 13.028-16.286 13.028z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcBold', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>