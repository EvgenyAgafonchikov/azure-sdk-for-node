// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e0b81f36-36ba-44f7-b550-7c9344a35893';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2017-01-19', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"East US\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"nodetestrg\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"3LbtFAGcdRoYyXL5ienvKvA1IBixD9RWOPxKINsG8Dk=\",\"secondaryKey\":\"NMtLh9A6LdoGkNOKsvBxmm5qGa0LY9SMvFVwaeTH8lU=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"xtfyIf0xDDnGQXrjx3DRkdmVkwl2LjM4Ri83MA7Lmck=\",\"secondaryKey\":\"1p6qCJaduQyBBesKA/Elh8ViaQ+89qa/GEcYrRyEBSs=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"GLxk1UQHUrR5UnVxLEk5Bz8j/pG7DPiY4G+7iHt3M3w=\",\"secondaryKey\":\"6nDaVYjDRXzxUzo11jS9mF8w+Xi7NPDYuqBasN3wLxw=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"3SVf0EipWggJUN93q2KQUVv0U7CyNY6L/6Yt1yl2Eq8=\",\"secondaryKey\":\"kMiQWIdTY5R1hUZ0Ap6c5EVvDAxITTjcdpv9X0rfskE=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"/lql+PkiYLyrWa+3Ou3uit3mgLWxVDRmL0wSFmQ+eYo=\",\"secondaryKey\":\"vEE0rYUV1IP9wKbs9q+fzCpMXrKvY2rRofI8QLyoJTM=\",\"rights\":\"RegistryWrite\"}],\"ipFilterRules\":[{\"filterName\":\"ipfilterrule2\",\"action\":\"Reject\",\"ipMask\":\"192.168.0.0/10\"}],\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\",\"internalAuthorizationPolicies\":[{\"KeyName\":\"scaleunitsend-d3f8ccc2-a60f-4441-a4ad-e21fe4e1c7bc-iothub\",\"PrimaryKey\":\"t+mIOXOZ8qJ8eSSYmY0B0hUqEwZLyE0ySTCz55FylCY=\",\"SecondaryKey\":\"/524jhAGkGw0pJkwTGEJTeKFhA5aLHuCFRGqt3aWjmk=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Send\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"},{\"KeyName\":\"owner-05b56522-98a9-4699-ae59-150f7176adba-iothub\",\"PrimaryKey\":\"jCrHLeEt7Cx/UNFNvftYZYCzaGI7PYpSC0dCsqezJZ8=\",\"SecondaryKey\":\"j+bW1GJRGxjqPvMxLdbsfxAXsifFlFAwKXuduZengn0=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\",\"Manage\",\"Send\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"}],\"authorizationPolicies\":[{\"KeyName\":\"iothubowner\",\"PrimaryKey\":\"3LbtFAGcdRoYyXL5ienvKvA1IBixD9RWOPxKINsG8Dk=\",\"SecondaryKey\":\"NMtLh9A6LdoGkNOKsvBxmm5qGa0LY9SMvFVwaeTH8lU=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"},{\"KeyName\":\"service\",\"PrimaryKey\":\"xtfyIf0xDDnGQXrjx3DRkdmVkwl2LjM4Ri83MA7Lmck=\",\"SecondaryKey\":\"1p6qCJaduQyBBesKA/Elh8ViaQ+89qa/GEcYrRyEBSs=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"}]},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\",\"internalAuthorizationPolicies\":[{\"KeyName\":\"scaleunitsend-293e29aa-3af1-42f8-a13d-b36cd09cd2a9-iothub\",\"PrimaryKey\":\"6CiwiGIuh0DAKHQdTHDPbukDsi4hMu/ZySqKh/gZxsM=\",\"SecondaryKey\":\"rD+bXqxeAwvAsH4Nwmv6SIQkULxiFGGcOuo1M2EZnGs=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Send\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"},{\"KeyName\":\"owner-e49a0615-8507-4add-9f70-82de6646ffa5-iothub\",\"PrimaryKey\":\"FP7dIxELmXfiIQRwgtw0gWuuluYtkKkSMVL6/Hz7BME=\",\"SecondaryKey\":\"7pQqtO0iz+HZmw1eTcpmJXcoufF1rGfBtauZSfuncxs=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\",\"Manage\",\"Send\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"}],\"authorizationPolicies\":[{\"KeyName\":\"iothubowner\",\"PrimaryKey\":\"3LbtFAGcdRoYyXL5ienvKvA1IBixD9RWOPxKINsG8Dk=\",\"SecondaryKey\":\"NMtLh9A6LdoGkNOKsvBxmm5qGa0LY9SMvFVwaeTH8lU=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"},{\"KeyName\":\"service\",\"PrimaryKey\":\"xtfyIf0xDDnGQXrjx3DRkdmVkwl2LjM4Ri83MA7Lmck=\",\"SecondaryKey\":\"1p6qCJaduQyBBesKA/Elh8ViaQ+89qa/GEcYrRyEBSs=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"}]}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[{\"connectionString\":\"Endpoint=sb://nodetestsb-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=8eXoVv51TlDjbtmw+ceGVemMYMViYg/m3nkkY5NLwrw=;EntityPath=nodetestQueue1\",\"name\":\"Queue1\",\"id\":\"877d8efb-bdbd-4be9-9696-dedb4cb87b8b\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}],\"serviceBusTopics\":[],\"eventHubs\":[{\"connectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=zms/5YT7MEj6e06dGHvsseZtHwQrXLEiLStkDEU5XO8=;EntityPath=nodetestEH2\",\"name\":\"EH2\",\"id\":\"4130ad71-e5a7-4530-bdb1-c22e90a2f2f6\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}]},\"routes\":[{\"name\":\"Route3\",\"source\":\"DeviceMessages\",\"condition\":\"false\",\"endpointNames\":[\"EH2\"],\"isEnabled\":true},{\"name\":\"Route4\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"Queue1\"],\"isEnabled\":true}],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":false}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":3}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6143',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NmZhNWMzMDQtNzlhMy00YTI5LWI4MjAtYmQxZmYzODRhNGE2?api-version=2017-01-19&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': '97f9c4d2-20ef-4fde-9684-2fed9773613a',
  'x-ms-correlation-request-id': '97f9c4d2-20ef-4fde-9684-2fed9773613a',
  'x-ms-routing-request-id': 'WESTUS:20170502T195147Z:97f9c4d2-20ef-4fde-9684-2fed9773613a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:51:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2017-01-19', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"East US\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"nodetestrg\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"3LbtFAGcdRoYyXL5ienvKvA1IBixD9RWOPxKINsG8Dk=\",\"secondaryKey\":\"NMtLh9A6LdoGkNOKsvBxmm5qGa0LY9SMvFVwaeTH8lU=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"xtfyIf0xDDnGQXrjx3DRkdmVkwl2LjM4Ri83MA7Lmck=\",\"secondaryKey\":\"1p6qCJaduQyBBesKA/Elh8ViaQ+89qa/GEcYrRyEBSs=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"GLxk1UQHUrR5UnVxLEk5Bz8j/pG7DPiY4G+7iHt3M3w=\",\"secondaryKey\":\"6nDaVYjDRXzxUzo11jS9mF8w+Xi7NPDYuqBasN3wLxw=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"3SVf0EipWggJUN93q2KQUVv0U7CyNY6L/6Yt1yl2Eq8=\",\"secondaryKey\":\"kMiQWIdTY5R1hUZ0Ap6c5EVvDAxITTjcdpv9X0rfskE=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"/lql+PkiYLyrWa+3Ou3uit3mgLWxVDRmL0wSFmQ+eYo=\",\"secondaryKey\":\"vEE0rYUV1IP9wKbs9q+fzCpMXrKvY2rRofI8QLyoJTM=\",\"rights\":\"RegistryWrite\"}],\"ipFilterRules\":[{\"filterName\":\"ipfilterrule2\",\"action\":\"Reject\",\"ipMask\":\"192.168.0.0/10\"}],\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\",\"internalAuthorizationPolicies\":[{\"KeyName\":\"scaleunitsend-d3f8ccc2-a60f-4441-a4ad-e21fe4e1c7bc-iothub\",\"PrimaryKey\":\"t+mIOXOZ8qJ8eSSYmY0B0hUqEwZLyE0ySTCz55FylCY=\",\"SecondaryKey\":\"/524jhAGkGw0pJkwTGEJTeKFhA5aLHuCFRGqt3aWjmk=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Send\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"},{\"KeyName\":\"owner-05b56522-98a9-4699-ae59-150f7176adba-iothub\",\"PrimaryKey\":\"jCrHLeEt7Cx/UNFNvftYZYCzaGI7PYpSC0dCsqezJZ8=\",\"SecondaryKey\":\"j+bW1GJRGxjqPvMxLdbsfxAXsifFlFAwKXuduZengn0=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\",\"Manage\",\"Send\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"}],\"authorizationPolicies\":[{\"KeyName\":\"iothubowner\",\"PrimaryKey\":\"3LbtFAGcdRoYyXL5ienvKvA1IBixD9RWOPxKINsG8Dk=\",\"SecondaryKey\":\"NMtLh9A6LdoGkNOKsvBxmm5qGa0LY9SMvFVwaeTH8lU=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"},{\"KeyName\":\"service\",\"PrimaryKey\":\"xtfyIf0xDDnGQXrjx3DRkdmVkwl2LjM4Ri83MA7Lmck=\",\"SecondaryKey\":\"1p6qCJaduQyBBesKA/Elh8ViaQ+89qa/GEcYrRyEBSs=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"}]},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\",\"internalAuthorizationPolicies\":[{\"KeyName\":\"scaleunitsend-293e29aa-3af1-42f8-a13d-b36cd09cd2a9-iothub\",\"PrimaryKey\":\"6CiwiGIuh0DAKHQdTHDPbukDsi4hMu/ZySqKh/gZxsM=\",\"SecondaryKey\":\"rD+bXqxeAwvAsH4Nwmv6SIQkULxiFGGcOuo1M2EZnGs=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Send\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"},{\"KeyName\":\"owner-e49a0615-8507-4add-9f70-82de6646ffa5-iothub\",\"PrimaryKey\":\"FP7dIxELmXfiIQRwgtw0gWuuluYtkKkSMVL6/Hz7BME=\",\"SecondaryKey\":\"7pQqtO0iz+HZmw1eTcpmJXcoufF1rGfBtauZSfuncxs=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\",\"Manage\",\"Send\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"}],\"authorizationPolicies\":[{\"KeyName\":\"iothubowner\",\"PrimaryKey\":\"3LbtFAGcdRoYyXL5ienvKvA1IBixD9RWOPxKINsG8Dk=\",\"SecondaryKey\":\"NMtLh9A6LdoGkNOKsvBxmm5qGa0LY9SMvFVwaeTH8lU=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"},{\"KeyName\":\"service\",\"PrimaryKey\":\"xtfyIf0xDDnGQXrjx3DRkdmVkwl2LjM4Ri83MA7Lmck=\",\"SecondaryKey\":\"1p6qCJaduQyBBesKA/Elh8ViaQ+89qa/GEcYrRyEBSs=\",\"ClaimType\":\"SharedAccessKey\",\"ClaimValue\":\"None\",\"Rights\":[\"Listen\"],\"CreatedTime\":\"Tue, 02 May 2017 19:51:02 GMT\",\"ModifiedTime\":\"Tue, 02 May 2017 19:51:02 GMT\"}]}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[{\"connectionString\":\"Endpoint=sb://nodetestsb-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=8eXoVv51TlDjbtmw+ceGVemMYMViYg/m3nkkY5NLwrw=;EntityPath=nodetestQueue1\",\"name\":\"Queue1\",\"id\":\"877d8efb-bdbd-4be9-9696-dedb4cb87b8b\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}],\"serviceBusTopics\":[],\"eventHubs\":[{\"connectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=zms/5YT7MEj6e06dGHvsseZtHwQrXLEiLStkDEU5XO8=;EntityPath=nodetestEH2\",\"name\":\"EH2\",\"id\":\"4130ad71-e5a7-4530-bdb1-c22e90a2f2f6\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}]},\"routes\":[{\"name\":\"Route3\",\"source\":\"DeviceMessages\",\"condition\":\"false\",\"endpointNames\":[\"EH2\"],\"isEnabled\":true},{\"name\":\"Route4\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"Queue1\"],\"isEnabled\":true}],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":false}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":3}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6143',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NmZhNWMzMDQtNzlhMy00YTI5LWI4MjAtYmQxZmYzODRhNGE2?api-version=2017-01-19&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': '97f9c4d2-20ef-4fde-9684-2fed9773613a',
  'x-ms-correlation-request-id': '97f9c4d2-20ef-4fde-9684-2fed9773613a',
  'x-ms-routing-request-id': 'WESTUS:20170502T195147Z:97f9c4d2-20ef-4fde-9684-2fed9773613a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:51:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NmZhNWMzMDQtNzlhMy00YTI5LWI4MjAtYmQxZmYzODRhNGE2?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': 'e0be94d9-344a-43e0-8b83-3228c585e723',
  'x-ms-correlation-request-id': 'e0be94d9-344a-43e0-8b83-3228c585e723',
  'x-ms-routing-request-id': 'WESTUS:20170502T195217Z:e0be94d9-344a-43e0-8b83-3228c585e723',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:52:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NmZhNWMzMDQtNzlhMy00YTI5LWI4MjAtYmQxZmYzODRhNGE2?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': 'e0be94d9-344a-43e0-8b83-3228c585e723',
  'x-ms-correlation-request-id': 'e0be94d9-344a-43e0-8b83-3228c585e723',
  'x-ms-routing-request-id': 'WESTUS:20170502T195217Z:e0be94d9-344a-43e0-8b83-3228c585e723',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:52:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"East US\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"nodetestrg\",\"etag\":\"AAAAAADqWBc=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"ipfilterrule2\",\"action\":\"Reject\",\"ipMask\":\"192.168.0.0/10\"}],\"hostName\":\"nodeTestHub.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[{\"connectionString\":\"Endpoint=sb://nodetestsb-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestQueue1\",\"name\":\"Queue1\",\"id\":\"877d8efb-bdbd-4be9-9696-dedb4cb87b8b\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}],\"serviceBusTopics\":[],\"eventHubs\":[{\"connectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestEH2\",\"name\":\"EH2\",\"id\":\"4130ad71-e5a7-4530-bdb1-c22e90a2f2f6\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}]},\"routes\":[{\"name\":\"Route3\",\"source\":\"DeviceMessages\",\"condition\":\"false\",\"endpointNames\":[\"EH2\"],\"isEnabled\":true},{\"name\":\"Route4\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"Queue1\"],\"isEnabled\":true}],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":false}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\",\"None\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":3}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2720',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '86f41a9c-9f4f-4a51-8217-82743ce7664c',
  'x-ms-correlation-request-id': '86f41a9c-9f4f-4a51-8217-82743ce7664c',
  'x-ms-routing-request-id': 'WESTUS:20170502T195218Z:86f41a9c-9f4f-4a51-8217-82743ce7664c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:52:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"East US\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"nodetestrg\",\"etag\":\"AAAAAADqWBc=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"ipfilterrule2\",\"action\":\"Reject\",\"ipMask\":\"192.168.0.0/10\"}],\"hostName\":\"nodeTestHub.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[{\"connectionString\":\"Endpoint=sb://nodetestsb-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestQueue1\",\"name\":\"Queue1\",\"id\":\"877d8efb-bdbd-4be9-9696-dedb4cb87b8b\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}],\"serviceBusTopics\":[],\"eventHubs\":[{\"connectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestEH2\",\"name\":\"EH2\",\"id\":\"4130ad71-e5a7-4530-bdb1-c22e90a2f2f6\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}]},\"routes\":[{\"name\":\"Route3\",\"source\":\"DeviceMessages\",\"condition\":\"false\",\"endpointNames\":[\"EH2\"],\"isEnabled\":true},{\"name\":\"Route4\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"Queue1\"],\"isEnabled\":true}],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":false}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\",\"None\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":3}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2720',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '86f41a9c-9f4f-4a51-8217-82743ce7664c',
  'x-ms-correlation-request-id': '86f41a9c-9f4f-4a51-8217-82743ce7664c',
  'x-ms-routing-request-id': 'WESTUS:20170502T195218Z:86f41a9c-9f4f-4a51-8217-82743ce7664c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:52:17 GMT',
  connection: 'close' });
 return result; }]];