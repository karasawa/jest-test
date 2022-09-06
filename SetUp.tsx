import userEvent from "@testing-library/user-event/";
import { render } from "@testing-library/react";

export const SetUp = (jsx: JSX.Element) => {
  return {
    response: userEvent.setup(),
    ...render(jsx),
  };
};
