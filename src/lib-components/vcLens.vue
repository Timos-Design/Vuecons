<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M71.772 71.412A41.613 41.613 0 0 1 3.803 26.34a41.613 41.613 0 0 1 77.115 31.306 41.34 41.34 0 0 1-9.146 13.765zM23.7 23.34a26.381 26.381 0 1 0 37.31 0 26.411 26.411 0 0 0-37.308.003z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="m70.239 56.627 26.912 26.912a8.783 8.783 0 0 1-12.421 12.42L57.818 69.049z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcLens', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>