<template>
    <div class="w-full flex flex-col gap-4">
        <div class="w-full max-w-6xl mx-auto py-8 px-6">
            <PageComponent name="blogPost" v-slot="{ vars }">
                <div class="flex flex-col max-w-2xl">
                    <div v-html="vars.post.content_html" />
                </div>
            </PageComponent>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import { PageContent, PageComponent } from '../../../../plugins/ratmd/laika/resources';

// Define Component
defineOptions({ layout: BaseLayout });
</script>
