import { render, screen } from "@testing-library/react";
import SettingsDetails from "./SettingsDetail";
import { Provider } from "react-redux";
import store from "@/store/state";
import user from "@testing-library/user-event";
import Settings from "../../mock/settingsMock";
import axios from "axios";
import { AppSelectProps } from "@/models/app";

jest.mock("axios");

jest.mock("../UI/AppSelect", () => (props: AppSelectProps) => {
  const handleChange = (event: any) => {
    props.selectionChange(event.target.value as string);
  };
  return (
    <select onChange={handleChange} data-testid="app-select">
      {props.list.map((item, i) => (
        <option value={item.value} key={i}>
          {item.name}
        </option>
      ))}
    </select>
  );
});

describe("SettingsDetails", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <SettingsDetails />
      </Provider>
    );
    const [countrySelect, languageSelect] = screen.getAllByTestId("app-select");
    expect(countrySelect).toBeInTheDocument();
    expect(languageSelect).toBeInTheDocument();
  });

  test("Trigger selection change event and save", async () => {
    user.setup();
    (axios.post as jest.Mock).mockReturnValueOnce({
      data: Settings,
    });
    render(
      <Provider store={store}>
        <SettingsDetails />
      </Provider>
    );
    const [languageSelect, countrySelect] = screen.getAllByTestId("app-select");

    await user.selectOptions(countrySelect, "ro");
    expect(axios.post).toHaveBeenCalled();
    await user.selectOptions(languageSelect, "en");
    expect(axios.post).toHaveBeenCalled();
  });

  test("Trigger selection change event and throw error", async () => {
    user.setup();
    (axios.post as jest.Mock).mockRejectedValue({});
    render(
      <Provider store={store}>
        <SettingsDetails />
      </Provider>
    );
    const [languageSelect, countrySelect] = screen.getAllByTestId("app-select");

    await user.selectOptions(countrySelect, "ro");
    expect(axios.post).toHaveBeenCalled();
    await user.selectOptions(languageSelect, "en");
    expect(axios.post).toHaveBeenCalled();
  });
});
