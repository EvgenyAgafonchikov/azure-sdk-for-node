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

const models = require('./index');

/**
 * List of BitLocker keys for the specified import/export job.
 *
 */
class BitLockerKeysListResult {
  /**
   * Create a BitLockerKeysListResult.
   * @member {array} [value] List of BitLocker keys for the specified
   * import/export job.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BitLockerKeysListResult
   *
   * @returns {object} metadata of BitLockerKeysListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BitLockerKeysListResult',
      type: {
        name: 'Composite',
        className: 'BitLockerKeysListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DriveStatusElementType',
                  type: {
                    name: 'Composite',
                    className: 'DriveStatus'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = BitLockerKeysListResult;
