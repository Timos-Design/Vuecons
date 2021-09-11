<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="m40.578 88.444-4.317-33.7-31.3-12.84a7.993 7.993 0 0 1 .961-15.118l83.964-22.5a7.988 7.988 0 0 1 10 6.547 7.817 7.817 0 0 1-.994 5.3L55.426 91.414a7.8 7.8 0 0 1-6.863 4 7.92 7.92 0 0 1-7.985-6.97z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcLocationArrow', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>