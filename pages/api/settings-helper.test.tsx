import * as fs from "fs/promises";
import path from "path";
import settingsMock from "@/mock/settingsMock";
import { getSettings, updateSettings } from "./settings";
jest.mock("fs/promises");
jest.mock("path");

describe('Settings api helper function', () => {
    test("should read settings data from json file", async () => {
        (fs.readFile as jest.Mock).mockResolvedValue(settingsMock);
        (path.join as jest.Mock).mockReturnValue("/");
        await getSettings();
        expect(fs.readFile).toHaveBeenCalled();
      });
    
      test("should write settings data in json file", async () => {
        (fs.writeFile as jest.Mock).mockResolvedValue({});
        (path.join as jest.Mock).mockReturnValue("/");
        await updateSettings(settingsMock);
        expect(fs.writeFile).toHaveBeenCalled();
      });
    
      test("Throw error while writing settings data", async () => {
        (fs.writeFile as jest.Mock).mockRejectedValue(new Error("Invalid path"));
        (path.join as jest.Mock).mockReturnValue("/");
        const resp = await updateSettings(settingsMock);
        const errorMessage = (resp as Error).message;
        expect(errorMessage).toBe("Invalid path");
      });
})