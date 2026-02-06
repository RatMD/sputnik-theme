<template>
    <div class="w-full max-w-6xl mx-auto py-8 px-6">
        <PageContent />
    </div>
</template>

<script lang="ts" setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import { PageContent } from '../../../../plugins/ratmd/laika/resources';

// Define Component
defineOptions({ layout: BaseLayout });
</script>
