<template>
  <VcIconWrapper
    :fill="fill"
    :slash="slash"
    :circle="circle"
    :square="square"
    :rect="rect"
  >
    <path
      d="M50 56.25a28.125 28.125 0 10-28.125-28.125A28.132 28.132 0 0050 56.25zm25 6.25H64.238a34 34 0 01-28.477 0H25a25 25 0 00-25 25v3.125A9.377 9.377 0 009.375 100h81.25A9.377 9.377 0 00100 90.625V87.5a25 25 0 00-25-25z"
    />
  </VcIconWrapper>
</template>

<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';

export default Vue.extend({
  name: 'vcUser',
  mixins: [VcIconMixin],
  components: { VcIconWrapper },
});
</script>
