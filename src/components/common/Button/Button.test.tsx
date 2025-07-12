import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { describe, expect, it, vi } from "vitest";

describe("Button component", () => {
    it("renders the button with given children", () => {
        render(<Button>Send Message</Button>);
        const button = screen.getByText("Send Message");
        expect(button).toBeInTheDocument();
    });

    it("applies correct classNames for variant and size", () => {
        render(
            <Button variant="primary" size="sm">
                Test
            </Button>
        );
        const button = screen.getByText("Test");
        expect(button).toHaveClass(
            "inline-flex items-center justify-center border font-medium rounded-md transition-all duration-200 focus:outline-none hover:cursor-pointer px-3 py-2 text-sm bg-orange text-white border-orange hover:bg-orange/90"
        );
    });

    it("calls onClick when clicked", () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Click</Button>);
        const button = screen.getByText("Click");
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("is disabled when prop disabled is true", () => {
        const onClick = vi.fn();
        render(
            <Button disabled onClick={onClick}>
                Disabled
            </Button>
        );
        const button = screen.getByText("Disabled");
        expect(button).toBeDisabled();
        fireEvent.click(button);
        expect(onClick).not.toHaveBeenCalled();
    });
});
