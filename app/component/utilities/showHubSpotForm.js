// utils/showHubSpotForm.js
import Swal from "sweetalert2";

export const showHubSpotForm = async (className) => {

  if (!className) {
    console.error("className is required for HubSpot form");
    return;
  }

  try {
    const res = await fetch(`/data/popupformapi/${className}`);
    if (!res.ok) throw new Error("No form found for " + className);

    const data = await res.json();

    if (data?.form_code) {
      Swal.fire({
        title: data.name,
        html: `<div id="hubspot-form-container">${data.form_code}</div>`,
        showCloseButton: true,
        showConfirmButton: false,
        width: 600,
        didOpen: () => {
          // Load HubSpot script only once
          if (!window.hbsptScriptLoaded) {
            const script = document.createElement("script");
            script.src = "//js.hsforms.net/forms/embed/v2.js";
            script.type = "text/javascript";
            script.onload = () => {
              window.hbsptScriptLoaded = true;
              renderForm(data.form_code);
            };
            document.body.appendChild(script);
          } else {
            renderForm(data.form_code);
          }

          function renderForm(code) {
            const formIdMatch = code.match(/formId:\s*"([^"]+)"/);
            const formId = formIdMatch ? formIdMatch[1] : null;

            if (formId && window.hbspt?.forms?.create) {
              window.hbspt.forms.create({
                portalId: "9496305",
                formId,
                region: "na1",
                target: "#hubspot-form-container",
              });
            }
          }
        },
      });
    }
  } catch (err) {
    console.error("Error loading HubSpot form:", err);
  }
};
