<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="m93.438 77.364-40.6-23.607a4.366 4.366 0 0 1 0-7.551l40.6-23.607a4.367 4.367 0 0 1 6.563 3.775v47.214a4.373 4.373 0 0 1-4.374 4.374 4.332 4.332 0 0 1-2.189-.598zm-50.661 0-40.6-23.607a4.366 4.366 0 0 1 0-7.551l40.6-23.607a4.367 4.367 0 0 1 6.563 3.775v47.214a4.373 4.373 0 0 1-4.374 4.374 4.332 4.332 0 0 1-2.189-.598z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcFastBackward', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>