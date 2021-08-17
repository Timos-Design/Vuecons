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
      d="M47.88 4.041a2.231 2.231 0 014.241 0l10.277 31.51a2.23 2.23 0 002.121 1.537h33.247a2.226 2.226 0 011.309 4.03L72.186 60.582a2.225 2.225 0 00-.812 2.492l10.273 31.5a2.229 2.229 0 01-3.43 2.492L51.309 77.589a2.233 2.233 0 00-2.618 0L21.784 97.066a2.229 2.229 0 01-3.43-2.492l10.273-31.5a2.225 2.225 0 00-.812-2.492L.926 41.118a2.226 2.226 0 011.312-4.03h33.244a2.23 2.23 0 002.121-1.537z"
    />
  </VcIconWrapper>
</template>

<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';

export default Vue.extend({
  name: 'vcStar',
  mixins: [VcIconMixin],
  components: { VcIconWrapper },
});
</script>
