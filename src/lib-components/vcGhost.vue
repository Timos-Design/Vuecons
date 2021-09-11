<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="m57.574 98.629-4.757-8.987a3.054 3.054 0 0 0-2.739-1.649 3.053 3.053 0 0 0-2.739 1.649l-4.758 8.987A3.082 3.082 0 0 1 40.008 100a3.049 3.049 0 0 1-2.736-1.649l-1.183-2.234-2.905-6.04a3.079 3.079 0 0 0-2.8-1.754 3.044 3.044 0 0 0-2.306 1.038l-4.674 5.249a4.507 4.507 0 0 1-2.721.908 4.8 4.8 0 0 1-3.236-1.271A4.56 4.56 0 0 1 16 90.863V34.078a33.858 33.858 0 0 1 9.98-24.1 33.853 33.853 0 0 1 24.1-9.981 33.851 33.851 0 0 1 24.094 9.981 33.859 33.859 0 0 1 9.981 24.1v56.785a4.627 4.627 0 0 1-4.686 4.655 4.572 4.572 0 0 1-3.378-1.5l-.089-.1-4.058-4.552a3.048 3.048 0 0 0-2.307-1.041 3.082 3.082 0 0 0-2.8 1.757l-4.084 8.488a3.066 3.066 0 0 1-2.608 1.43 3.082 3.082 0 0 1-2.571-1.371zm1.8-64.554a6.2 6.2 0 0 0 6.2 6.2 6.2 6.2 0 0 0 6.194-6.2 6.2 6.2 0 0 0-6.194-6.2 6.2 6.2 0 0 0-6.204 6.2zm-30.979 0a6.2 6.2 0 0 0 6.2 6.2 6.2 6.2 0 0 0 6.2-6.2 6.2 6.2 0 0 0-6.2-6.2 6.2 6.2 0 0 0-6.203 6.2z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcGhost', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>