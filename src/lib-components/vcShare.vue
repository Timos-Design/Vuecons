<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M25.5 100.006a10.429 10.429 0 0 1-7.422-3.08 10.421 10.421 0 0 1-3.074-7.426v-49a10.419 10.419 0 0 1 3.074-7.422 10.407 10.407 0 0 1 7.422-3.074h16.8v8.752H27.246a3.5 3.5 0 0 0-3.5 3.5V87.75a3.5 3.5 0 0 0 3.5 3.506h45.5a3.509 3.509 0 0 0 3.505-3.506V42.256a3.5 3.5 0 0 0-3.505-3.5H57.631v-8.758h16.865a10.418 10.418 0 0 1 7.427 3.074 10.419 10.419 0 0 1 3.075 7.422v49a10.421 10.421 0 0 1-3.075 7.426 10.44 10.44 0 0 1-7.427 3.08zm20.249-44.463V15.018L40.583 20.2a4.436 4.436 0 0 1-6.285 0 4.462 4.462 0 0 1-1.3-3.15 4.455 4.455 0 0 1 1.3-3.145l12.565-12.6a4.419 4.419 0 0 1 6.28 0l12.555 12.6a4.455 4.455 0 0 1 0 6.295 4.43 4.43 0 0 1-6.28 0l-4.787-4.807v40.15a4.447 4.447 0 0 1-4.441 4.455 4.447 4.447 0 0 1-4.443-4.455z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcShare', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>