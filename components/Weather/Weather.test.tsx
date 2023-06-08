import { weatherDataMock } from "@/mock/weatherMock";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Weather from "./Weather";
jest.mock("axios");

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementation((success) =>
    Promise.resolve(
      success({
        coords: {
          latitude: 10,
          longitude: 10,
        },
      })
    )
  ),
};
// @ts-ignore
navigator.geolocation = mockGeolocation;

describe("Weather", () => {

  it("Should render weather data", async () => {
    (axios.request as jest.Mock).mockReturnValue({ data: weatherDataMock });
    render(<Weather />);
    const weather = await screen.findByRole("heading", {
      level: 1,
    });
    waitFor(() => {
      expect(weather).toHaveTextContent("16");
    });
  });

  it("Should call weathet api and return error", async () => {
    (axios.request as jest.Mock).mockRejectedValue({});
    render(<Weather />);
    const weather = await screen.findByRole("heading", {
      level: 1,
    });
    waitFor(() => {
      expect(weather).toHaveTextContent("");
    });
  });

});
