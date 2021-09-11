<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M13.766 81.172a7.06 7.06 0 0 1-4.18-12.751l10.887-8V39.983a29.421 29.421 0 0 1 29.42-29.42 29.419 29.419 0 0 1 29.421 29.421V60.42l10.89 8a7.061 7.061 0 0 1-4.182 12.751z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="M38.222 95.588A17.626 17.626 0 0 1 32.4 84.7h34.992a17.623 17.623 0 0 1-5.822 10.888A17.63 17.63 0 0 1 49.9 100a17.638 17.638 0 0 1-11.678-4.412z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcBell', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>