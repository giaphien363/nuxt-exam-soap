<template>
  <b-nav-item-dropdown
    right
    no-caret
    :style="{ width: '182px', display: 'flex', justifyContent: 'end' }"
  >
    <template slot="button-content">
      <img
        src="~static/img/avatars/6.jpg"
        class="img-avatar"
        alt="admin@bootstrapmaster.com"
      />
    </template>
    <b-dropdown-item><i class="fa fa-user"></i> Profile</b-dropdown-item>
    <b-dropdown-item><i class="fa fa-wrench"></i> Settings</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item><i class="fa fa-shield"></i> Lock Account</b-dropdown-item>
    <b-dropdown-item @click="logout"
      ><i class="fa fa-lock"></i> Logout</b-dropdown-item
    >
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: "header-dropdown",
  methods: {
    async logout() {
      try {
        this.$store.dispatch("logout").then(() => {
          this.$router.push("/login");
        });
      } catch (e) {
        this.formError = e.message;
      }
    },
  },
};
</script>
