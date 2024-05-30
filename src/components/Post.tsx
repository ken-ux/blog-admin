import { PostProps } from "../types";

export default function Post({
  title,
  text,
  timestamp,
  id,
  published,
}: PostProps) {
  return (
    <div>
      <p>{title}</p>
      <p>{text}</p>
      <p>{timestamp}</p>
      <p>{published.toString()}</p>
      <p>{id}</p>
    </div>
  );
}
