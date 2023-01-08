import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
var MainPage = function () {
    var t = useTranslation('about').t;
    return _jsx("div", { children: t('mainPage') });
};
export default MainPage;
