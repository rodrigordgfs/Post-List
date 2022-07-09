import { Component } from "react";
import { handleLoadPosts } from "../../utils/loadPosts";
import { Posts } from "../../components/Posts";
import styles from "./index.module.css";
import { Button } from "../../components/Button";
import { TextInpt } from "../../components/TextInput";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    perPage: 10,
    searchValue: "",
  };

  async componentDidMount() {
    await this.handleLoadPosts();
  }

  handleLoadPosts = async () => {
    const { page, perPage } = this.state;
    const postAndPhotos = await handleLoadPosts();
    this.setState({
      posts: postAndPhotos.slice(page, perPage),
      allPosts: postAndPhotos,
    });
  };

  handleLoadMorePosts = () => {
    const { page, perPage, allPosts, posts } = this.state;
    const nextPage = page + perPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + perPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, perPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + perPage >= allPosts.length;
    const filteredPosts = !!searchValue
      ? posts.filter((post) => post.title.toLowerCase().includes(searchValue))
      : posts;

    return (
      <section className={styles.container}>
        <TextInpt handleChange={this.handleChange} searchValue={searchValue} />
        {filteredPosts.length > 0 && (
          <>
            <Posts posts={filteredPosts} />
            <div className={styles.buttonContainer}>
              <Button
                disabled={noMorePosts}
                label="Load more posts"
                onButtonClick={this.handleLoadMorePosts}
              />
            </div>
          </>
        )}
      </section>
    );
  }
}

export default Home;
