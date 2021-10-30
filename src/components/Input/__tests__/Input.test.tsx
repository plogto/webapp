import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "..";
import { InputProps, InputTypes } from "../@types";

type Inputs = {
  [key in InputTypes]: InputProps;
};

const inputs: Inputs = {
  text: {
    type: "text",
    name: "username",
    label: "Username",
    placeholder: "Username",
  },
  password: {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Password",
  },
};

describe("<Input /> component", () => {
  it(`TextInput renders correct`, () => {
    const { text } = inputs;
    render(<Input {...text} />);
    const { type, name, label, placeholder } = text;

    const labelComponent = screen.getByText(label);
    const inputComponent = screen.getByRole("textbox");

    expect(labelComponent).toHaveTextContent(label);

    expect(inputComponent).toHaveAttribute("type", type);
    expect(inputComponent).toHaveAttribute("name", name);
    expect(inputComponent).toHaveAttribute("placeholder", placeholder);

    expect(inputComponent).not.toHaveFocus();
    userEvent.click(labelComponent);
    expect(inputComponent).toHaveFocus();
  });

  it(`PasswordInput renders correct`, () => {
    const { password } = inputs;
    render(<Input {...password} />);
    const { type, name, label, placeholder } = password;

    const labelComponent = screen.getByText(label);
    const inputComponent = screen.getByLabelText(label);

    expect(labelComponent).toHaveTextContent(label);

    expect(inputComponent).toHaveAttribute("type", type);
    expect(inputComponent).toHaveAttribute("name", name);
    expect(inputComponent).toHaveAttribute("placeholder", placeholder);

    expect(inputComponent).not.toHaveFocus();
    userEvent.click(labelComponent);
    expect(inputComponent).toHaveFocus();
  });
});
