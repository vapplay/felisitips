import { RevenuePrecisions } from '../common/constants';
export declare type PaidEvent = {
    currency: string;
    precision: RevenuePrecisions;
    value: number;
};
export declare type PaidEventListener = (event: PaidEvent) => void;
//# sourceMappingURL=PaidEventListener.d.ts.map