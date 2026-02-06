import './styles/theme.css';

import type { ResolveResult } from "../../../plugins/ratmd/laika/resources/types";
import { createApp, h } from "vue";
import { createLaikaApp } from "../../../plugins/ratmd/laika/resources/laika";

/**
 * Main Application Runtime
 */
async function main() {
    createLaikaApp({
        title(title: string) { return title; },
        resolve(name: string) {
            const pages: Record<string, ResolveResult> = import.meta.glob('./pages/**/*.vue', { eager: true });
            if (`./pages/${name}.vue` in pages) {
                return pages[`./pages/${name}.vue`];
            } else if (`./pages/${name}Page.vue` in pages) {
                return pages[`./pages/${name}Page.vue`];
            } else {
                throw new Error('Laika: Vue Page component not found.');
            }
        },
        setup({ App, root, props, plugin }) {
            const app = createApp({ render: () => h(App, props) });
            app.use(plugin);
            app.mount(root);
            return app;
        }
    });
}
main();
