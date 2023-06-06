import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs/promises";
import { Settings } from "@/models/settings";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  if (method === "GET") {
    getSettings()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(401).json({ name: "Invalid Path" });
      });
  } else if (method === "POST") {
     updateSettings(req.body).then((data) => {
        res.status(201).json(data);
     })
     .catch(err => {
        res.status(401).json({ name: "Invalid Path" });
     })
  }
}

export const getSettings = async (): Promise<Settings | Error> => {
  const jsonDirectory = path.join(process.cwd(), "data");
  try {
    const fileData = await fs.readFile(
      jsonDirectory + "/app-data.json",
      "utf8"
    );
    const obj = JSON.parse(fileData);
    return obj;
  } catch (err) {
    return new Error("Invalid path");
  }
};

export const updateSettings = async (settingsData: Settings): Promise<Settings | Error> => {
  const jsonDirectory = path.join(process.cwd(), "data");
  try {
    await fs.writeFile(
      jsonDirectory + "/app-data.json",
      JSON.stringify(settingsData)
    );
    return settingsData;
  } catch (err) {
    return new Error("Invalid path");
  }
};
