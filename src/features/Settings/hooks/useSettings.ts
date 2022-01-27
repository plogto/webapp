import { useForm } from "react-hook-form";
import { SettingsForm } from "../@types";
import { useAccountContext } from "@contexts/AccountContext";

export function useSettings() {
  const { user } = useAccountContext();
  const formMethods = useForm<SettingsForm>({
    mode: "all",
    defaultValues: {
      username: user?.username,
      fullName: user?.fullName,
      email: user?.email,
      bio: user?.bio,
      isPrivate: user?.isPrivate,
    },
  });

  return { formMethods, user };
}
