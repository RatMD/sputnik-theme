<template>
    <div class="w-full flex flex-col gap-4">
        <div class="w-full border-b border-gray-200">
            <div class="w-full max-w-6xl mx-auto py-8 px-6">
                <PageContent />
            </div>
        </div>

        <div class="w-full">
            <div class="w-full max-w-6xl mx-auto py-8 px-6 flex flex-col gap-4">
                <PageComponent name="blogPosts" v-slot="{ vars }">
                    <template v-if="vars.posts.data.length == 0">
                        {{ vars.noPostsMessage }}
                    </template>
                    <template v-else>
                        <div class="grid grid-cols-2 grid-rows-2">
                            <div v-for="(post, idx) of vars.posts.data" :key="post.id" :class="{
                                'row-span-2': idx === 0
                            }">
                                <a :href="post.url" :class="[
                                    'relative rounded-xl overflow-hidden',
                                    'cursor-pointer'
                                ]" @click.prevent="$laika.visit(post.url)">
                                    <template v-if="post.featured_images && post.featured_images.length > 0">
                                        <img
                                            :src="post.featured_images[0].path" :alt="post.featured_images[0].title"
                                            class="aspect-3/2 object-cover rounded-xl overflow-hidden" />
                                    </template>
                                    <div class="absolute left-0 right-0 bottom-0 p-4 rounded-b-xl bg-black/25">
                                        <strong class="font-semibold text-white">
                                            {{ post.title }}
                                        </strong>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </template>
                </PageComponent>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import { PageContent, PageComponent } from '@laika';

// Define Component
defineOptions({ layout: BaseLayout });
</script>
