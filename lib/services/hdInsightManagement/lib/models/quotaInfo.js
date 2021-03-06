/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Gets or sets Quota properties for the cluster.
 *
 */
class QuotaInfo {
  /**
   * Create a QuotaInfo.
   * @member {number} [coresUsed] The cores used by the cluster.
   */
  constructor() {
  }

  /**
   * Defines the metadata of QuotaInfo
   *
   * @returns {object} metadata of QuotaInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'QuotaInfo',
      type: {
        name: 'Composite',
        className: 'QuotaInfo',
        modelProperties: {
          coresUsed: {
            required: false,
            serializedName: 'coresUsed',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = QuotaInfo;
