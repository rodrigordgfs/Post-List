import { render, screen } from "@testing-library/react";
import PostCard from ".";
import { PostCardPropsMock } from "./mock";

const props = PostCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);
    expect(screen.getByRole("img", { name: props.post.title })).toHaveAttribute(
      "src",
      props.post.cover
    );
    expect(
      screen.getByRole("heading", { name: props.post.title })
    ).toBeInTheDocument();
    expect(screen.getByText(props.post.body)).toBeInTheDocument();
  });
});
