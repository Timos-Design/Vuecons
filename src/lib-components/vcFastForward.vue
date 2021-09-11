<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M50.661 73.588V26.374a4.368 4.368 0 0 1 6.563-3.776l40.6 23.607a4.368 4.368 0 0 1 0 7.552l-40.6 23.607a4.331 4.331 0 0 1-2.188.6 4.373 4.373 0 0 1-4.375-4.376zM0 73.588V26.374a4.368 4.368 0 0 1 6.563-3.776l40.6 23.607a4.368 4.368 0 0 1 0 7.552l-40.6 23.607a4.331 4.331 0 0 1-2.188.6A4.373 4.373 0 0 1 0 73.588z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcFastForward', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>