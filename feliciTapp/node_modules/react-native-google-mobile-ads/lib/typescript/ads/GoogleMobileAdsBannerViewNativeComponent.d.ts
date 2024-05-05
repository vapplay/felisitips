import type * as React from 'react';
import type { HostComponent, ViewProps } from 'react-native';
import type { BubblingEventHandler, Float } from 'react-native/Libraries/Types/CodegenTypes';
export declare type NativeEvent = {
    type: string;
    width?: Float;
    height?: Float;
    code?: string;
    message?: string;
    name?: string;
    data?: string;
    currency?: string;
    precision?: Float;
    value?: Float;
};
export interface NativeProps extends ViewProps {
    sizes: string[];
    unitId: string;
    request: string;
    manualImpressionsEnabled: boolean;
    onNativeEvent: BubblingEventHandler<NativeEvent>;
}
export declare type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
    recordManualImpression: (viewRef: React.ElementRef<ComponentType>) => void;
}
export declare const Commands: NativeCommands;
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=GoogleMobileAdsBannerViewNativeComponent.d.ts.map