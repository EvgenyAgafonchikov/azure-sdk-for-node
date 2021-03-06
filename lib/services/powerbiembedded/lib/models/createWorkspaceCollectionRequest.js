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
 * Class representing a CreateWorkspaceCollectionRequest.
 */
class CreateWorkspaceCollectionRequest {
  /**
   * Create a CreateWorkspaceCollectionRequest.
   * @member {string} [location] Azure location
   * @member {object} [tags]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateWorkspaceCollectionRequest
   *
   * @returns {object} metadata of CreateWorkspaceCollectionRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateWorkspaceCollectionRequest',
      type: {
        name: 'Composite',
        className: 'CreateWorkspaceCollectionRequest',
        modelProperties: {
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sku: {
            required: false,
            isConstant: true,
            serializedName: 'sku',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'AzureSku'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateWorkspaceCollectionRequest;
