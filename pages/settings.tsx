import SettingsDetails from "@/components/Settings/SettingsDetail";
import SettingsHeader from "@/components/Settings/SettingsHeader";
import Header from "@/components/UI/Header";
import { Fragment } from "react";

const Settings = () => {
  return (
    <Fragment>
      <Header className="shadow-md bg-white p-2">
        <SettingsHeader />
      </Header>
      <SettingsDetails />
    </Fragment>
  );
};

export default Settings;
