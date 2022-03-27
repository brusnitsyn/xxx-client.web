<template>
  <div class="px-4 flex flex-col bg-white">
    <div
      class="
        py-2
        hidden
        md:flex
        flex-row
        justify-between
        border-b border-gray-200
        container
        mx-auto
        max-w-7xl
      "
    >
      <div class="flex items-center gap-x-3 hover:text-accent">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.41333 7.19333C5.37333 9.08 6.92 10.62 8.80667 11.5867L10.2733 10.12C10.4533 9.94 10.72 9.88 10.9533 9.96C11.7 10.2067 12.5067 10.34 13.3333 10.34C13.7 10.34 14 10.64 14 11.0067V13.3333C14 13.7 13.7 14 13.3333 14C7.07333 14 2 8.92667 2 2.66667C2 2.3 2.3 2 2.66667 2H5C5.36667 2 5.66667 2.3 5.66667 2.66667C5.66667 3.5 5.8 4.3 6.04667 5.04667C6.12 5.28 6.06667 5.54 5.88 5.72667L4.41333 7.19333Z"
            fill="currentColor"
          />
        </svg>
        <a href="tel:+78008008080">8 (800) 800-80-80</a>
      </div>

      <div class="flex gap-x-2 text-gray-600">
        <a
          href="#"
          class="
            pr-1.5
            border-r-2 border-gray-300
            hover:text-accent
            select-none
          "
          >Сертификаты</a
        >
        <a
          href="#"
          class="
            pr-1.5
            border-r-2 border-gray-300
            hover:text-accent
            select-none
          "
          >Помощь</a
        >
        <a href="#" class="hover:text-accent select-none">Войти</a>
      </div>
    </div>

    <div
      class="
        container
        mx-auto
        max-w-7xl
        relative
        py-7
        flex flex-row
        justify-between
        items-center
        bg-white
      "
    >
      <div class="flex gap-x-4 items-center">
        <img src="/img/logo-short.png" alt="logo" class="max-h-11" />
        <div class="hidden lg:block">
          <nav class="flex flex-col lg:flex-row gap-x-4 text-lg">
            <div class="">
              <a href="#" class="hover:text-accent uppercase">ГЛАВНАЯ</a>
            </div>
            <div class="">
              <a href="#" class="hover:text-accent uppercase">ДЛЯ НЕЕ</a>
            </div>
            <div class="">
              <a href="#" class="hover:text-accent uppercase">ДЛЯ НЕГО</a>
            </div>
            <div class="">
              <a href="#" class="hover:text-accent uppercase">ДЛЯ ПАР</a>
            </div>
            <div class="">
              <a href="#" class="hover:text-accent uppercase">БЕЛЬЕ</a>
            </div>
            <div class="">
              <a href="#" class="hover:text-accent uppercase">BDSM</a>
            </div>
            <div class="text-accent">
              <a href="#" class="uppercase">НОВИНКИ</a>
            </div>
            <div class="text-accent">
              <a href="#" class="uppercase">РАСПРОДАЖА (-50%)</a>
            </div>
          </nav>
        </div>
      </div>

      <div class="hidden lg:flex flex-row items-center gap-x-6">
        <div class="relative">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99737 4.02062 8.54114 4.97328 7.37908C5.92593 6.21703 7.25178 5.42093 8.72525 5.12624C10.1987 4.83154 11.7288 5.05646 13.0551 5.76272C14.3814 6.46898 15.4221 7.61296 16 9.00001V9.00001C16.5779 7.61296 17.6186 6.46898 18.9449 5.76272C20.2712 5.05646 21.8013 4.83154 23.2748 5.12624C24.7482 5.42093 26.0741 6.21703 27.0267 7.37908C27.9794 8.54114 28.5 9.99737 28.5 11.5C28.5 20 16 27 16 27Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div
            class="
              absolute
              -top-1
              -right-1
              bg-accent
              text-white
              rounded-full
              flex
              justify-center
              items-center
              p-2
            "
          >
            <div class="w-2 h-1 flex items-center justify-center">
              <span class="leading-3 text-sm select-none">0</span>
            </div>
          </div>
        </div>

        <div class="relative flex flex-row items-center gap-x-3">
          <div class="relative">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9375 27C11.9375 28.0701 11.0701 28.9375 10 28.9375C8.92995 28.9375 8.0625 28.0701 8.0625 27C8.0625 25.9299 8.92995 25.0625 10 25.0625C11.0701 25.0625 11.9375 25.9299 11.9375 27Z"
                fill="#252525"
                stroke="#252525"
                stroke-width="0.125"
              />
              <path
                d="M24.9375 27C24.9375 28.0701 24.0701 28.9375 23 28.9375C21.9299 28.9375 21.0625 28.0701 21.0625 27C21.0625 25.9299 21.9299 25.0625 23 25.0625C24.0701 25.0625 24.9375 25.9299 24.9375 27Z"
                fill="#252525"
                stroke="#252525"
                stroke-width="0.125"
              />
              <path
                d="M5.2875 9H27.7125L24.4125 20.55C24.2948 20.9692 24.0426 21.3381 23.6948 21.6001C23.3471 21.862 22.9229 22.0025 22.4875 22H10.5125C10.0771 22.0025 9.65293 21.862 9.30515 21.6001C8.95738 21.3381 8.70524 20.9692 8.5875 20.55L4.0625 4.725C4.0027 4.51594 3.8764 4.33207 3.70271 4.20125C3.52903 4.07042 3.31744 3.99977 3.1 4H1"
                stroke="#252525"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div
              class="
                absolute
                -top-1
                -right-1
                bg-accent
                text-white
                rounded-full
                flex
                justify-center
                items-center
                p-2
              "
            >
              <div class="w-2 h-1 flex items-center justify-center">
                <span class="leading-3 text-sm select-none">3</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-y-1">
            <span class="leading-5 text-gray-600 select-none">Корзина</span>
            <span class="leading-5">2476,0 Р</span>
          </div>
          <div
            class="
              absolute
              top-0
              right-0
              px-5
              py-3
              bg-white
              rounded-md
              shadow-md
              z-10
              w-60
            "
          >
            <div class="flex flex-col">
              <span>Моя корзина</span>
              <div class="flex flex-col justify-center items-center p-6">
                <svg
                  width="86"
                  height="86"
                  viewBox="0 0 86 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.1875 72.5625C32.1875 75.4965 29.809 77.875 26.875 77.875C23.941 77.875 21.5625 75.4965 21.5625 72.5625C21.5625 69.6285 23.941 67.25 26.875 67.25C29.809 67.25 32.1875 69.6285 32.1875 72.5625Z"
                    fill="#252525"
                    stroke="#252525"
                    stroke-width="0.125"
                  />
                  <path
                    d="M67.125 72.5625C67.125 75.4965 64.7465 77.875 61.8125 77.875C58.8785 77.875 56.5 75.4965 56.5 72.5625C56.5 69.6285 58.8785 67.25 61.8125 67.25C64.7465 67.25 67.125 69.6285 67.125 72.5625Z"
                    fill="#252525"
                    stroke="#252525"
                    stroke-width="0.125"
                  />
                  <path
                    d="M14.2102 24.1875H74.4773L65.6086 55.2281C65.2922 56.3547 64.6146 57.3461 63.6799 58.0501C62.7453 58.7542 61.6053 59.1318 60.4352 59.125H28.2523C27.0822 59.1318 25.9422 58.7542 25.0076 58.0501C24.0729 57.3461 23.3953 56.3547 23.0789 55.2281L10.918 12.6984C10.7573 12.1366 10.4178 11.6424 9.95104 11.2908C9.48427 10.9393 8.91562 10.7494 8.33125 10.75H2.6875"
                    stroke="#252525"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-center">Корзина пуста</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="block lg:hidden text-black" @click="onOpenMenu">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 18H31.5"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 9H31.5"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 27H31.5"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div
        v-show="isMobileMenuOpen"
        class="
          z-10
          absolute
          px-4
          py-3
          flex flex-col
          w-full
          top-2
          bg-white
          shadow-md
          rounded-md
        "
      >
        <div class="flex flex-row justify-between items-center">
          <div>
            <img src="/img/logo.png" alt="logo" class="max-h-11" />
          </div>
          <div>
            <button class="text-xl" @click="onOpenMenu">✕</button>
          </div>
        </div>
        <div class="py-3">
          <nav class="flex flex-col lg:flex-row gap-x-4 text-lg">
            <div class="py-1 px-2 bg-accent rounded-md">
              <a href="#" class="w-full text-white uppercase">Главная</a>
            </div>
            <div class="py-1 w-full">
              <a href="#" class="w-full uppercase">ДЛЯ НЕЕ</a>
            </div>
            <div class="py-1 w-full">
              <a href="#" class="w-full uppercase">ДЛЯ НЕГО</a>
            </div>
            <div class="py-1 w-full">
              <a href="#" class="w-full uppercase">ДЛЯ ПАР</a>
            </div>
            <div class="py-1 w-full">
              <a href="#" class="w-full uppercase">БЕЛЬЕ</a>
            </div>
            <div class="py-1 w-full">
              <a href="#" class="w-full uppercase">BDSM</a>
            </div>
            <div class="text-accent w-full">
              <a href="#" class="w-full uppercase">НОВИНКИ</a>
            </div>
            <div class="text-accent w-full">
              <a href="#" class="w-full uppercase">РАСПРОДАЖА (-50%)</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    onOpenMenu() {
      this.isMobileMenuOpen = this.isMobileMenuOpen ? false : true;
    },
  },
};
</script>

<style>
</style>
