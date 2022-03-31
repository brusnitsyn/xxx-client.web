export const state = () => ({
  categoriesList: [],
  colorsList: [],
});

export const mutations = {
  setCategoriesList(state, categoriesList) {
    state.categoriesList = categoriesList;
  },
  setColorsList(state, colorsList) {
    state.colorsList = colorsList;
  },
};

export const actions = {
  async fetchCategories(context) {
    let categories = await this.$axios.$get(
      "http://127.0.0.1:8000/api/admin/categories"
    );
    context.commit("setCategoriesList", categories.data);
  },
  async fetchColors(context) {
    let colors = await this.$axios.$get(
      "http://127.0.0.1:8000/api/admin/colors"
    );
    context.commit("setColorsList", colors.data);
  },
};

export const getters = {
  getCategoriesList: (state) => {
    return state.categoriesList;
  },
  getColorsList: (state) => {
    return state.colorsList;
  },
};
