import { PostImageContainer, PostContainer } from "./styles";

export function Post({ post }) {
  return (
    <PostContainer to={`/post/details/${post.post_id}`}>
      <PostImageContainer>
        <img src={post.image} alt={post.title} />
      </PostImageContainer>
    </PostContainer>
  );
}
