import { useEffect, useState } from "react";
import Post from "./Post";
import { PostProps } from "../types";
const apiUrl = import.meta.env.VITE_API_URL;

export default function PostContainer() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(apiUrl + "/posts");
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    }
    getPosts();
  }, []);

  let postList;
  if (isLoading) {
    postList = "Posts loading...";
  } else {
    postList = posts.map((post: PostProps) => {
      return (
        <Post
          key={post._id}
          title={post.title}
          text={post.text}
          timestamp={post.timestamp}
          id={post._id}
          published={post.published}
        />
      );
    });
  }

  return <>{postList}</>;
}
