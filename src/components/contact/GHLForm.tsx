"use client";

import { useEffect } from "react";

export default function GHLForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/keF1Nr5x4Z0xB0lixFp3"
      style={{
        width: "100%",
        height: "1294px",
        border: "none",
        borderRadius: "8px",
      }}
      id="inline-keF1Nr5x4Z0xB0lixFp3"
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Website - Investor / Accredited Investor Form"
      data-height="1294"
      data-layout-iframe-id="inline-keF1Nr5x4Z0xB0lixFp3"
      data-form-id="keF1Nr5x4Z0xB0lixFp3"
      title="Website - Investor / Accredited Investor Form"
    />
  );
}
