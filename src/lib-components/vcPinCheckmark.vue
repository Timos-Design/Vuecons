<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M50.481 100c-3.483 0-11.71-10.534-20-25.617-7-12.727-14.479-29.893-14.479-39.9A34.52 34.52 0 0 1 50.481 0a34.52 34.52 0 0 1 34.482 34.48c0 10.013-7.479 27.178-14.479 39.9C62.189 89.466 53.963 100 50.481 100zM32.187 32.077a4.6 4.6 0 0 0-3.275 1.357 4.635 4.635 0 0 0 0 6.547l8.889 8.886 3.273 3.276a4.6 4.6 0 0 0 3.273 1.356 4.6 4.6 0 0 0 3.273-1.356l24.322-24.322a4.641 4.641 0 0 0 0-6.549 4.606 4.606 0 0 0-3.274-1.355 4.608 4.608 0 0 0-3.275 1.355L44.347 42.32l-8.887-8.886a4.6 4.6 0 0 0-3.272-1.357z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcPinCheckmark', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>