import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event: FetchEvent): Promise<Response> {
  const url = new URL(event.request.url);
  const pathname = url.pathname;

  try {
    // Explicitly serve index.html for these three routes:
    if (pathname === '/' || pathname === '/map' || pathname === '/resources') {
      return await getAssetFromKV(event, {
        mapRequestToAsset: req =>
          // Remap the request URL to /index.html regardless of the actual path
          new Request(`${url.origin}/index.html`, req),
      });
    }

    // For all other paths, try to serve static assets normally.
    return await getAssetFromKV(event);
  } catch (error: any) {
    console.error(`Error handling request for ${pathname}:`, error.stack);

    // Return a plain 404 Not Found response if asset not found or any error occurs.
    return new Response('Not found', {
      status: 404,
      headers: { 'content-type': 'text/plain' },
    });
  }
}