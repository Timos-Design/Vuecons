<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M67.671 98.508V11.94a1.493 1.493 0 0 1 1.493-1.492L96.029 0a1.493 1.493 0 0 1 1.492 1.494V88.06a1.493 1.493 0 0 1-1.492 1.492L69.164 100a1.493 1.493 0 0 1-1.493-1.492zm-31.344-8.956a1.492 1.492 0 0 1-1.491-1.492V1.494A1.492 1.492 0 0 1 36.327 0l26.866 10.448a1.492 1.492 0 0 1 1.492 1.492v86.568A1.492 1.492 0 0 1 63.193 100zM2 98.508V11.94a1.492 1.492 0 0 1 1.492-1.492L30.358 0a1.494 1.494 0 0 1 1.494 1.494V88.06a1.494 1.494 0 0 1-1.494 1.492L3.491 100A1.492 1.492 0 0 1 2 98.508z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcMap', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>