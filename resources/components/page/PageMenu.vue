<template>
    <template v-if="mainMenu && mainMenu.props.menuItems.length > 0">
        <NavigationMenu v-if="isDesktop" class="bg-white rounded-lg">
            <NavigationMenuList>
                <template v-for="(item, idx) of mainMenu.props.menuItems" :key="idx">
                    <NavigationMenuItem :href="item.url"
                        @click.prevent="() => $laika.visit(item.url)" as-child :class="navigationMenuTriggerStyle()">
                        <NavigationMenuLink :href="item.url">{{ item.title }}</NavigationMenuLink>
                    </NavigationMenuItem>
                </template>
            </NavigationMenuList>
        </NavigationMenu>

        <Sheet v-else>
            <SheetTrigger as-child>
                <Button variant="outline" class="mb-8">
                    <MenuIcon />
                    <span>Open Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>{{ $payload?.theme.options.site_name || 'SPUTNIK' }}</SheetTitle>
                </SheetHeader>
                <div class="w-full h-full pb-8 pt-0">
                    <ScrollArea class="w-full h-auto max-h-[70vh] overflow-x-hidden">
                        <NavigationMenu orientation="horizontal" class="bg-white rounded-lg">
                            <NavigationMenuList class="flex-col items-start">
                                <template v-for="(item, idx) of mainMenu.vars.menuItems" :key="idx">
                                    <NavigationMenuItem @click="() => $laika.visit(item.url)" as-child :class="navigationMenuTriggerStyle()">
                                        <NavigationMenuLink>{{ item.title }}</NavigationMenuLink>
                                    </NavigationMenuItem>
                                </template>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </ScrollArea>
                </div>
            </SheetContent>
        </Sheet>
    </template>
</template>

<script lang="ts" setup>
import { useLaika } from '@laika';
import { computed } from 'vue';
import {
    Button
} from '@/components/button';
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
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/sheet';
import {
    ScrollArea
} from '@/components/scroll-area';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { MenuIcon } from 'lucide-vue-next';

// Composable
const laika = useLaika();
const breakpoints = useBreakpoints(breakpointsTailwind);

// States
const isDesktop = breakpoints.greaterOrEqual('md');
const mainMenu = computed<any>(() => {
    if (laika.components) {
        return 'main' in laika.components ? laika.components.main : null;
    } else {
        return null;
    }
});
</script>
