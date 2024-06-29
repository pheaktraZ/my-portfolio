<template>
    <div class="container">
        <Topnav />
        
        <main>
            <div class="container-fluid">
                <NuxtPage />
            </div>
        </main>
        <Footer />
    </div>
</template>
<script setup>
import Topnav from "~/components/Topnav.vue"
import Footer from "~/components/Footer.vue"
</script>