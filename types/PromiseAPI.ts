import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { DeviceTokenDto } from '../models/DeviceTokenDto';
import { OrderStatusDto } from '../models/OrderStatusDto';
import { SetDeviceDetailsDto } from '../models/SetDeviceDetailsDto';
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
     * @param setDeviceDetailsDto 
     */
    public setDetails(setDeviceDetailsDto: SetDeviceDetailsDto, _options?: Configuration): Promise<void> {
        const result = this.api.setDetails(setDeviceDetailsDto, _options);
        return result.toPromise();
    }

    /**
     * @param deviceTokenDto 
     */
    public setToken(deviceTokenDto: DeviceTokenDto, _options?: Configuration): Promise<void> {
        const result = this.api.setToken(deviceTokenDto, _options);
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
     * @param orderToken This is the id recieved from the qrcode
     */
    public getOrderById(orderToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.getOrderById(orderToken, _options);
        return result.toPromise();
    }

    /**
     * @param orderStatusDto 
     */
    public setStatus(orderStatusDto: OrderStatusDto, _options?: Configuration): Promise<void> {
        const result = this.api.setStatus(orderStatusDto, _options);
        return result.toPromise();
    }


}



