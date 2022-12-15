import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import UA_Icon from "shared/assets/icons/ua-flag.svg";
import USA_Icon from "shared/assets/icons/usa-flag.svg";
import React from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {i18n.language === "en" ? (
        <UA_Icon width={30} />
      ) : (
        <USA_Icon width={30} />
      )}
    </Button>
  );
};
