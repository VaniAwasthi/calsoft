import { toast } from "sonner";
import axiosInstance from "../api-config/axiosInstance";

export async function submitResume(data) {
  try {
    if (!data || Object.keys(data).length === 0) {
      toast.error("Data isn't provided correctly", {
        duration: 3000,
      });
      return;
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await axiosInstance.post("/apply", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    toast.error("Something went wrong", {
      duration: 3000,
    });
    return;
  }
}
