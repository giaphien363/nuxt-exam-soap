export default ({ store }: { store: any }, inject: any) => {
    inject('notifier', {
      showMessage({ content = '', type = '' }) {
        store.commit('snackbar/showMessage', { content, type })
      },
    })
  }
  