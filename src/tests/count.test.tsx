import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import BookCountBlock from '../components/BookCountBlock/BookCountBlock'

describe("Testing book count changing", () => {
    test("Book count increase", async () => {
        render(<BookCountBlock price={10} />);
        const button = screen.getByTestId("increment-button");
        expect(button).toBeInTheDocument();

        const input = screen.getByTestId<HTMLInputElement>("count-input");
        const inputValue = "2";
        fireEvent.change(input, {target: {value: inputValue}});
        expect(input.value).toBe(inputValue);
        
        await userEvent.click(button);
        expect(input.value).toBe("3");
    });

    test("Book count decrease", async () => {
        render(<BookCountBlock price={10} />);
        const button = screen.getByTestId("decrement-button");
        expect(button).toBeInTheDocument();

        const input = screen.getByTestId<HTMLInputElement>("count-input");
        const inputValue = "2";
        fireEvent.change(input, {target: {value: inputValue}});
        expect(input.value).toBe(inputValue);
        
        await userEvent.click(button);
        expect(input.value).toBe("1");
    });

    test("Changing total amount", async () => {
        render(<BookCountBlock price={10} />);

        const input = screen.getByTestId<HTMLInputElement>("count-input");
        expect(input).toBeInTheDocument();
        
        //await userEvent.type(input, "2");
        fireEvent.change(input, {target: {value: "2"}});

        const totalAmount = screen.getByTestId("total-amount");
        expect(totalAmount.textContent).toBe("20");
    });
});