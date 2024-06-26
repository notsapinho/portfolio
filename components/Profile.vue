<template>
    <div
        id="profile"
        class="flex w-full flex-col items-center justify-center gap-4"
    >
        <div
            class="hover:after:z-1 border-gradient-br-gradient-gray-900 gradient-border-2 hover:border-gradient-br-gradient-black relative m-0 inline-flex items-center justify-center rounded-full text-center text-base text-white before:absolute before:-inset-0.5 before:z-[-1] before:rounded-full before:bg-gradient-to-r before:from-green-400 before:via-teal-400 before:to-teal-600 before:opacity-0 before:blur-md before:transition before:duration-200 hover:before:opacity-75 hover:after:absolute hover:after:top-0 hover:after:inline-block focus:outline-none focus:ring-offset-white focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-75 dark:focus:ring-offset-black"
        >
            <img
                src="~/assets/imgs/avatar.png"
                alt="Imagem de perfil."
                class="w-24 rounded-full sm:w-28 lg:w-52"
            />
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
            <h1
                class="bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-xl font-bold text-transparent lg:text-3xl"
                >notsapinho
            </h1>
            <h2 class="lg:text-md text-sm font-medium text-slate-100"
                >É o sapo né vida 🐎</h2
            >
        </div>
    </div>
</template>
