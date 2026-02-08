<template>
    <div class="relative w-full h-full flex flex-col">
        <header class="border-b border-gray-200">
            <div class="w-full max-w-6xl flex flex-col mx-auto py-0 md:py-6 lg:py-8 md:px-6 gap-2 md:gap-8">
                <div class="grid grid-cols-[1fr_1fr] md:grid-cols-[200px_1fr_200px] items-center md:py-6 gap-0 md:gap-2">
                    <PageSocials class="order-1 md:order-1 bg-gray-100 md:bg-transparent px-2 md:px-0" />
                    <div class="flex flex-col items-start md:items-center order-3 md:order-2 col-span-2 md:col-span-1">
                        <div class="py-6 px-4 md:p-0">
                            <PageLogo />
                        </div>
                    </div>
                    <PageActions class="order-2 md:order-3 bg-gray-100 md:bg-transparent px-2 md:px-0" />
                </div>
                <div class="flex flex-col items-center">
                    <PageMenu />
                </div>
            </div>
        </header>
        <main>
            <article>
                <slot name="default" />
            </article>
        </main>
    </div>
</template>

<script lang="ts" setup>
import PageLogo from '@/components/page/PageLogo.vue';
import PageMenu from '@/components/page/PageMenu.vue';
import PageActions from '@/components/page/PageActions.vue';
import PageSocials from '@/components/page/PageSocials.vue';
</script>

<style lang="css" scoped>
@reference '@/styles/theme.css';

:global(html) {
    @apply w-full h-full;
}

:global(body) {
    @apply w-full h-full;
}

:global(.app) {
    @apply w-screen h-screen supports-[height:100dvh]:h-dvh overflow-auto flex;
}
</style>
