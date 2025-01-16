// __tests__/Calculator.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calculator from "@/components/Calculator";

describe("Calculator", () => {
  it("renders the calculator with display and number buttons", () => {
    render(<Calculator />);

    // Check if display exists
    expect(screen.getByTestId("calculator-display")).toBeInTheDocument();

    // Check if number buttons exist (0-9)
    for (let i = 0; i <= 9; i++) {
      expect(
        screen.getByRole("button", { name: i.toString() })
      ).toBeInTheDocument();
    }
  });

  it("updates display when number buttons are clicked", () => {
    render(<Calculator />);

    // Click number buttons
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));

    // Check if display shows clicked numbers
    expect(screen.getByTestId("calculator-display")).toHaveTextContent("123");
  });
  it("performs addition correctly", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("calculator-display")).toHaveTextContent("5");
  });

  it("performs subtraction correctly", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "-" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("calculator-display")).toHaveTextContent("2");
  });

  it("performs multiplication correctly", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "4" }));
    fireEvent.click(screen.getByRole("button", { name: "×" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("calculator-display")).toHaveTextContent("12");
  });
  it("clears the display when C button is clicked", () => {
    render(<Calculator />);

    // First enter some numbers
    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "7" }));

    // Verify numbers are displayed
    expect(screen.getByTestId("calculator-display")).toHaveTextContent("57");

    // Click clear button
    fireEvent.click(screen.getByRole("button", { name: "C" }));

    // Verify display is reset to 0
    expect(screen.getByTestId("calculator-display")).toHaveTextContent("0");
  });
});
