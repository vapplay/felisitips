var _NativeModules$RNAppM, _NativeModules$RNAppM2;
import { NativeModules } from 'react-native';
const {
  REVENUE_PRECISION_ESTIMATED,
  REVENUE_PRECISION_PRECISE,
  REVENUE_PRECISION_PUBLISHER_PROVIDED,
  REVENUE_PRECISION_UNKNOWN
} = ((_NativeModules$RNAppM = (_NativeModules$RNAppM2 = NativeModules.RNAppModule).getConstants) === null || _NativeModules$RNAppM === void 0 ? void 0 : _NativeModules$RNAppM.call(_NativeModules$RNAppM2)) ?? {};
export let RevenuePrecisions = /*#__PURE__*/function (RevenuePrecisions) {
  RevenuePrecisions[RevenuePrecisions["ESTIMATED"] = REVENUE_PRECISION_ESTIMATED] = "ESTIMATED";
  RevenuePrecisions[RevenuePrecisions["PRECISE"] = REVENUE_PRECISION_PRECISE] = "PRECISE";
  RevenuePrecisions[RevenuePrecisions["PUBLISHER_PROVIDED"] = REVENUE_PRECISION_PUBLISHER_PROVIDED] = "PUBLISHER_PROVIDED";
  RevenuePrecisions[RevenuePrecisions["UNKNOWN"] = REVENUE_PRECISION_UNKNOWN] = "UNKNOWN";
  return RevenuePrecisions;
}({});
//# sourceMappingURL=constants.js.map