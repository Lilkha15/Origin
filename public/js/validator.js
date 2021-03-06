/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/validator.js":
/*!***********************************!*\
  !*** ./resources/js/validator.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// get base url\nvar getUrl = window.location,\n    baseUrl = getUrl.protocol + \"//\" + getUrl.host + \"/\" + getUrl.pathname.split('/')[1];\nconsole.log(\"this is a \" + baseUrl + \"verify_email\");\n$(function () {\n  // Validate for Registration form.\n  var register = document.getElementById('registration_form'),\n      login = document.getElementById('login_form'),\n      condition = document.getElementById(\"condition_form\");\n  $(register).validate({\n    rules: {\n      registration_code: \"required\",\n      student_code: \"required\",\n      student_email: \"required\"\n    }\n  });\n  $(login).validate({\n    rules: {\n      email: \"required\",\n      password: \"required\"\n    }\n  });\n  $(function () {\n    $.validator.setDefaults({\n      highlight: function highlight(element) {\n        $(element).closest('.form-group').addClass('has-error');\n      },\n      unhighlight: function unhighlight(element) {\n        $(element).closest('.form-group').removeClass('has-error');\n      }\n    });\n  });\n  $.validator.addMethod(\"studentCode\", function (student_code, element) {\n    student_code = student_code.replace(/\\s+/g, \"\");\n    return this.optional(element) || student_code.length > 9 && student_code.match(/^([4-6]{1}[0-9]{1}[0-9]{2}[0-9]{1}[0-9]{4}[0-9]{1})$/);\n  }, \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\");\n  $(condition).validate({\n    rules: {\n      student_code: {\n        required: true,\n        number: true,\n        minlength: 10,\n        maxlength: 10,\n        studentCode: true\n      },\n      student_email: {\n        required: true,\n        email: true\n      }\n    },\n    messages: {\n      student_code: {\n        required: \"กรุณาระบบรหัสนักศึกษา\",\n        number: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n        minlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\",\n        maxlength: \"รูปแบบรหัสนักศึกษาไม่ถูกต้อง\"\n      },\n      student_email: {\n        required: \"กรุณาระบุที่อยู่อีเมล์\",\n        email: \"รูปแบบอีเมล์ไม่ถูกต้อง\"\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmFsaWRhdG9yLmpzPzUwNTMiXSwibmFtZXMiOlsiZ2V0VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCIkIiwicmVnaXN0ZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9naW4iLCJjb25kaXRpb24iLCJ2YWxpZGF0ZSIsInJ1bGVzIiwicmVnaXN0cmF0aW9uX2NvZGUiLCJzdHVkZW50X2NvZGUiLCJzdHVkZW50X2VtYWlsIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbGlkYXRvciIsInNldERlZmF1bHRzIiwiaGlnaGxpZ2h0IiwiZWxlbWVudCIsImNsb3Nlc3QiLCJhZGRDbGFzcyIsInVuaGlnaGxpZ2h0IiwicmVtb3ZlQ2xhc3MiLCJhZGRNZXRob2QiLCJyZXBsYWNlIiwib3B0aW9uYWwiLCJsZW5ndGgiLCJtYXRjaCIsInJlcXVpcmVkIiwibnVtYmVyIiwibWlubGVuZ3RoIiwibWF4bGVuZ3RoIiwic3R1ZGVudENvZGUiLCJtZXNzYWdlcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBcEI7QUFBQSxJQUNJQyxPQUFPLEdBQUdILE1BQU0sQ0FBQ0ksUUFBUCxHQUFrQixJQUFsQixHQUF5QkosTUFBTSxDQUFDSyxJQUFoQyxHQUF1QyxHQUF2QyxHQUE2Q0wsTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixDQUQzRDtBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFhTixPQUFiLEdBQXVCLGNBQW5DO0FBRUFPLENBQUMsQ0FBQyxZQUFVO0FBQ1I7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBZjtBQUFBLE1BQ0ZDLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBRE47QUFBQSxNQUVJRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FGaEI7QUFJQUgsR0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUssUUFBWixDQUFxQjtBQUNqQkMsU0FBSyxFQUFFO0FBQ0hDLHVCQUFpQixFQUFFLFVBRGhCO0FBRUhDLGtCQUFZLEVBQUUsVUFGWDtBQUdIQyxtQkFBYSxFQUFFO0FBSFo7QUFEVSxHQUFyQjtBQVNIVixHQUFDLENBQUNJLEtBQUQsQ0FBRCxDQUFTRSxRQUFULENBQWtCO0FBQ2pCQyxTQUFLLEVBQUU7QUFDTkksV0FBSyxFQUFFLFVBREQ7QUFFTkMsY0FBUSxFQUFFO0FBRko7QUFEVSxHQUFsQjtBQU9HWixHQUFDLENBQUMsWUFBVTtBQUNSQSxLQUFDLENBQUNhLFNBQUYsQ0FBWUMsV0FBWixDQUF3QjtBQUVwQkMsZUFBUyxFQUFFLG1CQUFTQyxPQUFULEVBQWtCO0FBQ3pCaEIsU0FBQyxDQUFDZ0IsT0FBRCxDQUFELENBQ0tDLE9BREwsQ0FDYSxhQURiLEVBRUtDLFFBRkwsQ0FFYyxXQUZkO0FBR0gsT0FObUI7QUFPcEJDLGlCQUFXLEVBQUUscUJBQVNILE9BQVQsRUFBa0I7QUFDM0JoQixTQUFDLENBQUNnQixPQUFELENBQUQsQ0FDS0MsT0FETCxDQUNhLGFBRGIsRUFFS0csV0FGTCxDQUVpQixXQUZqQjtBQUdIO0FBWG1CLEtBQXhCO0FBYUgsR0FkQSxDQUFEO0FBaUJBcEIsR0FBQyxDQUFDYSxTQUFGLENBQVlRLFNBQVosQ0FBc0IsYUFBdEIsRUFBcUMsVUFBU1osWUFBVCxFQUF1Qk8sT0FBdkIsRUFBK0I7QUFDaEVQLGdCQUFZLEdBQUdBLFlBQVksQ0FBQ2EsT0FBYixDQUFxQixNQUFyQixFQUE2QixFQUE3QixDQUFmO0FBQ0EsV0FBTyxLQUFLQyxRQUFMLENBQWNQLE9BQWQsS0FBMEJQLFlBQVksQ0FBQ2UsTUFBYixHQUFzQixDQUF0QixJQUEyQmYsWUFBWSxDQUFDZ0IsS0FBYixDQUFtQixzREFBbkIsQ0FBNUQ7QUFDSCxHQUhELEVBR0csOEJBSEg7QUFLQXpCLEdBQUMsQ0FBQ0ssU0FBRCxDQUFELENBQWFDLFFBQWIsQ0FBc0I7QUFDbEJDLFNBQUssRUFBRTtBQUNIRSxrQkFBWSxFQUFFO0FBQ1ZpQixnQkFBUSxFQUFFLElBREE7QUFFVkMsY0FBTSxFQUFFLElBRkU7QUFHVkMsaUJBQVMsRUFBRSxFQUhEO0FBSVZDLGlCQUFTLEVBQUUsRUFKRDtBQUtWQyxtQkFBVyxFQUFFO0FBTEgsT0FEWDtBQVFIcEIsbUJBQWEsRUFBRTtBQUNYZ0IsZ0JBQVEsRUFBRSxJQURDO0FBRVhmLGFBQUssRUFBRTtBQUZJO0FBUlosS0FEVztBQWNsQm9CLFlBQVEsRUFBRTtBQUNOdEIsa0JBQVksRUFBRTtBQUNWaUIsZ0JBQVEsRUFBRSx1QkFEQTtBQUVWQyxjQUFNLEVBQUUsOEJBRkU7QUFHVkMsaUJBQVMsRUFBRSw4QkFIRDtBQUlWQyxpQkFBUyxFQUFFO0FBSkQsT0FEUjtBQU9ObkIsbUJBQWEsRUFBRTtBQUNYZ0IsZ0JBQVEsRUFBRSx3QkFEQztBQUVYZixhQUFLLEVBQUU7QUFGSTtBQVBUO0FBZFEsR0FBdEI7QUEyQkgsQ0F2RUEsQ0FBRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy92YWxpZGF0b3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZXQgYmFzZSB1cmxcbmxldCBnZXRVcmwgPSB3aW5kb3cubG9jYXRpb24sXG4gICAgYmFzZVVybCA9IGdldFVybC5wcm90b2NvbCArIFwiLy9cIiArIGdldFVybC5ob3N0ICsgXCIvXCIgKyBnZXRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcbmNvbnNvbGUubG9nKFwidGhpcyBpcyBhIFwiK2Jhc2VVcmwgKyBcInZlcmlmeV9lbWFpbFwiKTtcblxuJChmdW5jdGlvbigpe1xuICAgIC8vIFZhbGlkYXRlIGZvciBSZWdpc3RyYXRpb24gZm9ybS5cbiAgICBsZXQgcmVnaXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0cmF0aW9uX2Zvcm0nKSxcblx0XHRsb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbl9mb3JtJyksXG4gICAgICAgIGNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9uX2Zvcm1cIik7XG5cbiAgICAkKHJlZ2lzdGVyKS52YWxpZGF0ZSh7XG4gICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgICByZWdpc3RyYXRpb25fY29kZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgc3R1ZGVudF9jb2RlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICBzdHVkZW50X2VtYWlsOiBcInJlcXVpcmVkXCIsXG4gICAgICAgIH1cbiAgICB9KTtcblx0XG5cdFxuXHQkKGxvZ2luKS52YWxpZGF0ZSh7XG5cdFx0cnVsZXM6IHtcblx0XHRcdGVtYWlsOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRwYXNzd29yZDogXCJyZXF1aXJlZFwiLFxuXHRcdH0sXG5cdH0pO1xuXG4gICAgJChmdW5jdGlvbigpe1xuICAgICAgICAkLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7XG5cbiAgICAgICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdoYXMtZXJyb3InKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJzdHVkZW50Q29kZVwiLCBmdW5jdGlvbihzdHVkZW50X2NvZGUsIGVsZW1lbnQpe1xuICAgICAgICBzdHVkZW50X2NvZGUgPSBzdHVkZW50X2NvZGUucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgc3R1ZGVudF9jb2RlLmxlbmd0aCA+IDkgJiYgc3R1ZGVudF9jb2RlLm1hdGNoKC9eKFs0LTZdezF9WzAtOV17MX1bMC05XXsyfVswLTldezF9WzAtOV17NH1bMC05XXsxfSkkLyk7XG4gICAgfSwgXCLguKPguLnguJvguYHguJrguJrguKPguKvguLHguKrguJnguLHguIHguKjguLbguIHguKnguLLguYTguKHguYjguJbguLnguIHguJXguYnguK3guIdcIik7XG5cbiAgICAkKGNvbmRpdGlvbikudmFsaWRhdGUoe1xuICAgICAgICBydWxlczoge1xuICAgICAgICAgICAgc3R1ZGVudF9jb2RlOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogMTAsXG4gICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAxMCxcbiAgICAgICAgICAgICAgICBzdHVkZW50Q29kZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHVkZW50X2VtYWlsOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICBzdHVkZW50X2NvZGU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCLguIHguKPguLjguJPguLLguKPguLDguJrguJrguKPguKvguLHguKrguJnguLHguIHguKjguLbguIHguKnguLJcIixcbiAgICAgICAgICAgICAgICBudW1iZXI6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCIsXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiBcIuC4o+C4ueC4m+C5geC4muC4muC4o+C4q+C4seC4quC4meC4seC4geC4qOC4tuC4geC4qeC4suC5hOC4oeC5iOC4luC4ueC4geC4leC5ieC4reC4h1wiLFxuICAgICAgICAgICAgICAgIG1heGxlbmd0aDogXCLguKPguLnguJvguYHguJrguJrguKPguKvguLHguKrguJnguLHguIHguKjguLbguIHguKnguLLguYTguKHguYjguJbguLnguIHguJXguYnguK3guIdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHVkZW50X2VtYWlsOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwi4LiB4Lij4Li44LiT4Liy4Lij4Liw4Lia4Li44LiX4Li14LmI4Lit4Lii4Li54LmI4Lit4Li14LmA4Lih4Lil4LmMXCIsXG4gICAgICAgICAgICAgICAgZW1haWw6IFwi4Lij4Li54Lib4LmB4Lia4Lia4Lit4Li14LmA4Lih4Lil4LmM4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/validator.js\n");

/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./resources/js/validator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Studio3/Desktop/Origin/resources/js/validator.js */"./resources/js/validator.js");


/***/ })

/******/ });