<script setup>
defineProps(['tag','title','url'])
</script>

<template>
<a href="#" class="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
    <img :src="url" loading="lazy" alt="Screenshot" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

    <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

    <div class="flex flex-col relative">
        <span class="text-gray-300 dark:text-white">{{tag}}</span>
        <span class="text-white text-lg lg:text-xl font-semibold">{{title}}</span>
    </div>
</a>
</template>