<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M72.167 46.205a4.368 4.368 0 0 1 0 7.552l-40.6 23.607a4.368 4.368 0 0 1-6.563-3.776V26.374a4.368 4.368 0 0 1 6.559-3.774z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcPlay', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>