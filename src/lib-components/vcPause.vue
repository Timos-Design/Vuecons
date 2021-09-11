<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M59 78a3 3 0 0 1-3-3V26a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v49a3 3 0 0 1-3 3zm-27 0a3 3 0 0 1-3-3V26a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v49a3 3 0 0 1-3 3z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcPause', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>