import { useState } from "react";
import { PostProps } from "../types";

export default function Post({
  title,
  text,
  timestamp,
  id,
  published,
}: PostProps) {
  const [editable, setEditable] = useState(false);

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

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border border-slate-300 rounded-lg flex flex-col md:flex-row gap-8 p-6 shadow-md"
    >
      <div className="grow-[2] flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={title}
            disabled={!editable}
            className="border px-2 py-1 w-full"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            name="text"
            defaultValue={text}
            disabled={!editable}
            className="border px-2 py-1 w-full"
          />
        </div>
      </div>
      <div className="flex-auto flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="timestamp">Timestamp:</label>
          <input
            type="date"
            id="timestamp"
            name="timestamp"
            defaultValue={parseDate(new Date(timestamp))}
            disabled={!editable}
            className="border px-2 py-1"
          />
        </div>
        <div className="flex gap-2 items-center">
          <legend>Published:</legend>
          <input
            type="radio"
            id="published_true"
            name="published"
            value="true"
            defaultChecked={published ? true : false}
            disabled={!editable}
            className="border"
          />
          <label htmlFor="published_true">True</label>
          <input
            type="radio"
            id="published_false"
            name="published"
            value="false"
            checked={!published ? true : false}
            disabled={!editable}
            className="border"
          />
          <label htmlFor="published_false">False</label>
        </div>

        <p>Published: {published.toString()}</p>

        <p>{id}</p>
        <div className="flex gap-2">
          <button
            type="button"
            className="bg-red-600 text-white rounded px-2 py-1"
          >
            Delete
          </button>
          <button
            type="button"
            className="bg-sky-600 text-white rounded px-2 py-1"
            onClick={() => setEditable(!editable)}
          >
            {editable ? "Cancel" : "Edit"}
          </button>
          {editable && (
            <button
              type="submit"
              className="bg-sky-600 text-white rounded px-2 py-1"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
