import React from "react";
import Post from "./components/post";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Babel",
    content:
      "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
  },
  {
    id: 2,
    title: "Functional Component",
    content:
      "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
  },
  {
    id: 3,
    title: "Modularization",
    content:
      "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
  },
  {
    id: 4,
    title: "Lifecycle",
    content:
      "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
  },
  {
    id: 5,
    title: "ESM",
    content:
      "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
  },
  {
    id: 6,
    title: "Module Bundler",
    content:
      "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
  },
];

// interface Post {
//   id: number;
//   title: string;
//   content: string;
// }
const App = () => {
  const [post, setPost] = React.useState(DUMMY_DATA);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setPost((prev: any) => [...prev, { title, content }]);
  };

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
        {post.map((p, i) => (
          <Post
            key={p.id}
            title={p.title}
            content={p.content}
            editPost={() => editPost(p.id)}
            id={i + 1}
            deletePost={() => deletePost(p.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
