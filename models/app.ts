

import { HeadLinesResponse } from "./news";
import { Settings } from "./settings";

export type Props = {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
};

export interface List {
  name: string;
  value: string;
}

export interface AppSelectProps {
  list: List[];
  selected: string;
  selectionChange: (value: string) => void;
}

export interface AppResponse {
  newsData: HeadLinesResponse;
  settings: Settings;
}
