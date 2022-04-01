export const state = () => ({
  visibilityNewProductDialog: false,

  visibilityAcceptDialog: false,
  acceptDialogHeader: "",
  acceptDialogBody: "",
})

export const mutations = {
  setNewProductDialogVisibility(state, visibility) {
    state.visibilityNewProductDialog = visibility
  },
  setVisibilityAcceptDialog(state, visibility) {
    state.visibilityAcceptDialog = visibility
  },
  setAcceptDialogHeader(state, text) {
    state.acceptDialogHeader = text
  },
  setAcceptDialogBody(state, text) {
    state.acceptDialogBody = text
  },
}

export const actions = {
  setNewProductDialogVisibility(context, visibility) {
    context.commit(setNewProductDialogVisibility, visibility)
  },
  setVisibilityAcceptDialog(context, visibility) {
    context.commit(setVisibilityAcceptDialog, visibility)
  },
  setAcceptDialogHeader(context, payload) {
    context.commit(setAcceptDialogHeader, payload)
  },
  setAcceptDialogBody(context, payload) {
    context.commit(setAcceptDialogBody, payload)
  },
}

export const getters = {
  getVisibilityNewProductDialog: (state) => {
    return state.visibilityNewProductDialog
  },
  getVisibilityAcceptDialog: (state) => {
    return state.visibilityAcceptDialog
  },
  getAcceptDialogHeader: (state) => {
    return state.acceptDialogHeader
  },
  getAcceptDialogBody: (state) => {
    return state.acceptDialogBody
  },
}
