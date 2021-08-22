<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M17 73.588V26.374a4.367 4.367 0 0 1 6.563-3.775l40.6 23.606a4.368 4.368 0 0 1 0 7.552l-40.6 23.607a4.334 4.334 0 0 1-2.188.6A4.373 4.373 0 0 1 17 73.588zM71 77a3 3 0 0 1-3-3V25a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v49a3 3 0 0 1-3 3z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcStepForward', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>