<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M30.436 11a4.353 4.353 0 0 1 4.347 4.347v4.347a4.353 4.353 0 0 1-4.347 4.349H25a11.969 11.969 0 0 0-11.956 11.956v7.474a4.488 4.488 0 0 0 4.352 4.482h17.387a6.52 6.52 0 0 1 6.521 6.521v28.26a6.522 6.522 0 0 1-6.521 6.523H6.521A6.522 6.522 0 0 1 0 82.736v-28.26a6.542 6.542 0 0 1 .042-.743Q0 53.022 0 52.304V34.913a23.746 23.746 0 0 1 7-16.91 23.753 23.753 0 0 1 16.908-7h2.174z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="M89.132 11a4.353 4.353 0 0 1 4.347 4.347v4.347a4.353 4.353 0 0 1-4.347 4.349h-5.436A11.969 11.969 0 0 0 71.74 35.999v7.474a4.488 4.488 0 0 0 4.352 4.482h17.387A6.52 6.52 0 0 1 100 54.476v28.26a6.522 6.522 0 0 1-6.521 6.523H65.217a6.522 6.522 0 0 1-6.521-6.523v-28.26a6.542 6.542 0 0 1 .042-.743q-.042-.711-.042-1.429V34.913a23.746 23.746 0 0 1 7-16.91 23.753 23.753 0 0 1 16.908-7h2.174z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcQuoteLeft', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>