import { useState } from "react";
const url = import.meta.env.VITE_API_URL + "/login";

export default function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    
    const postData = new FormData();
    postData.append("username", formData.username);
    postData.append("password", formData.password);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: postData,
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form
      onSubmit={submit}
      // action={url}
      method="post"
      className="border min-h-80 p-4 flex flex-col gap-4"
    >
      <div className="flex gap-2 justify-between">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="border"
          name="username"
          required
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex gap-2 justify-between">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="border"
          name="password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="border">
        Login
      </button>
    </form>
  );
}
