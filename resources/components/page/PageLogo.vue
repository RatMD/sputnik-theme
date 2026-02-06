<template>
    <div class="flex flex-col items-center gap-2">
        <a href="" class="font-logo text-7xl">
            {{ $payload?.theme.options.site_name || 'SPUTNIK' }}
        </a>
        <span class="font-display" v-html="description"></span>
    </div>
</template>

<script lang="ts" setup>
import { useLaika } from '../../../../../plugins/ratmd/laika/resources';
import { computed } from 'vue';

// Composables
const laika = useLaika();

// States
const description = computed<string>(() => {
    return ((laika.theme?.options?.site_slogan || '') as string).replace(/\*(.*)?\*/g, '<span class="font-semibold">$1</span>');
});
</script>
