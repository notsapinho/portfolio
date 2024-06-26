<script setup lang="ts">
const props = defineProps(["linkTitle", "link"]);
</script>

<template>
    <a
        :href="props.link"
        class="border-gradient-br-gradient-gray-900 gradient-border-2 hover:border-gradient-br-gradient-black relative inline-flex items-center justify-center space-x-2 rounded-lg px-4 py-2 text-center text-base font-medium text-white before:absolute before:-inset-0.5 before:z-[-1] before:rounded-lg before:bg-gradient-to-r before:from-green-400 before:via-teal-400 before:to-teal-600 before:opacity-0 before:blur-md before:transition before:duration-200 hover:before:opacity-75 focus:outline-none focus:ring-offset-white focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-75 dark:focus:ring-offset-black"
        target="_blank"
    >
        <slot></slot>
        <span class="line-clamp-1 break-all text-center"
            >{{ props.linkTitle }}
        </span>
    </a>
</template>
