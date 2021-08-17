<template>
  <VcIconWrapper
    :line="line"
    :fill="fill"
    :slash="slash"
    :circle="circle"
    :square="square"
    :rect="rect"
  >
    <path
      d="M53.01 71.485l-1.222-1.222a5 5 0 010-7.07l7.436-7.437H5a5 5 0 01-5-5v-1.729a5 5 0 015-5h53.725l-6.938-6.937a5 5 0 010-7.071l1.221-1.221a5 5 0 017.072 0l16.586 16.586 1.222 1.221a5 5 0 010 7.072L60.081 71.486a4.985 4.985 0 01-3.535 1.464 4.985 4.985 0 01-3.536-1.465z"
    />
    <path
      d="M100.452 14.66H85.8V0a14.654 14.654 0 0114.652 14.654zm0 70.68v.006A14.654 14.654 0 0185.8 100V14.66h14.652zM85.8 14.66H58a2 2 0 01-2-2V2a2 2 0 012-2h27.8zm0 85.34H58a2 2 0 01-2-2V87.34a2 2 0 012-2h27.8z"
      opacity=".5"
    />
  </VcIconWrapper>
</template>

<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';

export default Vue.extend({
  name: 'vcLogin',
  mixins: [VcIconMixin],
  components: { VcIconWrapper },
});
</script>
