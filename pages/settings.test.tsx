import Settings from "@/pages/settings";
import { render, screen} from "@testing-library/react";

const mockHeaderComponent = jest.fn();
jest.mock("@/components/UI/Header", () => (props: any) => {
  mockHeaderComponent(props);
  return <div>Header</div>;
});

jest.mock("@/components/Settings/SettingsDetail", () => () => {
    mockHeaderComponent();
    return <div>Settings details</div>;
  });

describe('settings page', () => {

    test('render correctly', async () => {
        render(<Settings/>);
        const header = screen.getByText('Header');
        expect(header).toBeInTheDocument();
        const SettingsDetails = screen.getByText('Settings details');
        expect(SettingsDetails).toBeInTheDocument();
    })

})