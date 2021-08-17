<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueconsSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  VueconsSample,
  // }
});
</script>

<template>
  <div id="app">
    <h1 style="color: gray">
      <vc-star />
      <vc-star fill />
      <vc-star fill square />
      <vc-star fill circle />
      <vc-star fill rect />
      <vc-star fill square slash />
      <vc-star fill circle slash />
      <vc-star fill rect slash />
      <vc-star square />
      <vc-star circle />
      <vc-star rect />
      <vc-star square slash />
      <vc-star circle slash />
      <vc-star rect slash />
    </h1>

    <h1 style="color: gray">
      <vc-user />
      <vc-user fill />
      <vc-user fill square />
      <vc-user fill circle />
      <vc-user fill rect />
      <vc-user fill square slash />
      <vc-user fill circle slash />
      <vc-user fill rect slash />
      <vc-user square />
      <vc-user circle />
      <vc-user rect />
      <vc-user square slash />
      <vc-user circle slash />
      <vc-user rect slash />
    </h1>

    <h1 style="color: gray">
      <vc-timos-translator />
      <vc-timos-translator fill />
      <vc-timos-translator fill square />
      <vc-timos-translator fill circle />
      <vc-timos-translator fill rect />
      <vc-timos-translator fill square slash />
      <vc-timos-translator fill circle slash />
      <vc-timos-translator fill rect slash />
      <vc-timos-translator square />
      <vc-timos-translator circle />
      <vc-timos-translator rect />
      <vc-timos-translator square slash />
      <vc-timos-translator circle slash />
      <vc-timos-translator rect slash />
    </h1>
  </div>
</template>
