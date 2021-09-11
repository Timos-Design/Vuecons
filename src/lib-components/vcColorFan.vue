<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M30.174 91.088a3.883 3.883 0 0 1-4.973-2.317l-2.653-7.29a3.884 3.884 0 0 1 2.32-4.97l65.597-23.876a3.882 3.882 0 0 1 4.97 2.318l2.654 7.29a3.882 3.882 0 0 1-2.318 4.97zm-3.383-7.023a4.66 4.66 0 0 0 5.966 2.78 4.659 4.659 0 0 0 2.781-5.964 4.66 4.66 0 0 0-5.965-2.782 4.66 4.66 0 0 0-2.784 5.966zM21.26 77.64c-2.458-6.495-8.383-22.74-19.931-54.468a3.881 3.881 0 0 1 2.318-4.97l7.288-2.653a3.882 3.882 0 0 1 4.97 2.317l10.71 29.427-5.35 30.346zm7.737-5.935 40.385-48.13a3.871 3.871 0 0 1 1.64-1.15 3.89 3.89 0 0 1 3.822.673l5.942 4.985a3.856 3.856 0 0 1 1.372 2.633 3.855 3.855 0 0 1-.894 2.832L58.151 61.093zm-2.781-.75L36.568 12.27a3.89 3.89 0 0 1 2.496-2.972 3.882 3.882 0 0 1 1.997-.174l7.638 1.347a3.851 3.851 0 0 1 2.503 1.596 3.854 3.854 0 0 1 .644 2.898l-5.682 32.227-19.942 23.764z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcColorFan', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>