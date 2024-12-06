'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$1 = require('react');
var React$1__default = _interopDefault(React$1);
var serialize = _interopDefault(require('serialize-javascript'));
var reactRouterDom = require('react-router-dom');
var logger = _interopDefault(require('dazzle-dev-utils/logger'));
var ReactDOMServer = require('react-dom/server');
var reactHelmet = require('react-helmet');
var server = require('react-router-dom/server');

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

/**
 * Returns a new React component, ready to be instantiated.
 * Note the closure here protecting Component, and providing a unique
 * instance of Component to the static implementation of `load`.
 */
function asyncComponent(_ref) {
  var loader = _ref.loader,
    Placeholder = _ref.Placeholder,
    chunkName = _ref.chunkName;
  // keep Component in a closure to avoid doing this stuff more than once
  var Component = null;
  return /*#__PURE__*/function (_React$Component) {
    function AsyncRouteComponent() {
      var _this;
      _this = _React$Component.apply(this, arguments) || this;
      _this.state = {
        Component: Component
      };
      _this.updateState = function () {
        // Only update state if we don't already have a reference to the
        // component, this prevent unnecessary renders.
        if (_this.state.Component !== Component) {
          _this.setState({
            Component: Component
          });
        }
      };
      return _this;
    }
    /**
     * Static so that you can call load against an uninstantiated version of
     * this component. This should only be called one time outside of the
     * normal render path.
     */
    _inheritsLoose(AsyncRouteComponent, _React$Component);
    AsyncRouteComponent.load = function load() {
      return loader().then(function (ResolvedComponent) {
        Component = ResolvedComponent["default"] || ResolvedComponent;
      });
    };
    AsyncRouteComponent.getChunkName = function getChunkName() {
      return chunkName;
    };
    AsyncRouteComponent.getInitialProps = function getInitialProps(ctx) {
      // Need to call the wrapped components getInitialProps if it exists
      if (Component !== null) {
        return Component.getInitialProps ? Component.getInitialProps(ctx) : Promise.resolve(null);
      }
    };
    var _proto = AsyncRouteComponent.prototype;
    _proto.componentDidMount = function componentDidMount() {
      AsyncRouteComponent.load().then(this.updateState);
    };
    _proto.render = function render() {
      var ComponentFromState = this.state.Component;
      if (ComponentFromState) {
        return React$1.createElement(ComponentFromState, Object.assign({}, this.props));
      }
      if (Placeholder) {
        return React$1.createElement(Placeholder, Object.assign({}, this.props));
      }
      return null;
    };
    return AsyncRouteComponent;
  }(React$1.Component);
}

var NotFound = function NotFound() {
  var data = "The Page You Were Looking For Was Not Found";
  return React.createElement(reactRouterDom.Route, {
    path: '**',
    Component: function Component() {
      return data;
    }
  });
};

/** @private Guard cluase to narrow the AsyncRouteableComponent union type on getInitialProps */
function isAsyncComponent(Component) {
  return Component.getInitialProps !== undefined;
}
/** @private Guard cluase to narrow the AsyncRouteableComponent union type on load */
function isLoadableComponent(Component) {
  return Component.load !== undefined;
}
/** @private is given routes array have a 404 page?  */
function is404ComponentAvailable(routes) {
  return routes.find(function (route) {
    return ['**', '*', '', undefined].includes(route.path);
  }) || false;
}
/** @private Returns 404Component from given routes if component was not avaliable returns default 404component */
function get404Component(routes) {
  var match = is404ComponentAvailable(routes);
  return match ? match.Component : NotFound;
}
/** @private Checks if 404Component is in routes, if it's not available add default 404 component */
function getAllRoutes(routes) {
  return is404ComponentAvailable(routes) ? routes : [].concat(routes, [{
    Component: NotFound
  }]);
}
/** @private Checks if given string ends with ".js" */
function isJS(str) {
  return str.endsWith('.js');
}
/** @private Checks if given transition type is instant */
function isInstantTransition(transition) {
  return transition === "instant";
}

var __AfterContext = /*#__PURE__*/React$1__default.createContext({});
var useAfterContext = function useAfterContext() {
  return React$1__default.useContext(__AfterContext);
};

