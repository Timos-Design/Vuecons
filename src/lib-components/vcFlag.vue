<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M20.448 99.999a3.193 3.193 0 0 1-3.2-3.191V15.88a8.507 8.507 0 0 1-4.254-7.373 8.509 8.509 0 0 1 8.514-8.508 8.509 8.509 0 0 1 8.508 8.508 8.513 8.513 0 0 1-4.256 7.374v80.927a3.191 3.191 0 0 1-3.189 3.191z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="M65.666 60.613c-5.379 0-9.73-1.45-13.937-2.852-3.709-1.236-7.213-2.4-11.033-2.4a43.648 43.648 0 0 0-14.93 2.412V15.881a8.561 8.561 0 0 0 4.18-6.225 29.917 29.917 0 0 1 6.811-.772c5.377 0 9.729 1.45 13.936 2.852 3.709 1.236 7.213 2.4 11.031 2.4 6.566 0 13.232-2.746 17.674-4.812a4.844 4.844 0 0 1 2.043-.457 4.843 4.843 0 0 1 4.834 4.843v36.74a4.827 4.827 0 0 1-2.092 3.986c-6.151 4.215-12.032 6.177-18.517 6.177z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcFlag', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>