<template>
    <div class="navbar bg-white sticky top-0">
        <div class="container mx-auto py-3">
            <h1 class="title">WRSNET Admin</h1>
        </div>
    </div>
    <div class="container flex h-full">
        <div
            class="sidebar ml-4 bg-white mt-4 py-4 px-2 w-full h-screen max-w-[14rem] rounded-md shadow-sm sticky top-16">
            <div class="menu flex flex-col gap-y-4 text-gray-700">
                <div class="home cursor-pointer flex items-center gap-x-2 py-2 px-3 hover:bg-gray-200 rounded-lg">
                    <font-awesome-icon :icon="['fas', 'house']" />
                    <p class="text-regular font-semibold">Home</p>
                </div>
                <div class="statistic cursor-pointer flex items-center gap-x-2 py-2 px-3 hover:bg-gray-200 rounded-lg">
                    <font-awesome-icon :icon="['fas', 'chart-simple']" />
                    <p class="text-regular font-semibold">Statistik Pengunjung</p>
                </div>
                <div class="blog cursor-pointer flex items-center gap-x-2 py-2 px-3 hover:bg-gray-200 rounded-lg">
                    <font-awesome-icon :icon="['fas', 'newspaper']" />
                    <p class="text-regular font-semibold">Blog</p>
                </div>
                <div class="slider cursor-pointer flex items-center gap-x-2 py-2 px-3 hover:bg-gray-200 rounded-lg">
                    <font-awesome-icon :icon="['fas', 'sliders']" />
                    <p class="text-regular font-semibold">Setting Slider</p>
                </div>
                <div
                    class="form-daftar cursor-pointer flex items-center gap-x-2 py-2 px-3 hover:bg-gray-200 rounded-lg">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" />
                    <p class="text-regular font-semibold">Form Pendaftaran</p>
                </div>
                <div class="profil cursor-pointer flex items-center gap-x-2 py-2 px-3 hover:bg-gray-200 rounded-lg">
                    <font-awesome-icon :icon="['fas', 'user']" />
                    <p class="text-regular font-semibold">Profile</p>
                </div>
            </div>
        </div>
        <div class="container w-full h-full mx-auto mt-4 ml-5">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold mb-2">Total Users</h2>
                    <p class="text-3xl font-bold">1,234</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold mb-2">Active Users</h2>
                    <p class="text-3xl font-bold">567</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold mb-2">New Signups</h2>
                    <p class="text-3xl font-bold">89</p>
                </div>

            </div>
        </div>
        <div class="mb-[2000px]"></div>
    </div>

</template>