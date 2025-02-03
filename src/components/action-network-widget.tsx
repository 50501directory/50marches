import React, { useEffect, useRef } from "react";

export function ActionNetworkWidget(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Append the stylesheet if it doesn't exist.
    const styleHref = "https://actionnetwork.org/css/style-embed-v3.css";
    if (!document.querySelector(`link[href="${styleHref}"]`)) {
      const linkEl = document.createElement("link");
      linkEl.href = styleHref;
      linkEl.rel = "stylesheet";
      linkEl.type = "text/css";
      document.head.appendChild(linkEl);
    }

    // Append the external widget script if it doesn't exist.
    const scriptSrc = "https://actionnetwork.org/widgets/v5/form/join-our-mailinglist?format=js&source=widget";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const scriptEl = document.createElement("script");
      scriptEl.src = scriptSrc;
      scriptEl.async = true;
      document.body.appendChild(scriptEl);
    }
  }, []);

  return (
    <div
      id="can-form-area-join-our-mailinglist"
      ref={containerRef}
      style={{ width: "100%" }}
    >
      {/* The external Action Network widget will inject its HTML here. */}
    </div>
  );
} 