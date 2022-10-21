import Link from "next/link";
import ReactMarkdown from "react-markdown";

// UI component for main post content

export default function PostContent({ content }) {
  const createdAt =
    typeof post?.createdAt === "number"
      ? new Date(post.createdAt)
      : post.createdAt.toDate();

  return (
    <div className="card">
      <h1>{post?.title}</h1>
      <span className="text-sm text-gray-400">
        Written by{" "}
        <Link href={`/${post.username}`}>
          <a className="text-blue-500 hover:underline">@{post.username}</a>
        </Link>{" "}
        on {createdAt.toDateString()}
      </span>
      <ReactMarkdown>{post?.content}</ReactMarkdown>
    </div>
  );
}
