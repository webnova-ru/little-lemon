import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AlertProvider } from 'context/alertContext';
import BookingForm from '.';

const MockComp = () => {
    return (
        <AlertProvider>
            <BookingForm />
        </AlertProvider>
    )
}

describe('test BookingFrom', () => {
    test('test input Name', async () => {
        render(<MockComp />);
        const element = screen.getByPlaceholderText(/Your name/i);
        const name = "Misha";

        await waitFor(() => {
            fireEvent.change(element, { target: { value: name } })
        });

        expect(element).toHaveValue(name);
    });

    test('test input Phone', async () => {
        render(<MockComp />);
        const element = screen.getByPlaceholderText(/Phone number/i);
        const phone = "1234567890"

        await waitFor(() => {
            fireEvent.change(element, { target: { value: phone } })
        });

        expect(element).toHaveValue(phone);
    });

    test('test input Comment', async () => {
        render(<MockComp />);
        const element = screen.getByLabelText(/comment/i);
        const text = "test this is comment"
        await waitFor(() => {
            fireEvent.change(element, { target: { value: text } })
        });

        expect(element).toHaveValue(text);
    });

    test('test select Occasion', async () => {
        render(<MockComp />);
        const element = screen.getByLabelText(/Occasion/i);

        fireEvent.keyDown(element.firstChild);
        fireEvent.click(await screen.findByText('Birthday'));

        expect(element).toHaveTextContent('Birthday');

        fireEvent.keyDown(element.firstChild);
        fireEvent.click(await screen.findByText('Anniversary'));

        expect(element).toHaveTextContent('Anniversary');
    });

    test('test input Number of persons', async () => {
        render(<MockComp />);
        const element = screen.getByPlaceholderText(/Number of persons/i);
        const num = "5";

        await waitFor(() => {
            fireEvent.change(element, { target: { value: num } })
        });

        expect(element).toHaveValue(num);
    });

    test('test invalid form with all blank', async () => {
        render(<MockComp />);

        await waitFor(() => {
            fireEvent.click(screen.getByText(/Reserve Now/i));
        });

        await waitFor(() => {
            expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Phone is required/i)).toBeInTheDocument();
        });
    })
})