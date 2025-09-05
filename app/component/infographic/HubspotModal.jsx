import { useEffect } from "react";

export const HubspotModal = ({ isOpen, onClose, hubspotScript }) => {
  useEffect(() => {
    // Load HubSpot embed script if not already loaded
    if (!document.querySelector("#hs-script-loader")) {
      const script = document.createElement("script");
      script.id = "hs-script-loader";
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (isOpen && hubspotScript && window.hbspt) {
      const { portalId, formId, region } = parseHubspotScript(hubspotScript);

      if (!portalId || !formId) {
        console.error("❌ Missing HubSpot form details", { portalId, formId, region });
        return;
      }

      // Clear old form content
      const container = document.getElementById("hubspot-form-container");
      if (container) container.innerHTML = "";

      // Create HubSpot form
      window.hbspt.forms.create({
        portalId,
        formId,
        region: region || "na1",
        target: "#hubspot-form-container",
      });
    }
  }, [isOpen, hubspotScript]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[600px] p-6 rounded relative shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        <div id="hubspot-form-container"></div>
      </div>
    </div>
  );
};

// 🔹 Helper: parse <script> string into config
function parseHubspotScript(scriptString) {
  const portalIdMatch = scriptString.match(/portalId:\s*["']([^"']+)["']/);
  const formIdMatch = scriptString.match(/formId:\s*["']([^"']+)["']/);
  const regionMatch = scriptString.match(/region:\s*["']([^"']+)["']/);

  return {
    portalId: portalIdMatch ? portalIdMatch[1] : null,
    formId: formIdMatch ? formIdMatch[1] : null,
    region: regionMatch ? regionMatch[1] : "na1",
  };
}
