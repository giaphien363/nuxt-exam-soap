<template>
  <header class="app-header navbar">
    <button
      class="navbar-toggler sidebar-toggler d-md-down-none"
      type="button"
      @click="sidebarToggle"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-navbar-nav class="ml-auto">
      <HeaderDropdown />
    </b-navbar-nav>
    <button
      class="navbar-toggler aside-menu-toggler d-md-down-none"
      type="button"
      @click="asideToggle"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>
</template>

<script>
import HeaderDropdown from "./HeaderDropdown.vue";

export default {
  name: "c-header",
  components: {
    HeaderDropdown,
  },
  methods: {
    sidebarToggle(e) {
      e.preventDefault();
      this.$emit("toggleSideBar");
    },
    asideToggle(e) {
      e.preventDefault();
      this.$emit("toggleAsideMenu");
    },
  },
};
</script>
