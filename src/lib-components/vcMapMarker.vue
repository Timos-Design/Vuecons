<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M69.164 100a1.5 1.5 0 0 1-1.494-1.493V32.718c1.951-4.919 2.982-9 2.982-11.8a20.132 20.132 0 0 0-2.628-9.947 1.493 1.493 0 0 1 1.14-.528L96.028-.005a1.5 1.5 0 0 1 1.493 1.494v86.565a1.494 1.494 0 0 1-1.493 1.493L69.165 100zm-65.673 0a1.494 1.494 0 0 1-1.492-1.493V11.94a1.494 1.494 0 0 1 1.493-1.492L30.358 0a1.5 1.5 0 0 1 1.494 1.494v11.7a19.987 19.987 0 0 0-1.539 7.728 26.814 26.814 0 0 0 1.539 7.808v59.33a1.5 1.5 0 0 1-1.494 1.493L3.492 100zm59.7 0L36.325 89.552a1.493 1.493 0 0 1-1.491-1.493v-51.7a111.522 111.522 0 0 0 3.943 7.9c4.854 8.823 9.666 14.985 11.7 14.985s6.848-6.162 11.7-14.985c.869-1.58 1.71-3.2 2.5-4.825v59.07A1.494 1.494 0 0 1 63.193 100zM34.834 8.208V1.495A1.494 1.494 0 0 1 36.325.001l6.173 2.4a20.347 20.347 0 0 0-7.662 5.8z" />
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="M50.482 54.784c-1.726 0-5.8-5.221-9.915-12.7-3.469-6.308-7.176-14.817-7.176-19.778A17.11 17.11 0 0 1 50.482 5.217a17.111 17.111 0 0 1 17.093 17.091c0 4.962-3.708 13.47-7.177 19.778-4.108 7.476-8.19 12.698-9.916 12.698zm0-39.312a6.845 6.845 0 0 0-6.836 6.837 6.845 6.845 0 0 0 6.836 6.837 6.845 6.845 0 0 0 6.837-6.837 6.845 6.845 0 0 0-6.837-6.838z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcMapMarker', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>