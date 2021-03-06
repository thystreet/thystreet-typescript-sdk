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

export class OrderStatusDto {
    /**
    * Order ID
    */
    'orderId': string;
    /**
    * Set order status
    */
    'status': OrderStatusDtoStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "orderId",
            "baseName": "orderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OrderStatusDtoStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderStatusDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type OrderStatusDtoStatusEnum = "CONFIRMED" | "COMPLETED" ;

