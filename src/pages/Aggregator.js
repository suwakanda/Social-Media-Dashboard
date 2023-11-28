import FeedContainer from "../components/FeedContainer";
import FeedUtil from "../components/FeedUtil";
import { posts } from "../data/posts";

const AggregatorPage = () => {
  return (
    <>
      <FeedUtil />
      <div className="container feedContainer">
        {posts.map((post, index) => (
          <FeedContainer key={index} {...post} />
        ))}
      </div>
    </>
  );
};

export default AggregatorPage;
