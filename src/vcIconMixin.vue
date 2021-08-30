<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'vcIconMixin',
  props: {
    fill: {
      type: Boolean,
      default: false,
    },
    slash: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    rect: {
      type: Boolean,
      default: false,
    },
    hierarchical: {
      type: Boolean,
      default: false,
    },
    palette: {
      type: Array,
      default: undefined,
    },
  },
  computed: {
    shape: function() {
      return this.circle || this.square || this.rect;
    },
    scale: function() {
      // 80 / sqrt2 / 100
      if (this.circle) return 0.55;
      if (this.square) return 0.6;
      if (this.rect) return 0.5;
      return 1;
    },
    translate: function() {
      if (this.circle) return 42.5;
      if (this.square) return 35;
      if (this.rect) return 50;
      return 0;
    },
    pal: function() {
      return this.palette || ['currentColor'];
    },
    primary: function() {
      return this.pal[0] || 'currentColor';
    },
    secondary: function() {
      return this.pal[1] || this.primary;
    },
    tertiary: function() {
      return this.pal[2] || this.secondary;
    },
  },
});
</script>
