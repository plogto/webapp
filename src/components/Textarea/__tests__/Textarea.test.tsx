import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "..";
import { TextareaProps } from "../@types";

const textareaProps: TextareaProps = {
  name: "username",
  label: "Username",
  placeholder: "Username",
};

describe("<Textarea /> component", () => {
  it(`Textarea renders correct`, () => {
    render(<Textarea {...textareaProps} />);
    const { name, label, placeholder } = textareaProps;

    const labelComponent = screen.getByText(label);
    const textareaComponent = screen.getByRole("textbox");

    expect(labelComponent).toHaveTextContent(label);

    expect(textareaComponent).toHaveAttribute("name", name);
    expect(textareaComponent).toHaveAttribute("placeholder", placeholder);

    expect(textareaComponent).not.toHaveFocus();
    userEvent.click(labelComponent);
    expect(textareaComponent).toHaveFocus();
  });
});
