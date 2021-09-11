<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M90.625 95A4.38 4.38 0 0 0 95 90.625V87.5a20 20 0 0 0-20-20h-9.706a38.979 38.979 0 0 1-30.585 0H25a20 20 0 0 0-20 20v3.125A4.38 4.38 0 0 0 9.375 95h81.25m0 5H9.375A9.377 9.377 0 0 1 0 90.625V87.5a25 25 0 0 1 25-25h10.762a34 34 0 0 0 28.477 0H75a25 25 0 0 1 25 25v3.125A9.377 9.377 0 0 1 90.625 100zM50 51.25a23.132 23.132 0 0 0 9-44.434 23.131 23.131 0 0 0-18 42.618 22.96 22.96 0 0 0 9 1.816m0 5a28.125 28.125 0 1 1 28.125-28.125A28.132 28.132 0 0 1 50 56.25z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcUser', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>