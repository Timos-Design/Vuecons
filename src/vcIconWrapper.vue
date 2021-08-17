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
          :transform="'scale(' + scale + ')'"
          transform-origin="center"
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
      <g v-if="fill && shape" fill="currentColor">
        <circle v-if="circle" cx="50" cy="50" r="50" />
        <rect v-else-if="square" width="100" height="100" rx="15" />
        <rect v-else width="100" height="70" rx="15" y="15" />
      </g>

      <g
        v-if="!fill && shape"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      >
        <circle v-if="circle" cx="50" cy="50" r="47" />
        <rect v-else-if="square" width="94" height="94" x="3" y="3" rx="12" />
        <rect v-else x="3" y="18" width="94" height="64" rx="12" />
      </g>

      <g
        :transform="'scale(' + scale + ')'"
        transform-origin="center"
        fill="currentColor"
      >
        <slot />
      </g>
    </g>

    <path
      v-if="slash"
      fill="currentColor"
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
  data: function () {
    return {
      id: this.gId(),
    };
  },
  methods: {
    gId() {
      var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4();
    },
  },
});
</script>

<style scoped>
.vuecon {
  display: inline-block;
  height: 1em;
  width: 1em;
}
</style>
