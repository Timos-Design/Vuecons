<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M50.48 100c-3.482 0-11.707-10.534-20-25.617-7-12.727-14.477-29.893-14.477-39.9A34.519 34.519 0 0 1 50.48 0a34.522 34.522 0 0 1 34.484 34.481c0 10.011-7.48 27.176-14.479 39.9C62.189 89.466 53.963 100 50.48 100zm0-79.312a13.808 13.808 0 0 0-13.791 13.793A13.808 13.808 0 0 0 50.48 48.274a13.809 13.809 0 0 0 13.793-13.793A13.809 13.809 0 0 0 50.48 20.688z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcPin', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>