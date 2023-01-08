var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import UAIcon from 'shared/assets/icons/ua-flag.svg';
import USAIcon from 'shared/assets/icons/usa-flag.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
export var LangSwitcher = function (_a) {
    var className = _a.className;
    var i18n = useTranslation().i18n;
    var toggleLanguage = function () {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };
    return (_jsx(Button, __assign({ theme: ThemeButton.CLEAR, onClick: toggleLanguage, className: classNames('', {}, [className]) }, { children: i18n.language === 'en'
            ? (_jsx(UAIcon, { width: 30 }))
            : (_jsx(USAIcon, { width: 30 })) })));
};
