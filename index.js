import { respond } from "./utils";

const robotsTxt = `User-agent: *
Disallow: /`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === "/robots.txt") {
      return respond(robotsTxt, 200);
    }

    const assetResponse = await env.ASSETS.fetch(request);

    // Check if the asset was actually found
    if (assetResponse.status === 404) {
      return respond("The asset you are searching was not found.", 404);
    }

    return assetResponse;
  },
};
