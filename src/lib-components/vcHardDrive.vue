<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M6.187 74.485A6.193 6.193 0 0 1 0 68.3V46.65c0-2.035 12.248-16.351 12.372-16.495 1.035-1.543 3.974-2.063 5.155-2.063h8.243A85.371 85.371 0 0 1 49.485 25a85.36 85.36 0 0 1 23.717 3.093h9.272c1.011 0 4.11.489 5.155 2.063.125.142 12.4 14.449 12.371 16.495-.023 1.927 0 2.057 0 2.062V68.3a6.192 6.192 0 0 1-6.186 6.185zm25.773-13.4a4.128 4.128 0 0 0 4.123 4.124 4.127 4.127 0 0 0 4.124-4.124 4.128 4.128 0 0 0-4.124-4.124 4.129 4.129 0 0 0-4.123 4.122zm-22.681 0a4.128 4.128 0 0 0 4.124 4.124h9.278a4.127 4.127 0 0 0 4.124-4.124 4.128 4.128 0 0 0-4.124-4.124h-9.278a4.129 4.129 0 0 0-4.124 4.122zm6.186-22.681c0 4.547 15.261 8.247 34.02 8.247s34.021-3.7 34.021-8.247-15.262-8.247-34.021-8.247-34.02 3.698-34.02 8.243zm23.711 0c0-1.708 4.616-3.093 10.309-3.093s10.31 1.385 10.31 3.093-4.615 3.093-10.31 3.093-10.309-1.386-10.309-3.097z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcHardDrive', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>