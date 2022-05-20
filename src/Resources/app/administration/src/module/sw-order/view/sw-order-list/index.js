import template from "./sw-order-list.html.twig";

Shopware.Component.override("sw-order-list", {
    template: template,

    inject: ["filterFactory"],

    computed: {
        getAllFilters() {
            let orderIdFilter = this.filterFactory.create("order", {
                "order-number-filter": {
                    property: "lineItems.order",
                    // property: "orderNumber",
                    label: this.$tc("orderNumberFilter.filterLabelText"),
                    placeholder: this.$tc(
                        "orderNumberFilter.filterPlaceholderText"
                    ),
                },
            });
            this.defaultFilters.push("order-number-filter");
            return orderIdFilter.concat(this.listFilters);
        },
    }
});
