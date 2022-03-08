export type ChangePasswordForm = {
  oldPassword?: string;
  newPassword: string;
  confirmPassword: string;
};

export type Inputs = {
  name: keyof ChangePasswordForm;
  label: string;
};
