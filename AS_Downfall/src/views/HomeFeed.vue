import router from '@/router/router';
<template>
    <body class="bg-black">
        <router-link to="/manga/:1">
            <img src="../assets/logos/kingdom_logo.png" alt="Kingdom logo" class="w-25 h-30 ml-10"/>
            <h1 class="text-2xl font-extrabold text-white w-26 ml-10"> Kingdom</h1>
        </router-link>
        <router-link to="/manga/:2">
            <img src="../assets/logos/Kaiju_No_8.jpg" alt="Kaiju No 8" class="w-25 h-30 ml-10 my-4"/>
            <h1 class="text-2xl font-extrabold text-white w-26 ml-10"> Kaiju No 8</h1>
        </router-link>
        <router-link to="/manga/:3">
            <img src="../assets/logos/JJK_logo.jpg" alt="JJK Logo" class="w-25 h-23   ml-10 my-4"/>
            <h1 class="text-2xl font-extrabold text-white w-26 ml-10"> Jujutsu Kaisen</h1>
        </router-link>
    </body>
</template>