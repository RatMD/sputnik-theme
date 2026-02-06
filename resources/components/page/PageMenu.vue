<template>
    <NavigationMenu v-if="mainMenu && mainMenu.vars.menuItems.length > 0" class="bg-white rounded-lg">
        <NavigationMenuList>
            <template v-for="(item, idx) of mainMenu.vars.menuItems" :key="idx">
                <NavigationMenuItem @click="() => $laika.visit(item.url)" as-child :class="navigationMenuTriggerStyle()">
                    <NavigationMenuLink>{{ item.title }}</NavigationMenuLink>
                </NavigationMenuItem>
            </template>

        </NavigationMenuList>
    </NavigationMenu>
</template>

<script lang="ts" setup>
import { useLaika } from '../../../../../plugins/ratmd/laika/resources';
import { computed } from 'vue';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from '@/components/navigation-menu';

// Composable
const laika = useLaika();

// States
const mainMenu = computed<any>(() => {
    if (laika.components) {
        return 'main' in laika.components ? laika.components.main : null;
    } else {
        return null;
    }
});
</script>
