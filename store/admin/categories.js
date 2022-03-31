export const state = () => ({
  categoriesList: [],
})

export const mutations = {
  setCategoriesList(state, categoriesList) {
    state.categoriesList = categoriesList
  },
}

export const actions = {
  // setNewProductDialogVisibility(context, visibility) {
  //     context.commit(setNewProductDialogVisibility, visibility)
  // },
  async fetchCategories(context) {
    let categories = await this.$axios.$get('http://127.0.0.1:8000/api/categories')
    context.commit('setCategoriesList', categories.data)
  }
}

export const getters = {
  getCategoriesList: (state) => {
    return state.categoriesList
  },
}
