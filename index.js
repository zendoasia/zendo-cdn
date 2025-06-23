import { respond } from "./utils";

export default {
  // eslint-disable-next-line no-unused-vars
  async fetch(request, env, ctx) {
    const assetResponse = await env.ASSETS.fetch(request);

    // Check if the asset was actually found
    if (assetResponse.status === 404) {
      return respond("The asset you are searching was not found.", 404);
    }

    return assetResponse;
  },
};
