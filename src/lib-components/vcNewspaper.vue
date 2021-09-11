<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M72.581 90.646H6.452A6.459 6.459 0 0 1 0 84.193V16.452a6.459 6.459 0 0 1 6.452-6.453h67.741a6.459 6.459 0 0 1 6.452 6.453v11.289h12.9a6.459 6.459 0 0 1 6.451 6.453v50a6.459 6.459 0 0 1-6.451 6.453zm8.064-13.711a5.651 5.651 0 0 0 5.646 5.646 5.652 5.652 0 0 0 5.646-5.646v-39.92a2.827 2.827 0 0 0-2.824-2.822h-8.468zM8.064 21.29v58.064a3.231 3.231 0 0 0 3.227 3.226h61.29V21.29a3.231 3.231 0 0 0-3.227-3.226H11.291a3.231 3.231 0 0 0-3.227 3.227zm12.1 45.16a4.03 4.03 0 0 1-4.031-4.031 4.032 4.032 0 0 1 4.031-4.034h12.9a4.034 4.034 0 0 1 4.034 4.034 4.032 4.032 0 0 1-4.034 4.031zm0-16.127a4.032 4.032 0 0 1-4.031-4.034 4.03 4.03 0 0 1 4.031-4.031h35.485a4.031 4.031 0 0 1 4.032 4.031 4.033 4.033 0 0 1-4.032 4.034zm0-16.13a4.032 4.032 0 0 1-4.031-4.034 4.031 4.031 0 0 1 4.031-4.031h27.421a4.032 4.032 0 0 1 4.032 4.031 4.033 4.033 0 0 1-4.032 4.034z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="M80.646 34.194h8.468a2.823 2.823 0 0 1 2.822 2.823v39.92a5.645 5.645 0 1 1-11.29 0z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcNewspaper', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>