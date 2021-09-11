<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M93 84H7a7.008 7.008 0 0 1-7-7V22l26.586 26.586-18.8 18.8a3.972 3.972 0 0 0-1.173 2.827 3.974 3.974 0 0 0 1.173 2.829 3.969 3.969 0 0 0 2.829 1.171 3.97 3.97 0 0 0 2.829-1.171l18.8-18.8 4.91 4.91a17.884 17.884 0 0 0 12.729 5.273 17.887 17.887 0 0 0 12.727-5.273l4.945-4.943 18.832 18.83a3.96 3.96 0 0 0 2.827 1.171 3.965 3.965 0 0 0 2.827-1.171 3.977 3.977 0 0 0 1.173-2.829 3.974 3.974 0 0 0-1.173-2.827L73.21 48.553l12.291-12.292a13.981 13.981 0 0 0 4.5.738 13.9 13.9 0 0 0 10-4.2v44.2A7.008 7.008 0 0 1 93 84zM49.883 57.328a10.929 10.929 0 0 1-7.779-3.223L5.227 17.228A7.087 7.087 0 0 1 7 17h70.346a13.874 13.874 0 0 0-1.347 6 13.982 13.982 0 0 0 3.5 9.263L57.657 54.104a10.926 10.926 0 0 1-7.774 3.223z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="M90 13a10 10 0 1 1-10 10 10 10 0 0 1 10-10z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcMailUnread', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>