<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M87.633 99.999H20a10.011 10.011 0 0 1-10-10v-73.87a16.023 16.023 0 0 1 4.723-11.4 16.015 16.015 0 0 1 11.4-4.725h59.668a4.844 4.844 0 0 1 4.837 4.839v64.516a4.843 4.843 0 0 1-4.837 4.838H30a4.034 4.034 0 0 0-3.871 4v4.9a4 4 0 0 0 4 4h60.506v9.9a3 3 0 0 1-3.002 3.002zM31.175 46.031c-1.75 0-3.174 1.114-3.174 2.484s1.424 2.484 3.174 2.484h44.1c1.75 0 3.174-1.114 3.174-2.484s-1.424-2.484-3.174-2.484zm0-11.293c-1.75 0-3.174 1.114-3.174 2.484s1.424 2.485 3.174 2.485h34.1c1.75 0 3.174-1.115 3.174-2.485s-1.424-2.484-3.174-2.484zm0-11.293c-1.75 0-3.174 1.115-3.174 2.485s1.424 2.484 3.174 2.484h38.1c1.751 0 3.175-1.114 3.175-2.484s-1.424-2.485-3.175-2.485z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="M26.126 74.193h58.055a23.4 23.4 0 0 0-1.415 6.961 14.36 14.36 0 0 0 1.415 5.939H26.126z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcBook', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>