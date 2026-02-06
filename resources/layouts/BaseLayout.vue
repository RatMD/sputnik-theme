<template>
    <div class="relative w-full h-full flex flex-col">
        <header class="border-b border-gray-200">
            <PageHeader class="flex flex-col gap-8">
                <div class="grid grid-cols-[200px_1fr_200px] items-center py-6">
                    <PageSocials />
                    <div class="flex flex-col items-center">
                        <PageLogo />
                    </div>
                    <PageActions />
                </div>
                <div class="flex flex-col items-center">
                    <PageMenu />
                </div>
            </PageHeader>
        </header>
        <main>
            <article>
                <slot name="default" />
            </article>
        </main>
    </div>
</template>

<script lang="ts" setup>
import PageHeader from '@/components/page/PageHeader.vue';
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
