import React from "react";

const Page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch data");
  const posts = await response.json();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols gap-4 mx-5 mt-2">
        {posts.map(
          (post: {
            id: number;
            title: string;
            userId: number;
            body: string;
          }) => (
            <div
              key={post.id}
              className="bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm">
                User ID:{" "}
                <span className="font-medium text-gray-300">{post.id}</span>
              </p>
              <p className="text-gray-300 text-base mt-4 leading-relaxed">
                {post.body}
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Page;
