<script setup>

import Divider from 'primevue/divider';
import { IftaLabel, InputText, Button } from 'primevue';


</script>

<template>
    <div class="card">
        <div class="flex flex-col md:flex-row justify-center">
            <div class="w-full md:w-5/12 md:p-0 p-4 flex flex-col items-center justify-center gap-3 py-5">
                <h1 class="font-semibold text-2xl mt-3"></h1>
                <p>Login To Your Account</p>
                <div class="inputs w-full mt-4">
                    <div class="flex flex-col gap-2 w-full">
                        <IftaLabel>
                            <InputText id="username" v-model="value" variant="filled" class="w-full" />
                            <label for="username">Username</label>
                        </IftaLabel>
                    </div>
                    <div class="flex flex-col gap-2 w-full mt-3">
                        <IftaLabel>
                            <InputText id="username" v-model="value" variant="filled" class="w-full" />
                            <label for="username">Password</label>
                        </IftaLabel>
                    </div>
                    <div class="flex w-full mt-3">
                        <div
                            class="order-now mt-2 header-regular text-white bg-gradient-to-r from-purple-800 from-10% vie-red-500 to-red-600 to-90% w-fit font-medium text-primary px-8 py-[9px] w-full text-center rounded-3xl duration-200 cursor-pointer border-transparent   border-[1.5px]">
                            Login
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>