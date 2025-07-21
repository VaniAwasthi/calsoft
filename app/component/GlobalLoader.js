"use client";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const GlobalLoader = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <motion.div
        className="w-10 h-10 border-4 border-[#2E3092] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default GlobalLoader;
