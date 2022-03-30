<template>
  <div class="pt-6 px-4">
    <div class="flex flex-col items-start md:flex-row md:justify-between md:items-center">
      <h1 class="text-2xl font-semibold">Все товары</h1>
      <button @click="onOpenDialog" class="px-3 py-2.5 bg-accent hover:bg-accent-dark rounded-md text-white">
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
    <!-- <AdminProductsNewProductDialog v-if="isOpenDialog" @closeAction="onOpenDialog" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenDialog: false
    }
  },
  methods: {
    onOpenDialog() {
      this.$store.commit('admin/ui/setNewProductDialogVisibility', true)
      //this.isOpenDialog = this.isOpenDialog ? false : true
    },
  }
}
</script>

<style>

</style>
