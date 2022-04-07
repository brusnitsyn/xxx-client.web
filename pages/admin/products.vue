<template>
  <div class="pt-6 px-4 flex flex-col">
    <div
      class="
        flex flex-col
        items-start
        md:flex-row md:justify-between md:items-center
      "
    >
      <h1 class="text-2xl font-semibold">Все товары</h1>
      <button
        @click="onOpenDialog"
        class="px-3 py-2.5 bg-accent hover:bg-accent-dark rounded-md text-white"
      >
        <div class="flex gap-x-2">
          <i>
            <svg
              width="24"
              height="24"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1506 17.6176V31.9144"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31.3062 24.766H16.9946"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.67694 24.766C4.67694 10.1618 9.54641 5.2923 24.1506 5.2923C38.7548 5.2923 43.6243 10.1618 43.6243 24.766C43.6243 39.3702 38.7548 44.2397 24.1506 44.2397C9.54641 44.2397 4.67694 39.3702 4.67694 24.766Z"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
          <span> Добавить товар </span>
        </div>
      </button>
    </div>
    <div class="flex flex-col">
      <div>
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="
              text-xs text-gray-700
              uppercase
              bg-gray-50
              dark:bg-gray-700 dark:text-gray-400
            "
          >
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    @click="onCheckAllProduct"
                    id="checkbox-all-search"
                    type="checkbox"
                    class="
                      w-4
                      h-4
                      text-blue-600
                      bg-gray-100
                      border-gray-300
                      rounded
                      focus:ring-blue-500
                      dark:focus:ring-blue-600 dark:ring-offset-gray-800
                      focus:ring-2
                      dark:bg-gray-700 dark:border-gray-600
                    "
                  />
                  <label for="checkbox-all-search" class="sr-only"
                    >checkbox</label
                  >
                </div>
              </th>
              <th scope="col" class="px-6 py-3">Артикул</th>
              <th scope="col" class="px-6 py-3">Наименование товара</th>
              <th scope="col" class="px-6 py-3">Категория</th>
              <th scope="col" class="px-6 py-3">Производитель</th>
              <th scope="col" class="px-6 py-3">Стоимость</th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Редактировать</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Удалить</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="
                bg-white
                border-b
                dark:bg-gray-800 dark:border-gray-700
                hover:bg-gray-50
                dark:hover:bg-gray-600
              "
              v-for="product in products"
              :key="product.id"
            >
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="
                      w-4
                      h-4
                      text-blue-600
                      bg-gray-100
                      border-gray-300
                      rounded
                      focus:ring-blue-500
                      dark:focus:ring-blue-600 dark:ring-offset-gray-800
                      focus:ring-2
                      dark:bg-gray-700 dark:border-gray-600
                    "
                  />
                  <label for="checkbox-table-search-1" class="sr-only"
                    >checkbox</label
                  >
                </div>
              </td>
              <th
                scope="row"
                class="
                  px-6
                  py-4
                  font-medium
                  text-gray-900
                  dark:text-white
                  whitespace-nowrap
                "
              >
                {{ product.article }}
              </th>
              <td class="px-6 py-4">{{ product.name }}</td>
              <td class="px-6 py-4">{{ product.category.name }}</td>
              <td class="px-6 py-4">{{ product.manufacturer }}</td>
              <td class="px-6 py-4">{{ product.cost }}</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  @click="onEditProduct(product)"
                  class="
                    font-medium
                    text-blue-600
                    dark:text-blue-500
                    hover:underline
                  "
                  >Редактировать</a
                >
              </td>
              <td class="px-6 py-4 text-left">
                <button
                  href="#"
                  @click="onDeleteProduct(this)"
                  class="
                    font-medium
                    text-accent
                    dark:text-blue-500
                    hover:underline
                  "
                >
                  Удалить
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <AdminProductsNewProductDialog v-if="isOpenDialog" @closeAction="onOpenDialog" /> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      products: (state) => state.admin.products.productsList,
    }),
  },
  data() {
    return {};
  },
  methods: {
    onOpenDialog() {
      this.$store.commit("admin/ui/setNewProductDialogVisibility", true);
    },
    onShowAcceptDialog() {
      this.$store.commit("admin/ui/setAcceptDialogHeader", "Удаление товара");
      this.$store.commit(
        "admin/ui/setAcceptDialogBody",
        "Вы действительно хотите удалить товар?"
      );

      this.$store.commit("admin/ui/setVisibilityAcceptDialog", true);
    },
    onCheckAllProduct() {
      //this.products
    },
    onDeleteProduct(product) {
      this.$store.commit("admin/products/deleteProduct", product);
    },
    onEditProduct(product) {
      let data = {
        name: product.name,
        category: product.category,
        manufacturer: product.manufacturer,
        colors: product.colors,
        material: product.material,
        weight: product.weight,
        article: product.article,
        cost: product.cost,
        description: product.description,
        image_url: product.image_url,
      };
      this.$store.commit("admin/products/setProductData", data);
      this.$store.commit("admin/ui/setNewProductDialogVisibility", true);
    },
  },
  mounted() {
    this.$store.dispatch("admin/products/fetchProducts");
  },
};
</script>

<style>
</style>
