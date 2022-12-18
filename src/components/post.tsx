import styled from "styled-components";

interface PostProps {
  id: number;
  title: string;
  content: string;
  editPost: () => void;
  deletePost: () => void;
}

const Content = styled.p`
  height: 150px;
  overflow: hidden;
`;

const Post = ({ id, title, content, editPost, deletePost }: PostProps) => {
  return (
    <div className="col-4 mt-3">
      <h4>{title}</h4>
      <Content>{content}</Content>
      {!title && !content ? null : (
        <div className="d-flex">
          <button
            onClick={editPost}
            className="w-50 mx-2 btn btn-outline-success"
          >
            Edit
          </button>
          <button
            onClick={deletePost}
            className="w-50 mx-2 btn btn-outline-danger"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
