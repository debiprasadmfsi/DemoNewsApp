import SettingsHeader from "@/components/Settings/SettingsHeader";
import { render, screen } from "@testing-library/react";


describe('SettingsHeader', () => {

    test('render correctly', () => {
        render(<SettingsHeader/>);
        const header = screen.getByTestId('title-container');
        expect(header).toBeInTheDocument();
    })
});