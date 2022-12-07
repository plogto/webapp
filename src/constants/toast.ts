import { isDesktop } from "react-device-detect";
import type { DefaultToastOptions } from "react-hot-toast";

export const TOAST_OPTIONS: DefaultToastOptions = {
  position: isDesktop ? "bottom-left" : "top-center",
  style: {
    padding: ".5rem 1rem",
    borderRadius: "100rem",
  },
  loading: {
    iconTheme: {
      primary: "#6b7280",
      secondary: "#e5e7eb",
    },
  },
  success: {
    iconTheme: {
      primary: "#10b981",
      secondary: "white",
    },
  },
  error: {
    iconTheme: {
      primary: "#f43f5e",
      secondary: "white",
    },
  },
};
