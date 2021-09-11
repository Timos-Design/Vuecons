<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M64.419 100H15l1.378-7.72 11.785-3.859a6.309 6.309 0 0 0 2.068-1.1 3.9 3.9 0 0 0 1.172-2.205l16.471-70.5a2.482 2.482 0 0 0-.172-1.964 3.879 3.879 0 0 0-1.547-1.072l-11.785-4 1.241-7.582h49.414l-1.24 7.585-7.93 2.688q-1.034.345-2.171.62a12.288 12.288 0 0 0-2.136.724 6.707 6.707 0 0 0-1.793 1.171 3.59 3.59 0 0 0-1.068 1.826l-16.471 70.5a3.308 3.308 0 0 0 .1 2.136 3 3 0 0 0 1.62 1.172l11.854 3.859z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcItalic', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>