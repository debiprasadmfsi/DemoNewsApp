import { render, screen } from "@testing-library/react";
import NewsTitle from "./NewsTitle";
import mockRouter from 'next-router-mock';
import { act } from "react-dom/test-utils";
jest.mock('next/router', () => require('next-router-mock'));


describe('Newstitle', () => {
    it('renders correctly', async () => {
        render(<NewsTitle/>);
        const currentNewsTopic = await screen.findByText('YOUR BRIEFING');
        expect(currentNewsTopic).toBeInTheDocument();
    });

    it('renders news topic based on router query ', async () => {
        render(<NewsTitle/>);
        await act(() => mockRouter.replace({query: {topic: 'sports'}}))
        const currentNewsTopic = await screen.findByText('SPORTS');
        expect(currentNewsTopic).toBeInTheDocument();
    });
})