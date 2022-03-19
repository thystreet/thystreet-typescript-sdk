/**
 * Thy Street
 * These are API's to easily manage your Thy Street device public pages. Thy Street APIs are completely RESTful and all our responses are returned in JSON.
 *
 * OpenAPI spec version: 0.0.2
 * Contact: support@thystreet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SetDeviceDetailsDto {
    /**
    * Device ID
    */
    'deviceId': string;
    /**
    * Toggle device tariff on public page
    */
    'tariff': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deviceId",
            "baseName": "deviceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "tariff",
            "baseName": "tariff",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SetDeviceDetailsDto.attributeTypeMap;
    }

    public constructor() {
    }
}

