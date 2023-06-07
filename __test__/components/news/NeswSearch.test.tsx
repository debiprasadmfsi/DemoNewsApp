import NewsSearch from "@/components/News/NewsSearch"
import store from "@/store/state";
import { render } from "@testing-library/react"
import mockRouter from 'next-router-mock';
import { Provider } from "react-redux";

jest.mock('next/router', () => require('next-router-mock'));

describe('NewsSearch Component', () => {
    
    test('render correctly', () => {
        render(<Provider store={store}><NewsSearch/></Provider>)
    });
})