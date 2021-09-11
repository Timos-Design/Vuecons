<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M66.669 94.444V77.776H33.333a11.113 11.113 0 0 1-11.112-11.11V33.333H5.555A5.555 5.555 0 0 1 0 27.778a5.555 5.555 0 0 1 5.555-5.555h16.666V5.555A5.556 5.556 0 0 1 27.781 0a5.555 5.555 0 0 1 5.553 5.555v16.668H66.67a11.113 11.113 0 0 1 11.11 11.11v33.333h16.668a5.556 5.556 0 0 1 5.556 5.555 5.556 5.556 0 0 1-5.556 5.555H77.78v16.668a5.554 5.554 0 0 1-5.558 5.555 5.554 5.554 0 0 1-5.553-5.555zM33.333 61.266a5.6 5.6 0 0 0 5.558 5.4h27.778V38.732a5.6 5.6 0 0 0-5.558-5.4H33.333z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcCrop', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>