/*******************************************************************************
 *
 *    Copyright 2018 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/

/**
 * Auto generated code based on Swagger definition.
 * Dot not edit manually. Manual changes will be overridden.
 *
 * @version 0.1.118
 */
class ShoppingListEntry {

    /**
     * Represents a ShoppingListEntry
     * @constructor 
     * @param {string} id
     * @param {ProductVariant} productVariant
     * @param {integer} quantity
     */
    constructor(id, productVariant, quantity) {
        /**
         * The id of the entry.
         * @type {string}
         */
        this.id = id;

        /**
         * The product variant for the entry.
         * @type {ProductVariant}
         */
        this.productVariant = productVariant;

        /**
         * The quantity for the entry.
         * @type {integer}
         */
        this.quantity = quantity;

        /**
         * The date when this entry was created.
         * @type {string}
         */
        this.createdDate = undefined;

        /**
         * The date when this entry was last modified.
         * @type {string}
         */
        this.lastModifiedDate = undefined;

    }
}
module.exports.ShoppingListEntry = ShoppingListEntry