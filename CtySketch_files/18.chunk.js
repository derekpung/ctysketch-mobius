(this["webpackJsonpthesis"] = this["webpackJsonpthesis"] || []).push([[18],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-federated-buttons_2.entry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-federated-buttons_2.entry.js ***!
  \***************************************************************************************************/
/*! exports provided: amplify_federated_buttons, amplify_strike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_federated_buttons", function() { return AmplifyFederatedButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_strike", function() { return AmplifyStrike; });
/* harmony import */ var _index_39969785_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-39969785.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-39969785.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-392acb9b.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-392acb9b.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-01ecf5f9.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-01ecf5f9.js");








var AmplifyFederatedButtons =
/** @class */
function () {
  function AmplifyFederatedButtons(hostRef) {
    Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** The current authentication state. */

    this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
    /** Federated credentials & configuration. */

    this.federated = {};
    /** Auth state change handler for this component
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */

    this.handleAuthStateChange = _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"];
  }

  AmplifyFederatedButtons.prototype.componentWillLoad = function () {
    if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure !== 'function') {
      throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
    }

    var _a = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure().oauth,
        oauth = _a === void 0 ? {} : _a; // backward compatibility

    if (oauth['domain']) {
      this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth);
    } else if (oauth['awsCognito']) {
      this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth['awsCognito']);
    }

    if (oauth['auth0']) {
      this.federated.auth0Config = Object.assign(Object.assign({}, this.federated.auth0Config), oauth['auth0']);
    }
  };

  AmplifyFederatedButtons.prototype.render = function () {
    if (!Object.values(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"]).includes(this.authState)) {
      return null;
    }

    if (Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.federated)) {
      return null;
    }

    var _a = this.federated,
        amazonClientId = _a.amazonClientId,
        auth0Config = _a.auth0Config,
        facebookAppId = _a.facebookAppId,
        googleClientId = _a.googleClientId,
        oauthConfig = _a.oauthConfig;
    return Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, googleClientId && Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-google-button", {
      clientId: googleClientId,
      handleAuthStateChange: this.handleAuthStateChange
    })), facebookAppId && Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-facebook-button", {
      appId: facebookAppId,
      handleAuthStateChange: this.handleAuthStateChange
    })), amazonClientId && Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-amazon-button", {
      clientId: amazonClientId,
      handleAuthStateChange: this.handleAuthStateChange
    })), oauthConfig && Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-oauth-button", {
      config: oauthConfig
    })), auth0Config && Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth0-button", {
      config: auth0Config,
      handleAuthStateChange: this.handleAuthStateChange
    })));
  };

  return AmplifyFederatedButtons;
}();

var amplifyStrikeCss = ".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}";

var AmplifyStrike =
/** @class */
function () {
  function AmplifyStrike(hostRef) {
    Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }

  AmplifyStrike.prototype.render = function () {
    return Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      class: "strike-content"
    }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
  };

  return AmplifyStrike;
}();

AmplifyStrike.style = amplifyStrikeCss;


/***/ })

}]);
//# sourceMappingURL=18.chunk.js.map