// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/SHA1-cff2ab63c8c955aaf71989efa641b906558d9fb7?api-version=2017-09-01', '*')
  .reply(200, "{\"name\":\"SHA1-CFF2AB63C8C955AAF71989EFA641B906558D9FB7\",\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/SHA1-CFF2AB63C8C955AAF71989EFA641B906558D9FB7\",\"type\":\"Microsoft.Batch/batchAccounts/certificates\",\"etag\":\"W/\\\"0x8D526F468FD5461\\\"\",\"properties\":{\"thumbprintAlgorithm\":\"SHA1\",\"thumbprint\":\"CFF2AB63C8C955AAF71989EFA641B906558D9FB7\",\"provisioningState\":\"Succeeded\",\"provisioningStateTransitionTime\":\"2017-11-08T22:02:31.7889255Z\",\"format\":\"Pfx\",\"publicData\":\"MIIBrzCCAV2gAwIBAgIQHZGt2k0LCLFKYYCFxlJnkTAJBgUrDgMCHQUAMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5MB4XDTE2MDEwMTA3MDAwMFoXDTE4MDEwMTA3MDAwMFowEjEQMA4GA1UEAxMHbm9kZXNkazCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuX4XMWyR8cQRCA81TjHOerNOFOpOBj2O8jEdZvqwRlUYgMleEY2OlPd+nalxwlQ9+qbNkNGfjnhIMgiJ5CMlXgdRMF3E6DnMnktmHFG9L0VmQ6Lgt7bhXR8IitRHeYlvy5LJlw6Lcle5Kas2j4ThYjLQbjBMDSXD4HvZNe4UYEUCAwEAAaNLMEkwRwYDVR0BBEAwPoAQEuQJLQYdHU8AjWEh3BZkY6EYMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5ghAGN2wAqgBkihHPuNSqXDX0MAkGBSsOAwIdBQADQQB5djPe0G6c3Z8DuR6EQbIhBMTnC0zYPhigq+x1LG83761Ir8PiSy+6oxwCHOaYZyvheW0PByntC/WFwUipfn78\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 08 Nov 2017 22:02:31 GMT',
  etag: 'W/"0x8D526F468FD5461"',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '1ded88ad-d3e4-420d-b3cd-fffd0d604b6d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '5d12bf67-876e-4a76-9c57-fe4efed11238',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220231Z:5d12bf67-876e-4a76-9c57-fe4efed11238',
  date: 'Wed, 08 Nov 2017 22:02:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/SHA1-cff2ab63c8c955aaf71989efa641b906558d9fb7?api-version=2017-09-01', '*')
  .reply(200, "{\"name\":\"SHA1-CFF2AB63C8C955AAF71989EFA641B906558D9FB7\",\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/SHA1-CFF2AB63C8C955AAF71989EFA641B906558D9FB7\",\"type\":\"Microsoft.Batch/batchAccounts/certificates\",\"etag\":\"W/\\\"0x8D526F468FD5461\\\"\",\"properties\":{\"thumbprintAlgorithm\":\"SHA1\",\"thumbprint\":\"CFF2AB63C8C955AAF71989EFA641B906558D9FB7\",\"provisioningState\":\"Succeeded\",\"provisioningStateTransitionTime\":\"2017-11-08T22:02:31.7889255Z\",\"format\":\"Pfx\",\"publicData\":\"MIIBrzCCAV2gAwIBAgIQHZGt2k0LCLFKYYCFxlJnkTAJBgUrDgMCHQUAMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5MB4XDTE2MDEwMTA3MDAwMFoXDTE4MDEwMTA3MDAwMFowEjEQMA4GA1UEAxMHbm9kZXNkazCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuX4XMWyR8cQRCA81TjHOerNOFOpOBj2O8jEdZvqwRlUYgMleEY2OlPd+nalxwlQ9+qbNkNGfjnhIMgiJ5CMlXgdRMF3E6DnMnktmHFG9L0VmQ6Lgt7bhXR8IitRHeYlvy5LJlw6Lcle5Kas2j4ThYjLQbjBMDSXD4HvZNe4UYEUCAwEAAaNLMEkwRwYDVR0BBEAwPoAQEuQJLQYdHU8AjWEh3BZkY6EYMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5ghAGN2wAqgBkihHPuNSqXDX0MAkGBSsOAwIdBQADQQB5djPe0G6c3Z8DuR6EQbIhBMTnC0zYPhigq+x1LG83761Ir8PiSy+6oxwCHOaYZyvheW0PByntC/WFwUipfn78\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 08 Nov 2017 22:02:31 GMT',
  etag: 'W/"0x8D526F468FD5461"',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '1ded88ad-d3e4-420d-b3cd-fffd0d604b6d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '5d12bf67-876e-4a76-9c57-fe4efed11238',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220231Z:5d12bf67-876e-4a76-9c57-fe4efed11238',
  date: 'Wed, 08 Nov 2017 22:02:30 GMT',
  connection: 'close' });
 return result; }]];