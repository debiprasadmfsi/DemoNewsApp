import NewsSearch from "@/components/News/NewsSearch"
import store from "@/store/state";
import { render, screen, waitFor, within } from "@testing-library/react";
import { Provider } from "react-redux";
import user from "@testing-library/user-event";
import axios from "axios";
import { TopHeadlines } from "@/mock/newsMock";

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('axios');

describe('NewsSearch Component', () => {
    beforeEach(() => {
        user.setup();
        render(<Provider store={store}><NewsSearch/></Provider>);
    });

    test('render correctly', () => {
        const autoComplete = screen.getByTestId('auto-complete-input');
        expect(autoComplete).toBeInTheDocument();
    });
    
    test('Search news based on user input', async() => {
        (axios.get as jest.Mock).mockReturnValue({data: TopHeadlines}); 
        const autoComplete = screen.getByTestId('auto-complete-input');
        const input = await within(autoComplete).findByPlaceholderText('Search for author, title & source');
        await user.type(input, 'Google');
        await waitFor(() => {
           expect(axios.get).toHaveBeenCalled();
        },{timeout: 300})

    });

    test('reset news after clearing', async() => {
        (axios.get as jest.Mock).mockReturnValue({data: {}});
        const autoComplete = screen.getByTestId('auto-complete-input');
        const input = await within(autoComplete).findByPlaceholderText('Search for author, title & source');
        await user.clear(input);
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalled();
         },{timeout: 300})
    });
})