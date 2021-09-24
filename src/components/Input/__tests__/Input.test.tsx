import { render } from "@testing-library/react";
import { Input } from "..";
import { InputProps } from "../@types";

type Inputs = {
  [key: string]: InputProps;
};

const inputs: Inputs = {
  Text: {
    type: "text",
    name: "username",
    label: "Username",
    placeholder: "Username",
  },
  Password: {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Password",
  },
};

describe("<Input /> component", () => {
  Object.entries(inputs).forEach(([key, input]) => {
    it(`${key} Input is correct`, () => {
      const { container } = render(<Input {...input} />);
      const { type, name, label, placeholder } = input;

      expect(container.querySelector("input")?.type).toEqual(type);
      expect(container.querySelector("input")?.name).toEqual(name);
      expect(container.querySelector("label")?.textContent).toEqual(label);
      expect(container.querySelector("input")?.placeholder).toEqual(
        placeholder,
      );
    });
  });
});
