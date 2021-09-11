<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="m76.438 77.364-40.6-23.606a4.369 4.369 0 0 1 0-7.553l40.6-23.607a4.369 4.369 0 0 1 6.563 3.777v47.213a4.373 4.373 0 0 1-4.375 4.374 4.33 4.33 0 0 1-2.188-.598zM20 77a3 3 0 0 1-3-3V25a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v49a3 3 0 0 1-3 3z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcStepBackwards', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>