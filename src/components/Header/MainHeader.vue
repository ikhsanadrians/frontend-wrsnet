<script>

import { onUnmounted, ref, onMounted, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



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
    <div class="bg-gradient-to-r  from-purple-800 from-5% via-red-500  to-red-500 to-95% w-full py-3">
        <div class="flex justify-between items-center">
            <div class="offers flex items-center container mx-auto px-16 h-fit gap-x-6">
                <div class="offer-text header-medium tracking-widest flex items-center text-white gap-x-4">
                    <font-awesome-icon icon="wifi" class="text-white text-2xl" />
                    <div class="msg font-semibold">Pelanggan Baru? Kami Punya Penawaran Menarik</div>
                </div> 
                <div class="login-btn bg-white text-black title px-6 py-[2.2px] rounded-full">
                    Login
                </div>
            </div>
            <div class="follow-us w-[10rem]">
                <div class="title text-white">
                   Follow Us!
                </div>
             </div>
        </div>
      
    </div>
    <header :class="toggleHeaderClass" class="sticky duration-200 top-0 z-30 bg-transparent">
        <div class="container mx-auto py-4 lg:px-20 px-4 flex items-center justify-between">
            <div class="title text-2xl">
                <p>WRS NET</p>
            </div>
            <div class="header-menu lg:block hidden w-fit drop-shadow-glow">
                <ul :class="[currentWindow ? 'text-primary' : 'text-white']"
                    class="flex gap-8 font-medium header-medium text-black">
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
            <div class="new-form flex items-center gap-x-5">
                <font-awesome-icon icon="user" />
                <font-awesome-icon icon="magnifying-glass" />
                <div
                  class="order-now lg:block hidden title text-white bg-gradient-to-r from-purple-800 from-10% vie-red-500 to-red-600 to-90% w-fit font-medium text-primary px-8 py-[9px] rounded-3xl duration-200 cursor-pointer hover:bg-none border-transparent   border-[1.5px] hover:border-black hover:text-black">
                  Daftar Baru
               </div>
            </div>
            
        </div>
    </header>

</template>