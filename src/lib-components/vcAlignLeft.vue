<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M5 86a5 5 0 0 1-5-5v-2a5 5 0 0 1 5-5h90a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5zm0-20a5 5 0 0 1-5-5v-2a5 5 0 0 1 5-5h44a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5zm0-20a5 5 0 0 1-5-5v-2a5 5 0 0 1 5-5h69a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5zm0-20a5 5 0 0 1-5-5v-2a5 5 0 0 1 5-5h30a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcAlignLeft', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>