<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M47.765 99.589H39v-14h2.168l30.369-71.545 12.887 5.47L51.45 97.2a3.975 3.975 0 0 1-3.685 2.389zm-9.765 0h-3v-14h3v14zm-4 0h-3v-14h3v14zm-4 0h-3v-14h3v14zm-4 0h-3v-14h3v14zm-4 0h-3v-14h3v14zm-4 0h-3v-14h3v14zm-4-.127a4 4 0 0 1-3-3.874v-6a4 4 0 0 1 3-3.874V99.46zm71.206-81.79-12.886-5.47 1.173-2.762 12.886 5.47-1.172 2.761zm1.954-4.6L74.274 7.603l2.19-5.161A4 4 0 0 1 80.149.003a3.978 3.978 0 0 1 1.561.32l5.523 2.344a3.975 3.975 0 0 1 2.146 2.183 3.973 3.973 0 0 1-.027 3.062l-2.19 5.16z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcHockeyStick', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>