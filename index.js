import { respond } from "./utils";

export default {
  async fetch(request, env, ctx) {

    const assetResponse = await env.ASSETS.fetch(request);

    // Check if the asset was actually found
    if (assetResponse.status === 404) {
      return respond("The asset you are searching was not found.", 404);
    }

    return assetResponse;
  },
};
