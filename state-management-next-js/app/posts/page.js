"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addPost, deletePost } from "../redux/slices/postSlice";

export default function PostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") setTitle(value);
    else if (name === "content") setContent(value);
  };

  const handleAddPost = () => {
    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      addPost({
        id: Date.now(),
        title,
        content,
      })
    );

    setTitle("");
    setContent("");
  };

  const handleDeletePost = (id) => {
    if (!id) {
      alert("Invalid post id");
      return;
    }

    dispatch(deletePost({ id }));
  };

  const posts = useSelector((state) => state.posts);
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2 py-10">
      <div className="border border-gray-600 p-2 rounded w-1/3 flex flex-col gap-2 overflow-y-auto">
        {posts.map((post, index) => {
          return (
            <div
              className="flex flex-col gap-1 bg-gray-800 p-2 rounded"
              key={index}
            >
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.content}</p>
              <button
                className="w-full bg-red-800 p-2 rounded mt-3"
                onClick={() => handleDeletePost(post.id)}
              >
                Delete Post
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-1 w-1/3 border border-gray-600 rounded p-4">
        <input
          name="title"
          className="p-3 rounded text-black"
          type="text"
          placeholder="Title..."
          value={title}
          onChange={handleInputChange}
        />
        <input
          name="content"
          className="p-3 rounded text-black"
          type="text"
          placeholder="Content..."
          value={content}
          onChange={handleInputChange}
        />
        <button className="bg-orange-600 rounded p-2" onClick={handleAddPost}>
          Add New Post
        </button>
      </div>
    </div>
  );
}
