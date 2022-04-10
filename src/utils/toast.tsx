import { isDesktop } from "react-device-detect";
import { toast } from "react-hot-toast";
import { Toast } from "@components/Toast";

export function fillToast(message: string) {
  toast.custom(<Toast title={message} type="fill" />, {
    position: isDesktop ? "bottom-left" : "top-center",
    duration: 1000,
  });
}
