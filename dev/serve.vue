<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueconsSample } from '@/entry.esm';
import * as iconComps from '@/lib-components';

export default Vue.extend({
  name: 'ServeDev',
  computed: {
    icons: () => {
      return Object.keys(iconComps);
    },
  },
  // components: {
  //  VueconsSample,
  // }
});
</script>

<template>
  <div id="app">
    <h1>
      <i v-for="i in icons" :key="i" hierarchical :is="i" circle />
      <!-- {{ icons }} -->
      <!-- <vc-pause />
      <vc-pause slash />
      <vc-pause square />
      <vc-pause square slash />
      <vc-pause square fill />
      <vc-pause square fill slash />
      <vc-pause circle />
      <vc-pause circle slash />
      <vc-pause circle fill />
      <vc-pause circle fill slash />
      <vc-pause rect />
      <vc-pause rect slash />
      <vc-pause rect fill />
      <vc-pause rect fill slash />
    </h1>
    <h1>
      <vc-pause hierarchical />
      <vc-pause hierarchical slash />
      <vc-pause hierarchical square />
      <vc-pause hierarchical square slash />
      <vc-pause hierarchical square fill />
      <vc-pause hierarchical square fill slash />
      <vc-pause hierarchical circle />
      <vc-pause hierarchical circle slash />
      <vc-pause hierarchical circle fill />
      <vc-pause hierarchical circle fill slash />
      <vc-pause hierarchical rect />
      <vc-pause hierarchical rect slash />
      <vc-pause hierarchical rect fill />
      <vc-pause hierarchical rect fill slash /> -->
    </h1>

    <!-- <vc-map
      :palette="['red', 'playk', 'url(#my-cool-gradient)']"
      square
      fill
      slash
    />

    <svg
      style="width:0;height:0;position:absolute;"
      aria-hidden="true"
      focusable="false"
    >
      <linearGradient id="my-cool-gradient" x2="1" y2="1">
        <stop offset="0%" stop-color="green" />
        <stop offset="100%" stop-color="orange" />
      </linearGradient>
    </svg> -->
  </div>
</template>

<style scoped>
.vuecon {
  margin-right: 20px;
}
h1 {
  font-size: 100px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
