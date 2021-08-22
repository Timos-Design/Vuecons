<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M25.5 22.6h49a3 3 0 0 1 3 3v49a3 3 0 0 1-3 3h-49a3 3 0 0 1-3-3v-49a3 3 0 0 1 3-3z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcStop', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>