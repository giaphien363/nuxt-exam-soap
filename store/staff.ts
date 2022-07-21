const API_GET_BASE_SETTING = "abc";
const API_PUT_CART_LINK = "abc";
const API_POST_DOMAIN = "abc";

export interface SettingState {
  currentDomain: string;
  storeURL: string;
  cartTrackingNumberLink: boolean;
}

export const state = (): SettingState => ({
  currentDomain: "",
  storeURL: "",
  cartTrackingNumberLink: false,
});

export const mutations = {
  setCurrentDomain(state: SettingState, data: any) {
    state.currentDomain = data;
  },
  setStoreURL(state: SettingState, data: any) {
    state.storeURL = data;
  },
  setCartTrackingNumberLink(state: SettingState, data: any) {
    state.cartTrackingNumberLink = data;
  },
};

export const actions = {
  getBaseSetting({ commit }: any, params: any) {
    return new Promise((resolve, reject) => {
      (this as any).$axios
        .get(API_GET_BASE_SETTING)
        .then((response: any) => {
          commit("setCurrentDomain", response.data.data.current_domain);
          commit(
            "setCartTrackingNumberLink",
            response.data.data.cart_tracking_number_link
          );
          resolve(response);
        })
        .catch((error: any) => {
          // reject(error)
        });
    });
  },
  putCartLink({ commit }: any) {
    return new Promise((resolve, reject) => {
      (this as any).$axios
        .put(API_PUT_CART_LINK)
        .then((response: any) => {
          commit(
            "setCartTrackingNumberLink",
            response.data.data.cart_tracking_number_link
          );
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  },
  postDomain({ commit }: any, data: any) {
    return new Promise((resolve, reject) => {
      (this as any).$axios
        .post(API_POST_DOMAIN, data)
        .then((response: any) => {
          commit("setCurrentDomain", response.data.data.current_domain);

          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  },
};
