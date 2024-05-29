import LoginForm from "./LoginForm";
import { LoginFormProps } from "../types";

export default function LoginPage({ setAuthenticated }: LoginFormProps) {
  return (
    <>
      <h1 className="text-2xl">Blog Admin</h1>
      <p>Login to create and edit your posts.</p>
      <LoginForm setAuthenticated={setAuthenticated} />
    </>
  );
}
