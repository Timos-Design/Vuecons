<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M10.868 89.261a4.353 4.353 0 0 1-4.347-4.347v-4.347a4.353 4.353 0 0 1 4.347-4.349h5.436A11.969 11.969 0 0 0 28.26 64.262v-7.474a4.488 4.488 0 0 0-4.352-4.482H6.521A6.52 6.52 0 0 1 0 45.785v-28.26a6.522 6.522 0 0 1 6.521-6.523h28.262a6.522 6.522 0 0 1 6.521 6.523v28.26a6.542 6.542 0 0 1-.042.743q.042.711.042 1.429v17.391a23.746 23.746 0 0 1-7 16.91 23.753 23.753 0 0 1-16.908 7h-2.174z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="M69.563 89.261a4.353 4.353 0 0 1-4.347-4.347v-4.347a4.353 4.353 0 0 1 4.347-4.349h5.436a11.969 11.969 0 0 0 11.956-11.956v-7.474a4.488 4.488 0 0 0-4.352-4.482H65.216a6.52 6.52 0 0 1-6.521-6.521v-28.26a6.522 6.522 0 0 1 6.521-6.523h28.262a6.522 6.522 0 0 1 6.521 6.523v28.26a6.542 6.542 0 0 1-.042.743q.042.711.042 1.429v17.391a23.746 23.746 0 0 1-7 16.91 23.753 23.753 0 0 1-16.908 7h-2.174z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcQuoteRight', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>