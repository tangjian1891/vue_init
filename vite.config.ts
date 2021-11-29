import { defineConfig } from "vite";
import styleImport from "vite-plugin-style-import";//vite-plugin-style-import插件有bug  https://github.com/anncwb/vite-plugin-style-import/issues/52
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
