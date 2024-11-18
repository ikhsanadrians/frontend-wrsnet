<script>

import { onUnmounted, ref, onMounted, computed } from 'vue';

const toggleHeaderClass = computed(() => {
    return currentWindow.value ? 'bg-white shadow-md' : ''
})


const currentWindow = ref(false)

const handleScroll = () => {
    currentWindow.value = window.scrollY > 0;

    if (window.scrollY > 300) {
        inNumberCounterSection.value = true
    }

};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})



</script>
<template>
    <header :class="toggleHeaderClass" class="sticky duration-200 top-0 z-30">
        <div class="container mx-auto py-4 lg:px-20 px-4 flex items-center justify-between">
            <div class="title text-white">
                <p>WRS NET</p>
            </div>
            <div class="header-menu lg:block hidden w-fit drop-shadow-glow">
                <ul :class="[currentWindow ? 'text-primary' : 'text-white']"
                    class="flex gap-8 font-medium header-medium text-white/70">
                    <li class="cursor-pointer">
                        Home
                    </li>
                    <li class="cursor-pointer">
                        Layanan
                    </li>
                    <li class="cursor-pointer">
                        Jangkauan
                    </li>
                    <li class="cursor-pointer">
                        Tentang Kami
                    </li>
                    <li class="cursor-pointer">
                        Hubungi Kami
                    </li>
                </ul>
            </div>
            <div
                class="order-now lg:block hidden header-medium bg-secondary w-fit font-medium text-primary px-8 py-[9px] rounded-3xl duration-200 cursor-pointer hover:bg-transparent border-transparent   border-[1.5px] hover:border-secondary hover:text-secondary">
                Daftar Baru
            </div>
        </div>
    </header>

</template>