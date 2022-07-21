<template>
  <v-snackbar v-model="show" :color="color">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <img
        v-bind="attrs"
        @click="show = false"
        class="cursor-pointer mr__img-snackbar"
        src="~/assets/icons/icon_close.svg"
        alt="close"
      />
    </template>
  </v-snackbar>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Snackbar",
  data() {
    return {
      show: false,
      message: "",
      color: "",
    };
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "snackbar/showMessage") {
        this.message = state.snackbar.content;
        this.color = state.snackbar.color;
        this.show = true;
      }
    });
  },
});
</script>

<style scoped lang="scss">
.mr__img-snackbar {
  position: absolute;
  right: 15px;
}
.v-snack__content {
  font-size: 20px !important;
}
</style>
