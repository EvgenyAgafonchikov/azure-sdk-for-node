// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2aa30309-3723-4112-bd0b-79e9f65fc52d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla8758.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/892f253b-a5f6-4cad-957a-a0d13bbb744a?api-version=2016-11-01', '*')
  .reply(200, "{\"jobId\":\"892f253b-a5f6-4cad-957a-a0d13bbb744a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrpexample@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-12-20T02:42:57.7355214+00:00\",\"state\":\"Compiling\",\"result\":\"Succeeded\",\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2016-12-20T02:42:57.7355214+00:00\",\"details\":\"userName:;submitMachine:N/A\"}],\"properties\":{\"owner\":\"jasonsrpexample@SPI\",\"resources\":[],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls9781.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/12/20/02/42/892f253b-a5f6-4cad-957a-a0d13bbb744a/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"PT0S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00Z\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '461fcdeb-fdb3-43b3-baae-1881e858a04f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 20 Dec 2016 02:42:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8758.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/892f253b-a5f6-4cad-957a-a0d13bbb744a?api-version=2016-11-01', '*')
  .reply(200, "{\"jobId\":\"892f253b-a5f6-4cad-957a-a0d13bbb744a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrpexample@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-12-20T02:42:57.7355214+00:00\",\"state\":\"Compiling\",\"result\":\"Succeeded\",\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2016-12-20T02:42:57.7355214+00:00\",\"details\":\"userName:;submitMachine:N/A\"}],\"properties\":{\"owner\":\"jasonsrpexample@SPI\",\"resources\":[],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls9781.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/12/20/02/42/892f253b-a5f6-4cad-957a-a0d13bbb744a/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"PT0S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00Z\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '461fcdeb-fdb3-43b3-baae-1881e858a04f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 20 Dec 2016 02:42:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla8758.azuredatalakeanalytics.net:443')
  .post('/Jobs/892f253b-a5f6-4cad-957a-a0d13bbb744a/CancelJob?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '156f4330-0f0c-4a87-86c9-35e5a9865594',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 20 Dec 2016 02:42:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8758.azuredatalakeanalytics.net:443')
  .post('/Jobs/892f253b-a5f6-4cad-957a-a0d13bbb744a/CancelJob?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '156f4330-0f0c-4a87-86c9-35e5a9865594',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 20 Dec 2016 02:42:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla8758.azuredatalakeanalytics.net:443')
  .get('/Jobs/892f253b-a5f6-4cad-957a-a0d13bbb744a?api-version=2016-11-01')
  .reply(200, "{\"jobId\":\"892f253b-a5f6-4cad-957a-a0d13bbb744a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrpexample@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-12-20T02:42:57.7355214+00:00\",\"endTime\":\"2016-12-20T02:42:59.3605148+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_USER_CJS_CANCELEDBYUSER\",\"name\":\"CANCELED_BY_USER\",\"severity\":\"Info\",\"source\":\"User\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by jasonsrpexample@SPI.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2016-12-20T02:42:57.7355214+00:00\",\"details\":\"userName:;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"2016-12-20T02:42:58.1105109+00:00\",\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"2016-12-20T02:42:59.3605148+00:00\",\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"jasonsrpexample@SPI\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls9781.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/12/20/02/42/892f253b-a5f6-4cad-957a-a0d13bbb744a/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls9781.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/12/20/02/42/892f253b-a5f6-4cad-957a-a0d13bbb744a/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls9781.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/12/20/02/42/892f253b-a5f6-4cad-957a-a0d13bbb744a/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"UserError\",\"totalCompilationTime\":\"PT1.2500039S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '039d25a1-62dd-4020-94ba-2d32e4931d39',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 20 Dec 2016 02:43:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8758.azuredatalakeanalytics.net:443')
  .get('/Jobs/892f253b-a5f6-4cad-957a-a0d13bbb744a?api-version=2016-11-01')
  .reply(200, "{\"jobId\":\"892f253b-a5f6-4cad-957a-a0d13bbb744a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrpexample@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-12-20T02:42:57.7355214+00:00\",\"endTime\":\"2016-12-20T02:42:59.3605148+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_USER_CJS_CANCELEDBYUSER\",\"name\":\"CANCELED_BY_USER\",\"severity\":\"Info\",\"source\":\"User\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by jasonsrpexample@SPI.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2016-12-20T02:42:57.7355214+00:00\",\"details\":\"userName:;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"2016-12-20T02:42:58.1105109+00:00\",\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"2016-12-20T02:42:59.3605148+00:00\",\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"jasonsrpexample@SPI\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls9781.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/12/20/02/42/892f253b-a5f6-4cad-957a-a0d13bbb744a/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls9781.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/12/20/02/42/892f253b-a5f6-4cad-957a-a0d13bbb744a/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls9781.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/12/20/02/42/892f253b-a5f6-4cad-957a-a0d13bbb744a/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"UserError\",\"totalCompilationTime\":\"PT1.2500039S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '039d25a1-62dd-4020-94ba-2d32e4931d39',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 20 Dec 2016 02:43:00 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['892f253b-a5f6-4cad-957a-a0d13bbb744a'];};