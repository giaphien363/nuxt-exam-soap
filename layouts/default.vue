<template>
  <div
    class="app"
    :class="[
      hideMenuAside ? 'aside-menu-hidden' : '',
      hideSideBar ? 'sidebar-hidden' : '',
    ]"
  >
    <AppHeader @toggleSideBar="toggleSideBar" @toggleAsideMenu="toggleMenu" />
    <div class="app-body">
      <Sidebar :navItems="nav" />
      <main class="main">
        <breadcrumb :list="list" />
        <div class="container-fluid">
          <nuxt />
        </div>
      </main>
      <AppAside />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import nav from "./menu";
import {
  Header as AppHeader,
  Sidebar,
  Aside as AppAside,
  Footer as AppFooter,
  Breadcrumb,
} from "~/components/";

export default {
  name: "full",
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    AppFooter,
    Breadcrumb,
  },
  data() {
    return {
      nav: nav.items,
      hideMenuAside: true,
      hideSideBar: false,
    };
  },
  computed: {
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched;
    },
  },
  methods: {
    toggleSideBar() {
      this.hideSideBar = !this.hideSideBar;
    },
    toggleMenu() {
      this.hideMenuAside = !this.hideMenuAside;
    },
  },
};
</script>
