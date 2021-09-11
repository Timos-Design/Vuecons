<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M44.671 91.669v-45.58a21.742 21.742 0 0 0 5 .581 21.769 21.769 0 0 0 5-.581v45.58c0 1.774-3.126 8.333-5 8.333s-5-6.559-5-8.333zm-10.326-54.68A21.525 21.525 0 0 1 28 21.668a21.533 21.533 0 0 1 6.345-15.321A21.537 21.537 0 0 1 49.668.001a21.523 21.523 0 0 1 15.318 6.347 21.529 21.529 0 0 1 6.345 15.321 21.525 21.525 0 0 1-6.345 15.321 21.513 21.513 0 0 1-15.318 6.347 21.528 21.528 0 0 1-15.323-6.348zm15.323-24.488c0 2.3 2.99 4.165 6.665 4.165S63 14.801 63 12.501s-2.99-4.165-6.667-4.165-6.665 1.87-6.665 4.165z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcMapPin', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>