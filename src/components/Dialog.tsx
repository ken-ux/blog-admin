import { useState } from "react";
import { FormData } from "../types";

export default function Dialog({ clickHandler }: { clickHandler: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    text: "",
    timestamp: new Date(),
    published: false,
  });

  const handleChange = (
    property: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newFormData = formData;
    switch (property) {
      case "title":
      case "text":
        newFormData[property] = e.target.value;
        break;
      case "timestamp":
        newFormData[property] = new Date(e.target.value);
        break;
      case "published":
        newFormData[property] = e.target.value === "true";
    }
    setFormData(newFormData);
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    clickHandler();
    const url = import.meta.env.VITE_API_URL + "/posts";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token") as string,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      console.log("Response:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <dialog className="min-w-96 rounded p-4 shadow-xl">
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="border px-2 py-1"
            required
            onChange={(e) => handleChange("title", e)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            name="text"
            className="border px-2 py-1"
            required
            onChange={(e) => handleChange("text", e)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="timestamp">Timestamp:</label>
          <input
            type="date"
            id="timestamp"
            name="timestamp"
            className="border px-2 py-1"
            required
            onChange={(e) => handleChange("timestamp", e)}
          />
        </div>
        <div className="flex items-center gap-2">
          <legend>Publish:</legend>
          <input
            type="radio"
            id="published_true"
            name="published"
            value="true"
            className="border"
            required
            onChange={(e) => handleChange("published", e)}
          />
          <label htmlFor="published_true">True</label>
          <input
            type="radio"
            id="published_false"
            name="published"
            value="false"
            className="border"
            onChange={(e) => handleChange("published", e)}
          />
          <label htmlFor="published_false">False</label>
        </div>

        <div className="flex gap-1 self-end">
          <button
            type="button"
            onClick={clickHandler}
            className="rounded bg-slate-600 px-2 py-1 text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded bg-sky-600 px-2 py-1 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
}
