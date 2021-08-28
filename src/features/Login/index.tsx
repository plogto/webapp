import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from "./Login.module.css";
import { useLogin } from "./hooks/useLogin";

export default function Login() {
  const { formMethods, submit, error, loading } = useLogin();
  const { register, handleSubmit } = formMethods;

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(submit)} className={styles.form}>
        <h1 className={styles.logo}>Poster</h1>
        {error && (
          <div className="mt-3 w-full">
            <div className={styles.error}>{error.message}</div>
          </div>
        )}
        <div className="mt-2">
          <Input
            type="text"
            name="username"
            placeholder="Username"
            label="Username"
            register={register("username", {
              required: true,
            })}
          />
        </div>
        <div className="mt-4">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            register={register("password", {
              required: true,
            })}
          />
        </div>
        <div className="mt-5">
          <Button
            loading={loading}
            type="submit"
            className={styles.submitButton}>
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
}
