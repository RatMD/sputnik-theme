import { createApp, h } from "vue";
import { createLaikaApp } from "../../../plugins/ratmd/laika/resources/laika";

/**
 * Main Application Runtime
 */
async function main() {
    console.log('init');

    createLaikaApp({
        title: (title: string) => title,
        async resolve(name: string) {
            console.log(name);
            const pages = import.meta.glob('./pages/**/*.vue', { eager: true });

            if (`./pages/${name}.vue` in pages) {
                return pages[`./pages/${name}.vue`];
            } else if (`./pages/${name}Page.vue` in pages) {
                return pages[`./pages/${name}Page.vue`];
            } else {
                throw new Error('Laika: Vue Page component not found.');
            }
        },
        async setup({ App, root, props, plugin }) {
            const app = createApp({ render: () => h(App, props) });
            app.use(plugin);
            app.mount(root);
        }
    });
}
main();
