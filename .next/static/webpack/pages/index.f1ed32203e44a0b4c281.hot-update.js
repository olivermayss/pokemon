webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Desktop\\Desafio\\site\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Home = function Home(data) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(data.response.results),
      _useState$ = _useState[0],
      lista = _useState$ === void 0 ? [] : _useState$,
      setLista = _useState[1];

  var imagemPokemon = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.data.sprites.front_default);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function imagemPokemon(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var listarPokemon = function listarPokemon() {
    var pokemon = lista.map(function (p) {
      return __jsx("ul", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 8
        }
      }, __jsx("a", {
        href: 'http://localhost:3000/detalhes?nome=' + p.name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }
      }, __jsx("img", {
        src: imagemPokemon(p.url),
        height: "100",
        width: "80",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 14
        }
      }), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 14
        }
      }, " ", p.name)));
    });
    return pokemon;
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 8
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, "Desafio-Pokemon"), __jsx("meta", {
    name: "description",
    content: "Site...do...desafio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "author",
    content: "Pokemon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 8
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 8
    }
  }, listarPokemon()));
};

_s(Home, "UROZ9x0A3lmZcBinhZ5Bt+b96Ws=");

_c = Home;
Home.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://pokeapi.co/api/v2/pokemon/');

        case 2:
          response = _context2.sent;
          console.log(response.data);
          return _context2.abrupt("return", {
            response: response.data
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJ1c2VTdGF0ZSIsInJlc3BvbnNlIiwicmVzdWx0cyIsImxpc3RhIiwic2V0TGlzdGEiLCJpbWFnZW1Qb2tlbW9uIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsImxpc3RhclBva2Vtb24iLCJwb2tlbW9uIiwibWFwIiwicCIsIm5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFPQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxJQUFELEVBQVU7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQ0QsSUFBSSxDQUFDRSxRQUFMLENBQWNDLE9BQWYsQ0FEbEI7QUFBQTtBQUFBLE1BQ2RDLEtBRGMsMkJBQ04sRUFETTtBQUFBLE1BQ0ZDLFFBREU7O0FBRXJCLE1BQU1DLGFBQWE7QUFBQSxnTUFBRyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNJQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsQ0FESjs7QUFBQTtBQUNiTCxzQkFEYTtBQUFBLCtDQUVaQSxRQUFRLENBQUNGLElBQVQsQ0FBY1UsT0FBZCxDQUFzQkMsYUFGVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiTCxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQUlBLE1BQU1NLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFNQyxPQUFPLEdBQUdULEtBQUssQ0FBQ1UsR0FBTixDQUFVLFVBQUNDLENBQUQ7QUFBQSxhQUN2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0c7QUFBRyxZQUFJLEVBQUUseUNBQXlDQSxDQUFDLENBQUNDLElBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRztBQUFLLFdBQUcsRUFBRVYsYUFBYSxDQUFDUyxDQUFDLENBQUNSLEdBQUgsQ0FBdkI7QUFBZ0MsY0FBTSxFQUFDLEtBQXZDO0FBQTZDLGFBQUssRUFBQyxJQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREgsRUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQU1RLENBQUMsQ0FBQ0MsSUFBUixDQUZILENBREgsQ0FEdUI7QUFBQSxLQUFWLENBQWhCO0FBV0EsV0FBT0gsT0FBUDtBQUNGLEdBYkE7O0FBY0QsU0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEQSxFQUVHO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFLHFCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkgsRUFHQztBQUFNLFFBQUksRUFBQyxRQUFYO0FBQW9CLFdBQU8sRUFBRSxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsQ0FESCxFQU1HLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5ILEVBT0csTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lELGFBQWEsRUFEakIsQ0FQSCxDQURIO0FBYUEsQ0FqQ0Q7O0dBQU1iLEk7O0tBQUFBLEk7QUFtQ05BLElBQUksQ0FBQ2tCLGVBQUwsaU1BQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0RULDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxvQ0FBVixDQURDOztBQUFBO0FBQ2xCUCxrQkFEa0I7QUFFdEJnQixpQkFBTyxDQUFDQyxHQUFSLENBQVlqQixRQUFRLENBQUNGLElBQXJCO0FBRnNCLDRDQUdmO0FBQUVFLG9CQUFRLEVBQUVBLFFBQVEsQ0FBQ0Y7QUFBckIsV0FIZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QjtBQU1lRCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMWVkMzIyMDNlNDRhMGI0YzI4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIEp1bWJvdHJvbiwgXHJcbiAgQnV0dG9uLFxyXG5cclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuXHJcblxyXG5jb25zdCBIb21lID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBbbGlzdGEgPSBbXSwgc2V0TGlzdGFdID0gdXNlU3RhdGUoZGF0YS5yZXNwb25zZS5yZXN1bHRzKTtcclxuICBjb25zdCBpbWFnZW1Qb2tlbW9uID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuc3ByaXRlcy5mcm9udF9kZWZhdWx0XHJcbiAgfVxyXG4gIGNvbnN0IGxpc3RhclBva2Vtb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwb2tlbW9uID0gbGlzdGEubWFwKChwKSA9PlxyXG4gICAgICAgPHVsPlxyXG4gICAgICAgICAgPGEgaHJlZj17J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kZXRhbGhlcz9ub21lPScgKyBwLm5hbWV9PlxyXG4gICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlbVBva2Vtb24ocC51cmwpfSBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjgwXCIgLz5cclxuICAgICAgICAgICAgIDxsaT4ge3AubmFtZX08L2xpPlxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgPC91bD4pO1xyXG4gICAgcmV0dXJuIHBva2Vtb25cclxuIH1cclxuIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgPEhlYWQ+XHJcbiAgICAgICA8dGl0bGU+RGVzYWZpby1Qb2tlbW9uPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9IFwiU2l0ZS4uLmRvLi4uZGVzYWZpb1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9IFwiUG9rZW1vblwiLz5cclxuICAgICAgIDwvSGVhZD5cclxuICAgICAgIDxNZW51IC8+XHJcbiAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAge2xpc3RhclBva2Vtb24oKX1cclxuICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiApXHJcbn07XHJcblxyXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycpO1xyXG4gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiByZXR1cm4geyByZXNwb25zZTogcmVzcG9uc2UuZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9