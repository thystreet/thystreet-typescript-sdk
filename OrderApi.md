# ThyStreet.OrderApi

All URIs are relative to *https://cheffy-api.thystreet.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderById**](OrderApi.md#getOrderById) | **GET** /order/params/{orderToken} | 
[**setStatus**](OrderApi.md#setStatus) | **PUT** /order/status/{orderToken} | 


# **getOrderById**
> void getOrderById()


### Example


```typescript
import { ThyStreet } from '';
import * as fs from 'fs';

const configuration = ThyStreet.createConfiguration();
const apiInstance = new ThyStreet.OrderApi(configuration);

let body:ThyStreet.OrderApiGetOrderByIdRequest = {
  // string | This is the id recieved from the qrcode or on your webhook
  orderToken: "thystreet-FucAdwCipV6nLlVsesnu",
};

apiInstance.getOrderById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | [**string**] | This is the id recieved from the qrcode or on your webhook | defaults to undefined


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
**200** | Returns order information for the given id |  -  |
**400** | Invalid order token |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setStatus**
> void setStatus(orderStatusDto)


### Example


```typescript
import { ThyStreet } from '';
import * as fs from 'fs';

const configuration = ThyStreet.createConfiguration();
const apiInstance = new ThyStreet.OrderApi(configuration);

let body:ThyStreet.OrderApiSetStatusRequest = {
  // string | This is the id recieved from the qrcode or on your webhook
  orderToken: "thystreet-FucAdwCipV6nLlVsesnu",
  // OrderStatusDto
  orderStatusDto: {
    status: "CONFIRMED",
  },
};

apiInstance.setStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderStatusDto** | **OrderStatusDto**|  |
 **orderToken** | [**string**] | This is the id recieved from the qrcode or on your webhook | defaults to undefined


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
**200** | Updates order status. |  -  |
**400** | Invalid order token |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


