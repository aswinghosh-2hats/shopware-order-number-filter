import './module/sw-order/view/sw-order-list';

const deDE = './snippet/de-DE';
const enGB = './snippet/en-GB';

if (Shopware.Locale.getByName(deDE) === false) {
    Shopware.Locale.register(deDE, {});
}
if (Shopware.Locale.getByName(enGB) === false) {
    Shopware.Locale.register(enGB, {});
}
