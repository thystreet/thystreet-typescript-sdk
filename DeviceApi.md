# ThyStreet.DeviceApi

All URIs are relative to *https://cheffy-api.thystreet.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateToken**](DeviceApi.md#generateToken) | **GET** /device/generate/{deviceId} | 
[**setDetails**](DeviceApi.md#setDetails) | **PUT** /device/details | Toggle your device tariff when your device goes online using this api.
[**setToken**](DeviceApi.md#setToken) | **PUT** /device/token | 


# **generateToken**
> void generateToken()


### Example


```typescript
import { ThyStreet } from '';
import * as fs from 'fs';

const configuration = ThyStreet.createConfiguration();
const apiInstance = new ThyStreet.DeviceApi(configuration);

let body:ThyStreet.DeviceApiGenerateTokenRequest = {
  // string
  deviceId: "deviceId_example",
};

apiInstance.generateToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[thystreetAuth](README.md#thystreetAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generate and set new 6 digit token. |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setDetails**
> void setDetails(setDeviceDetailsDto)


### Example


```typescript
import { ThyStreet } from '';
import * as fs from 'fs';

const configuration = ThyStreet.createConfiguration();
const apiInstance = new ThyStreet.DeviceApi(configuration);

let body:ThyStreet.DeviceApiSetDetailsRequest = {
  // SetDeviceDetailsDto
  setDeviceDetailsDto: {
    deviceId: "deviceId_example",
    tariff: true,
  },
};

apiInstance.setDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setDeviceDetailsDto** | **SetDeviceDetailsDto**|  |


### Return type

**void**

### Authorization

[thystreetAuth](README.md#thystreetAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device status has been successfully enabled. |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setToken**
> void setToken(deviceTokenDto)


### Example


```typescript
import { ThyStreet } from '';
import * as fs from 'fs';

const configuration = ThyStreet.createConfiguration();
const apiInstance = new ThyStreet.DeviceApi(configuration);

let body:ThyStreet.DeviceApiSetTokenRequest = {
  // DeviceTokenDto
  deviceTokenDto: {
    deviceId: "deviceId_example",
    token: true,
  },
};

apiInstance.setToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTokenDto** | **DeviceTokenDto**|  |


### Return type

**void**

### Authorization

[thystreetAuth](README.md#thystreetAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device status has been successfully enabled. |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


