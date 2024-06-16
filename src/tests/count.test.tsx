import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import BookCountBlock from '../components/BookCountBlock/BookCountBlock'

describe("Тестування сторінки 'Окрема книга'", () => {
    test("При кліку збільшення кількості - кількість повинна збільшуватися", async () => {
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

    test("При кліку зменшення кількості - кількість повинна зменшуватися", async () => {
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

    test("При зміні кількості - загальна вартість повинна змінюватися", () => {
        const bookPrice = 10;
        render(<BookCountBlock price={bookPrice} />);

        const input = screen.getByTestId<HTMLInputElement>("count-input");
        expect(input).toBeInTheDocument();
        
        const totalAmount = screen.getByTestId("total-amount");
        expect(totalAmount.textContent).toBe(String(bookPrice));

        fireEvent.change(input, {target: {value: "2"}});

        expect(totalAmount.textContent).toBe("20");
    });
});