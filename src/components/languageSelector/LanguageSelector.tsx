import React from "react";
import { Switch } from "antd";
import i18n from "i18next";
import { useDispatch, useSelector } from "../../utils/hooks";
import { ChangeAppLanguageAction } from "../../utils/i18n/i18n.slice";

const LanguageSelector = () => {
  const { appLanguage } = useSelector((state: any) => state.appLanguageReducer);
  const dispatch = useDispatch();

  const handleChange = (value: "fa" | "en") => {
    if (value === "en") {
      i18n.changeLanguage("fa");
      dispatch(ChangeAppLanguageAction("fa"));
    } else {
      i18n.changeLanguage("en");
      dispatch(ChangeAppLanguageAction("en"));
    }
  };

  return (
    // <Button
    //   type="primary"
    //   onClick={}
    //   className="language-selector"
    // >
    //   {appLanguage === "en" ? "Persian" : "English"}
    // </Button>

    <Switch
      onClick={() => handleChange(appLanguage)}
      onChange={(checked: boolean) => {
        console.log(`switch to ${checked}`);
      }}
      checkedChildren="Persian"
      unCheckedChildren="English"
      defaultChecked
    />
  );
};

export default LanguageSelector;
