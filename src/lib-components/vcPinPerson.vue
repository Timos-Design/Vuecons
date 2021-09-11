<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M50.48 100c-3.481 0-11.707-10.534-20-25.617-7-12.728-14.477-29.894-14.477-39.9A34.52 34.52 0 0 1 50.48 0a34.522 34.522 0 0 1 34.485 34.481c0 10.006-7.479 27.172-14.479 39.9C62.19 89.466 53.963 100 50.48 100zM40.444 34.782c-2.223 0-5.195.4-6.734 2.328-1.6 2-2.634 7.365-2.645 7.418 0 .022-.4 2.162 2.645 3.178 3.79 1.263 9.584 1.988 15.9 1.988s12.106-.724 15.9-1.988c2.994-1 2.691-3.156 2.688-3.178-.01-.053-1.062-5.386-2.688-7.418-1.54-1.924-4.512-2.328-6.734-2.328a18.389 18.389 0 0 0-2.8.209c-.152.086-3.771 2.12-6.357 2.12-2.616 0-6.322-2.1-6.359-2.12a18.589 18.589 0 0 0-2.816-.21zm9.163-19.926a8.488 8.488 0 0 0-8.478 8.478 8.487 8.487 0 0 0 8.478 8.477 8.487 8.487 0 0 0 8.477-8.477 8.487 8.487 0 0 0-8.477-8.479z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcPinPerson', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>