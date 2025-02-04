import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event: FetchEvent): Promise<Response> {
  try {
    // Try to fetch the asset from the KV bucket
    return await getAssetFromKV(event);
  } catch (error: any) {
    // Optionally include error handling such as checking for 404
    return new Response('Internal Error', { status: 500 });
  }
} 