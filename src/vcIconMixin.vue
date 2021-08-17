<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'vcIconMixin',
  props: {
    line: {
      type: Boolean,
      default: false,
    },
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
  },
  computed: {
    shape: function() {
      return this.circle || this.square || this.rect;
    },
    scale: function() {
      // 80 / sqrt2 / 100
      if (this.line) {
        if (this.circle) return 0.565685424949;
        if (this.square) return 0.8 - 0.12;
        if (this.rect) return 0.5 - 0.12;
        return 1 - 0.12;
      }
      if (this.circle) return 0.565685424949;
      if (this.square) return 0.8;
      if (this.rect) return 0.5;
      return 1;
    },
    strokeWidth: function() {
      if (this.rect) return 12;
      if (this.circle) return 10;
      if (this.square) return 8;
      return 6;
    },
  },
});
</script>
