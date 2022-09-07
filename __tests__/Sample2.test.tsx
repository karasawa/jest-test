import { Sample2 } from "@/components/Sample2";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SetUp } from "../SetUp";
import fetch from "node-fetch";

jest.mock("node-fetch", () => jest.fn());

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
    // screen.debug();
    await response.click(screen.getByRole("button"));
    // screen.debug();

    expect(screen.getByText("ログイン")).toBeTruthy();
  });

  it("Sample2 api fetch", async () => {
    const dummyResponse = Promise.resolve({
      ok: true,
      status: 200,
      json: () => {
        return {};
      },
    });
    fetch.mockImplementation(() => dummyResponse);
    await dummyResponse;
    console.log(dummyResponse);
  });
});
