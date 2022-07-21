<template>
  <div class="animated fadeIn">
    <h1 @click="myFunc">Hello World</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
export default Vue.extend({
  name: "dashboard",
  methods: {
    myFunc() {
      this.$store.commit("staff/increment", "hiencos");
      this.$notifier.showMessage({
        content: "MESSAGE",
        type: "success",
      });
    },
  },
});
</script>
