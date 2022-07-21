export const state = () => ({
  content: "",
  type: "",
  color: "",
});

export const mutations = {
  showMessage(state, payload) {
    state.content = payload.content;
    state.type = payload.type || "success";
    state.color = payload.type === "failure" ? "#D82C0D" : "#202123";
  },
};
