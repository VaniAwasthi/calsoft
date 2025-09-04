// utils/showHubSpotForm.js
import Swal from "sweetalert2";

export const showHubSpotForm = async (className) => {
  if (!className) {
    console.error("className is required for HubSpot form");
    return;
  }

  // 1. Create and show a non-modal loader on the page
  const loader = document.createElement("div");
  loader.className = "page-loader"; // You'll need to define this CSS class
  document.body.appendChild(loader);

  try {
    const res = await fetch(`/data/popupformapi/${className}`);
    if (!res.ok) throw new Error("No form found for " + className);

    const data = await res.json();

    // 2. Remove the loader after a successful fetch
    document.body.removeChild(loader);

    if (data?.form_code) {
      // 3. Show the modal with the form
      Swal.fire({
        title: data.name,
        html: `<div id="hubspot-form-container">${data.form_code}</div>`,
        showCloseButton: true,
        showConfirmButton: false,
        width: 600,
        didOpen: () => {
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
    // 4. Remove the loader and show an error message on failure
    document.body.removeChild(loader);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error loading the form. Please try again later.",
      showConfirmButton: false,
      timer: 3000,
    });
    console.error("Error loading HubSpot form:", err);
  }
};