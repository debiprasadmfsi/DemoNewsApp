import { fireEvent, render, screen } from "@testing-library/react";
import NewsTabs from "./NewsTabs";
import user from "@testing-library/user-event"


jest.mock('next/router', () => require('next-router-mock'));

describe('NewsTabs',() => {

    test('renders correctly', () => {
        render(<NewsTabs/>);
        const tab = screen.getByText('All');
        expect(tab).toBeInTheDocument();
    });

    test('should switch the tab', async () => {
        user.setup();
        render(<NewsTabs/>);
        const tabButton = screen.getByText('Technology').closest('button') as Element;
        await user.click(tabButton);
        expect(screen.getByText('Technology')).toBeVisible();
    });

});