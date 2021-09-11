<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M27.812 99.201.804 72.188a2.73 2.73 0 0 1 0-3.859l3.857-3.857a2.729 2.729 0 0 1 3.861 0l27.013 27.013a2.727 2.727 0 0 1 0 3.859l-3.856 3.857a2.723 2.723 0 0 1-1.932.8 2.719 2.719 0 0 1-1.935-.8zm9.648-9.646L10.447 62.542a2.725 2.725 0 0 1 0-3.857l3.859-3.859a2.729 2.729 0 0 1 3.857 0l27.013 27.013a2.73 2.73 0 0 1 0 3.857l-3.859 3.859a2.725 2.725 0 0 1-1.932.8 2.714 2.714 0 0 1-1.925-.8zm0-19.3-7.716-7.716a2.724 2.724 0 0 1 0-3.854l28.939-28.943a2.73 2.73 0 0 1 3.862 0l7.716 7.716a2.729 2.729 0 0 1 0 3.864l-28.94 28.94a2.707 2.707 0 0 1-1.924.8 2.728 2.728 0 0 1-1.937-.807zm44.377-25.078L54.822 18.164a2.728 2.728 0 0 1 0-3.857l3.859-3.859a2.723 2.723 0 0 1 3.854 0l27.014 27.013a2.723 2.723 0 0 1 0 3.854l-3.861 3.859a2.718 2.718 0 0 1-1.929.8 2.718 2.718 0 0 1-1.922-.797zm9.649-9.651L64.474 8.518a2.722 2.722 0 0 1 0-3.854L68.333.802a2.727 2.727 0 0 1 3.856 0l27.013 27.013a2.727 2.727 0 0 1 0 3.854l-3.858 3.862a2.727 2.727 0 0 1-1.929.8 2.716 2.716 0 0 1-1.928-.805z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcGym', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>