var Document = /*#__PURE__*/function (_React$Component) {
  function Document() {
    return _React$Component.apply(this, arguments) || this;
  }
  _inheritsLoose(Document, _React$Component);
  var _proto = Document.prototype;
  _proto.render = function render() {
    var helmet = this.props.helmet;
    // get attributes from React Helmet
    var htmlAttrs = helmet.htmlAttributes.toComponent();
    var bodyAttrs = helmet.bodyAttributes.toComponent();
    return React$1.createElement("html", Object.assign({}, htmlAttrs), React$1.createElement("head", null, React$1.createElement("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge"
    }), React$1.createElement("meta", {
      charSet: "utf-8"
    }), React$1.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), helmet.title.toComponent(), helmet.meta.toComponent(), helmet.link.toComponent(), React$1.createElement(AfterStyles, null)), React$1.createElement("body", Object.assign({}, bodyAttrs), React$1.createElement(AfterRoot, null), React$1.createElement(AfterData, null), React$1.createElement(AfterScripts, null)));
  };
  return Document;
}(React$1.Component);
Document.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var renderPage, page;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          renderPage = _ref.renderPage;
          _context.next = 3;
          return renderPage();
        case 3:
          page = _context.sent;
          return _context.abrupt("return", _extends({}, page));
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
var AfterRoot = function AfterRoot() {
  var _useAfterContext = useAfterContext(),
    html = _useAfterContext.html;
  return React$1.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};
var AfterData = function AfterData(_ref3) {
  var data = _ref3.data;
  var _useAfterContext2 = useAfterContext(),
    contextData = _useAfterContext2.data;
  return React$1.createElement("script", {
    defer: true,
    dangerouslySetInnerHTML: {
      __html: "window.__SERVER_APP_STATE__ =  " + serialize(_extends({}, data || contextData))
    }
  });
};
var AfterStyles = function AfterStyles() {
  var _useAfterContext3 = useAfterContext(),
    assets = _useAfterContext3.assets,
    styles = _useAfterContext3.styles;
  return React$1.createElement(React$1.Fragment, null, assets.client.css && React$1.createElement("link", {
    rel: "stylesheet",
    href: assets.client.css
  }), styles.map(function (path) {
    return React$1.createElement("link", {
      key: path,
      rel: "stylesheet",
      href: path
    });
  }));
};
var AfterScripts = function AfterScripts() {
  var _useAfterContext4 = useAfterContext(),
    scripts = _useAfterContext4.scripts,
    assets = _useAfterContext4.assets;
  return React$1.createElement(React$1.Fragment, null, scripts.filter(isJS).map(function (path) {
    return React$1.createElement("script", {
      key: path,
      defer: true,
      type: "text/javascript",
      src: path,
      crossOrigin: "anonymous"
    });
  }), assets.client.js && React$1.createElement("script", {
    type: "text/javascript",
    src: assets.client.js,
    defer: true,
    crossOrigin: "anonymous"
  }));
};

/**
 * This helps us to make sure all the async code is loaded before rendering.
 */
function ensureReady(_x, _x2) {
  return _ensureReady.apply(this, arguments);
}
function _ensureReady() {
  _ensureReady = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(routes, pathname) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Promise.all(routes.map(function (route) {
            //const match = matchPath(pathname || window.location.pathname, route);
            var match = reactRouterDom.matchPath({
              path: route.path || "*",
              caseSensitive: route.caseSensitive,
              end: true
            }, pathname || window.location.pathname);
            if (match && route && route.Component && isLoadableComponent(route.Component) && route.Component.load) {
              return route.Component.load();
            }
            return undefined;
          }));
        case 2:
          return _context.abrupt("return", Promise.resolve(window.__SERVER_APP_STATE__));
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _ensureReady.apply(this, arguments);
}

