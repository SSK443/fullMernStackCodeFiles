import { defineConfig } from "vite";
import { react } from "@vitejs/plugin-react";
import compiler from "@react/compiler";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss(),react({compiler})],
});
