<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M21.175 100a12.29 12.29 0 0 1-8.732-3.617 12.3 12.3 0 0 1-3.617-8.742V30a12.277 12.277 0 0 1 3.617-8.732 12.262 12.262 0 0 1 8.732-3.621h19.766v10.295h-17.7a4.125 4.125 0 0 0-4.118 4.123v53.52a4.126 4.126 0 0 0 4.118 4.123h53.525a4.127 4.127 0 0 0 4.123-4.123v-53.52a4.126 4.126 0 0 0-4.123-4.123H58.984V17.647H78.82a12.249 12.249 0 0 1 8.737 3.621A12.262 12.262 0 0 1 91.179 30v57.643a12.281 12.281 0 0 1-3.622 8.742 12.277 12.277 0 0 1-8.737 3.617zm25.293-31.859L32.317 54a5 5 0 0 1 0-7.07 5 5 0 0 1 7.075-.006l5.283 5.283V4.996a4.977 4.977 0 0 1 1.46-3.533 4.981 4.981 0 0 1 3.538-1.465 5.006 5.006 0 0 1 5 5v47.857l5.929-5.93a5 5 0 0 1 7.075.006 5 5 0 0 1 0 7.07L53.526 68.142a4.969 4.969 0 0 1-3.533 1.465 4.961 4.961 0 0 1-3.525-1.464z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcDownload', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>