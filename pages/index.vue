<template>
    <div
        class="z-2 flex h-screen w-screen flex-col bg-primary bg-cover bg-top bg-no-repeat font-poppins"
    >
        <div
            class="z-1 flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-60"
        >
            <div
                class="align-center z-0 flex w-9/12 max-w-lg flex-col gap-6 p-12 px-0"
            >
                <Profile />
                <LinkButton :linkTitle="'CDL'" :link="'https://discord.gg/cdl'">
                    <i class="ri-vip-diamond-fill" />
                </LinkButton>
                <LinkButton
                    :linkTitle="'Discord'"
                    :link="'https://discord.com/users/318098893722091520'"
                >
                    <i class="ri-discord-fill" />
                </LinkButton>
                <LinkButton
                    :linkTitle="'GitHub'"
                    :link="'https://github.com/notsapinho'"
                >
                    <i class="ri-github-fill" />
                </LinkButton>
                <LinkButton
                    :linkTitle="'Steam'"
                    :link="'https://steamcommunity.com/id/datei/'"
                >
                    <i class="ri-steam-line" />
                </LinkButton>
            </div>
        </div>
    </div>
</template>

<style>
.border-gradient-br-gradient-gray-900 {
    background: linear-gradient(90deg, #18181b, #18181b),
        linear-gradient(to bottom right, #00dc82, #36e4da, #16a79e);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
}
.border-gradient-br-gradient-black {
    background: linear-gradient(90deg, #0c0c0d, #0c0c0d),
        linear-gradient(to bottom right, #00dc82, #36e4da, #16a79e);
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
