// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { DeviceStatusDto } from '../models/DeviceStatusDto';
import { DeviceTokenDto } from '../models/DeviceTokenDto';

/**
 * no description
 */
export class DeviceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param deviceId 
     */
    public async generateToken(deviceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('Required parameter deviceId was null or undefined when calling generateToken.');
        }


        // Path Params
        const localVarPath = '/device/generate/{deviceId}'
            .replace('{' + 'deviceId' + '}', encodeURIComponent(String(deviceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["thystreetAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param deviceTokenDto 
     */
    public async setDeviceToken(deviceTokenDto: DeviceTokenDto, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'deviceTokenDto' is not null or undefined
        if (deviceTokenDto === null || deviceTokenDto === undefined) {
            throw new RequiredError('Required parameter deviceTokenDto was null or undefined when calling setDeviceToken.');
        }


        // Path Params
        const localVarPath = '/device/token';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deviceTokenDto, "DeviceTokenDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["thystreetAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param deviceStatusDto 
     */
    public async setStatus(deviceStatusDto: DeviceStatusDto, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'deviceStatusDto' is not null or undefined
        if (deviceStatusDto === null || deviceStatusDto === undefined) {
            throw new RequiredError('Required parameter deviceStatusDto was null or undefined when calling setStatus.');
        }


        // Path Params
        const localVarPath = '/device/status';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deviceStatusDto, "DeviceStatusDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["thystreetAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DeviceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateToken(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized.");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setDeviceToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setDeviceToken(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized.");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setStatus(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized.");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
