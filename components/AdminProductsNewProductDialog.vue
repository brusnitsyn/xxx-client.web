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
        <h1 class="font-semibold text-lg">Добавить товар</h1>
        <button
          @click="sendCloseAction"
          class="py-1 px-2 hover:bg-gray-200 rounded-md"
        >
          ✕
        </button>
      </div>
      <form class="p-6 flex flex-col overflow-auto">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 md:col-span-3 space-y-1">
            <label for="product-name" class="text-sm">Наименование</label>
            <input
              type="text"
              name="product-name"
              id="product-name"
              v-model="form.name"
              placeholder="Вибратор 'YAGA'"
              required
              class="
                p-2
                focus:outline-none
                focus:border-opacity-0
                focus:ring-2
                focus:ring-accent
                border border-gray-300
                rounded-lg
                bg-gray-100
                shadow
                w-full
              "
            />
          </div>

          <div class="col-span-6 md:col-span-3 space-y-1">
            <label for="product-category" class="text-sm">Категория</label>
            <multiselect
              label="name"
              track-by="name"
              placeholder="Выберите категорию"
              select-label="[Enter] Выбрать"
              selected-label="Выбрано"
              deselect-label="Отменить выбор"
              group-values="children"
              group-label="name"
              v-model="form.category"
              :options="categories"
            >
              <span slot="noResult">Нет результатов</span>
            </multiselect>
          </div>

          <div class="col-span-6 md:col-span-3 space-y-1">
            <label for="product-manufacturer" class="text-sm"
              >Производитель</label
            >
            <input
              type="text"
              v-model="form.manufacturer"
              name="product-manufacturer"
              id="product-manufacturer"
              placeholder="Makenze"
              class="
                p-2
                focus:outline-none
                focus:border-opacity-0
                focus:ring-2
                focus:ring-accent
                border border-gray-300
                rounded-lg
                bg-gray-100
                shadow
                w-full
              "
            />
          </div>

          <div class="col-span-6 md:col-span-3 space-y-1">
            <label for="product-material" class="text-sm">Материал</label>
            <input
              type="text"
              v-model="form.material"
              name="product-material"
              id="product-material"
              placeholder="Силикон"
              class="
                p-2
                focus:outline-none
                focus:border-opacity-0
                focus:ring-2
                focus:ring-accent
                border border-gray-300
                rounded-lg
                bg-gray-100
                shadow
                w-full
              "
            />
          </div>

          <div class="col-span-6 md:col-span-3 space-y-1">
            <label for="product-color" class="text-sm">Цвет </label>
            <multiselect
              label="name"
              v-model="form.colors"
              placeholder="Выберите цвет"
              :searchable="false"
              :options="colors"
              :multiple="true"
              select-label="Выбрать"
              selected-label="Выбрано"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              track-by="name"
              deselect-label="Отменить выбор"
            >
              <template slot="singleLabel" slot-scope="props">
                <span class="option__desc">
                  <span class="option__title">
                    {{ props.option.name }}
                  </span>
                </span>
              </template>
              <template slot="option" slot-scope="props">
                <div class="option__desc">
                  <span class="option__title">{{ props.option.name }}</span>
                </div>
              </template>
            </multiselect>
          </div>

          <div class="col-span-6 md:col-span-3 space-y-1">
            <label for="product-weight" class="text-sm">Вес</label>
            <input
              type="text"
              name="product-weight"
              v-model="form.weight"
              id="product-weight"
              placeholder="0000,00"
              class="
                p-2
                focus:outline-none
                focus:border-opacity-0
                focus:ring-2
                focus:ring-accent
                border border-gray-300
                rounded-lg
                bg-gray-100
                shadow
                w-full
              "
            />
          </div>

          <div class="col-span-6 md:col-span-3 space-y-1">
            <label for="product-article" class="text-sm">Артикул</label>
            <input
              type="text"
              v-model="form.article"
              name="product-article"
              id="product-article"
              placeholder="09348574"
              class="
                p-2
                focus:outline-none
                focus:border-opacity-0
                focus:ring-2
                focus:ring-accent
                border border-gray-300
                rounded-lg
                bg-gray-100
                shadow
                w-full
              "
            />
          </div>

          <div class="col-span-6 md:col-span-3 space-y-1">
            <label for="product-cost" class="text-sm">Стоимость</label>
            <input
              type="text"
              v-model="form.cost"
              name="product-cost"
              id="product-cost"
              placeholder="0000000,00"
              class="
                p-2
                focus:outline-none
                focus:border-opacity-0
                focus:ring-2
                focus:ring-accent
                border border-gray-300
                rounded-lg
                bg-gray-100
                shadow
                w-full
              "
            />
          </div>

          <div class="col-span-6 border-t border-gray-300 pt-3 space-y-1">
            <label for="product-description" class="text-sm">Описание</label>
            <textarea
              name="product-description"
              id="product-description"
              v-model="form.description"
              cols="30"
              rows="8"
              placeholder="Культовый стимулятор клитора 'YAGA' от немецкого бренда MAKENZE. Это не просто игрушка, это еще и эстетическое совершенство и удовольствие от бесконтактной стимуляции. Вы ощутите не только вакуумное давление, но и волновую пульсацию, растекающуюся бесконечным восторгом по всем рецепторам тела. Пользоваться изделием можно одной рукой при помощи 2 кнопок - нижняя кнопка включает/выключает (нужно удерживать 3 секунды) и увеличивает мощность всасывания, а верхняя уменьшает скорость."
              class="
                p-2
                resize-none
                focus:outline-none
                focus:border-opacity-0
                focus:ring-2
                focus:ring-accent
                border border-gray-300
                rounded-lg
                bg-gray-100
                shadow
                w-full
              "
            ></textarea>
          </div>

          <div class="col-span-6 border-t border-gray-300 pt-4">
            <dropzone
              @vdropzone-file-added="onFileAdded"
              @vdropzone-error="onError"
              @vdropzone-success="onSuccess"
              @vdropzone-complete="onComplete"
              :includeStyling="false"
              :useCustomSlot="true"
              ref="myDropzone"
              class="
                py-16
                border-2 border-dashed
                flex
                justify-center
                items-center
                hover:border-accent
                group
              "
              id="dropzone"
              :options="dropzoneOptions"
            >
              <div
                class="
                  flex flex-col
                  justify-center
                  items-center
                  group-hover:text-accent
                "
              >
                <i>
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.526 4.32642C40.3045 4.32642 44.8583 9.08264 44.8583 16.1599V32.493C44.8583 39.5702 40.3045 44.3264 33.524 44.3264H16.1907C9.41213 44.3264 4.85834 39.5702 4.85834 32.493V16.1599C4.85834 9.08264 9.41213 4.32642 16.1907 4.32642H33.526ZM35.7315 25.4265C33.5876 24.0891 31.9325 25.9673 31.486 26.5679C31.0556 27.1479 30.6855 27.7877 30.2954 28.4276C29.3421 30.0065 28.25 31.8269 26.3595 32.8858C23.6123 34.4069 21.5267 33.0055 20.0264 31.9859C19.4633 31.6061 18.9163 31.247 18.3712 31.0075C17.0278 30.4276 15.8191 31.088 14.0251 33.3667C13.0839 34.5576 12.1507 35.7382 11.2055 36.9146C10.6404 37.6185 10.7751 38.7041 11.5373 39.1747C12.7541 39.9239 14.2383 40.3264 15.9156 40.3264H32.7711C33.7224 40.3264 34.6757 40.1964 35.5847 39.8992C37.6321 39.2304 39.2571 37.699 40.1058 35.6763C40.8218 33.9755 41.1697 31.9116 40.5 30.1943C40.2767 29.6247 39.9429 29.0942 39.4743 28.6278C38.2455 27.4079 37.0971 26.2686 35.7315 25.4265ZM17.8561 12.3264C15.0988 12.3264 12.8583 14.5699 12.8583 17.3264C12.8583 20.083 15.0988 22.3264 17.8561 22.3264C20.6113 22.3264 22.8538 20.083 22.8538 17.3264C22.8538 14.5699 20.6113 12.3264 17.8561 12.3264Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                <span class="text-sm">Поддерживаемые форматы: PNG, JPG</span>
              </div>
            </dropzone>
          </div>
        </div>
      </form>
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
          type="reset"
          @click="resetForm"
          class="text-gray-500 hover:text-accent-dark"
        >
          Очистить форму
        </button>
        <button
          type="submit"
          @click="sendDataToApi"
          class="
            px-3
            py-2.5
            bg-accent
            hover:bg-accent-dark
            rounded-md
            text-white
          "
        >
          Добавить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      categories: (state) => state.admin.products.categoriesList,
      colors: (state) => state.admin.products.colorsList,
    }),
  },
  data() {
    return {
      form: {
        name: null,
        category: null,
        manufacturer: null,
        material: null,
        color: null,
        weight: null,
        article: null,
        cost: null,
        description: null,
        image_url: null,
      },
      dropzoneOptions: {
        url: "http://127.0.0.1:8000/api/admin/products/image",
        autoProcessQueue: false,
        previewTemplate: this.template(),
        maxFilesize: 8,
        maxFiles: 1,
      },
    };
  },
  methods: {
    resetForm() {
      this.form = {
        name: null,
        category: null,
        manufacturer: null,
        material: null,
        color: null,
        weight: null,
        article: null,
        cost: null,
        description: null,
        image_url: null,
      };
    },
    sendCloseAction() {
      this.$store.commit("admin/ui/setNewProductDialogVisibility", false);
    },
    sendDataToApi() {
      let formData = new FormData();
      formData.append("file", this.$refs.myDropzone.getAcceptedFiles());
      this.$axios
        .$post(`http://127.0.0.1:8000/api/admin/products/image`, formData)
        .then((response) => {
          if (response.data) {
            this.form.image_url = response.data.path;
          }
        })
        .catch((e) => {
          // this.errors.push(e);
        });
      this.$axios
        .$post(`http://127.0.0.1:8000/api/admin/products`, this.form)
        .then((response) => {})
        .catch((e) => {
          console.log(e.message);
        });
    },
    template() {
      return `<div class="dz-preview dz-file-preview">
                <div class="dz-image">
                    <div data-dz-thumbnail-bg></div>
                </div>
                <div class="dz-details">
                    <div class="dz-size"><span data-dz-size></span></div>
                    <div class="dz-filename"><span data-dz-name></span></div>
                </div>
                <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                <div class="dz-error-message"><span data-dz-errormessage></span></div>
                <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                <div class="dz-error-mark"><i class="fa fa-close"></i></div>
            </div>
        `;
    },
    thumbnail: function (file, dataUrl) {
      var j, len, ref, thumbnailElement;
      if (file.previewElement) {
        file.previewElement.classList.remove("dz-file-preview");
        ref = file.previewElement.querySelectorAll("[data-dz-thumbnail-bg]");
        for (j = 0, len = ref.length; j < len; j++) {
          thumbnailElement = ref[j];
          thumbnailElement.alt = file.name;
          thumbnailElement.style.backgroundImage = 'url("' + dataUrl + '")';
        }
        return setTimeout(
          (function (_this) {
            return function () {
              return file.previewElement.classList.add("dz-image-preview");
            };
          })(this),
          1
        );
      }
    },

    onFileAdded(e) {},
    onError(e) {},
    onSuccess(e) {},
    onComplete(e) {},
  },
  mounted() {
    this.$store.dispatch("admin/products/fetchCategories");
    this.$store.dispatch("admin/products/fetchColors");
  },
  // setup() {},
};
</script>

<style>
.vue-dropzone {
  border: 2px dashed #e5e5e5;
  font-family: Arial, sans-serif;
  letter-spacing: 0.2px;
  transition: 0.2s linear;
}

.vue-dropzone:hover {
  border-color: #da5978;
  color: #da5978;
  background-color: #fff;
}
</style>
