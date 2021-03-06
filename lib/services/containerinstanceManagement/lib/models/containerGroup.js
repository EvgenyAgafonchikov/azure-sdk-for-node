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
 * A container group.
 *
 * @extends models['Resource']
 */
class ContainerGroup extends models['Resource'] {
  /**
   * Create a ContainerGroup.
   * @member {string} [provisioningState] The provisioning state of the
   * container group. This only appears in the response.
   * @member {array} [containers] The containers within the container group.
   * @member {array} [imageRegistryCredentials] The image registry credentials
   * by which the container group is created from.
   * @member {string} [restartPolicy] Restart policy for all containers within
   * the container group.
   * - `Always` Always restart
   * - `OnFailure` Restart on failure
   * - `Never` Never restart
   * . Possible values include: 'Always', 'OnFailure', 'Never'
   * @member {object} [ipAddress] The IP address type of the container group.
   * @member {array} [ipAddress.ports] The list of ports exposed on the
   * container group.
   * @member {string} [ipAddress.ip] The IP exposed to the public internet.
   * @member {string} [osType] The operating system type required by the
   * containers in the container group. Possible values include: 'Windows',
   * 'Linux'
   * @member {array} [volumes] The list of volumes that can be mounted by
   * containers in this container group.
   * @member {object} [instanceView] The instance view of the container group.
   * Only valid in response.
   * @member {array} [instanceView.events] The events of this container group.
   * @member {string} [instanceView.state] The state of the container group.
   * Only valid in response.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContainerGroup
   *
   * @returns {object} metadata of ContainerGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerGroup',
      type: {
        name: 'Composite',
        className: 'ContainerGroup',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
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
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          containers: {
            required: false,
            serializedName: 'properties.containers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ContainerElementType',
                  type: {
                    name: 'Composite',
                    className: 'Container'
                  }
              }
            }
          },
          imageRegistryCredentials: {
            required: false,
            serializedName: 'properties.imageRegistryCredentials',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageRegistryCredentialElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImageRegistryCredential'
                  }
              }
            }
          },
          restartPolicy: {
            required: false,
            serializedName: 'properties.restartPolicy',
            type: {
              name: 'String'
            }
          },
          ipAddress: {
            required: false,
            serializedName: 'properties.ipAddress',
            type: {
              name: 'Composite',
              className: 'IpAddress'
            }
          },
          osType: {
            required: false,
            serializedName: 'properties.osType',
            type: {
              name: 'String'
            }
          },
          volumes: {
            required: false,
            serializedName: 'properties.volumes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VolumeElementType',
                  type: {
                    name: 'Composite',
                    className: 'Volume'
                  }
              }
            }
          },
          instanceView: {
            required: false,
            readOnly: true,
            serializedName: 'properties.instanceView',
            type: {
              name: 'Composite',
              className: 'ContainerGroupPropertiesInstanceView'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerGroup;
