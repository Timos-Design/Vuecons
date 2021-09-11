<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M16.272 99.999a3.43 3.43 0 0 1-3.432-3.429v-6.863a3.43 3.43 0 0 1 3.432-3.428h67.462a3.428 3.428 0 0 1 3.428 3.428v6.863a3.428 3.428 0 0 1-3.428 3.429zm-1.146-47.791V-.001h20.6v50.024c0 9.421 5.105 15.029 14.307 15.029 9.146 0 14.253-5.609 14.253-15.029V-.001H84.88v52.209c0 18.171-13.8 30.114-34.847 30.114-21.101.001-34.907-11.941-34.907-30.113z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcUnderline', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>