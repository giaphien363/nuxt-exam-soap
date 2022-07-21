export default {
  items: [
    {
      name: "Dashboard",
      url: "/",
      icon: "icon-speedometer",
      badge: {
        variant: "primary",
        text: "NEW",
      },
    },
    {
      title: true,
      name: "Components",
      class: "",
      wrapper: {
        element: "",
        attributes: {},
      },
    },
    {
      name: "Base",
      url: "/base",
      icon: "icon-puzzle",
      children: [
        {
          name: "Forms",
          url: "/base/forms",
          icon: "icon-puzzle",
        },
        {
          name: "Tables",
          url: "/base/tables",
          icon: "icon-puzzle",
        },
      ],
    },

    {
      divider: true,
    },
    {
      title: true,
      name: "Extras",
    },
    {
      name: "Pages",
      url: "/pages",
      icon: "icon-star",
      children: [
        {
          name: "Login",
          url: "/pages/login",
          icon: "icon-star",
        },
        {
          name: "Register",
          url: "/pages/register",
          icon: "icon-star",
        },
        {
          name: "Error 404",
          url: "/pages/404",
          icon: "icon-star",
        },
        {
          name: "Error 500",
          url: "/pages/500",
          icon: "icon-star",
        },
      ],
    },
  ],
};
