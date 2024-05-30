import { PostProps } from "../types";

export default function Post({
  title,
  text,
  timestamp,
  id,
  published,
}: PostProps) {
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
    <form className="border border-red-500 flex flex-col gap-2 p-6">
      <div className="flex gap-2 items-center">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          readOnly
          className="border px-2 py-1"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          name="text"
          value={text}
          readOnly
          className="border px-2 py-1"
        />
      </div>
      <div className="flex gap-2 items-center">
        <label htmlFor="timestamp">Timestamp:</label>
        <input
          type="date"
          id="timestamp"
          name="timestamp"
          value={parseDate(new Date(timestamp))}
          readOnly
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
          checked={published ? true : false}
          readOnly
          className="border"
        />
        <label htmlFor="published_true">True</label>
        <input
          type="radio"
          id="published_false"
          name="published"
          value="false"
          checked={!published ? true : false}
          readOnly
          className="border"
        />
        <label htmlFor="published_false">False</label>
      </div>

      <p>Published: {published.toString()}</p>

      <p>{id}</p>
      <div className="flex gap-2">
        <button
          type="button"
          className="bg-sky-600 text-white rounded px-2 py-1"
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-sky-600 text-white rounded px-2 py-1"
        >
          Delete
        </button>
      </div>
    </form>
  );
}
