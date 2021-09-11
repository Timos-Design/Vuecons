<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M73.326 97.279H20.419A17.656 17.656 0 0 1 2.781 79.645V26.734A17.656 17.656 0 0 1 20.419 9.1H67.96a19.21 19.21 0 0 0-.513 4.411 19.262 19.262 0 0 0 .512 4.406h-44.6a11.771 11.771 0 0 0-11.76 11.756v47.029a11.774 11.774 0 0 0 11.76 11.76h47.029a11.771 11.771 0 0 0 11.755-11.76V32.1a19.175 19.175 0 0 0 4.411.513 19.2 19.2 0 0 0 4.412-.513v47.541a17.657 17.657 0 0 1-17.64 17.638z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="M86.554.282a13.227 13.227 0 1 1-13.227 13.227A13.227 13.227 0 0 1 86.554.282z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcNotification', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>