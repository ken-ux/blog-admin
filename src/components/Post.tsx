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
    <form className="border border-red-500">
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} readOnly />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <input type="text" id="text" name="text" value={text} readOnly />
      </div>
      <div>
        <label htmlFor="timestamp">Timestamp</label>
        <input
          type="date"
          id="timestamp"
          name="timestamp"
          value={parseDate(new Date(timestamp))}
          readOnly
        />
      </div>
      <div>
        <legend>Published:</legend>
        <label htmlFor="published_true">True:</label>
        <input
          type="radio"
          id="published_true"
          name="published"
          value="true"
          checked={published ? true : false}
          readOnly
        />
        <label htmlFor="published_false">False:</label>
        <input
          type="radio"
          id="published_false"
          name="published"
          value="false"
          checked={!published ? true : false}
          readOnly
        />
      </div>

      <p>Published: {published.toString()}</p>
      <p>{id}</p>
      <button type="button">Edit</button>
      <button type="button">Delete</button>
    </form>
  );
}
