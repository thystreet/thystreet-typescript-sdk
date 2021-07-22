/**
 * ThyStreet
 * Thy Street APIs are completely RESTful and all our responses are returned in JSON.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: support@thystreet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DeviceStatusDto {
    /**
    * Set current device availablity
    */
    'available': boolean;
    /**
    * Device ID
    */
    'deviceId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "available",
            "baseName": "available",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deviceId",
            "baseName": "deviceId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeviceStatusDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}
