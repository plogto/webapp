export interface ChangePasswordForm {
  oldPassword?: string;
  newPassword: string;
  confirmPassword: string;
}

export interface Inputs {
  name: keyof ChangePasswordForm;
  label: string;
}
