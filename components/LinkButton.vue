<script setup lang="ts">
const props = defineProps(["linkTitle", "link"]);
</script>

<template>
    <a
        :href="props.link"
        class="rounded-lg font-medium space-x-2 border-gradient-br-gradient-gray-900 text-center text-base text-white py-2 px-4 justify-center relative inline-flex items-center gradient-border-2 hover:border-gradient-br-gradient-black focus:outline-none focus:ring-offset-white focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-75 dark:focus:ring-offset-black before:bg-gradient-to-r before:rounded-lg before:from-green-400 before:via-teal-400 before:to-teal-600 before:opacity-0 before:transition before:-inset-0.5 before:z-[-1] before:duration-200 before:absolute before:blur-md hover:before:opacity-75"
        target="_blank"
    >
        <slot></slot>
        <span class="text-center break-all line-clamp-1">{{ props.linkTitle }} </span>
    </a>
</template>
