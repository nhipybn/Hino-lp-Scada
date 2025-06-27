import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/", // ✅ Dùng tuyệt đối để đảm bảo path đúng trên Netlify
  server: {
    port: 5173,
    host: true,
    allowedHosts: [".ngrok-free.app"],
  },
  plugins: [react()],
});