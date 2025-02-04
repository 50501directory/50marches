import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event: FetchEvent): Promise<Response> {
  const url = new URL(event.request.url);
  
  try {
    // First try getting the asset directly
    const response = await getAssetFromKV(event, {
      mapRequestToAsset: req => {
        // If this is a page route (no file extension), serve index.html
        const url = new URL(req.url);
        if (!url.pathname.includes('.')) {
          return new Request(`${url.origin}/index.html`, req);
        }
        return req;
      },
    });

    // Add security headers
    const headers = new Headers(response.headers);
    headers.set('X-XSS-Protection', '1; mode=block');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'DENY');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });

  } catch (error: any) {
    // Log error for debugging
    console.error(`Error handling request for ${url.pathname}:`, error.message);

    // Serve index.html for all navigation requests
    if (!url.pathname.includes('.')) {
      try {
        const response = await getAssetFromKV(event, {
          mapRequestToAsset: _ => new Request(`${url.origin}/index.html`, event.request)
        });
        return new Response(response.body, {
          status: 200,
          headers: response.headers,
        });
      } catch (e) {
        console.error('Failed to serve index.html:', e);
      }
    }

    return new Response(`Not found: ${url.pathname}`, {
      status: 404,
      headers: {
        'content-type': 'text/plain',
      },
    });
  }
}