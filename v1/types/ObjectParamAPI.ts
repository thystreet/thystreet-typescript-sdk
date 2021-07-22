import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { DeviceStatusDto } from '../models/DeviceStatusDto';
import { DeviceTokenDto } from '../models/DeviceTokenDto';
import { OrderStatusDto } from '../models/OrderStatusDto';

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

export interface DeviceApiSetDeviceTokenRequest {
    /**
     * 
     * @type DeviceTokenDto
     * @memberof DeviceApisetDeviceToken
     */
    deviceTokenDto: DeviceTokenDto
}

export interface DeviceApiSetStatusRequest {
    /**
     * 
     * @type DeviceStatusDto
     * @memberof DeviceApisetStatus
     */
    deviceStatusDto: DeviceStatusDto
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
     * @param param the request object
     */
    public setDeviceToken(param: DeviceApiSetDeviceTokenRequest, options?: Configuration): Promise<void> {
        return this.api.setDeviceToken(param.deviceTokenDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public setStatus(param: DeviceApiSetStatusRequest, options?: Configuration): Promise<void> {
        return this.api.setStatus(param.deviceStatusDto,  options).toPromise();
    }

}

import { ObservableOrderApi } from "./ObservableAPI";
import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";

export interface OrderApiSetStatusRequest {
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
    public setStatus(param: OrderApiSetStatusRequest, options?: Configuration): Promise<void> {
        return this.api.setStatus(param.orderStatusDto,  options).toPromise();
    }

}
