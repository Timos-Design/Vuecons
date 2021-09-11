<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M36.765 100H28V86h2.168l30.369-71.545 12.887 5.47L40.45 97.611A3.975 3.975 0 0 1 36.765 100zM27 100h-3V86h3v14zm-4 0h-3V86h3v14zm-4 0h-3V86h3v14zm-4 0h-3V86h3v14zm-4 0H8V86h3v14zm-4 0H4V86h3v14zm-4-.127a4 4 0 0 1-3-3.874v-6a4 4 0 0 1 3-3.874v13.746zm71.206-81.79-12.886-5.47 1.173-2.762 12.886 5.47-1.172 2.761zm1.954-4.6L63.274 8.014l2.19-5.161A4 4 0 0 1 69.149.414a3.978 3.978 0 0 1 1.561.32l5.523 2.344a3.975 3.975 0 0 1 2.146 2.183 3.973 3.973 0 0 1-.027 3.062l-2.19 5.16z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="M95.671 100h-3V86h3v14zm-4 0h-3V86h3v14zm-4 0h-3V86h3v14zm-4 0h-3V86h3v14zm-4 0h-3V86h3v14zm-4 0h-3V86h3v14zm-4 0h-8.765a3.974 3.974 0 0 1-3.685-2.39l-7.145-16.833 7.6-17.916L69.498 86h2.168v14zm25-.126V86.127a4 4 0 0 1 3 3.875v6a4 4 0 0 1-3 3.874zm-56.546-47.25-13.879-32.7 12.887-5.47 8.6 20.254-7.6 17.913zM25.464 18.085l-1.172-2.763 12.886-5.469 1.173 2.761-12.886 5.471zm-1.954-4.6-2.191-5.158a3.976 3.976 0 0 1-.027-3.063 3.979 3.979 0 0 1 2.146-2.183L28.961.737a3.989 3.989 0 0 1 1.561-.32 4 4 0 0 1 3.685 2.439l2.191 5.161z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcHockeySticks', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>