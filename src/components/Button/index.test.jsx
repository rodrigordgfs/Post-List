import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("<Button />", () => {
  it("should render the button with the text 'Lorem Ipsum'", () => {
    render(<Button label="Lorem Ipsum" />);
    const button = screen.getByRole("button", { name: "Lorem Ipsum" });
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button label="Lorem Ipsum" onButtonClick={fn} />);
    const button = screen.getByRole("button", { name: "Lorem Ipsum" });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled is true", () => {
    render(<Button label="Lorem Ipsum" disabled={true} />);
    const button = screen.getByRole("button", { name: "Lorem Ipsum" });
    expect(button).toBeDisabled();
  });

  it("should be disabled when disabled is false", () => {
    render(<Button label="Lorem Ipsum" disabled={false} />);
    const button = screen.getByRole("button", { name: "Lorem Ipsum" });
    expect(button).not.toBeDisabled();
  });
});
