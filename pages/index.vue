<template>
  <div>
    <client-only>
      <swiper :options="heroSwiperOptions">
        <swiper-slide>
          <img src="/img/test.png" alt="" class="w-full" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/test.png" alt="" class="w-full" />
        </swiper-slide>
      </swiper>
    </client-only>
    <div class="px-4 lg:px-0">
      <client-only>
        <h1 class="uppercase font-medium text-2xl mt-8 mb-2 lg:mb-4 lg:mt-20">
          Хиты продаж
        </h1>
        <swiper :options="hotSwiperOptions">
          <swiper-slide>
            <div
              class="
                flex flex-col
                bg-white
                border-2 border-yellow-500
                rounded-md
              "
            >
              <div class="bg-yellow-500 text-center py-3 -ml-px -mt-px -mr-px">
                <span class="text-white uppercase">ХИТ ПРОДАЖ</span>
              </div>
              <div class="pt-6 px-4 pb-4 flex flex-col gap-y-4">
                <img
                  src="/img/test-card-img.png"
                  alt=""
                  class="rounded-tl-md rounded-tr-md"
                />
                <div class="flex flex-col gap-y-4">
                  <span class="text-gray-500 leading-5">
                    Презервативы "Юнилатекс" ультратонкие
                  </span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="text-accent text-xl font-medium"
                      >799 руб.</span
                    >
                    <button
                      class="
                        uppercase
                        bg-accent
                        hover:bg-accent-dark
                        px-2
                        py-1.5
                        text-white
                        rounded-md
                      "
                    >
                      Выбрать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="flex flex-col bg-white border-2 border-accent rounded-md"
            >
              <div class="bg-accent text-center py-3 -ml-px -mt-px -mr-px">
                <span class="text-white uppercase">РАСПРОДАЖА</span>
              </div>
              <div class="pt-6 px-4 pb-4 flex flex-col gap-y-4">
                <img
                  src="/img/test-card-img.png"
                  alt=""
                  class="rounded-tl-md rounded-tr-md"
                />
                <div class="flex flex-col gap-y-4">
                  <span class="text-gray-500 leading-5">
                    Презервативы "Юнилатекс" ультратонкие
                  </span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="text-accent text-xl font-medium"
                      >799 руб.</span
                    >
                    <button
                      class="
                        uppercase
                        bg-accent
                        hover:bg-accent-dark
                        px-2
                        py-1.5
                        text-white
                        rounded-md
                      "
                    >
                      Выбрать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="
                flex flex-col
                bg-white
                border-2 border-green-500
                rounded-md
              "
            >
              <div class="bg-green-500 text-center py-3 -ml-px -mt-px -mr-px">
                <span class="text-white uppercase">БЕСПЛАТНАЯ ДОСТАВКА</span>
              </div>
              <div class="pt-6 px-4 pb-4 flex flex-col gap-y-4">
                <img
                  src="/img/test-card-img.png"
                  alt=""
                  class="rounded-tl-md rounded-tr-md"
                />
                <div class="flex flex-col gap-y-4">
                  <span class="text-gray-500 leading-5">
                    Презервативы "Юнилатекс" ультратонкие
                  </span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="text-accent text-xl font-medium"
                      >799 руб.</span
                    >
                    <button
                      class="
                        uppercase
                        bg-accent
                        hover:bg-accent-dark
                        px-2
                        py-1.5
                        text-white
                        rounded-md
                      "
                    >
                      Выбрать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="
                flex flex-col
                bg-white
                border-2 border-yellow-500
                rounded-md
              "
            >
              <div class="bg-yellow-500 text-center py-3 -ml-px -mt-px -mr-px">
                <span class="text-white uppercase">ХИТ ПРОДАЖ</span>
              </div>
              <div class="pt-6 px-4 pb-4 flex flex-col gap-y-4">
                <img
                  src="/img/test-card-img.png"
                  alt=""
                  class="rounded-tl-md rounded-tr-md"
                />
                <div class="flex flex-col gap-y-4">
                  <span class="text-gray-500 leading-5">
                    Презервативы "Юнилатекс" ультратонкие
                  </span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="text-accent text-xl font-medium"
                      >799 руб.</span
                    >
                    <button
                      class="
                        uppercase
                        bg-accent
                        hover:bg-accent-dark
                        px-2
                        py-1.5
                        text-white
                        rounded-md
                      "
                    >
                      Выбрать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "Index",
  data() {
    return {
      heroSwiperOptions: {
        slidesPerView: 1,
        spaceBetween: 16,
        autoplay: {
          delay: 5000,
        },
      },
      hotSwiperOptions: {
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
          1280: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
};
</script>
