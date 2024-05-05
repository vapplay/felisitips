"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GAMBannerAd = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BaseAd = require("./BaseAd");
var _GoogleMobileAdsBannerViewNativeComponent = require("./GoogleMobileAdsBannerViewNativeComponent");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /*
                                                                                                                                                                                                                                                                                                                                                     * Copyright (c) 2016-present Invertase Limited & Contributors
                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                     * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                     * you may not use this library except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                     * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                     *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                     * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                     * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                     * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                     * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                     */
class GAMBannerAd extends _react.default.Component {
  ref = /*#__PURE__*/(0, _react.createRef)();
  recordManualImpression() {
    if (this.ref.current) {
      _GoogleMobileAdsBannerViewNativeComponent.Commands.recordManualImpression(this.ref.current);
    }
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_BaseAd.BaseAd, _extends({
      ref: this.ref
    }, this.props));
  }
}
exports.GAMBannerAd = GAMBannerAd;
//# sourceMappingURL=GAMBannerAd.js.map