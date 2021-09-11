<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M7 84a7.009 7.009 0 0 1-7-7V22l26.585 26.587-18.8 18.8a3.971 3.971 0 0 0-1.172 2.827 3.975 3.975 0 0 0 1.172 2.829 3.973 3.973 0 0 0 2.829 1.171 3.973 3.973 0 0 0 2.829-1.171l18.8-18.8 4.911 4.911a17.881 17.881 0 0 0 12.728 5.272 17.882 17.882 0 0 0 12.727-5.272l4.945-4.943 18.833 18.831a3.965 3.965 0 0 0 2.827 1.171 3.971 3.971 0 0 0 2.828-1.171 3.976 3.976 0 0 0 1.172-2.829 3.972 3.972 0 0 0-1.172-2.827L73.211 48.555l26.79-26.791V77a7.008 7.008 0 0 1-7 7zm35.1-29.9L5.223 17.223A7.028 7.028 0 0 1 7 17h86a7.01 7.01 0 0 1 1.585.18L57.66 54.104a10.965 10.965 0 0 1-7.777 3.223A10.965 10.965 0 0 1 42.1 54.1z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcMail', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>