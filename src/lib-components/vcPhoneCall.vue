<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M58.15 58.05a112.745 112.745 0 0 0 14.4-17.87c3.447-6.969-4.624-12.392-4.624-12.392a10.536 10.536 0 0 1 0-14.898L76.308 2.65c3.6-3.6 9.42-3.178 13.466-.597l5.155 4.32a17.1 17.1 0 0 1 4.814 14.714l.04.008a68.737 68.737 0 0 1-.696 3.772A85.01 85.01 0 0 1 89.6 49.118a110.168 110.168 0 0 1-17.487 22.9zm-8.935 31.452a85 85 0 0 1-24.252 9.486 68.737 68.737 0 0 1-3.771.696l-.009-.04A17.1 17.1 0 0 1 6.47 94.832l-4.321-5.155C-.43 85.632-.854 79.81 2.746 76.21l10.242-8.381a10.536 10.536 0 0 1 14.898 0s5.422 8.072 12.391 4.624a112.751 112.751 0 0 0 17.87-14.401l13.967 13.967a110.163 110.163 0 0 1-22.899 17.483z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="M18.657 19.724a31.607 31.607 0 0 0-8.53 29.294 4.091 4.091 0 0 0 4.912 3.107 4.157 4.157 0 0 0 3.141-4.935 23.4 23.4 0 0 1 27.943-27.942 4.157 4.157 0 0 0 4.932-3.14 4.1 4.1 0 0 0-3.107-4.911 31.6 31.6 0 0 0-29.29 8.527zm7.856 26.466a4.11 4.11 0 0 0 7.895-2.288 6.748 6.748 0 0 1 8.427-8.427 4.11 4.11 0 0 0 2.288-7.895 14.967 14.967 0 0 0-18.61 18.61z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcPhoneCall', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>