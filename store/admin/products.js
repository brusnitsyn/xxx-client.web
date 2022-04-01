export const state = () => ({
  categoriesList: [],
  colorsList: [],
  productsList: []
});

export const mutations = {
  setCategoriesList(state, categoriesList) {
    state.categoriesList = categoriesList;
  },
  setColorsList(state, colorsList) {
    state.colorsList = colorsList;
  },
  setProductsList(state, productsList) {
    state.productsList = productsList;
  },
  // setCheckProductItem(state, item, value) {
  //   state.productsList[item].isChecked = value;
  // }
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
  async fetchProducts(context) {
    let products = await this.$axios.$get(
      "http://127.0.0.1:8000/api/admin/products"
    );
    let data = products.data;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      element['isChecked'] = false
    }
    context.commit("setProductsList", data);
  },
  // setCheckedProductItem(context, payload) {
  //   context.commit
  // }
};

export const getters = {
  getCategoriesList: (state) => {
    return state.categoriesList;
  },
  getColorsList: (state) => {
    return state.colorsList;
  },
  getProductsList: (state) => {
    return state.productsList;
  },
};
