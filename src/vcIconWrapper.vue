<template>
  <svg
    class="vuecon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    @click="$emit('click')"
  >
    <defs v-if="slash || shape">
      <clipPath :id="'slash_' + id" v-if="slash">
        <path
          d="M91.513 100H.001V8.486L91.515 100zm8.488-8.485L8.487.001h91.515v91.514z"
        />
      </clipPath>
      <mask :id="'shape_' + id" v-if="shape">
        <rect x="0" y="0" width="100" height="100" fill="white" />
        <g
          :transform="`scale(${scale}) translate(${translate} ${translate})`"
          fill="black"
        >
          <slot />
        </g>
      </mask>
    </defs>
    <g
      :clip-path="slash ? 'url(#slash_' + id + ')' : undefined"
      :mask="fill ? 'url(#shape_' + id + ')' : undefined"
    >
      <g v-if="fill && shape" :fill="tertiary">
        <circle v-if="circle" cx="50" cy="50" r="50" />
        <rect v-else-if="square" width="100" height="100" rx="15" />
        <rect v-else width="100" height="70" rx="15" y="15" />
      </g>

      <g v-if="!fill && shape" fill="none" :stroke="tertiary" stroke-width="6">
        <circle v-if="circle" cx="50" cy="50" r="47" />
        <rect v-else-if="square" width="94" height="94" x="3" y="3" rx="12" />
        <rect v-else x="3" y="18" width="94" height="64" rx="12" />
      </g>

      <g :transform="`scale(${scale}) translate(${translate} ${translate})`">
        <slot />
      </g>
    </g>

    <path
      v-if="slash"
      :fill="primary"
      d="M1.91632034 1.91667966a3 3 0 014.2426407 0L98.08284257 93.8405612a3 3 0 01-4.24264068 4.24264069L1.91632034 6.15932034a3 3 0 010-4.24264068z"
    />
  </svg>
</template>

<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconMixin.vue';

export default Vue.extend({
  mixins: [VcIconMixin],
  name: 'VcIconWrapper',
  computed: {
    id: function() {
      return this._uid;
    },
  },
});
</script>

<style>
.vuecon {
  display: inline-block;
  height: 1em;
  width: 1em;
}
</style>
