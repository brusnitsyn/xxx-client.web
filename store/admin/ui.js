export const state = () => ({
  visibilityNewProductDialog: false,
})

export const mutations = {
  setNewProductDialogVisibility(state, visibility) {
      state.visibilityNewProductDialog = visibility
  },
}

export const actions = {
  setNewProductDialogVisibility(context, visibility) {
      context.commit(setNewProductDialogVisibility, visibility)
  },
}

export const getters = {
  getVisibilityNewProductDialog: (state) => {
      return state.visibilityNewProductDialog
  },
}
