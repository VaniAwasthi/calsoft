"use client";

import { useEffect, useState } from "react";
import { X, ChevronDown, Phone, RefreshCw } from "lucide-react";
import ButtonLayout from "../utilities/ButtonLayout";
import ButtonImage from "@/app/assets/home/buttonImg.webp";
import { toast } from "sonner";
import { submitResume } from "@/app/store/actions/resumeFormSubmit";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplateNoReload,
} from "react-simple-captcha";

export default function JobApplicationModal({ isOpen, onClose, jobTitle }) {
  const [captchaCode, setCaptchaCode] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "0-1", // Set default experience value to "0-1" to match the first option
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    currentLocation: "",
    details: "",
    designation: jobTitle || "", // Always include designation in formData
  });

  const [focusStates, setFocusStates] = useState({
    name: false,
    email: false,
    phone: false,
    experience: false,
    currentCTC: false,
    expectedCTC: false,
    noticePeriod: false,
    currentLocation: false,
    details: false,
    captchaCode: false,
    designation: false, // Always include designation
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  useEffect(() => {
    if (isOpen) {
      loadCaptchaEnginge(4);
    }
  }, [isOpen]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFocus = (field) => {
    setFocusStates((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocusStates((prev) => ({ ...prev, [field]: false }));
  };

  const shouldLabelFloat = (field) => {
    return focusStates[field] || formData[field] !== "";
  };

  const nameLabelFloat = shouldLabelFloat("name");
  const emailLabelFloat = shouldLabelFloat("email");
  const phoneLabelFloat = shouldLabelFloat("phone");
  const experienceLabelFloat = shouldLabelFloat("experience");
  const currentCTCLabelFloat = shouldLabelFloat("currentCTC");
  const expectedCTCLabelFloat = shouldLabelFloat("expectedCTC");
  const noticePeriodLabelFloat = shouldLabelFloat("noticePeriod");
  const currentLocationLabelFloat = shouldLabelFloat("currentLocation");
  const detailsLabelFloat = shouldLabelFloat("details");
  const captchaCodeLabelFloat = shouldLabelFloat("captchaCode");
  const designationLabelFloat = shouldLabelFloat("designation"); // Always calculate this

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        toast.error("File size should not exceed 5MB", {
          duration: 3000,
        });
        event.target.value = ""; // clear the input
        return;
      }

      // ✅ valid file
      toast.success("File uploaded successfully", {
        duration: 3000,
      });
      setSelectedFile(file);
    } else toast.error("File not uploaded. Something went wrong!!");
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    // Reset the file input
    const fileInput = document.getElementById("resume");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  function clearForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "0-1", // Set default experience value to "0-1" to match the first option
      currentCTC: "",
      expectedCTC: "",
      noticePeriod: "",
      currentLocation: "",
      details: "",
      designation: jobTitle || "", // Always include designation in formData
    });
    setSelectedFile(null);
    setCaptchaCode("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateCaptcha(captchaCode)) {
      setCaptchaError("Captcha does not match. Please try again.");
      return;
    }
    setIsSubmitting(true);
    const response = await submitResume({
      ...formData,
      resume: selectedFile,
    });
    if (response.data.success == true)
      toast.success("Your application submitted successfully", {
        duration: 3000,
      });

    clearForm();
  };

  const refreshCaptcha = () => {
    loadCaptchaEnginge(4);
    setCaptchaCode("");
    setCaptchaError("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => {
          clearForm();
          onClose();
        }}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-4 rounded-lg shadow-2xl">
        {/* Header with gradient background */}
        <div className="relative bg-gradient-to-r from-[#1a1a5c] to-[#72388d] px-8 py-8 text-white">
          <button
            onClick={() => {
              clearForm();
              onClose();
            }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {jobTitle && (
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 pr-12">
              {jobTitle}
            </h1>
          )}
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            If you think you could fit into our web studio and have some work +
            eat + music + laugh together, then let's fill the below form.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <input
                type="text"
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-600 outline-none py-3 pt-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed peer text-black"
              />
              <label
                className={`absolute left-0 text-lg font-medium text-gray-900 transition-all duration-200 pointer-events-none ${
                  nameLabelFloat
                    ? "top-0 text-sm text-gray-600"
                    : "top-3 text-lg text-gray-500"
                }`}
              >
                Your Name*
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-600 outline-none py-3 pt-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed peer text-black"
              />
              <label
                className={`absolute left-0 text-lg font-medium text-gray-900 transition-all duration-200 pointer-events-none ${
                  emailLabelFloat
                    ? "top-0 text-sm text-gray-600"
                    : "top-3 text-lg text-gray-500"
                }`}
              >
                Your Email*
              </label>
            </div>
          </div>

          {/* Row 2: Phone and Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-gray-600 pt-6 pb-3">
                <div className="flex items-center gap-2 pr-3">
                  <Phone className="w-4 h-4 text-gray-600" />
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
                <input
                  type="tel"
                  required
                  disabled={isSubmitting}
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  onFocus={() => handleFocus("phone")}
                  onBlur={() => handleBlur("phone")}
                  className="flex-1 bg-transparent border-0 outline-none text-lg disabled:opacity-50 disabled:cursor-not-allowed text-black"
                />
              </div>
              <label
                className={`absolute left-0 text-lg font-medium text-gray-900 transition-all duration-200 pointer-events-none ${
                  phoneLabelFloat
                    ? "top-0 text-sm text-gray-600"
                    : "top-6 text-lg left-12 text-gray-500"
                }`}
              >
                Phone Number*
              </label>
            </div>
            <div className="relative">
              <div className="relative border-b-2 border-gray-300 focus-within:border-gray-600 pt-6 pb-3">
                <select
                  required
                  disabled={isSubmitting}
                  value={formData.experience}
                  onChange={(e) =>
                    handleInputChange("experience", e.target.value)
                  }
                  onFocus={() => handleFocus("experience")}
                  onBlur={() => handleBlur("experience")}
                  className="w-full bg-transparent border-0 outline-none text-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed pr-8 text-black"
                >
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
              </div>
              <label
                className={`absolute left-0 text-lg font-medium text-gray-900 transition-all duration-200 pointer-events-none ${
                  experienceLabelFloat
                    ? "top-0 text-sm text-gray-600"
                    : "top-3 text-lg text-gray-500"
                }`}
              >
                Select your Experience
              </label>
            </div>
          </div>

          {/* Row 3: Current CTC and Expected CTC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <input
                type="text"
                required
                disabled={isSubmitting}
                value={formData.currentCTC}
                onChange={(e) =>
                  handleInputChange("currentCTC", e.target.value)
                }
                onFocus={() => handleFocus("currentCTC")}
                onBlur={() => handleBlur("currentCTC")}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-600 outline-none py-3 pt-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed text-black"
              />
              <label
                className={`absolute left-0 text-lg font-medium text-gray-900 transition-all duration-200 pointer-events-none ${
                  currentCTCLabelFloat
                    ? "top-0 text-sm text-gray-600"
                    : "top-3 text-lg text-gray-500"
                }`}
              >
                Current CTC *
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                required
                disabled={isSubmitting}
                value={formData.expectedCTC}
                onChange={(e) =>
                  handleInputChange("expectedCTC", e.target.value)
                }
                onFocus={() => handleFocus("expectedCTC")}
                onBlur={() => handleBlur("expectedCTC")}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-600 outline-none py-3 pt-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed text-black"
              />
              <label
                className={`absolute left-0 text-lg font-medium text-gray-900 transition-all duration-200 pointer-events-none ${
                  expectedCTCLabelFloat
                    ? "top-0 text-sm text-gray-600"
                    : "top-3 text-lg text-gray-500"
                }`}
              >
                Expected CTC *
              </label>
            </div>
          </div>

          {/* Row 4: Notice Period and Current Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <input
                type="number"
                min={0}
                required
                disabled={isSubmitting}
                value={formData.noticePeriod}
                onChange={(e) =>
                  handleInputChange("noticePeriod", e.target.value)
                }
                onFocus={() => handleFocus("noticePeriod")}
                onBlur={() => handleBlur("noticePeriod")}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-600 outline-none py-3 pt-6 pr-16 text-lg disabled:opacity-50 disabled:cursor-not-allowed text-black"
              />
              <label
                className={`absolute left-0 text-lg font-medium text-gray-900 transition-all duration-200 pointer-events-none ${
                  noticePeriodLabelFloat
                    ? "top-0 text-sm text-gray-600"
                    : "top-3 text-lg text-gray-500"
                }`}
              >
                Notice Period *
              </label>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                in days
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                required
                disabled={isSubmitting}
                value={formData.currentLocation}
                onChange={(e) =>
                  handleInputChange("currentLocation", e.target.value)
                }
                onFocus={() => handleFocus("currentLocation")}
                onBlur={() => handleBlur("currentLocation")}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-600 outline-none py-3 pt-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed text-black"
              />
              <label
                className={`absolute left-0 text-lg font-medium text-gray-900 transition-all duration-200 pointer-events-none ${
                  currentLocationLabelFloat
                    ? "top-0 text-sm text-gray-600"
                    : "top-3 text-lg text-gray-500"
                }`}
              >
                Current Location *
              </label>
            </div>
          </div>

          {!jobTitle && (
            <div className="grid grid-cols-1 gap-8">
              <div className="relative">
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={formData.designation}
                  onChange={(e) =>
                    handleInputChange("designation", e.target.value)
                  }
                  onFocus={() => handleFocus("designation")}
                  onBlur={() => handleBlur("designation")}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-600 outline-none py-3 pt-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed peer text-black"
                />
                <label
                  className={`absolute left-0 text-lg font-medium text-gray-900 transition-all duration-200 pointer-events-none ${
                    designationLabelFloat
                      ? "top-0 text-sm text-gray-600"
                      : "top-3 text-lg text-gray-500"
                  }`}
                >
                  Designation*
                </label>
              </div>
            </div>
          )}

          {/* Job Details Textarea */}
          <div className="relative">
            <textarea
              required
              disabled={isSubmitting}
              value={formData.details}
              onChange={(e) => handleInputChange("details", e.target.value)}
              onFocus={() => handleFocus("details")}
              onBlur={() => handleBlur("details")}
              rows={6}
              className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-600 outline-none py-3 pt-8 text-lg resize-none disabled:opacity-50 disabled:cursor-not-allowed text-black"
            />
            <label
              className={`absolute left-0 text-lg font-medium text-gray-900 transition-all duration-200 pointer-events-none ${
                detailsLabelFloat
                  ? "top-0 text-sm text-gray-600"
                  : "top-3 text-lg text-gray-500"
              }`}
            >
              Write your current job responsibilities, portfolios, and other
              details to get faster shortlisted.*
            </label>
          </div>

          {/* File Upload and Captcha */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div className="space-y-2">
              <label className="text-lg font-medium text-gray-900">
                Upload CV/Resume *
              </label>
              <div className="border-b-2 border-gray-300 pb-2">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                  disabled={isSubmitting}
                />
                <div className="flex items-center gap-3">
                  <label
                    htmlFor="resume"
                    className={`inline-block bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded cursor-pointer text-gray-700 transition-colors flex-shrink-0 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Choose File
                  </label>
                  {selectedFile && (
                    <>
                      <span
                        className="text-gray-600 truncate flex-1 min-w-0"
                        title={selectedFile.name}
                      >
                        {selectedFile.name}
                      </span>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        disabled={isSubmitting}
                        className="w-5 h-5 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        ×
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-2 min-[500px]:gap-4 border-b-2 border-gray-300 focus-within:border-gray-600 pt-6 pb-2">
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={captchaCode}
                  onChange={(e) => {
                    setCaptchaCode(e.target.value);
                    setCaptchaError("");
                  }}
                  onFocus={() => handleFocus("captchaCode")}
                  onBlur={() => handleBlur("captchaCode")}
                  className="flex-1 bg-transparent border-0 outline-none text-lg disabled:opacity-50 disabled:cursor-not-allowed text-black order-3 min-[500px]:order-1"
                />
                <div className="bg-black text-white px-3 py-1 font-mono text-lg w-fit xs:min-w-[60px] text-center order-1 min-[500px]:order-2">
                  <LoadCanvasTemplateNoReload />
                </div>
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  disabled={isSubmitting}
                  className="p-1 hover:bg-gray-100 rounded flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed self-start order-2 min-[500px]:order-3"
                >
                  <RefreshCw className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <label
                className={`absolute left-0 text-lg font-medium text-gray-900 transition-all duration-200 pointer-events-none ${
                  captchaCodeLabelFloat
                    ? "top-0 text-sm text-gray-600"
                    : "top-3 text-lg text-gray-500"
                }`}
              >
                Input this code
              </label>
              {captchaError && (
                <p className="text-red-500 text-sm mt-1">{captchaError}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <ButtonLayout
              onClick={handleSubmit}
              disabled={isSubmitting}
              text={isSubmitting ? "Submitting..." : "Submit"}
              image={ButtonImage}
              hoverImage={ButtonImage}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
