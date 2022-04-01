<template>
  <div
    class="
      absolute
      left-0
      top-0
      bottom-0
      right-0
      z-50
      bg-black bg-opacity-60
      flex
      justify-center
      items-center
      px-2
      py-4
    "
  >
    <div class="bg-white flex flex-col rounded-lg max-w-2xl max-h-full">
      <div
        class="
          p-5
          flex flex-row
          justify-between
          items-center
          border-b border-gray-300
        "
      >
        <h1 class="font-semibold text-lg">{{ this.header }}</h1>
        <button
          @click="sendCloseAction"
          class="py-1 px-2 hover:bg-gray-200 rounded-md"
        >
          ✕
        </button>
      </div>
      <div class="p-6 flex flex-col overflow-auto">
        <h1>{{ this.body }}</h1>
      </div>
      <div
        class="
          p-5
          flex flex-row
          justify-between
          items-center
          border-t border-gray-300
        "
      >
        <button
          @click="sendCloseAction"
          type="button"
          class="text-gray-500 hover:text-accent-dark"
        >
          Отмена
        </button>
        <button
          type="submit"
          class="
            px-3
            py-2.5
            bg-accent
            hover:bg-accent-dark
            rounded-md
            text-white
          "
        >
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      header: (state) => state.admin.ui.acceptDialogHeader,
      body: (state) => state.admin.ui.acceptDialogBody,
    }),
  },
  methods: {
    sendCloseAction() {
      this.$store.commit("admin/ui/setVisibilityAcceptDialog", false);
    },
  },
};
</script>
