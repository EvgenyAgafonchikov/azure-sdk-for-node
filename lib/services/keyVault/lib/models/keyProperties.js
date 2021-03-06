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
 * Properties of the key pair backing a certificate.
 *
 */
class KeyProperties {
  /**
   * Create a KeyProperties.
   * @member {boolean} [exportable] Indicates if the private key can be
   * exported.
   * @member {string} [keyType] The key type.
   * @member {number} [keySize] The key size in bytes. For example;  1024 or
   * 2048.
   * @member {boolean} [reuseKey] Indicates if the same key pair will be used
   * on certificate renewal.
   */
  constructor() {
  }

  /**
   * Defines the metadata of KeyProperties
   *
   * @returns {object} metadata of KeyProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'KeyProperties',
      type: {
        name: 'Composite',
        className: 'KeyProperties',
        modelProperties: {
          exportable: {
            required: false,
            serializedName: 'exportable',
            type: {
              name: 'Boolean'
            }
          },
          keyType: {
            required: false,
            serializedName: 'kty',
            type: {
              name: 'String'
            }
          },
          keySize: {
            required: false,
            serializedName: 'key_size',
            type: {
              name: 'Number'
            }
          },
          reuseKey: {
            required: false,
            serializedName: 'reuse_key',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = KeyProperties;
