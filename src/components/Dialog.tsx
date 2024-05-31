import { useState } from "react";
import { DialogFormData } from "../types";

export default function Dialog({ clickHandler }: { clickHandler: () => void }) {
  const [formData, setFormData] = useState<DialogFormData>({
    title: "",
    text: "",
    timestamp: new Date(),
    published: false,
  });

  const handleChange = (
    property: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    console.log(formData);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    clickHandler();
  };

  return (
    <dialog className="shadow-xl rounded p-4 min-w-96">
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
        <div className="flex gap-2 items-center">
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

        <div className="self-end flex gap-1">
          <button
            type="button"
            onClick={clickHandler}
            className="bg-slate-600 text-white px-2 py-1 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-sky-600 text-white px-2 py-1 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
}
