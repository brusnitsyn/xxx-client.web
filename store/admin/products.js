export const state = () => ({
  categoriesList: [],
  colorsList: [],
  productsList: [],

  productData: {
    name: null,
    category: null,
    manufacturer: null,
    material: null,
    weight: null,
    article: null,
    colors: null,
    cost: null,
    description: null,
    image_url: null,
  },
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

  addProduct(state, product) {
    state.productsList.push(product);
  },

  setProductData(state, productData) {
    state.productData = productData;
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

    // resort color (not rule)
    let data = products.data.map(function (obj) {
      return {
        article: obj.article,
        category: obj.category,
        cost: obj.cost,
        description: obj.description,
        id: obj.id,
        image_url: obj.image_url,
        manufacturer: obj.manufacturer,
        material: obj.material,
        name: obj.name,
        weight: obj.weight,
        colors: obj.colors.map(function (a) {
          return a.color;
        }),
      };
    });
    data.forEach((product) => {
      product["isChecked"] = false;
    });
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
  getProductData: (state) => {
    return state.productData;
  },
};
