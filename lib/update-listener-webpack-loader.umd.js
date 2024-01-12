(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["update-listener-webpack-loader"] = factory(require("vue"));
	else
		root["update-listener-webpack-loader"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
;// CONCATENATED MODULE: ./packages/updateListener/utils/modalPromise.js
/*
 * @Description:
 * @Author: 舌红
 * @Date: 2024-01-10 12:00:21
 * @LastEditors: 舌红
 * @LastEditTime: 2024-01-10 14:46:52
 */
/**
 * modal调用promise化
 * @param {Object} comp Vue组件配置对象
 * @param {Object} defaultConfig 默认配置对象
 * @param {Element} mountedEl 挂载对象
 * @returns {Promise} Promise对象
 */


function modalPromise(comp, defaultConfig, mountedEl) {
  return (config, removable = true) => {
    return new Promise((resolve, reject) => {
      const Ctor = external_commonjs_vue_commonjs2_vue_root_Vue_default().extend(comp);
      const props = Object.assign({}, defaultConfig, config);
      const vm = new Ctor({
        el: document.createElement('div'),
        propsData: props
      });
      vm.$on('cancel', function (data) {
        this.$destroy();
        const parent = this.$el.parentElement;
        parent && parent.removeChild(this.$el);
        reject(data);
      });
      vm.$on('confirm', function (data) {
        if (removable) {
          this.$destroy();
          const parent = this.$el.parentElement;
          parent && parent.removeChild(this.$el);
        }
        resolve(data, this);
      });
      if (!mountedEl) {
        mountedEl = document.body;
      }
      mountedEl.appendChild(vm.$el);
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/updateListener/components/confirm/index.vue?vue&type=template&id=95a33740&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "update-confirm"
  }, [_c('div', {
    staticClass: "update-confirm__wrapper"
  }, [_c('div', {
    staticClass: "update-confirm__header"
  }, [_c('div', {
    staticClass: "update-confirm__title"
  }, [_vm._v("提示")]), _c('div', {
    staticClass: "update-confirm__close",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(" × ")])]), _c('div', {
    staticClass: "update-confirm__content"
  }, [_c('div', {
    staticClass: "update-confirm__desc"
  }, [_vm._v(_vm._s(_vm.content))])]), _c('div', {
    staticClass: "update-confirm__btns"
  }, [_c('div', {
    staticClass: "update-confirm__btn update-confirm__btn--default",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("取消")]), _c('div', {
    staticClass: "update-confirm__btn update-confirm__btn--primary",
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("确定")])])])]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/updateListener/components/confirm/index.vue?vue&type=script&lang=js
/* harmony default export */ var confirmvue_type_script_lang_js = ({
  name: 'UpdateConfirm',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    confirm() {
      this.$emit('confirm');
    }
  }
});
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_confirmvue_type_script_lang_js = (confirmvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/updateListener/components/confirm/index.vue?vue&type=style&index=0&id=95a33740&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/index.vue?vue&type=style&index=0&id=95a33740&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/index.vue



;


/* normalize component */

var component = normalizeComponent(
  components_confirmvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "95a33740",
  null
  
)

/* harmony default export */ var components_confirm = (component.exports);
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/confirm.js
/*
 * @Description:
 * @Author: 舌红
 * @Date: 2024-01-10 11:59:14
 * @LastEditors: 舌红
 * @LastEditTime: 2024-01-10 14:50:12
 */


async function openConfirm(config, mountedEl) {
  return modalPromise(components_confirm, config, mountedEl)();
}
;// CONCATENATED MODULE: ./packages/updateListener/index.js
/*
 * @Description:
 * @Author: 舌红
 * @Date: 2024-01-09 17:38:09
 * @LastEditors: 舌红
 * @LastEditTime: 2024-01-12 11:44:54
 */



/**
 * 监听版本更新
 * @param {Object} Vue Vue对象
 * @param {Object} options 配置对象
 * @param {String} options.versionUrl 请求版本信息根目录路径，默认为'/dist'
 * @param {Number} options.interval 检查更新间隔时间，默认为5分钟，单位为毫秒
 * @param {Boolean} options.isTip 是否提示更新，默认为true
 * @param {Boolean} options.isListenJSError 是否监听JS报错，默认为false
 * @param {Object} options.modalProps 弹窗配置
 * @param {String} options.modalProps.content 弹窗内容
 * @param {Element} options.modalProps.mountedEl 弹窗挂载节点，默认为body
 * @returns {Void} 无返回值
 */

const ListenVersion = {
  install(Vue, options) {
    let currebtVersion;
    let setInterValId;

    // 获取版本信息
    const getVersion = async () => {
      return fetch(`${options.versionUrl || '/dist'}/version.json?timeStamp=` + Date.now()).then(res => {
        return res.json();
      }).catch(err => {
        console.log(err);
      });
    };

    // 检查是否有新版本
    const checkUpdate = async () => {
      const commitHash = (await getVersion()).commitHash;
      return commitHash !== currebtVersion;
    };

    // 停止检查更新
    const stopUpdate = () => {
      if (setInterValId) {
        console.log('停止检查更新');
        clearInterval(setInterValId);
        setInterValId = '';
      }
    };

    // 开始检查更新
    const startListen = async () => {
      if (options.isTip === false) return;
      const versionInfo = await getVersion();
      if (!versionInfo) return;
      currebtVersion = versionInfo.commitHash;

      // 判断versionInfo.message是否有--no-tip字符
      if (!versionInfo.isTip || "production" === 'development') {
        return;
      }
      console.log('开始检查更新');
      setInterValId = setInterval(async () => {
        const isUpdate = await checkUpdate();
        if (isUpdate) {
          console.log('有新版本');
          stopUpdate();
          await callConfirm();
        }
      }, options.interval || 5 * 60 * 1000);
    };
    const callConfirm = async () => {
      try {
        const hasContent = options.modalProps && options.modalProps.content;
        await openConfirm({
          content: hasContent ? options.modalProps.content : '发现新版本，是否立即更新？'
        }, options.modalProps && options.modalProps.mountedEl);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    const listenPageVisible = () => {
      if (document.hidden) {
        stopUpdate();
      } else {
        startListen();
      }
    };
    document.addEventListener('visibilitychange', listenPageVisible);
    const listenJSError = async event => {
      if (event.target.nodeName === 'SCRIPT') {
        stopUpdate();
        await callConfirm();
      }
    };
    if (options.isListenJSError) {
      window.addEventListener('error', listenJSError);
    } else {
      window.removeEventListener('error', listenJSError);
    }
    startListen();
  }
};
/* harmony default export */ var updateListener = (ListenVersion);
;// CONCATENATED MODULE: ./packages/index.js
/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-10 16:16:52
 * @LastEditors: 舌红
 * @LastEditTime: 2024-01-11 16:48:49
 */


/**
 * 监听版本更新
 * @param {Object} Vue Vue对象
 * @param {Object} options 配置对象
 * @param {String} options.versionUrl 请求版本信息根目录路径，默认为'/dist'
 * @param {Number} options.interval 检查更新间隔时间，默认为5分钟，单位为毫秒
 * @param {Boolean} options.isTip 是否提示更新，默认为true
 * @param {Boolean} options.isListenJSError 是否监听JS报错，默认为false
 * @returns {Void} 无返回值
 */

/* harmony default export */ var packages_0 = (updateListener);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=update-listener-webpack-loader.umd.js.map