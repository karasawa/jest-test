import { Sample2 } from "@/components/Sample2";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SetUp } from "../SetUp";

describe("sample2 component test", () => {
  it("sample2", () => {
    render(<Sample2 />);
    // expect(screen.getByText(/sample2/)).toBeInTheDocument();
    // expect(screen.debug(screen.getAllByRole("button")));
    // expect(screen.getByRole("button", { role: "dialog" }));

    expect(screen.queryByText("hogehoge")).toBeNull();
  });

  it("Sample2 click", async () => {
    const { response } = SetUp(<Sample2 />);
    await expect(response.click(screen.getByRole("button")));
  });
});
