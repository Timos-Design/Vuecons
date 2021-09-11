<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <path :fill="fill ? 'black' : slash ? secondary : primary" d="M29.72 2.001a26.353 26.353 0 0 1 12.586 3.332A35.072 35.072 0 0 1 50 11.027a35.069 35.069 0 0 1 7.689-5.694 26.342 26.342 0 0 1 12.582-3.332 29.541 29.541 0 0 1 11.573 2.337 29.622 29.622 0 0 1 9.449 6.37 29.619 29.619 0 0 1 6.37 9.448A29.549 29.549 0 0 1 100 31.728c0 .143-.041 1.43-.056 1.806 0 .066-.006.132-.013.2-.428 6.578-2.956 13.953-7.512 21.922a120.337 120.337 0 0 1-14.976 20.259 136.41 136.41 0 0 1-15.875 15.087 57.406 57.406 0 0 1-6.376 4.484c-2.213 1.3-3.864 1.9-5.2 1.9s-2.981-.6-5.194-1.9a57.458 57.458 0 0 1-6.374-4.483 136.429 136.429 0 0 1-15.875-15.085A120.292 120.292 0 0 1 7.574 55.657C2.995 47.65.467 40.241.056 33.637l-.006-.122c-.018-.432-.056-1.661-.056-1.784a29.542 29.542 0 0 1 2.337-11.572A29.639 29.639 0 0 1 8.7 10.711a29.611 29.611 0 0 1 9.446-6.37 29.52 29.52 0 0 1 11.574-2.34z" />
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: 'vcHeartFilled', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>