<template>
    <nav v-if="socialMenu && socialMenu.vars.menuItems.length > 0" class="flex flex-row gap-2">
        <template v-for="(item, idx) of socialMenu.vars.menuItems" :key="idx">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger as-child>
                        <Button size="icon-lg" variant="ghost" @click="visit(item)">
                            <Facebook v-if="item.url.includes('facebook.com')" class="size-5 stroke-1.5 text-black" />
                            <Instagram v-else-if="item.url.includes('instagram.com')" class="size-5 stroke-1.5 text-black" />
                            <GitHub v-else-if="item.url.includes('github.com')" class="size-5 stroke-1.5 text-black" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>{{ item.title }}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </template>
    </nav>
</template>

<script lang="ts" setup>
import { useLaika } from '@laika';
import { computed } from 'vue';
import Facebook from '@/components/socials/Facebook.vue';
import Instagram from '@/components/socials/Instagram.vue';
import GitHub from '@/components/socials/GitHub.vue';
import { Button } from '@/components/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/tooltip';

// Composable
const laika = useLaika();

// States
const socialMenu = computed<any>(() => {
    if (laika.components) {
        return 'socials' in laika.components ? laika.components.socials : null;
    } else {
        return null;
    }
});

/**
 * Visit Page
 * @param item
 */
function visit(item: any) {
    window.open(item.url, item.viewBag.isExternal ? '_blank' : '_self');
}
</script>
