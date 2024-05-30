import { PostProps } from "../types";

export default function Post({
  title,
  text,
  timestamp,
  id,
  published,
}: PostProps) {
  return (
    <div className="border border-red-500">
      <p>Title: {title}</p>
      <p>Text: {text}</p>
      <p>Posted: {timestamp}</p>
      <p>Published: {published.toString()}</p>
      <p>{id}</p>
      <button type="button">Edit</button>
      <button type="button">Delete</button>
    </div>
  );
}
