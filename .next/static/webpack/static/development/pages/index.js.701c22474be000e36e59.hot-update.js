webpackHotUpdate("static/development/pages/index.js",{

/***/ "./generated/apolloComponents.tsx":
/*!****************************************!*\
  !*** ./generated/apolloComponents.tsx ***!
  \****************************************/
/*! exports provided: LoginDocument, LoginComponent, withLogin, RegisterDocument, RegisterComponent, withRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLogin", function() { return withLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRegister", function() { return withRegister; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");



var _jsxFileName = "/home/chris/code/typegraphql-series/typescript-nextjs-graphql/generated/apolloComponents.tsx";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation Register($data: RegisterInput!) {\n    register(data: $data) {\n      id\n      firstName\n      lastName\n      name\n      name\n      email\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      firstName\n      lastName\n      name\n      email\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** All built-in and custom scalars, mapped to their actual values */



var LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var LoginComponent = function LoginComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_5__["Mutation"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    mutation: LoginDocument
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }));
};
function withLogin(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_5__["withMutation"](LoginDocument, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    alias: "withLogin"
  }, operationOptions));
}
var RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var RegisterComponent = function RegisterComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_5__["Mutation"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    mutation: RegisterDocument
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }));
};
function withRegister(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_5__["withMutation"](RegisterDocument, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    alias: "withRegister"
  }, operationOptions));
}

/***/ })

})
//# sourceMappingURL=index.js.701c22474be000e36e59.hot-update.js.map