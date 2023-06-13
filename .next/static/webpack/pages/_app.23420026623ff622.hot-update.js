"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAPI\": function() { return /* binding */ fetchAPI; },\n/* harmony export */   \"getStrapiURL\": function() { return /* binding */ getStrapiURL; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n/**\r\n * Get full Strapi URL from path\r\n * @param {string} path Path of the URL\r\n * @returns {string} Full Strapi URL\r\n */ function getStrapiURL() {\n    var path = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"\";\n    return \"\".concat(\"https://test-villazzo-backend-production.up.railway.app\" || 0).concat(path);\n}\n/**\r\n * Helper to make GET requests to Strapi API endpoints\r\n * @param {string} path Path of the API route\r\n * @param {Object} urlParamsObject URL params object, will be stringified\r\n * @param {Object} options Options passed to fetch\r\n * @returns Parsed API call response\r\n */ function fetchAPI(path) {\n    return _fetchAPI.apply(this, arguments);\n}\nfunction _fetchAPI() {\n    _fetchAPI = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(path) {\n        var urlParamsObject, options, mergedOptions, queryString, requestUrl, response, data;\n        var _arguments = arguments;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    urlParamsObject = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {}, options = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};\n                    mergedOptions = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                        mode: \"cors\",\n                        headers: {\n                            \"Content-Type\": \"application/json\",\n                            \"Access-Control-Allow-Origin\": \"*\"\n                        }\n                    }, options);\n                    queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);\n                    requestUrl = \"\".concat(getStrapiURL(\"/api\".concat(path).concat(queryString ? \"?\".concat(queryString) : \"\")));\n                    console.log(\"requestUrl:\", requestUrl);\n                    return [\n                        4,\n                        fetch(requestUrl, mergedOptions)\n                    ];\n                case 1:\n                    response = _state.sent();\n                    // Handle response\n                    if (!response.ok) {\n                        console.error(response.statusText);\n                        throw new Error(\"An error occured please try again\");\n                    }\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return _fetchAPI.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQW1CO0FBRW5CO1FBSzZCRSxJQUFJLEdBQUpBO0lBQzNCLE9BQU8sRUFBQyxDQUVMQSxNQUFJLENBRExDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQztBQUVoQixDQUFDO0FBRUQ7V0FPc0JDLFNBQVE7Q0E2QjdCOztJQTdCcUJBO1lBQWVDLGVBQWUsRUFBT0MsT0FBTyxFQUcxREMsYUFBYSxFQVViQzs7Ozs7YUFiNkJILGVBQWU7b0JBRzVDRSxhQUFhLEdBQUc7OzttR0FHbEIsT0FBYyxFQUFFOzRCQUNoQiw2QkFBNkIsRUFBQyxHQUFHO3lCQUNsQzs0RkFDRUQsRUFBTyxDQUNYO29CQUdLRSxXQUFXO29CQUNYQztvQkFJTk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFFUCxVQUFVLENBQUMsQ0FBQztvQkFFdEI7O3dCQUFNUSxLQUFLLENBQUNSO3NCQUEwQjs7b0JBQWpEQztvQkFFTjtvQkFDQSxJQUFJLENBQUNBLFFBQVEsQ0FBQ1EsbURBQUk7d0JBQ2hCSCxPQUFPLENBQUNJLEtBQUssQ0FBQ1QsUUFBUSxDQUFDVSxVQUFVLENBQUM7d0JBQ2xDLE1BQU0sSUFBSUMsS0FBSyxDQUFFO29CQUNuQixDQUFDO29CQUNZOzs7c0JBQXFCOztvQkFBNUJWLElBQUksR0FBRztvQkFDYjs7d0JBQU9BLElBQUk7Ozs7SUFDYixDQUFDO1dBN0JxQlAsU0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvYXBpLmpzPzQ1NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gXCJxc1wiXHJcblxyXG4vKipcclxuICogR2V0IGZ1bGwgU3RyYXBpIFVSTCBmcm9tIHBhdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCBvZiB0aGUgVVJMXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEZ1bGwgU3RyYXBpIFVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gXCJcIikge1xyXG4gIHJldHVybiBgJHtcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcclxuICB9JHtwYXRofWBcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciB0byBtYWtlIEdFVCByZXF1ZXN0cyB0byBTdHJhcGkgQVBJIGVuZHBvaW50c1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBBUEkgcm91dGVcclxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byBmZXRjaFxyXG4gKiBAcmV0dXJucyBQYXJzZWQgQVBJIGNhbGwgcmVzcG9uc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoLCB1cmxQYXJhbXNPYmplY3QgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgLy8gTWVyZ2UgZGVmYXVsdCBhbmQgdXNlciBvcHRpb25zXHJcbiAgXHJcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcclxuICAgIG1vZGU6ICdjb3JzJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6XCIqXCJcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH1cclxuXHJcbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcclxuICAgIGAvYXBpJHtwYXRofSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxyXG4gICl9YFxyXG4gIFxyXG4gIGNvbnNvbGUubG9nKFwicmVxdWVzdFVybDpcIiwgcmVxdWVzdFVybCk7XHJcbiAgLy8gVHJpZ2dlciBBUEkgY2FsbFxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCwgbWVyZ2VkT3B0aW9ucylcclxuXHJcbiAgLy8gSGFuZGxlIHJlc3BvbnNlXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBBbiBlcnJvciBvY2N1cmVkIHBsZWFzZSB0cnkgYWdhaW5gKVxyXG4gIH1cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG4iXSwibmFtZXMiOlsicXMiLCJnZXRTdHJhcGlVUkwiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwiZmV0Y2hBUEkiLCJ1cmxQYXJhbXNPYmplY3QiLCJvcHRpb25zIiwibWVyZ2VkT3B0aW9ucyIsInF1ZXJ5U3RyaW5nIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwiZGF0YSIsIm1vZGUiLCJoZWFkZXJzIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwib2siLCJlcnJvciIsInN0YXR1c1RleHQiLCJFcnJvciIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/api.js\n"));

/***/ })

});