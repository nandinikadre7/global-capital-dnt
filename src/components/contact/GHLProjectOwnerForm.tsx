"use client";

import { useEffect } from "react";

export default function GHLProjectOwnerForm() {
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
      src="https://api.leadconnectorhq.com/widget/form/sIupmMYEoefnLMJcoBZR"
      style={{
        width: "100%",
        height: "1039px",
        border: "none",
        borderRadius: "8px",
      }}
      id="inline-sIupmMYEoefnLMJcoBZR"
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Website - Project Owner Form - Copy"
      data-height="1039"
      data-layout-iframe-id="inline-sIupmMYEoefnLMJcoBZR"
      data-form-id="sIupmMYEoefnLMJcoBZR"
      title="Website - Project Owner Form - Copy"
    />
  );
}
