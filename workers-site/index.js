import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env) {
    try {
      // If you need single-page app fallback support, you could add options here:
      return await getAssetFromKV(env, request);
    } catch (e) {
      return new Response('Not found', { status: 404 });
    }
  },
}; 