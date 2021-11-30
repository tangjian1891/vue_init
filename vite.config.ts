import { defineConfig } from "vite";
import styleImport from "vite-plugin-style-import"; //vite-plugin-style-import插件有bug  https://github.com/anncwb/vite-plugin-style-import/issues/52
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";

import pxtorem from "postcss-pxtorem";

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
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        pxtorem({
          rootValue: 37.5,
          propList: ["*"],
          minPixelValue: 1.1,
        }),
      ],
    },
  },
});
