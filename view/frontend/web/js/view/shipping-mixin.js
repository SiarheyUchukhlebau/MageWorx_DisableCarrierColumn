/**
 * Copyright © MageWorx. All rights reserved.
 * See LICENSE.txt for license details.
 */
define(['uiRegistry'], function (registry) {
    'use strict';

    return function (origComponent) {
        return origComponent.extend({
            defaults: {
                shippingMethodListTemplate: 'MageWorx_DisableCarrierColumn/shipping-address/shipping-method-list',
                shippingMethodItemTemplate: 'MageWorx_DisableCarrierColumn/shipping-address/shipping-method-item'
            }
        });
    };
});
