// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/supabase/vite";

// Static export (Hostinger) is opt-in via STATIC_EXPORT=1; the default build is
// Lovable's runtime SSR build, where Nitro is owned by the shared config.
const staticExport = process.env.STATIC_EXPORT === "1";

const STATIC_PAGES = [
      { path: "/" },
      { path: "/about" },
      { path: "/clients" },
      { path: "/contact" },
      { path: "/services" },
      { path: "/solutions" },
      { path: "/solutions/OpenText-Server-Backup" },
      { path: "/solutions/app-modernization" },
      { path: "/solutions/cloud-migration" },
      { path: "/solutions/container-migration" },
      { path: "/solutions/data-protection" },
      { path: "/solutions/disaster-recovery-orchestration" },
      { path: "/solutions/edr" },
      { path: "/solutions/email-archiving" },
      { path: "/solutions/email-encryption" },
      { path: "/solutions/email-protection" },
      { path: "/solutions/endpoint-backup" },
      { path: "/solutions/endpoint-protection" },
      { path: "/solutions/it-discovery" },
      { path: "/solutions/mdr" },
      { path: "/solutions/onprem-backup" },
      { path: "/solutions/opentext-carbonite-availability" },
      { path: "/solutions/opentext-carbonite-migrate" },
      { path: "/solutions/ransomware-protection" },
      { path: "/solutions/saas-backup" },
      { path: "/solutions/secure-cloud" },
      { path: "/solutions/security" },
      { path: "/solutions/security-awareness" },
      { path: "/solutions/server-migration-orchestration" },
      { path: "/solutions/servers-data-protection" },
      { path: "/vendors" },
      { path: "/vendors/appcure" },
      { path: "/vendors/arrosoft" },
      { path: "/vendors/cloudcasa" },
      { path: "/vendors/nakivo" },
      { path: "/vendors/opentext" },
      { path: "/vendors/rivermeadow" },
      { path: "/vendors/sangfor" },
      { path: "/vendors/tds" },
      { path: "/404", prerender: { enabled: true, outputPath: "/404.html" } },
];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(staticExport
      ? {
          prerender: {
            enabled: true,
            crawlLinks: false,
            autoStaticPathsDiscovery: false,
            failOnError: true,
            autoSubfolderIndex: false,
            concurrency: 4,
          },
          pages: STATIC_PAGES,
        }
      : { prerender: { enabled: false } }),
  },
  // Static export target (Hostinger/LiteSpeed): no runtime server is deployed,
  // so nitro is overridden off. In the default Lovable build the key is omitted
  // entirely so the shared config's nitro setup stays in charge.
  ...(staticExport ? { nitro: false as const } : {}),
  vite: {
    plugins: [mcpPlugin()],
  },
});