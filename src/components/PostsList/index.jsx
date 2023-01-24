import { Post } from "../Post";
import { PostsListContainer } from "./styles";

export function PostsList({ recipes }) {
  return (
    <PostsListContainer>
      {recipes.map((item) => {
        return <Post key={item.post_id} post={item} />;
      })}
    </PostsListContainer>
  );
}
