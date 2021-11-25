import { useForm } from "react-hook-form";
import { SettingsForm } from "../@types";
import { useAccountContext } from "@context/AccountContext";
import { useEditUser } from ".";

export function useSettings() {
  const { user } = useAccountContext();
  const formMethods = useForm<SettingsForm>({
    mode: "all",
    defaultValues: {
      username: user?.username,
      fullName: user?.fullName,
      email: user?.email,
      isPrivate: user?.isPrivate,
    },
  });

  const { editUser, editUserResponse } = useEditUser({ user });

  return { formMethods, user, editUser, editUserResponse };
}
