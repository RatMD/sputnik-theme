<template>
    <div>
        <PageContent />
    </div>
</template>

<script lang="ts" setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import { PageContent } from '../../../../plugins/ratmd/laika/resources';

// Define Component
defineOptions({ layout: BaseLayout });
</script>
