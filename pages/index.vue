<template>
    <div class="bg-primary bg-cover bg-top bg-no-repeat flex flex-col font-poppins h-screen w-screen z-2">
        <div class="bg-black flex flex-col h-screen bg-opacity-60 w-screen justify-start items-center z-1">
            <div class="flex flex-col max-w-lg p-12 px-0 w-9/12 gap-6 align-center z-0">
                <Profile />
                <LinkButton :linkTitle="'CDL'" :link="'https://discord.gg/cdl'">
                    <i class="ri-vip-diamond-fill"></i>
                </LinkButton>
                <LinkButton :linkTitle="'Discord'" :link="'https://discord.com/users/693288915427262585'">
                    <i class="ri-discord-fill"></i>
                </LinkButton>
                <LinkButton :linkTitle="'GitHub'" :link="'https://github.com/notsapinho'">
                    <i class="ri-github-fill"></i>
                </LinkButton>
                <LinkButton :linkTitle="'Steam'" :link="'https://steamcommunity.com/id/datei/'">
                    <i class="ri-steam-line"></i>
                </LinkButton>
            </div>
        </div>
    </div>
</template>

<style>
.border-gradient-br-gradient-gray-900 {
    background: linear-gradient(90deg, #18181b, #18181b), linear-gradient(to bottom right, #00dc82, #36e4da, #16a79e);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
}
.border-gradient-br-gradient-black {
    background: linear-gradient(90deg, #0c0c0d, #0c0c0d), linear-gradient(to bottom right, #00dc82, #36e4da, #16a79e);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
}
.gradient-border-2 {
    border: 2px solid transparent;
}
.line-clamp-1 {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
}
</style>