function loadInitialProps(_x, _x2, _x3) {
  return _loadInitialProps.apply(this, arguments);
}
function _loadInitialProps() {
  _loadInitialProps = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(pathname, routes, ctx) {
    var promises, matchedComponent;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          promises = [];
          matchedComponent = routes.find(function (route) {
            // Step 1: Find the matched component using matchPath and pathname
            //const match = matchPath(pathname, { ...route, path: route.path || '*' });
            var match = reactRouterDom.matchPath({
              path: route.path || "*",
              caseSensitive: route.caseSensitive,
              end: true
            }, pathname);
            // Step 2: Check if match is found: if match is not found, then 'match' is null
            // If match is found and route has asyncComponent
            // then load the component and call its getInitialProps
            if (match && route.Component && isAsyncComponent(route.Component)) {
              var component = route.Component;
              promises.push(component.load ? component.load().then(function () {
                return component.getInitialProps(_extends({
                  match: match
                }, ctx));
              }) : component.getInitialProps(_extends({
                match: match
              }, ctx)));
            }
            return !!match;
          });
          _context.t0 = matchedComponent;
          _context.next = 5;
          return Promise.all(promises);
        case 5:
          _context.t1 = _context.sent[0];
          return _context.abrupt("return", {
            match: _context.t0,
            data: _context.t1
          });
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _loadInitialProps.apply(this, arguments);
}

var _excluded = ["data", "name"];
var SerializeData = function SerializeData(_ref) {
  var data = _ref.data,
    name = _ref.name,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return React$1__default.createElement("script", Object.assign({
    defer: true
  }, props, {
    dangerouslySetInnerHTML: {
      __html: "window._" + name.toUpperCase() + "_ = " + serialize(data)
    }
  }));
};
var getSerializedData = function getSerializedData(name, remove) {
  if (remove === void 0) {
    remove = true;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  var data = window["_" + name.toUpperCase() + "_"];
  if (remove) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete window["_" + name.toUpperCase() + "_"];
  }
  return data;
};

var errorMeesage = "all async routes must have a chunkName property with value of /* webpackChunkName: \"MyChunkName\" */ check your routes config or use babel-plugin-after";
function getAssets(_ref) {
  var route = _ref.route,
    chunks = _ref.chunks;
  var scripts = [];
  var styles = [];
  // if route.component is not an asyncComponent
  // it's assets (JS and CSS files) will go into the
  // main bundle.js and bundle.css ...
  if (!route || !isLoadableComponent(route.Component)) {
    return {
      scripts: scripts,
      styles: styles
    };
  }
  var chunkName = route.Component.getChunkName();
  // if component was LoadableComponent and chunkName was undefined
  // print an error message to console so Developer can fix it
  // todo add link to documentation or show more useful error message
  if (chunkName === undefined) {
    logger.error(errorMeesage);
    throw new Error();
  }
  // we look for component assets from chunks.json
  if (chunks[chunkName] && chunks[chunkName].js) {
    scripts = chunks[chunkName].js;
  }
  if (chunks[chunkName] && chunks[chunkName].css) {
    styles = chunks[chunkName].css;
  }
  return {
    scripts: scripts,
    styles: styles
  };
}

var PAGE_DATA_FILE_NAME = 'page-data.json';
// TODO: for better performance we can check
// and see if matchedRoute component have getInitialProps or not
// if the page dose not have a getInitalProps, then page-data.json is empty
/**
 * reads data from pathname/page-data.json file using (fetch method) and then return it
 * @param routes
 * @param pathname
 */
function loadStaticProps(_x) {
  return _loadStaticProps.apply(this, arguments);
}
function _loadStaticProps() {
  _loadStaticProps = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(pathname) {
    var PAGE_DATA_FILE_PATH;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // in ssg mode there is always a file called page-data.json next to the
          // page path that we have in our app this page-data.json file includes inital data that we need
          // to inject to our components before we render the component
          // if pathname equals "/" we are going to fetch data for https://page-data.json path
          // which is WRONG so we fallback to empty string for index page /page-data.json
          PAGE_DATA_FILE_PATH = (pathname === '/' ? '' : pathname) + "/" + PAGE_DATA_FILE_NAME;
          return _context.abrupt("return", fetch(PAGE_DATA_FILE_PATH).then(function (res) {
            return res.json();
          }).then(function (res) {
            return {
              data: res
            };
          }));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _loadStaticProps.apply(this, arguments);
}

var isClient = typeof window !== "undefined";
// HACK: Since there will always be a single instance of After, this shouldn't cause problems
var store = /*#__PURE__*/function () {
  var s = {};
  return {
    set: function set(key, value) {
      if (!isClient) {
        console.log("ALERT: TRIED TO SET STORE ON SERVER");
        return;
      }
      s[key] = value;
    },
    get: function get(key) {
      if (!isClient) {
        console.log("ALERT: TRIED TO GET STORE ON SERVER");
        return null;
      }
      return s[key];
    },
		getCache: () => s,
  };
}();
var getCachedData = function getCachedData(navigationAction, location) {
  if (navigationAction !== 'POP') return null;
  var cache = store.get(location.pathname);
  // TODO: TTL on cache
  return cache && cache.key === location.key ? cache.data : null;
};
var defaultNavigatigationDetector = function defaultNavigatigationDetector(currentLoc, nextLoc) {
  return nextLoc.pathname !== currentLoc.pathname || currentLoc.search !== nextLoc.search;
};
var After = function After(props) {
  var navigationType = reactRouterDom.useNavigationType();
  var currentLocation = reactRouterDom.useLocation();
  var params = reactRouterDom.useParams();
  var data = props.data,
    routes = props.routes,
    _props$transitionBeha = props.transitionBehavior,
    transitionBehavior = _props$transitionBeha === void 0 ? 'blocking' : _props$transitionBeha,
    customParams = props.customParams;
  var _React$useState = React$1__default.useState({
      data: data.initialData,
      previousLocation: null,
      currentLocation: currentLocation,
      isLoading: false
    }),
    state = _React$useState[0],
    setState = _React$useState[1];
  var hasNavigated = defaultNavigatigationDetector(currentLocation, state.currentLocation);
  var initialData = state.data;
  var isInstantMode = isInstantTransition(transitionBehavior);
  var match = {
    params: params,
    pathname: currentLocation.pathname
  };
  var NotfoundComponent = get404Component(routes);
  // when hasNavigated changes, then update the state and cached data accordingly
  React$1__default.useEffect(function () {
    var previousLocation = state.currentLocation;
    if (hasNavigated) {
      var cachedData = getCachedData(navigationType, currentLocation);
      var hasCachedData = !!cachedData;
      // update the current state
      setState(_extends({}, state, {
        previousLocation: hasCachedData ? null : previousLocation,
        currentLocation: currentLocation,
        data: cachedData,
        isLoading: hasCachedData ? false : true
      }));
    }
  }, [hasNavigated]);
  // this useEffect is similar to componentDidUpdate and must be fired only after
  // update to state has happened
  // in above useEffect
  React$1__default.useEffect(function () {
    var hasNavigated = state.previousLocation !== null && defaultNavigatigationDetector(state.previousLocation, state.currentLocation);
    if (hasNavigated) {
      var isBlockedMode = !isInstantMode;
      var _data$afterData = data.afterData,
        scrollToTop = _data$afterData.scrollToTop,
        ssg = _data$afterData.ssg;
      var ctx = {
        location: currentLocation,
        scrollToTop: scrollToTop,
        customParams: customParams
      };
      // Only for page changes, prevent scroll up for anchor links
      var isPageChanged = !!state.previousLocation && state.previousLocation.pathname !== currentLocation.pathname;
      var isAllowedToScroll = isPageChanged && scrollToTop.current === true;
      // in instant mode, first we scroll to top then we fetch the data
      if (isInstantMode && isAllowedToScroll) {
        window.scrollTo(0, 0);
      }
      if (state.data === null) {
        // in ssg mode we don't call component.getInitialProps
        // instead we fetch the page-data.json file
        var loadData = ssg ? loadStaticProps : loadInitialProps;
        loadData(currentLocation.pathname, routes, ctx).then(function (res) {
          return res.data;
        }).then(function (data) {
          // if user moved to a new page at the time we were fetching data
          // for the previous page, we ignore data of the previous page
          if (state.currentLocation !== currentLocation) return;
          // in blocked mode, first we fetch the data and then we scroll to top
          if (isBlockedMode && isAllowedToScroll) {
            window.scrollTo(0, 0);
          }
          if (!!data) {
            store.set(correctLocation.pathname, {
              key: currentLocation.key,
              data: data
            });
          }
          setState({
            previousLocation: null,
            data: data,
            isLoading: false,
            currentLocation: currentLocation
          });
        })["catch"](function (e) {
          // @todo we should more cleverly handle errors???
          console.log(e);
          setState({
            previousLocation: null,
            data: undefined,
            isLoading: false,
            currentLocation: currentLocation
          });
        });
      }
    }
  }, [state]);
  var updateState = React$1__default.useCallback(function (data) {
    if (!!data) {
      store.set(currentLocation.pathname, {
        key: currentLocation.key,
        data: data
      });
    }
    setState(_extends({}, state, {
      previousLocation: null,
      data: data,
      isLoading: false,
      currentLocation: currentLocation
    }));
  }, [state, currentLocation]);
  // used to refetch data for current route -> basically call loadData once again
  var refetch = React$1__default.useCallback(function () {
    var _data$afterData2 = data.afterData,
      scrollToTop = _data$afterData2.scrollToTop,
      ssg = _data$afterData2.ssg;
    var ctx = {
      location: currentLocation,
      scrollToTop: scrollToTop,
      customParams: customParams
    };
    setState(_extends({}, state, {
      isLoading: true
    }));
    // in ssg mode we don't call component.getInitialProps
    // instead we fetch the page-data.json file
    var loadData = ssg ? loadStaticProps : loadInitialProps;
    loadData(currentLocation.pathname, routes, ctx).then(function (res) {
      return res.data;
    }).then(function (data) {
      // if user moved to a new page at the time we were fetching data
      // for the previous page, we ignore data of the previous page
      if (state.currentLocation !== currentLocation) return;
      if (!!data) {
        store.set(correctLocation.pathname, {
          key: currentLocation.key,
          data: data
        });
      }
      setState({
        previousLocation: null,
        data: data,
        isLoading: false,
        currentLocation: currentLocation
      });
    })["catch"](function (e) {
      // @todo we should more cleverly handle errors???
      console.log(e);
      setState(_extends({}, state, {
        previousLocation: null,
        isLoading: false,
        currentLocation: currentLocation
      }));
    });
  }, [state, currentLocation, data]);
  // when we are in the instant mode we want to pass the right location prop
  // to the <Route /> otherwise it will render previous matched component
  var correctLocation = isInstantMode ? currentLocation : state.previousLocation ? state.previousLocation : currentLocation;
  return React$1__default.createElement(reactRouterDom.Routes, {
    location: correctLocation
  }, (initialData == null ? void 0 : initialData.statusCode) === 404 && React$1__default.createElement(reactRouterDom.Route, {
    Component: NotfoundComponent,
    path: currentLocation.pathname
  }), (initialData == null ? void 0 : initialData.redirectTo) && React$1__default.createElement(reactRouterDom.Navigate, {
    to: initialData.redirectTo
  }), getAllRoutes(routes).map(function (route, index) {
    var Component = route.Component;
    return React$1__default.createElement(reactRouterDom.Route, {
      path: route.path,
      key: "route--" + index,
      element: React$1__default.createElement(Component, Object.assign({}, initialData, {
        match: match,
        location: currentLocation,
        isLoading: state.isLoading,
        // custom props
        updateState: updateState,
        refetch: refetch
      }))
    });
  }));
};

var __AfterRouterContext = /*#__PURE__*/React$1__default.createContext({});
var useAfterRouterContext = function useAfterRouterContext() {
  return React$1__default.useContext(__AfterRouterContext);
};

var _excluded$1 = ["html"];
var modPageFn = function modPageFn(Page) {
  return function RenderAfter(props) {
    //@ts-ignore
    return React$1.createElement(Page, Object.assign({}, props));
  };
};
/**
 * The customRenderer parameter is a (potentially async) function that can be set to return
 * more than just a rendered string.
 * If present, it will be used instead of the default ReactDOMServer renderToString function.
 * It has to return an object of shape { html, ... }, in which html will be used as the rendered string
 * Other props will be also pass to the Document component
 */
function renderApp(_x) {
  return _renderApp.apply(this, arguments);
}
function _renderApp() {
  _renderApp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(options) {
    var req, res, pureRoutes, assets, Document$1, customRenderer, chunks, _options$scrollToTop, scrollToTop, _options$ssg, ssg, _options$customParams, customParams, autoScrollRef, routes, ctx, fullUrl, pathname, _yield$loadInitialPro, match, initialData, context, redirectTo, statusCode, afterData, data, renderPage, Doc, _getAssets, scripts, styles, reactRouterMatch, _yield$Doc$getInitial, html, docProps, props, doc, page;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          req = options.req, res = options.res, pureRoutes = options.routes, assets = options.assets, Document$1 = options.document, customRenderer = options.customRenderer, chunks = options.chunks, _options$scrollToTop = options.scrollToTop, scrollToTop = _options$scrollToTop === void 0 ? true : _options$scrollToTop, _options$ssg = options.ssg, ssg = _options$ssg === void 0 ? false : _options$ssg, _options$customParams = options.customParams, customParams = _options$customParams === void 0 ? {} : _options$customParams;
          autoScrollRef = {
            current: scrollToTop
          }; // check and see if 404 page is in list of app routes
          // if there are no 404 page in routes array add After.js default 404 page
          routes = getAllRoutes(pureRoutes);
          ctx = {
            req: req,
            res: res,
            scrollToTop: autoScrollRef,
            customParams: customParams
          };
          fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
          pathname = new URL(fullUrl).pathname; //const pathname: string = url.parse(req.url).pathname as string;
          // finds related component for the current path (request url)
          // and calls component.getInitialProps({ match,...ctx })
          _context2.next = 8;
          return loadInitialProps(pathname, routes, ctx);
        case 8:
          _yield$loadInitialPro = _context2.sent;
          match = _yield$loadInitialPro.match;
          initialData = _yield$loadInitialPro.data;
          // AfterRouterContextProvider context object contains information about statusCode and target <Navigate /> component target url (if any)
          context = {}; // here we will check result of the getInitialProps
          // and see if it contains redirectTo or statusCode properties
          // we will mutate context if we got redirectTo or statusCode in initialData
          if (!initialData) {
            _context2.next = 17;
            break;
          }
          redirectTo = initialData.redirectTo, statusCode = initialData.statusCode;
          if (statusCode) {
            context.statusCode = statusCode;
          }
          // if we got redirectTo from getInitalProps
          // we don't waste server resources by rendering the react tree
          // so we return early
          if (!redirectTo) {
            _context2.next = 17;
            break;
          }
          return _context2.abrupt("return", {
            html: '',
            data: initialData,
            redirect: redirectTo,
            statusCode: statusCode || 302
          });
        case 17:
          // this object containes data that <After /> will use on client-side
          afterData = {
            scrollToTop: autoScrollRef
          }; // well, we will save a few bits in this way
          if (ssg) {
            afterData.ssg = true;
          }
          // result of getInitialProps + <After /> props
          data = {
            initialData: initialData,
            afterData: afterData
          };
          renderPage = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(fn) {
              var defaultRenderer, renderer, asyncOrSyncRender, renderedContent, helmet;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (fn === void 0) {
                      fn = modPageFn;
                    }
                    // By default, we keep ReactDOMServer synchronous renderToString function
                    defaultRenderer = function defaultRenderer(element) {
                      return {
                        html: ReactDOMServer.renderToString(element)
                      };
                    };
                    renderer = customRenderer || defaultRenderer;
                    asyncOrSyncRender = renderer(React$1.createElement(__AfterRouterContext.Provider, {
                      value: context
                    }, React$1.createElement(server.StaticRouter, {
                      location: req.url
                    }, fn(After)({
                      routes: routes,
                      data: data,
                      transitionBehavior: 'blocking',
                      customParams: customParams
                    }))));
                    _context.next = 6;
                    return asyncOrSyncRender;
                  case 6:
                    renderedContent = _context.sent;
                    helmet = reactHelmet.Helmet.renderStatic();
                    return _context.abrupt("return", _extends({
                      helmet: helmet
                    }, renderedContent));
                  case 9:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function renderPage(_x2) {
              return _ref.apply(this, arguments);
            };
          }();
          Doc = Document$1 || Document; // get css and javascript file paths for the async componetns
          _getAssets = getAssets({
            route: match,
            chunks: chunks
          }), scripts = _getAssets.scripts, styles = _getAssets.styles; //const reactRouterMatch = matchPath(req.url, match as RouteProps);
          reactRouterMatch = reactRouterDom.matchPath({
            path: match ? match.path || "*" : "*",
            caseSensitive: match ? match.caseSensitive : false,
            end: true
          }, pathname); // Docuement.getInitialProps() will call renderPage()
          // and renderPage() will call ReactDOMServer.renderToString
          // so we get our React Tree html from this function
          _context2.next = 26;
          return Doc.getInitialProps({
            req: req,
            res: res,
            assets: assets,
            renderPage: renderPage,
            data: data,
            helmet: reactHelmet.Helmet.renderStatic(),
            match: reactRouterMatch,
            scripts: scripts,
            styles: styles,
            scrollToTop: autoScrollRef,
            customParams: customParams
          });
        case 26:
          _yield$Doc$getInitial = _context2.sent;
          html = _yield$Doc$getInitial.html;
          docProps = _objectWithoutPropertiesLoose(_yield$Doc$getInitial, _excluded$1);
          if (!context.url) {
            _context2.next = 31;
            break;
          }
          return _context2.abrupt("return", {
            html: '',
            data: initialData,
            redirect: context.url,
            statusCode: context.statusCode || 302
          });
        case 31:
          props = _extends({
            assets: assets,
            data: data,
            scripts: scripts,
            styles: styles,
            match: reactRouterMatch,
            customParams: customParams
          }, docProps, {
            html: html
          }); // we render <Document /> which is our app shell
          doc = ReactDOMServer.renderToStaticMarkup(React$1.createElement(__AfterContext.Provider, {
            value: props
          }, React$1.createElement(Doc, Object.assign({}, props))));
          page = "<!doctype html>" + doc;
          return _context2.abrupt("return", {
            html: page,
            data: initialData,
            redirect: '',
            statusCode: context.statusCode || 200
          });
        case 35:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _renderApp.apply(this, arguments);
}

var render = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
    var res, _yield$renderApp, redirect, statusCode, html;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res = params.res;
          _context.next = 3;
          return renderApp(_extends({}, params, {
            ssg: false
          }));
        case 3:
          _yield$renderApp = _context.sent;
          redirect = _yield$renderApp.redirect;
          statusCode = _yield$renderApp.statusCode;
          html = _yield$renderApp.html;
          if (redirect) {
            res.redirect(statusCode, redirect);
          }
          res.status(statusCode);
          return _context.abrupt("return", html);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function render(_x) {
    return _ref.apply(this, arguments);
  };
}();

var renderStatic = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
    var _yield$renderApp, redirect, html, data, url;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return renderApp(_extends({}, params, {
            ssg: true
          }));
        case 2:
          _yield$renderApp = _context.sent;
          redirect = _yield$renderApp.redirect;
          html = _yield$renderApp.html;
          data = _yield$renderApp.data;
          if (!redirect) {
            _context.next = 9;
            break;
          }
          url = params.req.url;
          throw new Error("You are not allowed to use redirect in ssg mode, URL: " + url);
        case 9:
          return _context.abrupt("return", {
            html: html,
            data: data
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderStatic(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.After = After;
exports.AfterData = AfterData;
exports.AfterRoot = AfterRoot;
exports.AfterScripts = AfterScripts;
exports.AfterStyles = AfterStyles;
exports.Document = Document;
exports.SerializeData = SerializeData;
exports.__AfterContext = __AfterContext;
exports.__AfterRouterContext = __AfterRouterContext;
exports.asyncComponent = asyncComponent;
exports.ensureReady = ensureReady;
exports.errorMeesage = errorMeesage;
exports.getAssets = getAssets;
exports.getSerializedData = getSerializedData;
exports.loadInitialProps = loadInitialProps;
exports.render = render;
exports.renderApp = renderApp;
exports.renderStatic = renderStatic;
exports.useAfterContext = useAfterContext;
exports.useAfterRouterContext = useAfterRouterContext;
//# sourceMappingURL=after.cjs.development.js.map
