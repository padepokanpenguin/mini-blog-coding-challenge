import React from "react";
import Post from "./components/post";

interface PostType {
  id: number;
  title: string;
  content: string;
}
const App = () => {
  const [post, setPost] = React.useState<PostType[]>([]);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setPost((prev: any) => [...prev, { id: +new Date(), title, content }]);
    setTitle("");
    setContent("");
  };

  console.info(post);
  const inputTitleHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const inputContentHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  const editPost = (id: number) => {
    const index = post.findIndex((p) => p.id === id);
    setTitle(post[index].title);
    setContent(post[index].content);
    const update = post.filter((p) => p.id !== id);
    setPost(update);
  };

  const deletePost = (id: number) => {
    const update = post.filter((p) => id !== p.id);
    setPost(update);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Mini Blog</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            className="form-control"
            placeholder="Insert blog title ..."
            onChange={inputTitleHandler}
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="form-control"
            rows={5}
            placeholder="Insert blog content ..."
            onChange={inputContentHandler}
            value={content}
          />
        </div>
        <button className="btn btn-block btn-primary">Submit</button>
      </form>
      <br />
      <div className="row">
        {post.map((p) => (
          <Post
            key={p.id}
            title={p.title}
            content={p.content}
            editPost={() => editPost(p.id)}
            deletePost={() => deletePost(p.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
