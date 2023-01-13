import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 459,
  site: "eazygo",
  domains: ["deco-sites-eazygo.deno.dev"],
});