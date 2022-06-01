import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { DeviceTokenDto } from '../models/DeviceTokenDto';
import { OrderStatusDto } from '../models/OrderStatusDto';
import { SetDeviceDetailsDto } from '../models/SetDeviceDetailsDto';

import { ObservableDeviceApi } from "./ObservableAPI";
import { DeviceApiRequestFactory, DeviceApiResponseProcessor} from "../apis/DeviceApi";

export interface DeviceApiGenerateTokenRequest {
    /**
     * 
     * @type string
     * @memberof DeviceApigenerateToken
     */
    deviceId: string
}

export interface DeviceApiSetDetailsRequest {
    /**
     * 
     * @type SetDeviceDetailsDto
     * @memberof DeviceApisetDetails
     */
    setDeviceDetailsDto: SetDeviceDetailsDto
}

export interface DeviceApiSetTokenRequest {
    /**
     * 
     * @type DeviceTokenDto
     * @memberof DeviceApisetToken
     */
    deviceTokenDto: DeviceTokenDto
}

export class ObjectDeviceApi {
    private api: ObservableDeviceApi

    public constructor(configuration: Configuration, requestFactory?: DeviceApiRequestFactory, responseProcessor?: DeviceApiResponseProcessor) {
        this.api = new ObservableDeviceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public generateToken(param: DeviceApiGenerateTokenRequest, options?: Configuration): Promise<void> {
        return this.api.generateToken(param.deviceId,  options).toPromise();
    }

    /**
     * Toggle your device tariff when your device goes online using this api.
     * @param param the request object
     */
    public setDetails(param: DeviceApiSetDetailsRequest, options?: Configuration): Promise<void> {
        return this.api.setDetails(param.setDeviceDetailsDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public setToken(param: DeviceApiSetTokenRequest, options?: Configuration): Promise<void> {
        return this.api.setToken(param.deviceTokenDto,  options).toPromise();
    }

}

import { ObservableOrderApi } from "./ObservableAPI";
import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";

export interface OrderApiGetOrderByIdRequest {
    /**
     * This is the id recieved from the qrcode or on your webhook
     * @type string
     * @memberof OrderApigetOrderById
     */
    orderToken: string
}

export interface OrderApiSetStatusRequest {
    /**
     * This is the id recieved from the qrcode or on your webhook
     * @type string
     * @memberof OrderApisetStatus
     */
    orderToken: string
    /**
     * 
     * @type OrderStatusDto
     * @memberof OrderApisetStatus
     */
    orderStatusDto: OrderStatusDto
}

export class ObjectOrderApi {
    private api: ObservableOrderApi

    public constructor(configuration: Configuration, requestFactory?: OrderApiRequestFactory, responseProcessor?: OrderApiResponseProcessor) {
        this.api = new ObservableOrderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getOrderById(param: OrderApiGetOrderByIdRequest, options?: Configuration): Promise<void> {
        return this.api.getOrderById(param.orderToken,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public setStatus(param: OrderApiSetStatusRequest, options?: Configuration): Promise<void> {
        return this.api.setStatus(param.orderToken, param.orderStatusDto,  options).toPromise();
    }

}
