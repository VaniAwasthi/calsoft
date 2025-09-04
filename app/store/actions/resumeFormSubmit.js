import { toast } from "sonner";
import axiosInstance from "../api-config/axiosInstance";

export async function submitResume(data = {}) {
  try {
    if (!data || Object.keys(data).length === 0) {
      toast.error("Data isn't provided correctly", {
        duration: 3000,
      });
      return;
    }
    const response = await axiosInstance.post("/apply", data);
    return response;
  } catch (error) {
    toast.error("Somthing went wrong", {
      duration: 3000,
    });
    return;
  }
}
