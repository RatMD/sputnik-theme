<template>
    <div class="w-full flex flex-col gap-4">
        <div class="w-full max-w-6xl mx-auto py-8 px-6">
            <PageComponent name="blogPost" v-slot="{ props }">
                <div class="flex flex-col max-w-2xl">
                    <div v-html="props.post.content_html" />
                </div>
            </PageComponent>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import { PageContent, PageComponent } from '@laika';

// Define Component
defineOptions({ layout: BaseLayout });
</script>
