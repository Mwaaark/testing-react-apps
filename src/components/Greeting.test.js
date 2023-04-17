// import { render, screen } from '@testing-library/react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greetng";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    //   Act
    // ...nothing

    //   Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    // ARRANGE
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", async () => {
    render(<Greeting />);

    // ACT
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // newer code but not working
    // const user = userEvent.setup();
    // await user.click(screen.getByRole("button"));

    // ASSERT
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);

    // ACT
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // ASSERT
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
