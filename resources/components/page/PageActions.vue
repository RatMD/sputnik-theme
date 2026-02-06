<template>
    <nav class="flex flex-row gap-2 place-content-end">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger as-child>
                    <Button size="icon-lg" variant="ghost">
                        <MoonIcon class="size-5 stroke-1.5 text-black" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <p>Toggle Dark Mode</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </nav>
</template>

<script lang="ts" setup>
import { Button } from '@/components/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/tooltip';
import { MoonIcon } from 'lucide-vue-next';
</script>
