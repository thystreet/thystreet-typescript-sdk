import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { DeviceStatusDto } from '../models/DeviceStatusDto';
import { DeviceTokenDto } from '../models/DeviceTokenDto';
import { OrderStatusDto } from '../models/OrderStatusDto';
import { ObservableDeviceApi } from './ObservableAPI';

import { DeviceApiRequestFactory, DeviceApiResponseProcessor} from "../apis/DeviceApi";
export class PromiseDeviceApi {
    private api: ObservableDeviceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DeviceApiRequestFactory,
        responseProcessor?: DeviceApiResponseProcessor
    ) {
        this.api = new ObservableDeviceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param deviceId 
     */
    public generateToken(deviceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.generateToken(deviceId, _options);
        return result.toPromise();
    }

    /**
     * @param deviceTokenDto 
     */
    public setDeviceToken(deviceTokenDto: DeviceTokenDto, _options?: Configuration): Promise<void> {
        const result = this.api.setDeviceToken(deviceTokenDto, _options);
        return result.toPromise();
    }

    /**
     * @param deviceStatusDto 
     */
    public setStatus(deviceStatusDto: DeviceStatusDto, _options?: Configuration): Promise<void> {
        const result = this.api.setStatus(deviceStatusDto, _options);
        return result.toPromise();
    }


}



import { ObservableOrderApi } from './ObservableAPI';

import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";
export class PromiseOrderApi {
    private api: ObservableOrderApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderApiRequestFactory,
        responseProcessor?: OrderApiResponseProcessor
    ) {
        this.api = new ObservableOrderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param orderStatusDto 
     */
    public setStatus(orderStatusDto: OrderStatusDto, _options?: Configuration): Promise<void> {
        const result = this.api.setStatus(orderStatusDto, _options);
        return result.toPromise();
    }


}



