import axios from "axios";

async function fetchPostData() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
}

export default async function ServerComponentPage() {
  const postData = await fetchPostData();
  console.log("burası server tarafında görülecektir.");
  return (
    <>
      <h2>Hello world!</h2>
      {postData.map((post) => {
        return (
          <div className="p-5 bg-gray-400 mb-5">
            <h3>{post.title}</h3>
          </div>
        );
      })}
    </>
  );
}
