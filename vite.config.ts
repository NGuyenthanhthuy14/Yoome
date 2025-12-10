import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@components": path.resolve(__dirname, "src/components"),
            "@assets": path.resolve(__dirname, "src/assets"),
            // "@api": path.resolve(__dirname, "src/api"),
            // "@actions": path.resolve(__dirname, "src/actions"),
            // "@store": path.resolve(__dirname, "src/store"),
            // "@utils": path.resolve(__dirname, "src/utils"),
            // "@hooks": path.resolve(__dirname, "src/hooks"),
            // "@reducers": path.resolve(__dirname, "src/reducers"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
        },
    },
});
