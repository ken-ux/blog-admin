import LoginForm from "./LoginForm";
import { LoginFormProps } from "../types";

export default function LoginPage({ setAuthenticated }: LoginFormProps) {
  return (
    <main className="flex flex-col items-center gap-6">
      <h1 className="text-2xl">Blog Admin</h1>
      <p>Login to create and edit your posts.</p>
      <LoginForm setAuthenticated={setAuthenticated} />
    </main>
  );
}
