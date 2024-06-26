import { useState } from "react";
import { PostProps } from "../types";
import { FormData } from "../types";

export default function Post({
  title,
  text,
  timestamp,
  id,
  published,
}: PostProps) {
  const [formData, setFormData] = useState<FormData>({
    title: title,
    text: text,
    timestamp: new Date(timestamp),
    published: published,
  });
  const [editable, setEditable] = useState(false);

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

  const parseDate = (date: Date): string => {
    const dateArr = date.toLocaleDateString().split("/");
    const y = dateArr[2];
    let [m, d] = dateArr;

    if (m.length < 2) {
      m = "0" + m;
    }
    if (d.length < 2) {
      d = "0" + d;
    }
    return `${y}-${m}-${d}`;
  };

  const deletePost = async () => {
    const url = import.meta.env.VITE_API_URL + "/posts/" + id;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token") as string,
        },
      });

      const result = await response.text();
      console.log("Response:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setEditable(false);
    const url = import.meta.env.VITE_API_URL + "/posts/" + id;

    try {
      const response = await fetch(url, {
        method: "PUT",
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
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-8 rounded-lg border border-slate-300 p-6 shadow-md md:flex-row"
    >
      <div className="flex grow-[2] flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={title}
            disabled={!editable}
            className="w-full border px-2 py-1"
            onChange={(e) => handleChange("title", e)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            name="text"
            defaultValue={text}
            disabled={!editable}
            className="w-full border px-2 py-1"
            onChange={(e) => handleChange("text", e)}
          />
        </div>
      </div>
      <div className="flex flex-auto flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="timestamp">Timestamp:</label>
          <input
            type="date"
            id="timestamp"
            name="timestamp"
            defaultValue={parseDate(new Date(timestamp))}
            disabled={!editable}
            className="border px-2 py-1"
            onChange={(e) => handleChange("timestamp", e)}
          />
        </div>
        <div className="flex items-center gap-2">
          <legend>Published:</legend>
          <input
            type="radio"
            id="published_true"
            name="published"
            value="true"
            defaultChecked={published ? true : false}
            disabled={!editable}
            className="border"
            onChange={(e) => handleChange("published", e)}
          />
          <label htmlFor="published_true">True</label>
          <input
            type="radio"
            id="published_false"
            name="published"
            value="false"
            defaultChecked={!published ? true : false}
            disabled={!editable}
            className="border"
            onChange={(e) => handleChange("published", e)}
          />
          <label htmlFor="published_false">False</label>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded bg-red-600 px-2 py-1 text-white"
            onClick={deletePost}
          >
            Delete
          </button>
          <button
            type="button"
            className="rounded bg-sky-600 px-2 py-1 text-white"
            onClick={() => setEditable(!editable)}
          >
            {editable ? "Cancel" : "Edit"}
          </button>
          {editable && (
            <button
              type="submit"
              className="rounded bg-sky-600 px-2 py-1 text-white"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
