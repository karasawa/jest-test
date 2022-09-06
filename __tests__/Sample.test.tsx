import { Sample } from "@/components/Sample";
import { render, screen } from "@testing-library/react";

describe("sample component test", () => {
  it("sample", () => {
    render(<Sample />);
    // screen.debug();
    expect(screen.getByText("sample component")).toBeTruthy();

    const num = 4 + 3;
    expect(num).toBe(7);
    expect(num).toBeGreaterThan(5);

    const data = [1, 3, 5, 7];
    data.shift();
    expect(data).not.toEqual([1, 3, 5, 7]);
    expect(data).toEqual([3, 5, 7]);

    const n = null;
    expect(n).toBeNull();
  });
});
