<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M90.625 100H9.375A9.377 9.377 0 0 1 0 90.625V87.5a25 25 0 0 1 25-25h10.762a34 34 0 0 0 28.477 0H75a25 25 0 0 1 25 25v3.125A9.377 9.377 0 0 1 90.625 100zM50 56.25a28.125 28.125 0 1 1 28.125-28.125A28.132 28.132 0 0 1 50 56.25z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcUserFilled', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>