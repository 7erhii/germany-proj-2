/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/main.js":
/*!**************************!*\
  !*** ./src/core/main.js ***!
  \**************************/
/***/ (() => {

$(document).ready(function () {
  // Загружаем немецкую локализацию
  $.datepicker.setDefaults($.datepicker.regional["de"]); // Инициализируем DatePicker с настройками

  $("#datepicker").datepicker({
    dateFormat: "dd/mm/yy",
    changeMonth: true,
    changeYear: true,
    yearRange: "-100:+0" // для установки диапазона лет

  });
  const input = document.querySelector(".custom-input");
  const genderMenu = document.querySelector(".gender-menu");
  input.addEventListener("click", function () {
    genderMenu.classList.toggle("visible");
  });
  document.querySelectorAll(".gender-option").forEach(function (button) {
    button.addEventListener("click", function () {
      input.value = button.getAttribute("data-gender");
      genderMenu.classList.remove("visible");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function updateNumbers() {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    document.querySelector(".number1").textContent = number1;
    document.querySelector(".number2").textContent = number2;
    return number1 + number2;
  }

  let correctSum = updateNumbers();
  document.querySelector('.submit-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const userSum = parseInt(document.querySelector('input[name="number"]').value, 10);
    console.log(userSum === correctSum ? true : false);
    correctSum = updateNumbers();
  });
});

/***/ }),

/***/ "./src/core/resizer.js":
/*!*****************************!*\
  !*** ./src/core/resizer.js ***!
  \*****************************/
/***/ (() => {

var defaultWidth = 1440,
    defaultFont = 16,
    mobileFont = 16,
    minWidth = 768,
    minHeight = 600,
    defaultHeight = 900;

function fSize(device, vW, vH) {
  if (vW <= 374) {
    return 13;
  }

  return device ? mobileFont : defaultFont * Math.min(Math.max(minWidth, vW) / defaultWidth, Math.max(minHeight, vH) / defaultHeight);
}

function modifierDevice() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var isMobile = windowWidth <= 767;

  if (document.body) {
    document.body.style.fontSize = fSize(isMobile, windowWidth, windowHeight) + "px";
  }

  if (isMobile) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}

window.onload = function () {
  modifierDevice();
};

window.onresize = function () {
  modifierDevice();
};

modifierDevice();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/index.pug":
/*!*****************************!*\
  !*** ./src/views/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["image"] = pug_interp = function(file){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${file}`), true, true)+" alt=\"\"") + "\u003E";
};




pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cmain class=\"mainpage\"\u003E\u003Cdiv class=\"mainpage__wrapper\"\u003E\u003Cheader class=\"header\"\u003E\u003Cdiv class=\"header__menu\"\u003E\u003Cul class=\"header__list\"\u003E\u003Cli class=\"header__item\"\u003E\u003Ca href=\"#\"\u003E\u003Cspan\u003EHome\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Ca href=\"#\"\u003E\u003Cspan\u003EAngebot\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Ca href=\"#\"\u003E\u003Cspan\u003EKurs\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Ca href=\"#\"\u003E\u003Cspan\u003EKontakt\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003Csection class=\"content\"\u003E\u003Cdiv class=\"content__form\"\u003E\u003Cdiv class=\"content__title\"\u003E\u003Cspan\u003EMeine Matrix\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cinput class=\"custom-input\" type=\"text\" placeholder=\"Geburtsdatum\" id=\"datepicker\"\u003E\u003Cselect class=\"custom-gender\"\u003E\u003Coption value=\"male\"\u003EMännlich\u003C\u002Foption\u003E\u003Coption value=\"female\"\u003EWeiblich\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003Cdiv class=\"content__form-btn\"\u003E\u003Cdiv class=\"custom-btn custom-btn--lagre\"\u003E\u003Cspan\u003EBerechnen\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content__form-switcher\"\u003E\u003Csvg version=\"1.2\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"257 612 68 67\" width=\"68\" height=\"68\"\u003E\n\t\u003Ctitle\u003ELayer 110\u003C\u002Ftitle\u003E\n\t\u003Cdefs\u003E\n\t\t\u003Cimage  width=\"68\" height=\"67\" id=\"img1\" href=\"data:image\u002Fpng;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABDCAMAAAASyFM4AAAAAXNSR0IB2cksfwAAAuJQTFRF4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFl4dFlpQEtsQAAAPZ0Uk5TAANgKRm\u002FJVnWF5DfHgEFp\u002FEwAgtIL3ckX67\u002FbhhNBBOseSzlJjqck5F8ELnHCAzNtwY04SFx\u002FTfpPqFCfooghC77iWjyzwnmlgqvOBXqzH\u002F0NrKNtUf6yhIO4N4cgfw\u002FI7ZlG61b+D0PlNAWdrhQ1e85tMKDXExOMlX3xju+wCpJHx3wUtrtJ5nJiFHOVENLo+6kokVB85u97MtYhusUmvmYvIKL9W0rLVrFV2nn4mZ6uvbd3IyFgAewNUBwDY94fWo8RqgzIntKRF3ZYZ5WdY7+Y6Cl6KZnZBGql6tiqZ3BU2zDctPUdLuV5E+fyF6zsSga29ExWLsnuwAABnJJREFUeJylmGlcU0cQwCeIeAFCBMEBEjlERUAiGCwKghyKgBaPyF2RQ7xSIiiKnCKgKCAgiGgVxFupFk9ErbV44I0WUWrr0WrVYg\u002Fbfu\u002FuSwga8vLiz\u002FnwZvbt7j+7O7O78wLAITydPlxNuEW3r96nQ\u002Fr1H\u002FDpkIGD9D++E4+nMAwMGTXYyFjxgi9XQ0yGcEJMhyoMM3NGDUMLRltaCRgtHG7NPRIbWzu5McKeUSOxLzO2UaOZosMYRyduiPNYFxFjjHN1o2o8it3puCZ8Rks8D5zIzQCYhJ6M9sLJVHn74BSifP3G0ZIJ+gdoA7GbitMC6Y9OFwcRFRyCM8gEZn4eSitn4WxtGAAWiHPoTOZK5oUBhEdgZBRAdMwX5NV8WzTXDmLgidif+JUfiwsA4vyQRko8mpCqBExcyNU9OIlR\u002FEWIi5cALMVlApAifhkOxsk+MlKxHKfa0BYBcx1YIcbTwhkdkIKYCrDCyFMAXivTVgGsTl9DfkAnBlOo6zIyrQPZJ+KRlc0YORIMyYUkXWoLmCBb6wUgzUMm8tb5aFzd4PwCz0Kik\u002FxxIAlu3XVT1sdu2BC7vmgj5Vn7oCN5a5O8qWccBkpL2L1fwC4FjSaTJsUl4FS6uUCMChGXlZcGwsIKUwCnTOynaD1\u002FS2WuElJp79VtBiytwq10h+VUo4pUz6UNLMuZuCGSFr+tZnvPZjTc8dVou+5IlGKBGezcVavKQEysE4LDbsyrZGZeLsb68A9WdA\u002Furd66r99+Wpi0HQ7U9EZQmWcDB3fn0Ea5hzD9sOqSHplKGzUMk9GC+9fqGYiuocCMOMgf8Whvx8Qd+6aBtGocD5B9nI2BeILEgIPspBHiKbX+5WcvyEdcDsGL2RkklIPhdCPRu86ohdDhNFV5Q50mBmIdnI3BslQDNgZAWDOUJGqGpFfCuTqZmr4O55VmQKZmBqKL\u002FAQHvRXHxk8U9EAq51z49uLsulQTAeRwMdCnhC6g8SgjcdN3l3g9ENH3u+XBVQIVnBD0gOyWGVWYFdprRvqXLxdvjvRKauCGNCRdIRFzlc09uXBNTbirSq0JHExwY\u002FcOOc20kKVsvZ1ar+usXgLR2kBOK716RV+kJIQHFd0g4SG+Cbe0gdwCE\u002FvrxYfrU2wbY0Jizb3g9sw7Q+86tslrfaFJG8h0OKKwbpRPO3n3HvSJ9k9HNMq\u002Fv2PoHhcp\u002FKAN5D7cJM+29gcrl9B5MLESZSzTc1ZM7JQ2kHqw7EgdfdiSbX2ttYFoSi7CWkPJdcDNkKTBeTbGw03YGCecwA1pf6TreLIyTijohSjsJGs9zxiGc0OGkwyD7MP0Bnub9wlRt39Mxscm9CreyMkQW0HST\u002FY\u002FVzx5Ur7M6j3ItfUPUs\u002FKE7ukGVyQpz33n26umgNOb\u002FJ1eCbRzJBsBFNN2dJzV\u002FTL5rVohrTwzdq3OrMhBJ60TT3on9DEyF\u002FLm4X4y3Zd9ZBfSSR7SElWdEmDmydkgOEearywT1ATLFIfHJQmN3PK2BhlObR+9Zo8WnhppcooKcCXTIaTEb8FmiPVMyKboZXenqIRFiMfRyD+9gHC0CIGXzH5RWgIZjqA3XR1jHg7MGuvVWTDvAGy13nnehA8aWZtli\u002FjfsFTHONNjaP+qgj\u002Fh+R12DB8c1DZMSi+VWmLzB\u002FuV7j+d9xAktcrRXoQ7JvS2ENozOoQQmEGORG72rBTeQiEZ6vxkChl71nyHIMN9GdNO7oy344d+zazq4OMzulq8hqaGDW3iGtYdzGVSXiPPM1JXP5BvhXI6AQip4BAsl1FAjCrwkbmKwGaXwxkR5w5svgZXWWSrpE0JfDPkFKSex6wCwe+dYQU+K8Rm+TXZlyFumnI5VEpc2b2eYN9yaXtLvFzhyGHavNWgqgaiR\u002FcBiHKv3ogmPVo7JZL6XgT6GfJX+R2dcVENxrNnWS\u002FNtti2x2u3gpZge1\u002FEzVRHE0gkRhBcsR3\u002F1SNIK+8axATtIMU4TKq3PdeJIv7LzYISeEayQWI7IzH41HaMM44YjHV44yek+cilNBhwWtJHFUB91VinUVkOIvJhTK20SO0BLGDlrLbVzG1zjWvROx9u4XvUvOOMay76NPwLV5gipsVeZrsn1z1Hd+Xc9XyRgalcm2NnYzet19ez5tZyMkQlar8N5AhGczo893XjKj3fcMpNmWjPr6Tqui90fl0yH\u002F9tQoMzRJ6h8\u002FV5H8yfAM+pyh2WgAAAABJRU5ErkJggg==\"\u002F\u003E\n\t\u003C\u002Fdefs\u003E\n\t\u003Cstyle\u003E\n\t\u003C\u002Fstyle\u003E\n\t\u003Cuse id=\"Layer 110\" href=\"#img1\" x=\"257\" y=\"612\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003Cspan\u003EJahresenergietabelle\u003C\u002Fspan\u003E\u003Cinput class=\"switcher\" type=\"checkbox\" id=\"switch\"\u003E\u003Clabel for=\"switch\"\u003EToggle\u003C\u002Flabel\u003E\u003Cspan\u003EJahresenergien  \u003Cbr\u003Eanzeigen\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content__card\"\u003E\u003Cdiv class=\"content__card-title\"\u003E\u003Cdiv class=\"content__card-title-image\"\u003E";
pug_mixins["image"]('chakra-name.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"content__card-item-text\"\u003E\u003Cdiv class=\"content__card-item-text-title\"\u003E\u003Cspan\u003EGesundheitskarte\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content__card-title-points\"\u003E\u003Cspan class=\"word\"\u003EPhysik\u003C\u002Fspan\u003E\u003Cspan class=\"word\"\u003EEnergie\u003C\u002Fspan\u003E\u003Cspan class=\"word\"\u003EBalance\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content__card-item\"\u003E\u003Cdiv class=\"content__card-item-img\"\u003E\u003Csvg width=\"41\" height=\"49\" viewBox=\"0 0 41 49\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n\u003Crect width=\"40.8333\" height=\"49\" fill=\"url(#pattern0)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003Cpattern id=\"pattern0\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"\u003E\n\u003Cuse xlink:href=\"#image0_58_18\" transform=\"scale(0.025 0.0208333)\"\u002F\u003E\n\u003C\u002Fpattern\u003E\n\u003Cimage id=\"image0_58_18\" width=\"40\" height=\"48\" xlink:href=\"data:image\u002Fpng;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAYAAABjezibAAAABmJLR0QA\u002FwD\u002FAP+gvaeTAAAHEElEQVRYhcWZfazXVR3HX+dyuXAFAi6XBAICJBTI8mEMhGACPrQGbZja8qFmRT6GWU6XZll5ywlOtliSFg4WPuB6JLUZ6noASrGLMG2akC4e5AKpYWgUvPrjfH7sy9fvDeRe4Wy\u002F7fv5nHM+530+n\u002FN5OOcHndjUy9XRnSmz05p6tdqmvqyOOdp49je1r\u002FqA2qoOVy8MoBcdbWyoE9SX1Plq9wL\u002FQ+qz6mK18WiBm6ZuU2e009+o\u002Flj9vXrMkQbXpL6iTj7IuBRavPtIgLpCnRKL3qjeWTFmhFpf4vUKTQ9RP6je8G4B3Kb+LX6tce7GFPqb1A3q3AJvpDpb\u002FWP0bVHfUvsf6rr1Bx+SFwL2AiOAMcA4YDywXP0PcBtwNfArYGacuZHAWOBx4B7gSeAZ4FFgArD8UEEeCsBvqAva6btM3a1eF3R\u002F9c\u002FqSrVHxfgr1PsPde1UIWAocBZwKlkDu8kam5pSWlcaezrwAPD5lNLyAr8RWAL0AWamlN4q9PUGXgbuBU4IDBuB3wIPp5R2HABQHQxcDHwAOAUYBDxCNsl64CTg2pTS0BK495JNdkFK6YmKjXYB7gO2p5SuLPWtBrYCC4B9wGhgOnAG8CzwO2AzsAR1jPpGmGpCCC4Ku1a9owLAd9X5RUDqILVvUVvhXMNLc2eriypkdlOnqzere9XGFOb4R0qpMuKrtwLvAbaTTbIHaAW+ALSQtT4DGArsABrj9xTwC\u002FIx2Ux2slEhdg8wNKU0rZ01hwCrUkpD6oH\u002FAl0KnXXAsBB2JnAhsAtYBvwMaAA+CgwPgAuBWcBzKaV9IeMYYApwbvz2AXeRPbcL2ZQnquuAn5DP3wsppS0Bo0vgArWH+kYRYOTXVvUmdWxpd1PVrer1arcqDZTGj1AfVleoTQV+UiepcyO2Fp3sfeqmGtGk7iwJvUVtqVhsUpypqQcDVppXp96urqkqHmID5xbo\u002FmpbjThAg8Gbpa4o8Qaqm9Wz3wm4kozF6pIKfps6sEAPUjcXB2xXB8T3tDDh9pKQu8JhDrup3dWN6qQCr7+6R71X7Rm8yeqq4sSl6hz1THOVMlV9vRYy1GFh2j4dARiyLipaRz1dXaUuUh+LTXxP\u002FWZx0omhxTZ1YvD2nwv1K1ZUL4cJsKu6s2CxFvU7cU6XmuvHrWq\u002F4qTj4nzNKvDOU1dHAH7UdgrTwwS5zHw16BsWOz74DXEE7lNTbfBpMejSkpA69dfqQvWv6qiKtQ4X4C3qt8Okt5X6mtQ\u002FhTa71ZGLgq7k7LC\u002FRdD9JDAJGEzOJJ3V2oBPkxPAV0t9r5Fz\u002FElA\u002F7qU0gLgEuCXFVq6Fvg3sJOc7jqr9SHXiaeSs1CxzSVnsUkppU37uepV5qq3Oehx6t\u002FVZnNt95HOQqferV6qfjicsxYtZpuz2LHlCY3q03HmnlL7qUvUOdF\u002F6wFu33GAG9UT4vse9Rr14lDIEvXn+50kBl2nLovvb6mbIuQMC94E9S\u002FmQqKj4E5Tny\u002FQ55jvKhvMpV99KOkTxUnr1HEFepr6Wknw4+pnOgHgCvWzBXpYxMWeBd6n1J\u002FWiC7mVFMsuSarK0uCx0esHNIBcLPVZ0pr1am71F4F3nHqizWid4W2rrHikqR+2VyGNR8GuLMj3o6s6Ftpvt\u002FU6GZrtYDV1czqiOYTyufOnJo2qCcfIrA688vXFgtFQvQ1qGepf1AXFvgD1S01ot58ty3Sl5nrt3Wx66XmpN6sDlDvCLMsag9oRIZzwqSb1AvMlcsAdWbI3GHOvS3q+YW571dfgnyrqwfeTCl1bWeh75NvXQ3A8eRSfC0wEbiTHGgbyDfAbfE9mHxXWQO8AvQDepNvjnuDB\u002FCxQplfXHMY8ERKaXg90AzsVnullHZVYNwOtKWUbi4JWQn8JqV0vTkDjQKOJWeezcDalNKr6oPA\u002FSmlxYW55wHnV4ErtH5qQj1ZfT5M1mpO4uPVhhA2Q32sYpdXqg\u002F9nwVQR5szRe8Sf4GFK4W5BJuizlOfM1+DX7D4hhNnb6I5a7Sq\u002F1LXqy9GGOpbWqSrOfuUk32tv38s9rkSP4XDvGp+5Fyv\u002FtMcnL+unlJ2zPZ2381cyI4yl+NzKsYMNGeYBz0wto03p7ObKuZMV9eGB48xP8n1Ko97R82cWZ4s0F3NxcQN5lpxm7kC7xmmej001BLe31iYu1i9qkOAKgB2N79g3WiOkW+GeeaZr6L16g\u002FDTG2xobHmwnRVYXxLmLfz\u002FwUw59DF6hnm+PfFUn+d+kgxnhX6njaXV\u002FND4x0uOqoApsL35HCeHqUxDRXzPh7OUl+W86429Qehsbc9UhbGTInzOfGIgCotXjt363z7+01Sv2ROk9OPOLgSmEvCMS4Pukl9KJxj+MHmH5Fmfs1fq\u002F7InJXmWfo74qg38\u002F8ha9SvHW0s7TYLZXtntf8B7ADtPyBNQdMAAAAASUVORK5CYII=\"\u002F\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"content__card-item-text\"\u003E\u003Cdiv class=\"content__card-item-text-title\"\u003E\u003Cspan\u003ESahasrara\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content__card-item-text-subtitle\"\u003E\u003Cspan\u003EVerbindung zum Höheren. \u003Cbr\u003E woerer Tell des kootes.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content__actions\"\u003E\u003Cdiv class=\"custom-btn custom-btn--lagre\"\u003E\u003Cspan\u003EAnalyse der Matrix\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content__actions-icon\"\u003E\u003C!DOCTYPE svg PUBLIC \"-\u002F\u002FW3C\u002F\u002FDTD SVG 1.1\u002F\u002FEN\" \"http:\u002F\u002Fwww.w3.org\u002FGraphics\u002FSVG\u002F1.1\u002FDTD\u002Fsvg11.dtd\"\u003E\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" fill=\"#c19c15\"\u003E\n\u003Cg id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"\u002F\u003E\n\u003Cg id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003Cg id=\"SVGRepo_iconCarrier\"\u003E\n\u003Cpath d=\"M21.5 10H18V5.635L13.281 1H6v9H2.5A1.5 1.5 0 0 0 1 11.5v8A1.5 1.5 0 0 0 2.5 21H6v2h12v-2h3.5a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5zM17 6h-4V2zM7 2h5v5h5v3H7zm10 20H7v-5h10zm5-2.5a.5.5 0 0 1-.5.5H18v-2h1v-2H5v2h1v2H2.5a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5zm-7 .5v1H9v-1zm-6-1v-1h6v1zm10-7h1v1h-1z\"\u002F\u003E\n\u003Cpath fill=\"none\" d=\"M0 0h24v24H0z\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-btn custom-btn--lagre\"\u003E\u003Cspan\u003EDrucken\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content__calc\"\u003E\u003Cdiv class=\"header__logo\"\u003E\u003Cspan\u003EMatrix Energy system\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content__spirit\"\u003E";
pug_mixins["image"]('Human_Body.png');
pug_html = pug_html + "\u003Cdiv class=\"spirit-item center yellow\"\u003E\u003Cspan\u003E1\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item second up green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item second right green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item second left green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item third right green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item line first green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item line second green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item line third green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fourth right\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fourth left green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fourth up green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fourth down green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fourth ten green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fourth twenty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fourth thirty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fourth forty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fifth right green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fifth left green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fifth up green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fifth down green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fifth ten green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fifth twenty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fifth thirty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item fifth forty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item sixth right green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item sixth left green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item sixth up green\"\u003E\u003Cspan\u003E3\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item sixth down green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item sixth ten green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item sixth twenty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item sixth thirty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item sixth forty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item seventh five green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item seventh fifteen green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item seventh twenty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item seventh thirty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item seventh fortyfive green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item seventh fifty green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item eighth center green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item eighth left green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spirit-item eighth right green\"\u003E\u003Cspan\u003E2\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003Cfooter class=\"footer\"\u003E\u003Cdiv class=\"footer__title\"\u003E\u003Cspan\u003EFREUE MICH AUF DEINE ANFRAGE\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__content\"\u003E\u003Cdiv class=\"footer__about\"\u003E\u003Cdiv class=\"footer__img\"\u003E";
pug_mixins["image"]('photo contact.png');
pug_html = pug_html + "\u003Cdiv class=\"footer__img-mark\"\u003E";
pug_mixins["image"]('contact ausrufezeichen.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__name\"\u003E\u003Cspan\u003EEugen Stoll\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__address\"\u003E\u003Cspan\u003EAdresse:\u003C\u002Fspan\u003E\u003Cspan\u003EIn der Au 18 \u003Cbr\u003E 53547 Hausen (Wied)\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__form\"\u003E\u003Cform action=\"#\" method=\"post\"\u003E\u003Cdiv class=\"input-group\"\u003E\u003Cinput type=\"text\" name=\"name\" placeholder=\"Name\"\u003E\u003Cinput type=\"email\" name=\"email\" placeholder=\"E-mail address\"\u003E\u003Ctextarea name=\"message\" placeholder=\"Nachricht\"\u003E\u003C\u002Ftextarea\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003Cdiv class=\"footer__form-actions\"\u003E\u003Cdiv class=\"random-numbers\"\u003E\u003Cspan class=\"number1\"\u003E\u003C\u002Fspan\u003E\u003Cspan\u003E+\u003C\u002Fspan\u003E\u003Cspan class=\"number2\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cinput type=\"number\" name=\"number\" placeholder=\"Betrag\"\u003E\u003Cbutton class=\"custom-btn submit-btn\"\u003E\u003Cspan\u003ESenden\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__contacts\"\u003E\u003Cdiv class=\"footer__contacts-email\"\u003E\u003Cdiv class=\"footer__contacts-email-text\"\u003E";
pug_mixins["image"]('email icon.png');
pug_html = pug_html + "\u003Cspan\u003EE-mail Addresse:\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__contacts-email-link\"\u003E\u003Ca href=\"mailto:Anfragen@yourmatrixenergy.de\"\u003E Anfragen@yourmatrixenergy.de\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__contacts-text\"\u003E\u003Cspan\u003EIch bin in sozialen Netzwerken \u003Cbr\u003E unterwegs\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__contacts-social\"\u003E\u003Ca class=\"footer__contacts-icon\" href=\"\"\u003E";
pug_mixins["image"]('insta icon.png');
pug_html = pug_html + "\u003C\u002Fa\u003E\u003Ca class=\"footer__contacts-icon\" href=\"\"\u003E";
pug_mixins["image"]('telegram icon.png');
pug_html = pug_html + "\u003C\u002Fa\u003E\u003Ca class=\"footer__contacts-icon\" href=\"\"\u003E";
pug_mixins["image"]('facebook icon.png');
pug_html = pug_html + "\u003C\u002Fa\u003E\u003Ca class=\"footer__contacts-icon\" href=\"\"\u003E";
pug_mixins["image"]('youtube icon.png');
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__under\"\u003E\u003Cdiv class=\"footer__agreement\"\u003E\u003Cspan\u003E© 2023 Eugen Stoll | Alle Rechte vorbehalten\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__extra\"\u003E\u003Cspan\u003EImpressum | Datenschutzerklärung\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmain\u003E\u003C\u002Fbody\u003E\u003Cscript src=\"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.6.0.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\"https:\u002F\u002Fcode.jquery.com\u002Fui\u002F1.12.1\u002Fjquery-ui.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\"https:\u002F\u002Fcode.jquery.com\u002Fui\u002F1.12.1\u002Fi18n\u002Fjquery-ui-i18n.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\"https:\u002F\u002Fcode.jquery.com\u002Fui\u002F1.12.1\u002Fjquery-ui.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\"https:\u002F\u002Fcode.jquery.com\u002Fui\u002F1.12.1\u002Fi18n\u002Fjquery-ui-i18n.min.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.png": "./src/assets/images/1.png",
	"./2.png": "./src/assets/images/2.png",
	"./3.png": "./src/assets/images/3.png",
	"./4.png": "./src/assets/images/4.png",
	"./5.png": "./src/assets/images/5.png",
	"./7.png": "./src/assets/images/7.png",
	"./8.png": "./src/assets/images/8.png",
	"./9.png": "./src/assets/images/9.png",
	"./Bild icon.png": "./src/assets/images/Bild icon.png",
	"./Boy copy.png": "./src/assets/images/Boy copy.png",
	"./Case_2.png": "./src/assets/images/Case_2.png",
	"./Clock.png": "./src/assets/images/Clock.png",
	"./Couple copy.png": "./src/assets/images/Couple copy.png",
	"./Energie-Vitalität.png": "./src/assets/images/Energie-Vitalität.png",
	"./Enery.png": "./src/assets/images/Enery.png",
	"./Erfolgreiche-Menschen.png": "./src/assets/images/Erfolgreiche-Menschen.png",
	"./Gender groß.png": "./src/assets/images/Gender groß.png",
	"./Gender little.png": "./src/assets/images/Gender little.png",
	"./Gesundheit-Herz.png": "./src/assets/images/Gesundheit-Herz.png",
	"./Girl copy.png": "./src/assets/images/Girl copy.png",
	"./Hart.png": "./src/assets/images/Hart.png",
	"./Heart big.png": "./src/assets/images/Heart big.png",
	"./Heart little.png": "./src/assets/images/Heart little.png",
	"./HumanBody 1.png": "./src/assets/images/HumanBody 1.png",
	"./Human_Body.png": "./src/assets/images/Human_Body.png",
	"./Karriere.png": "./src/assets/images/Karriere.png",
	"./Kids copy.png": "./src/assets/images/Kids copy.png",
	"./Layer 110.svg": "./src/assets/images/Layer 110.svg",
	"./Lebensaufgabe.png": "./src/assets/images/Lebensaufgabe.png",
	"./Man 2.png": "./src/assets/images/Man 2.png",
	"./Man copy 5.png": "./src/assets/images/Man copy 5.png",
	"./Man+Manager copy.png": "./src/assets/images/Man+Manager copy.png",
	"./Man.png": "./src/assets/images/Man.png",
	"./Matrix-man.png": "./src/assets/images/Matrix-man.png",
	"./Matrix_Pic copy.png": "./src/assets/images/Matrix_Pic copy.png",
	"./Question copy.png": "./src/assets/images/Question copy.png",
	"./Video-Icon.png": "./src/assets/images/Video-Icon.png",
	"./Zoom_pic.png": "./src/assets/images/Zoom_pic.png",
	"./ausrufezeichen hintergrund.png": "./src/assets/images/ausrufezeichen hintergrund.png",
	"./card-1.svg": "./src/assets/images/card-1.svg",
	"./chakra-name.png": "./src/assets/images/chakra-name.png",
	"./channels4_banner.jpg": "./src/assets/images/channels4_banner.jpg",
	"./contact ausrufezeichen.png": "./src/assets/images/contact ausrufezeichen.png",
	"./diagram.png": "./src/assets/images/diagram.png",
	"./dollar back.png": "./src/assets/images/dollar back.png",
	"./dollar icon.png": "./src/assets/images/dollar icon.png",
	"./email icon.png": "./src/assets/images/email icon.png",
	"./euro back.png": "./src/assets/images/euro back.png",
	"./euro icon.png": "./src/assets/images/euro icon.png",
	"./facebook icon.png": "./src/assets/images/facebook icon.png",
	"./facebook.svg": "./src/assets/images/facebook.svg",
	"./family.png": "./src/assets/images/family.png",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./galaxy contact.png": "./src/assets/images/galaxy contact.png",
	"./icon-ajna.svg": "./src/assets/images/icon-ajna.svg",
	"./icon-saha.svg": "./src/assets/images/icon-saha.svg",
	"./insta icon.png": "./src/assets/images/insta icon.png",
	"./insta.svg": "./src/assets/images/insta.svg",
	"./lautsprecher icon.png": "./src/assets/images/lautsprecher icon.png",
	"./mail.svg": "./src/assets/images/mail.svg",
	"./main-bg.png": "./src/assets/images/main-bg.png",
	"./mark.svg": "./src/assets/images/mark.svg",
	"./matrix behind girl.png": "./src/assets/images/matrix behind girl.png",
	"./matrix kinder teenager.png": "./src/assets/images/matrix kinder teenager.png",
	"./photo contact.png": "./src/assets/images/photo contact.png",
	"./print-com.svg": "./src/assets/images/print-com.svg",
	"./telegram icon.png": "./src/assets/images/telegram icon.png",
	"./telegram.svg": "./src/assets/images/telegram.svg",
	"./youtube icon.png": "./src/assets/images/youtube icon.png",
	"./youtube.svg": "./src/assets/images/youtube.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/1.png":
/*!*********************************!*\
  !*** ./src/assets/images/1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/7dd34196a5dc8b2a3416.png";

/***/ }),

/***/ "./src/assets/images/2.png":
/*!*********************************!*\
  !*** ./src/assets/images/2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2b8cd4583a16a925bf82.png";

/***/ }),

/***/ "./src/assets/images/3.png":
/*!*********************************!*\
  !*** ./src/assets/images/3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/350ea29f0036473b731a.png";

/***/ }),

/***/ "./src/assets/images/4.png":
/*!*********************************!*\
  !*** ./src/assets/images/4.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/102be1c24d00a840a75f.png";

/***/ }),

/***/ "./src/assets/images/5.png":
/*!*********************************!*\
  !*** ./src/assets/images/5.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/74c881c82283b7306804.png";

/***/ }),

/***/ "./src/assets/images/7.png":
/*!*********************************!*\
  !*** ./src/assets/images/7.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a61076a7eaced8a9b035.png";

/***/ }),

/***/ "./src/assets/images/8.png":
/*!*********************************!*\
  !*** ./src/assets/images/8.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2ec5985ebd042ae4c6b5.png";

/***/ }),

/***/ "./src/assets/images/9.png":
/*!*********************************!*\
  !*** ./src/assets/images/9.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c9bc53d53d9e04cb5936.png";

/***/ }),

/***/ "./src/assets/images/Bild icon.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Bild icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0fd897830ccdbcfe8bdd.png";

/***/ }),

/***/ "./src/assets/images/Boy copy.png":
/*!****************************************!*\
  !*** ./src/assets/images/Boy copy.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/43864cef2db8072fa907.png";

/***/ }),

/***/ "./src/assets/images/Case_2.png":
/*!**************************************!*\
  !*** ./src/assets/images/Case_2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cf23ded2dcfe21a9407e.png";

/***/ }),

/***/ "./src/assets/images/Clock.png":
/*!*************************************!*\
  !*** ./src/assets/images/Clock.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b01542be6fc980bbd2c4.png";

/***/ }),

/***/ "./src/assets/images/Couple copy.png":
/*!*******************************************!*\
  !*** ./src/assets/images/Couple copy.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3276c32b96dd6ea33f14.png";

/***/ }),

/***/ "./src/assets/images/Energie-Vitalität.png":
/*!*************************************************!*\
  !*** ./src/assets/images/Energie-Vitalität.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/95ea3842614fa2b63f18.png";

/***/ }),

/***/ "./src/assets/images/Enery.png":
/*!*************************************!*\
  !*** ./src/assets/images/Enery.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4d0db0be5eb389a15151.png";

/***/ }),

/***/ "./src/assets/images/Erfolgreiche-Menschen.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/Erfolgreiche-Menschen.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/daeb5e686ff09376524e.png";

/***/ }),

/***/ "./src/assets/images/Gender groß.png":
/*!*******************************************!*\
  !*** ./src/assets/images/Gender groß.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2f3db7a75ba0c4fd7028.png";

/***/ }),

/***/ "./src/assets/images/Gender little.png":
/*!*********************************************!*\
  !*** ./src/assets/images/Gender little.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0e22db90c5928cb65ae1.png";

/***/ }),

/***/ "./src/assets/images/Gesundheit-Herz.png":
/*!***********************************************!*\
  !*** ./src/assets/images/Gesundheit-Herz.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6d9cacf8d4e16c4004b8.png";

/***/ }),

/***/ "./src/assets/images/Girl copy.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Girl copy.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e4e1861a485df938664f.png";

/***/ }),

/***/ "./src/assets/images/Hart.png":
/*!************************************!*\
  !*** ./src/assets/images/Hart.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1a05fa117873a8a9c37b.png";

/***/ }),

/***/ "./src/assets/images/Heart big.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Heart big.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/210817bee45d1a26793b.png";

/***/ }),

/***/ "./src/assets/images/Heart little.png":
/*!********************************************!*\
  !*** ./src/assets/images/Heart little.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a6aeb198894893d55f7b.png";

/***/ }),

/***/ "./src/assets/images/HumanBody 1.png":
/*!*******************************************!*\
  !*** ./src/assets/images/HumanBody 1.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e76fec0f361fed9afed2.png";

/***/ }),

/***/ "./src/assets/images/Human_Body.png":
/*!******************************************!*\
  !*** ./src/assets/images/Human_Body.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f6650ef286bd9947cb62.png";

/***/ }),

/***/ "./src/assets/images/Karriere.png":
/*!****************************************!*\
  !*** ./src/assets/images/Karriere.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9641e1e0366fec4ef585.png";

/***/ }),

/***/ "./src/assets/images/Kids copy.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Kids copy.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/923dcf3ac7cd62cc904a.png";

/***/ }),

/***/ "./src/assets/images/Layer 110.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/Layer 110.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a7c56f87670f7c0722d2.svg";

/***/ }),

/***/ "./src/assets/images/Lebensaufgabe.png":
/*!*********************************************!*\
  !*** ./src/assets/images/Lebensaufgabe.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fb7dc71b4641fbc86af6.png";

/***/ }),

/***/ "./src/assets/images/Man 2.png":
/*!*************************************!*\
  !*** ./src/assets/images/Man 2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/56ca195ceffd33df9784.png";

/***/ }),

/***/ "./src/assets/images/Man copy 5.png":
/*!******************************************!*\
  !*** ./src/assets/images/Man copy 5.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f75df1d2976f7667cfcd.png";

/***/ }),

/***/ "./src/assets/images/Man+Manager copy.png":
/*!************************************************!*\
  !*** ./src/assets/images/Man+Manager copy.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/678f189c81df5dca9bf4.png";

/***/ }),

/***/ "./src/assets/images/Man.png":
/*!***********************************!*\
  !*** ./src/assets/images/Man.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/085796f47a2b2b71f3dc.png";

/***/ }),

/***/ "./src/assets/images/Matrix-man.png":
/*!******************************************!*\
  !*** ./src/assets/images/Matrix-man.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f8b2c4e3d4a17fe126dd.png";

/***/ }),

/***/ "./src/assets/images/Matrix_Pic copy.png":
/*!***********************************************!*\
  !*** ./src/assets/images/Matrix_Pic copy.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0c9385f82143734e537f.png";

/***/ }),

/***/ "./src/assets/images/Question copy.png":
/*!*********************************************!*\
  !*** ./src/assets/images/Question copy.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2eebc07add76df571709.png";

/***/ }),

/***/ "./src/assets/images/Video-Icon.png":
/*!******************************************!*\
  !*** ./src/assets/images/Video-Icon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/46ce80117eb285d6d35b.png";

/***/ }),

/***/ "./src/assets/images/Zoom_pic.png":
/*!****************************************!*\
  !*** ./src/assets/images/Zoom_pic.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/996c206609b232f10559.png";

/***/ }),

/***/ "./src/assets/images/ausrufezeichen hintergrund.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/ausrufezeichen hintergrund.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6f33c83884478e5a1a56.png";

/***/ }),

/***/ "./src/assets/images/card-1.svg":
/*!**************************************!*\
  !*** ./src/assets/images/card-1.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2c7df25769f8550aaa35.svg";

/***/ }),

/***/ "./src/assets/images/chakra-name.png":
/*!*******************************************!*\
  !*** ./src/assets/images/chakra-name.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0f75d1c07dfb24146e88.png";

/***/ }),

/***/ "./src/assets/images/channels4_banner.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/channels4_banner.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d1dca613ca9a0282d7ef.jpg";

/***/ }),

/***/ "./src/assets/images/contact ausrufezeichen.png":
/*!******************************************************!*\
  !*** ./src/assets/images/contact ausrufezeichen.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/118745c3c9dd1dc09607.png";

/***/ }),

/***/ "./src/assets/images/diagram.png":
/*!***************************************!*\
  !*** ./src/assets/images/diagram.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/97808740374cde50467a.png";

/***/ }),

/***/ "./src/assets/images/dollar back.png":
/*!*******************************************!*\
  !*** ./src/assets/images/dollar back.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5782c314d1f56eab1714.png";

/***/ }),

/***/ "./src/assets/images/dollar icon.png":
/*!*******************************************!*\
  !*** ./src/assets/images/dollar icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0632fa5700cb09a7b493.png";

/***/ }),

/***/ "./src/assets/images/email icon.png":
/*!******************************************!*\
  !*** ./src/assets/images/email icon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/87a25093b95586369901.png";

/***/ }),

/***/ "./src/assets/images/euro back.png":
/*!*****************************************!*\
  !*** ./src/assets/images/euro back.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5782c314d1f56eab1714.png";

/***/ }),

/***/ "./src/assets/images/euro icon.png":
/*!*****************************************!*\
  !*** ./src/assets/images/euro icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/acd5b69983b31f94a6e6.png";

/***/ }),

/***/ "./src/assets/images/facebook icon.png":
/*!*********************************************!*\
  !*** ./src/assets/images/facebook icon.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6353627df42ecdd93c53.png";

/***/ }),

/***/ "./src/assets/images/facebook.svg":
/*!****************************************!*\
  !*** ./src/assets/images/facebook.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4674c346c0edf3300a67.svg";

/***/ }),

/***/ "./src/assets/images/family.png":
/*!**************************************!*\
  !*** ./src/assets/images/family.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8543e8833d751c264a77.png";

/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4deddff989e7b96bdf6e.png";

/***/ }),

/***/ "./src/assets/images/galaxy contact.png":
/*!**********************************************!*\
  !*** ./src/assets/images/galaxy contact.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b6b74b599263e8e6c3e4.png";

/***/ }),

/***/ "./src/assets/images/icon-ajna.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-ajna.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ecc609641e7f5ba11494.svg";

/***/ }),

/***/ "./src/assets/images/icon-saha.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-saha.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b699fc6bd8183425965d.svg";

/***/ }),

/***/ "./src/assets/images/insta icon.png":
/*!******************************************!*\
  !*** ./src/assets/images/insta icon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d1b2c376e043e4696ac9.png";

/***/ }),

/***/ "./src/assets/images/insta.svg":
/*!*************************************!*\
  !*** ./src/assets/images/insta.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d887af19410b4e02f267.svg";

/***/ }),

/***/ "./src/assets/images/lautsprecher icon.png":
/*!*************************************************!*\
  !*** ./src/assets/images/lautsprecher icon.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3e44f8ccb60cd43a5b61.png";

/***/ }),

/***/ "./src/assets/images/mail.svg":
/*!************************************!*\
  !*** ./src/assets/images/mail.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/52dd4ef2fc59f225cdb0.svg";

/***/ }),

/***/ "./src/assets/images/main-bg.png":
/*!***************************************!*\
  !*** ./src/assets/images/main-bg.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9cab5873609193a6d6e5.png";

/***/ }),

/***/ "./src/assets/images/mark.svg":
/*!************************************!*\
  !*** ./src/assets/images/mark.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/372f08f632534cd938df.svg";

/***/ }),

/***/ "./src/assets/images/matrix behind girl.png":
/*!**************************************************!*\
  !*** ./src/assets/images/matrix behind girl.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c997714c68417f670455.png";

/***/ }),

/***/ "./src/assets/images/matrix kinder teenager.png":
/*!******************************************************!*\
  !*** ./src/assets/images/matrix kinder teenager.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c997714c68417f670455.png";

/***/ }),

/***/ "./src/assets/images/photo contact.png":
/*!*********************************************!*\
  !*** ./src/assets/images/photo contact.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/eef7480e7defbcd87640.png";

/***/ }),

/***/ "./src/assets/images/print-com.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/print-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cf2e70551cf050a0cebb.svg";

/***/ }),

/***/ "./src/assets/images/telegram icon.png":
/*!*********************************************!*\
  !*** ./src/assets/images/telegram icon.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fa7416fa2253ec001cd9.png";

/***/ }),

/***/ "./src/assets/images/telegram.svg":
/*!****************************************!*\
  !*** ./src/assets/images/telegram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c642f3627d9220f9ce7f.svg";

/***/ }),

/***/ "./src/assets/images/youtube icon.png":
/*!********************************************!*\
  !*** ./src/assets/images/youtube icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/75a03e3c4154e101b9ef.png";

/***/ }),

/***/ "./src/assets/images/youtube.svg":
/*!***************************************!*\
  !*** ./src/assets/images/youtube.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/83663bfa429c55271633.svg";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/resizer */ "./src/core/resizer.js");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main */ "./src/core/main.js");
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDeUI7QUFDRDtBQUNIO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvbWFpbi5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvcmVzaXplci5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3Njc3MvYXBwLnNjc3M/OGI2ZiIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL2luZGV4LnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL2phc2tzaGVldHMvaWdub3JlZHwvVXNlcnMvN2VyaGl5L0Rlc2t0b3AvV0VCL3Byb2plY3RzL2dlcm1hbnkxL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vINCX0LDQs9GA0YPQttCw0LXQvCDQvdC10LzQtdGG0LrRg9GOINC70L7QutCw0LvQuNC30LDRhtC40Y5cbiAgJC5kYXRlcGlja2VyLnNldERlZmF1bHRzKCQuZGF0ZXBpY2tlci5yZWdpb25hbFtcImRlXCJdKTtcblxuICAvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8IERhdGVQaWNrZXIg0YEg0L3QsNGB0YLRgNC+0LnQutCw0LzQuFxuICAkKFwiI2RhdGVwaWNrZXJcIikuZGF0ZXBpY2tlcih7XG4gICAgZGF0ZUZvcm1hdDogXCJkZC9tbS95eVwiLFxuICAgIGNoYW5nZU1vbnRoOiB0cnVlLFxuICAgIGNoYW5nZVllYXI6IHRydWUsXG4gICAgeWVhclJhbmdlOiBcIi0xMDA6KzBcIiwgLy8g0LTQu9GPINGD0YHRgtCw0L3QvtCy0LrQuCDQtNC40LDQv9Cw0LfQvtC90LAg0LvQtdGCXG4gIH0pO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b20taW5wdXRcIik7XG4gIGNvbnN0IGdlbmRlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdlbmRlci1tZW51XCIpO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZ2VuZGVyTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nZW5kZXItb3B0aW9uXCIpLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaW5wdXQudmFsdWUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1nZW5kZXJcIik7XG4gICAgICBnZW5kZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcigpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU51bWJlcnMoKSB7XG4gICAgY29uc3QgbnVtYmVyMSA9IGdldFJhbmRvbU51bWJlcigpO1xuICAgIGNvbnN0IG51bWJlcjIgPSBnZXRSYW5kb21OdW1iZXIoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubnVtYmVyMVwiKS50ZXh0Q29udGVudCA9IG51bWJlcjE7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5udW1iZXIyXCIpLnRleHRDb250ZW50ID0gbnVtYmVyMjtcblxuICAgIHJldHVybiBudW1iZXIxICsgbnVtYmVyMjtcbiAgfVxuXG4gIGxldCBjb3JyZWN0U3VtID0gdXBkYXRlTnVtYmVycygpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB1c2VyU3VtID0gcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm51bWJlclwiXScpLnZhbHVlLCAxMCk7XG5cbiAgICBjb25zb2xlLmxvZyh1c2VyU3VtID09PSBjb3JyZWN0U3VtID8gdHJ1ZSA6IGZhbHNlKTtcblxuICAgIGNvcnJlY3RTdW0gPSB1cGRhdGVOdW1iZXJzKCk7XG4gIH0pXG59KTtcbiIsInZhciBkZWZhdWx0V2lkdGggPSAxNDQwLFxuICBkZWZhdWx0Rm9udCA9IDE2LFxuICBtb2JpbGVGb250ID0gMTYsXG4gIG1pbldpZHRoID0gNzY4LFxuICBtaW5IZWlnaHQgPSA2MDAsXG4gIGRlZmF1bHRIZWlnaHQgPSA5MDA7XG5cbmZ1bmN0aW9uIGZTaXplKGRldmljZSwgdlcsIHZIKSB7XG4gIGlmICh2VyA8PSAzNzQpIHtcbiAgICByZXR1cm4gMTM7XG4gIH1cblxuICByZXR1cm4gZGV2aWNlXG4gICAgPyBtb2JpbGVGb250XG4gICAgOiBkZWZhdWx0Rm9udCAqXG4gICAgICAgIE1hdGgubWluKFxuICAgICAgICAgIE1hdGgubWF4KG1pbldpZHRoLCB2VykgLyBkZWZhdWx0V2lkdGgsXG4gICAgICAgICAgTWF0aC5tYXgobWluSGVpZ2h0LCB2SCkgLyBkZWZhdWx0SGVpZ2h0XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmaWVyRGV2aWNlKCkge1xuICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIGlzTW9iaWxlID0gd2luZG93V2lkdGggPD0gNzY3O1xuXG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5mb250U2l6ZSA9XG4gICAgICBmU2l6ZShpc01vYmlsZSwgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCkgKyBcInB4XCI7XG4gIH1cblxuICBpZiAoaXNNb2JpbGUpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxubW9kaWZpZXJEZXZpY2UoKTtcblxuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX21peGluc1tcImltYWdlXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGZpbGUpe1xudmFyIGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtmaWxlfWApLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcIjtcbn07XG5cblxuXG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0MhRE9DVFlQRSBodG1sXFx1MDAzRVxcdTAwM0NodG1sIGxhbmc9XFxcImVuXFxcIlxcdTAwM0VcXHUwMDNDaGVhZFxcdTAwM0VcXHUwMDNDbWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiaWU9ZWRnZVxcXCJcXHUwMDNFXFx1MDAzQ2xpbmtcIiArIChcIiByZWw9XFxcInNob3J0Y3V0IGljb25cXFwiXCIrcHVnLmF0dHIoXCJocmVmXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmdgKSwgdHJ1ZSwgdHJ1ZSkrXCIgdHlwZT1cXFwiaW1hZ2VcXHUwMDJGcG5nXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0N0aXRsZVxcdTAwM0VFbXB0eSBQcm9qZWN0XFx1MDAzQ1xcdTAwMkZ0aXRsZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmhlYWRcXHUwMDNFXFx1MDAzQ2JvZHlcXHUwMDNFXFx1MDAzQ21haW4gY2xhc3M9XFxcIm1haW5wYWdlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWlucGFnZV9fd3JhcHBlclxcXCJcXHUwMDNFXFx1MDAzQ2hlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX21lbnVcXFwiXFx1MDAzRVxcdTAwM0N1bCBjbGFzcz1cXFwiaGVhZGVyX19saXN0XFxcIlxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFSG9tZVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFQW5nZWJvdFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFS3Vyc1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFS29udGFrdFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDXFx1MDAyRnVsXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZGVyXFx1MDAzRVxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50X19mb3JtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50X190aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFTWVpbmUgTWF0cml4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NpbnB1dCBjbGFzcz1cXFwiY3VzdG9tLWlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiR2VidXJ0c2RhdHVtXFxcIiBpZD1cXFwiZGF0ZXBpY2tlclxcXCJcXHUwMDNFXFx1MDAzQ3NlbGVjdCBjbGFzcz1cXFwiY3VzdG9tLWdlbmRlclxcXCJcXHUwMDNFXFx1MDAzQ29wdGlvbiB2YWx1ZT1cXFwibWFsZVxcXCJcXHUwMDNFTcOkbm5saWNoXFx1MDAzQ1xcdTAwMkZvcHRpb25cXHUwMDNFXFx1MDAzQ29wdGlvbiB2YWx1ZT1cXFwiZmVtYWxlXFxcIlxcdTAwM0VXZWlibGljaFxcdTAwM0NcXHUwMDJGb3B0aW9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VsZWN0XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRlbnRfX2Zvcm0tYnRuXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjdXN0b20tYnRuIGN1c3RvbS1idG4tLWxhZ3JlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VCZXJlY2huZW5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudF9fZm9ybS1zd2l0Y2hlclxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB2ZXJzaW9uPVxcXCIxLjJcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgdmlld0JveD1cXFwiMjU3IDYxMiA2OCA2N1xcXCIgd2lkdGg9XFxcIjY4XFxcIiBoZWlnaHQ9XFxcIjY4XFxcIlxcdTAwM0VcXG5cXHRcXHUwMDNDdGl0bGVcXHUwMDNFTGF5ZXIgMTEwXFx1MDAzQ1xcdTAwMkZ0aXRsZVxcdTAwM0VcXG5cXHRcXHUwMDNDZGVmc1xcdTAwM0VcXG5cXHRcXHRcXHUwMDNDaW1hZ2UgIHdpZHRoPVxcXCI2OFxcXCIgaGVpZ2h0PVxcXCI2N1xcXCIgaWQ9XFxcImltZzFcXFwiIGhyZWY9XFxcImRhdGE6aW1hZ2VcXHUwMDJGcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVFBQUFCRENBTUFBQUFTeUZNNEFBQUFBWE5TUjBJQjJja3Nmd0FBQXVKUVRGUkY0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmw0ZEZsNGRGbDRkRmxwUUV0c1FBQUFQWjBVazVUQUFOZ0tSbVxcdTAwMkZKVm5XRjVEZkhnRUZwXFx1MDAyRkV3QWd0SUwzY2tYNjdcXHUwMDJGYmhoTkJCT3NlU3psSmpxY2s1RjhFTG5IQ0F6TnR3WTA0U0Z4XFx1MDAyRlRmcFBxRkNmb29naEM3N2lXanl6d25tbGdxdk9CWHF6SFxcdTAwMkYwTnJLTnRVZjZ5aElPNE40Y2dmd1xcdTAwMkZJN1psRzYxYitEMFBsTkFXZHJoUTFlODV0TUtEWEV4T01sWDN4anUrd0NwSkh4M3dVdHJ0SjVuSmlGSE9WRU5Mbys2a29rVkI4NXU5N010WWh1c1Vtdm1ZdklLTDlXMHJMVnJGVjJubjRtWjZ1dmJkM0l5RmdBZXdOVUJ3RFk5NGZXbzhScWd6SW50S1JGM1pZWjVXZFk3K1k2Q2w2S1puWkJHcWw2dGlxWjNCVTJ6RGN0UFVkTHVWNUUrZnlGNnpzU2dhMjlFeFdMc251d0FBQm5KSlJFRlVlSnlsbUdsY1UwY1F3Q2VJZUFGQ0JNRUJFamxFUlVBaUdDd0tnaHlLZ0JhUHlGMlJRN3hTSWlpS25DS2dLQ0FnaUdnVnhGdXBGazlFcmJWNDRJMFdVV3JyMFdyVllnXFx1MDAyRmJmdVxcdTAwMkZ1U3dnYTh2TGl6XFx1MDAyRm53WnZidDdqKzdPN083OHdMQUlUeWRQbHhOdUVXM3I5Nm5RXFx1MDAyRnIxSFxcdTAwMkZEcGtJR0Q5RCsrRTQrbk1Bd01HVFhZeUZqeGdpOVhRMHlHY0VKTWh5b01NM05HRFVNTFJsdGFDUmd0SEc3TlBSSWJXenU1TWNLZVVTT3hMek8yVWFPWm9zTVlSeWR1aVBOWUZ4RmpqSE4xbzJvOGl0M3B1Q1o4UmtzOEQ1ekl6UUNZaEo2TTlzTEpWSG43NEJTaWZQM0cwWklKK2dkb0E3R2JpdE1DNlk5T0Z3Y1JGUnlDTThnRVpuNGVTaXRuNFd4dEdBQVdpSFBvVE9aSzVvVUJoRWRnWkJSQWRNd1g1TlY4V3pUWERtTGdpZGlmK0pVZml3c0E0dnlRUmtvOG1wQ3FCRXhjeU5VOU9JbFJcXHUwMDJGRVdJaTVjQUxNVmxBcEFpZmhrT3hzaytNbEt4SEtmYTBCWUJjeDFZSWNiVHdoa2RrSUtZQ3JEQ3lGTUFYaXZUVmdHc1RsOURma0FuQmxPbzZ6SXlyUVBaSitLUmxjMFlPUklNeVlVa1hXb0xtQ0JiNndVZ3pVTW04dGI1YUZ6ZDRQd0N6MEtpa1xcdTAwMkZ4eElBbHUzWFZUMXNkdTJCQzd2bWdqNVZuN29DTjVhNU84cVdjY0JrcEwyTDFmd0M0RmpTYVRKc1VsNEZTNnVVQ01DaEdYbFpjR3dzSUtVd0NuVE95bmFEMVxcdTAwMkZTMld1RWxKcDc5VnRCaXl0d3ExMGgrVlVvNHBVejZVTkxNdVp1Q0dTRnIrdFpudlBaalRjOGRWb3UrNUlsR0tCR2V6Y1ZhdktRRXlzRTRMRGJzeXJaR1plTHNiNjhBOVdkQVxcdTAwMkZ1cmQ2NnI5OStXcGkwSFE3VTlFWlFtV2NEQjNmbjBFYTVoekQ5c09xU0hwbEtHelVNazlHQys5ZnFHWWl1b2NDTU9NZ2Y4V2h2eDhRZCs2YUJ0R29jRDVCOW5JMkJlSUxFZ0lQc3BCSGlLYlgrNVdjdnlFZGNEc0dMMlJra2xJUGhkQ1BSdTg2b2hkRGhORlY1UTUwbUJtSWRuSTNCc2xRRE5nWkFXRE9VSkdxR3BGZkN1VHFabXI0TzU1Vm1RS1ptQnFLTFxcdTAwMkZBUUh2UlhIeGs4VTlFQXE1MXo0OXVMc3VsUVRBZVJ3TWRDbmhDNmc4U2dqY2ROM2wzZzlFTkgzdStYQlZRSVZuQkQwZ095V0dWV1lGZHByUnZxWEx4ZHZqdlJLYXVDR05DUmRJUkZ6bGMwOXVYQk5UYmlyU3EwSkhFeHdZXFx1MDAyRmNPT2MyMGtLVnN2WjFhcit1c1hnTFIya0JPSzcxNlJWK2tKSVFIRmQwZzRTRytDYmUwZ2R3Q0VcXHUwMDJGdnJ4WWZyVTJ3YlkwSml6YjNnOXN3N1ErODZ0c2xyZmFGSkc4aDBPS0t3YnBSUE8zbjNIdlNKOWs5SE5NcVxcdTAwMkZ2MlBvSGhjcFxcdTAwMkZLQU41RDdjSk0rMjlnY3JsOUI1TUxFU1pTelRjMVpNN0pRMmtIcXc3RWdkZmRpU2JYMnR0WUZvU2k3Q1drUEpkY0ROa0tUQmVUYkd3MDNZR0NlY3dBMXBmNlRyZUxJeVRpam9oU2pzSkdzOXp4aUdjME9Ha3d5RDdNUDBCbnViOXdsUnQzOU14c2NtOUNyZXlNa1FXMEhTVFxcdTAwMkZZXFx1MDAyRlZ6eDVVcjdNNmozSXRmVVBVc1xcdTAwMkZLRTd1a0dWeVFwejMzbjI2dW1nTk9iXFx1MDAyRkoxZUNiUnpKQnNCRk5OMmRKelZcXHUwMDJGVEw1clZvaHJUd3pkcTNPck1oQko2MFRUM29uOURFeUZcXHUwMDJGTG00WDR5M1pkOVpCZlNTUjdTRWxXZEVtRG15ZGtnT0VlYXJ5d1QxQVRMRklmSEpRbU4zUEsyQmhsT2JSKzlabzhXbmhwcGNvb0tjQ1hUSWFURWI4Rm1pUFZNeUtib1pYZW5xSVJGaU1mUnlEKzlnSEMwQ0lHWHpINVJXZ0laanFBM1hSMWpIZzdNR3V2VldURHZBR3kxM25uZWhBOGFXWnRsaVxcdTAwMkZqZnNGVEhPTk5qYVArcWdqXFx1MDAyRmgrUjEyREI4YzFEWk1TaStWV21MekJcXHUwMDJGdVY3aitkOXhBa3RjclJYb1E3SnZTMkVOb3pPb1FRbUVHT1JHNzJyQlRlUWlFWjZ2eGtDaGw3MW55SElNTjlHZE5PN295MzQ0ZCt6YXpxNE9NenVscThocWFHRFczaUd0WWR6R1ZTWGlQUE0xSlhQNUJ2aFhJNkFRaXA0QkFzbDFGQWpDcndrYm1Ld0dhWHd4a1I1dzVzdmdaWFdXU3JwRTBKZkRQa0ZLU2V4NndDd2UrZFlRVStLOFJtK1RYWmx5RnVtbkk1VkVwYzJiMmVZTjl5YVh0THZGemh5R0hhdk5XZ3FnYWlSXFx1MDAyRmNCaUhLdjNvZ21QVm83SlpMNlhnVDZHZkpYK1IyZGNWRU54ck5uV1NcXHUwMDJGTnR0aTJ4MnUzZ3BaZ2UxXFx1MDAyRkV6VlJIRTBna1JoQmNzUjNcXHUwMDJGMVNOSUsrOGF4QVR0SU1VNFRLcTNQZGVKSXY3THpZSVNlRWF5UVdJN0l6SDQxSGFNTTQ0WWpIVjQ0eWVrK2NpbE5CaHdXdEpIRlVCOTFWaW5VVmtPSXZKaFRLMjBTTzBCTEdEbHJMYlZ6RzF6ald2Uk94OXU0WHZVdk9PTWF5NzZOUHdMVjVnaXBzVmVacnNuMXoxSGQrWGM5WHlSZ2FsY20yTm5ZemV0MTllejV0WnlNa1FsYXI4TjVBaEdjem84OTNYaktqM2ZjTXBObVdqUHI2VHF1aTkwZmwweUhcXHUwMDJGOXRRb016Uko2aDhcXHUwMDJGVjVIOHlmQU0rcHloMldnQUFBQUJKUlU1RXJrSmdnZz09XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx0XFx1MDAzQ1xcdTAwMkZkZWZzXFx1MDAzRVxcblxcdFxcdTAwM0NzdHlsZVxcdTAwM0VcXG5cXHRcXHUwMDNDXFx1MDAyRnN0eWxlXFx1MDAzRVxcblxcdFxcdTAwM0N1c2UgaWQ9XFxcIkxheWVyIDExMFxcXCIgaHJlZj1cXFwiI2ltZzFcXFwiIHg9XFxcIjI1N1xcXCIgeT1cXFwiNjEyXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ3NwYW5cXHUwMDNFSmFocmVzZW5lcmdpZXRhYmVsbGVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2lucHV0IGNsYXNzPVxcXCJzd2l0Y2hlclxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJzd2l0Y2hcXFwiXFx1MDAzRVxcdTAwM0NsYWJlbCBmb3I9XFxcInN3aXRjaFxcXCJcXHUwMDNFVG9nZ2xlXFx1MDAzQ1xcdTAwMkZsYWJlbFxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VKYWhyZXNlbmVyZ2llbiAgXFx1MDAzQ2JyXFx1MDAzRWFuemVpZ2VuXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRlbnRfX2NhcmRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRlbnRfX2NhcmQtdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRlbnRfX2NhcmQtdGl0bGUtaW1hZ2VcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdjaGFrcmEtbmFtZS5wbmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRlbnRfX2NhcmQtaXRlbS10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50X19jYXJkLWl0ZW0tdGV4dC10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFR2VzdW5kaGVpdHNrYXJ0ZVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50X19jYXJkLXRpdGxlLXBvaW50c1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcIndvcmRcXFwiXFx1MDAzRVBoeXNpa1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwid29yZFxcXCJcXHUwMDNFRW5lcmdpZVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwid29yZFxcXCJcXHUwMDNFQmFsYW5jZVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50X19jYXJkLWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRlbnRfX2NhcmQtaXRlbS1pbWdcXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjQxXFxcIiBoZWlnaHQ9XFxcIjQ5XFxcIiB2aWV3Qm94PVxcXCIwIDAgNDEgNDlcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjE5OTlcXHUwMDJGeGxpbmtcXFwiXFx1MDAzRVxcblxcdTAwM0NyZWN0IHdpZHRoPVxcXCI0MC44MzMzXFxcIiBoZWlnaHQ9XFxcIjQ5XFxcIiBmaWxsPVxcXCJ1cmwoI3BhdHRlcm4wKVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NkZWZzXFx1MDAzRVxcblxcdTAwM0NwYXR0ZXJuIGlkPVxcXCJwYXR0ZXJuMFxcXCIgcGF0dGVybkNvbnRlbnRVbml0cz1cXFwib2JqZWN0Qm91bmRpbmdCb3hcXFwiIHdpZHRoPVxcXCIxXFxcIiBoZWlnaHQ9XFxcIjFcXFwiXFx1MDAzRVxcblxcdTAwM0N1c2UgeGxpbms6aHJlZj1cXFwiI2ltYWdlMF81OF8xOFxcXCIgdHJhbnNmb3JtPVxcXCJzY2FsZSgwLjAyNSAwLjAyMDgzMzMpXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZwYXR0ZXJuXFx1MDAzRVxcblxcdTAwM0NpbWFnZSBpZD1cXFwiaW1hZ2UwXzU4XzE4XFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDhcXFwiIHhsaW5rOmhyZWY9XFxcImRhdGE6aW1hZ2VcXHUwMDJGcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBd0NBWUFBQUJqZXppYkFBQUFCbUpMUjBRQVxcdTAwMkZ3RFxcdTAwMkZBUCtndmFlVEFBQUhFRWxFUVZSWWhjV1pmYXpYVlIzSFgrZHl1WEFGQWk2WEJBSUNKQlRJOG1FTWhHQUNQclFHYlpqYThxRm1SVDZHV1U2WFpsbDV5d2xPdGxpU0ZnNFdQdUI2SkxVWjZub0FTckdMTUcyYWtDNGU1QUtwWVdnVXZQcmpmSDdzeTlmdkRlUmU0V3lcXHUwMDJGN2Z2NW5ITSs1MzArblxcdTAwMkZONU9PY0huZGpVeTlYUm5TbXowNXA2dGRxbXZxeU9PZHA0OWplMXJcXHUwMDJGcUEycW9PVnk4TW9CY2RiV3lvRTlTWDFQbHE5d0xcXHUwMDJGUStxejZtSzE4V2lCbTZadVUyZTAwOStvXFx1MDAyRmxqOXZYck1rUWJYcEw2aVRqN0l1QlJhdlB0SWdMcENuUktMM3FqZVdURm1oRnBmNHZVS1RROVJQNmplOEc0QjNLYitMWDZ0Y2U3R0ZQcWIxQTNxM0FKdnBEcGJcXHUwMDJGV1AwYlZIZlV2c2Y2cnIxQngrU0Z3TDJBaU9BTWNBNFlEeXdYUDBQY0J0d05mQXJZR2FjdVpIQVdPQng0QjdnU2VBWjRGRmdBckQ4VUVFZUNzQnZxQXZhNmJ0TTNhMWVGM1JcXHUwMDJGOWNcXHUwMDJGcVNyVkh4ZmdyMVBzUGRlMVVJV0FvY0Jad0tsa0R1OGthbTVwU1dsY2FlenJ3QVBENWxOTHlBcjhSV0FMMEFXYW1sTjRxOVBVR1hnYnVCVTRJREJ1QjN3SVBwNVIySEFCUUhReGNESHdBT0FVWUJEeENOc2w2NENUZzJwVFMwQks0OTVKTmRrRks2WW1LalhZQjdnTzJwNVN1TFBXdEJyWUNDNEI5d0doZ09uQUc4Q3p3TzJBenNBUjFqUHBHbUdwQ0NDNEt1MWE5b3dMQWQ5WDVSVURxSUxWdlVWdmhYTU5MYzJlcml5cGtkbE9ucXplcmU5WEdGT2I0UjBxcE11S3J0d0x2QWJhVFRiSUhhQVcrQUxTUXRUNERHQXJzQUJyajl4VHdDXFx1MDAyRkl4MlV4MnNsRWhkZzh3TktVMHJaMDFod0NyVWtwRDZvSFxcdTAwMkZBbDBLblhYQXNCQjJKbkFoc0F0WUJ2d01hQUErQ2d3UGdBdUJXY0J6S2FWOUllTVlZQXB3YnZ6MkFYZVJQYmNMMlpRbnF1dUFuNURQM3dzcHBTMEJvMHZnQXJXSCtrWVJZT1RYVnZVbWRXeHBkMVBWcmVyMWFyY3FEWlRHajFBZlZsZW9UUVYrVWllcGN5TzJGcDNzZmVxbUd0R2s3aXdKdlVWdHFWaHNVcHlwcVFjRFZwcFhwOTZ1cnFrcUhtSUQ1eGJvXFx1MDAyRm1wYmpUaEFnOEdicGE0bzhRYXFtOVd6M3dtNGtvekY2cElLZnBzNnNFQVBVamNYQjJ4WEI4VDN0RERoOXBLUXU4SmhEcnVwM2RXTjZxUUNyNys2UjcxWDdSbTh5ZXFxNHNTbDZoejFUSE9WTWxWOXZSWXkxR0ZoMmo0ZEFSaXlMaXBhUnoxZFhhVXVVaCtMVFh4UFxcdTAwMkZXWngwb21oeFRaMVl2RDJud3YxSzFaVUw0Y0pzS3U2czJDeEZ2VTdjVTZYbXV2SHJXcVxcdTAwMkY0cVRqNG56Tkt2RE9VMWRIQUg3VWRnclR3d1M1ekh3MTZCc1dPejc0RFhFRTdsTlRiZkJwTWVqU2twQTY5ZGZxUXZXdjZxaUt0UTRYNEMzcXQ4T2t0NVg2bXRRXFx1MDAyRmhUYTcxWkdMZ3E3azdMQ1xcdTAwMkZSZEQ5SkRBSkdFek9KSjNWMm9CUGt4UEFWMHQ5cjVGelxcdTAwMkZFbEFcXHUwMDJGN3FVMGdMZ0V1Q1hGVnE2RnZnM3NKT2M3anFyOVNIWGlhZVNzMUN4elNWbnNVa3BwVTM3dWVwVjVxcTNPZWh4NnRcXHUwMDJGVlpuTnQ5NUhPUXFmZXJWNnFmamljc3hZdFpwdXoyTEhsQ1kzcTAzSG1ubEw3cVV2VU9kRlxcdTAwMkY2d0Z1MzNHQUc5VVQ0dnNlOVJyMTRsRElFdlhuKzUwa0JsMm5Mb3Z2YjZtYkl1UU1DOTRFOVNcXHUwMDJGbVFxS2o0RTVUbnlcXHUwMDJGUTU1anZLaHZNcFY5OUtPa1R4VW5yMUhFRmVwcjZXa253NCtwbk9nSGdDdld6QlhwWXhNV2VCZDZuMUpcXHUwMDJGV2lDN21WRk1zdVNhckswdUN4MGVzSE5JQmNMUFZaMHByMWFtNzFGNEYzbkhxaXpXaWQ0VzJyckhpa3FSKzJWeUdOUjhHdUxNajNvNnM2RnRwdnRcXHUwMDJGVTZHWnJ0WURWMWN6cWlPWVR5dWZPbkpvMnFDY2ZJckE2ODh2WEZndEZRdlExcUdlcGYxQVhGdmdEMVMwMW90NTh0eTNTbDVucnQzV3g2NlhtcE42c0RsRHZDTE1zYWc5b1JJWnp3cVNiMUF2TWxjc0FkV2JJM0dIT3ZTM3ErWVc1NzFkZmdueXJxd2ZlVENsMWJXZWg3NU52WFEzQThlUlNmQzB3RWJpVEhHZ2J5RGZBYmZFOW1IeFhXUU84QXZRRGVwTnZqbnVEQlxcdTAwMkZDeFFwbGZYSE1ZOEVSS2FYZzkwQXpzVm51bGxIWlZZTndPdEtXVWJpNEpXUW44SnFWMHZUa0RqUUtPSldlZXpjRGFsTktyNm9QQVxcdTAwMkZTbWx4WVc1NXdIblY0RXJ0SDVxUWoxWmZUNU0xbXBPNHVQVmhoQTJRMzJzWXBkWHFnXFx1MDAyRjlud1ZRUjVzelJlOFNmNEdGSzRXNUJKdWl6bE9mTTErRFg3RDRoaE5uYjZJNWE3U3FcXHUwMDJGMUxYcXk5R0dPcGJXcVNyT2Z1VWszMnR2MzhzOXJrU1A0WER2R3ArNUZ5dlxcdTAwMkZ0TWNuTCt1bmxKMnpQWjIzODFjeUk0eWwrTnpLc1lNTkdlWUJ6MHd0bzAzcDdPYkt1Wk1WOWVHQjQ4eFA4bjFLbzk3UjgyY1daNHMwRjNOeGNRTjVscHhtN2tDN3htbWVqMDAxQkxlMzFpWXUxaTlxa09BS2dCMk43OWczV2lPa1crR2VlYVpyNkwxNmdcXHUwMDJGRFRHMnhvYkhtd25SVllYeExtTGZ6XFx1MDAyRndVdzU5REY2aG5tK1BmRlVuK2Qra2d4bmhYNm5qYVhWXFx1MDAyRk5ENHgwdU9xb0Fwc0wzNUhDZUhxVXhEUlh6UGg3T1VsK1c4NjQyOVFlaHNiYzlVaGJHVEluek9mR0lnQ290WGp0MzYzejcrMDFTdjJST2s5T1BPTGdTbUV2Q01TNFB1a2w5S0p4aitNSG1INUZtZnMxZnFcXHUwMDJGN0luSlhtV2ZvNzRxZzM4XFx1MDAyRjhoYTlTdkhXMHM3VFlMWlh0bnRmOEI3QUR0UHlCTlFkTUFBQUFBU1VWT1JLNUNZSUk9XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkZWZzXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRlbnRfX2NhcmQtaXRlbS10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50X19jYXJkLWl0ZW0tdGV4dC10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFU2FoYXNyYXJhXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRlbnRfX2NhcmQtaXRlbS10ZXh0LXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VWZXJiaW5kdW5nIHp1bSBIw7ZoZXJlbi4gXFx1MDAzQ2JyXFx1MDAzRSB3b2VyZXIgVGVsbCBkZXMga29vdGVzLlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50X19hY3Rpb25zXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjdXN0b20tYnRuIGN1c3RvbS1idG4tLWxhZ3JlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VBbmFseXNlIGRlciBNYXRyaXhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudF9fYWN0aW9ucy1pY29uXFxcIlxcdTAwM0VcXHUwMDNDIURPQ1RZUEUgc3ZnIFBVQkxJQyBcXFwiLVxcdTAwMkZcXHUwMDJGVzNDXFx1MDAyRlxcdTAwMkZEVEQgU1ZHIDEuMVxcdTAwMkZcXHUwMDJGRU5cXFwiIFxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkZHcmFwaGljc1xcdTAwMkZTVkdcXHUwMDJGMS4xXFx1MDAyRkRURFxcdTAwMkZzdmcxMS5kdGRcXFwiXFx1MDAzRVxcblxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIGZpbGw9XFxcIiNjMTljMTVcXFwiXFx1MDAzRVxcblxcdTAwM0NnIGlkPVxcXCJTVkdSZXBvX2JnQ2FycmllclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIwXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcIlNWR1JlcG9fdHJhY2VyQ2FycmllclxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcIlNWR1JlcG9faWNvbkNhcnJpZXJcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0yMS41IDEwSDE4VjUuNjM1TDEzLjI4MSAxSDZ2OUgyLjVBMS41IDEuNSAwIDAgMCAxIDExLjV2OEExLjUgMS41IDAgMCAwIDIuNSAyMUg2djJoMTJ2LTJoMy41YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtOGExLjUgMS41IDAgMCAwLTEuNS0xLjV6TTE3IDZoLTRWMnpNNyAyaDV2NWg1djNIN3ptMTAgMjBIN3YtNWgxMHptNS0yLjVhLjUuNSAwIDAgMS0uNS41SDE4di0yaDF2LTJINXYyaDF2MkgyLjVhLjUuNSAwIDAgMS0uNS0uNXYtOGEuNS41IDAgMCAxIC41LS41aDE5YS41LjUgMCAwIDEgLjUuNXptLTcgLjV2MUg5di0xem0tNi0xdi0xaDZ2MXptMTAtN2gxdjFoLTF6XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbD1cXFwibm9uZVxcXCIgZD1cXFwiTTAgMGgyNHYyNEgwelxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjdXN0b20tYnRuIGN1c3RvbS1idG4tLWxhZ3JlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VEcnVja2VuXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRlbnRfX2NhbGNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fbG9nb1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFTWF0cml4IEVuZXJneSBzeXN0ZW1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudF9fc3Bpcml0XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnSHVtYW5fQm9keS5wbmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIGNlbnRlciB5ZWxsb3dcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTFcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpcml0LWl0ZW0gc2Vjb25kIHVwIGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIHNlY29uZCByaWdodCBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBzZWNvbmQgbGVmdCBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSB0aGlyZCByaWdodCBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBsaW5lIGZpcnN0IGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIGxpbmUgc2Vjb25kIGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIGxpbmUgdGhpcmQgZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpcml0LWl0ZW0gZm91cnRoIHJpZ2h0XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIGZvdXJ0aCBsZWZ0IGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIGZvdXJ0aCB1cCBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBmb3VydGggZG93biBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBmb3VydGggdGVuIGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIGZvdXJ0aCB0d2VudHkgZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpcml0LWl0ZW0gZm91cnRoIHRoaXJ0eSBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBmb3VydGggZm9ydHkgZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpcml0LWl0ZW0gZmlmdGggcmlnaHQgZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpcml0LWl0ZW0gZmlmdGggbGVmdCBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBmaWZ0aCB1cCBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBmaWZ0aCBkb3duIGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIGZpZnRoIHRlbiBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBmaWZ0aCB0d2VudHkgZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpcml0LWl0ZW0gZmlmdGggdGhpcnR5IGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIGZpZnRoIGZvcnR5IGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIHNpeHRoIHJpZ2h0IGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIHNpeHRoIGxlZnQgZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpcml0LWl0ZW0gc2l4dGggdXAgZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpcml0LWl0ZW0gc2l4dGggZG93biBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBzaXh0aCB0ZW4gZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpcml0LWl0ZW0gc2l4dGggdHdlbnR5IGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIHNpeHRoIHRoaXJ0eSBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBzaXh0aCBmb3J0eSBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBzZXZlbnRoIGZpdmUgZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpcml0LWl0ZW0gc2V2ZW50aCBmaWZ0ZWVuIGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIHNldmVudGggdHdlbnR5IGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIHNldmVudGggdGhpcnR5IGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIHNldmVudGggZm9ydHlmaXZlIGdyZWVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaXJpdC1pdGVtIHNldmVudGggZmlmdHkgZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpcml0LWl0ZW0gZWlnaHRoIGNlbnRlciBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBlaWdodGggbGVmdCBncmVlblxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlyaXQtaXRlbSBlaWdodGggcmlnaHQgZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzZWN0aW9uXFx1MDAzRVxcdTAwM0Nmb290ZXIgY2xhc3M9XFxcImZvb3RlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyX190aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFRlJFVUUgTUlDSCBBVUYgREVJTkUgQU5GUkFHRVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRlbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9fYWJvdXRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9faW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgncGhvdG8gY29udGFjdC5wbmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9faW1nLW1hcmtcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdjb250YWN0IGF1c3J1ZmV6ZWljaGVuLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyX19uYW1lXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VFdWdlbiBTdG9sbFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmb290ZXJfX2FkZHJlc3NcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUFkcmVzc2U6XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUluIGRlciBBdSAxOCBcXHUwMDNDYnJcXHUwMDNFIDUzNTQ3IEhhdXNlbiAoV2llZClcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyX19mb3JtXFxcIlxcdTAwM0VcXHUwMDNDZm9ybSBhY3Rpb249XFxcIiNcXFwiIG1ldGhvZD1cXFwicG9zdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiXFx1MDAzRVxcdTAwM0NpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmFtZVxcXCJcXHUwMDNFXFx1MDAzQ2lucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkUtbWFpbCBhZGRyZXNzXFxcIlxcdTAwM0VcXHUwMDNDdGV4dGFyZWEgbmFtZT1cXFwibWVzc2FnZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hY2hyaWNodFxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZ0ZXh0YXJlYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmZvcm1cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyX19mb3JtLWFjdGlvbnNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInJhbmRvbS1udW1iZXJzXFxcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwibnVtYmVyMVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRStcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcIm51bWJlcjJcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDaW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJCZXRyYWdcXFwiXFx1MDAzRVxcdTAwM0NidXR0b24gY2xhc3M9XFxcImN1c3RvbS1idG4gc3VibWl0LWJ0blxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFU2VuZGVuXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHMtZW1haWxcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHMtZW1haWwtdGV4dFxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2VtYWlsIGljb24ucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc3BhblxcdTAwM0VFLW1haWwgQWRkcmVzc2U6XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHMtZW1haWwtbGlua1xcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwibWFpbHRvOkFuZnJhZ2VuQHlvdXJtYXRyaXhlbmVyZ3kuZGVcXFwiXFx1MDAzRSBBbmZyYWdlbkB5b3VybWF0cml4ZW5lcmd5LmRlXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHMtdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFSWNoIGJpbiBpbiBzb3ppYWxlbiBOZXR6d2Vya2VuIFxcdTAwM0NiclxcdTAwM0UgdW50ZXJ3ZWdzXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHMtc29jaWFsXFxcIlxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0cy1pY29uXFxcIiBocmVmPVxcXCJcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpbnN0YSBpY29uLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzLWljb25cXFwiIGhyZWY9XFxcIlxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3RlbGVncmFtIGljb24ucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHMtaWNvblxcXCIgaHJlZj1cXFwiXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnZmFjZWJvb2sgaWNvbi5wbmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0cy1pY29uXFxcIiBocmVmPVxcXCJcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCd5b3V0dWJlIGljb24ucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyX191bmRlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyX19hZ3JlZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRcKpIDIwMjMgRXVnZW4gU3RvbGwgfCBBbGxlIFJlY2h0ZSB2b3JiZWhhbHRlblxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmb290ZXJfX2V4dHJhXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VJbXByZXNzdW0gfCBEYXRlbnNjaHV0emVya2zDpHJ1bmdcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZmb290ZXJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZtYWluXFx1MDAzRVxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXHUwMDNDc2NyaXB0IHNyYz1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZjb2RlLmpxdWVyeS5jb21cXHUwMDJGanF1ZXJ5LTMuNi4wLm1pbi5qc1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzY3JpcHRcXHUwMDNFXFx1MDAzQ3NjcmlwdCBzcmM9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGY29kZS5qcXVlcnkuY29tXFx1MDAyRnVpXFx1MDAyRjEuMTIuMVxcdTAwMkZqcXVlcnktdWkubWluLmpzXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNjcmlwdFxcdTAwM0VcXHUwMDNDc2NyaXB0IHNyYz1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZjb2RlLmpxdWVyeS5jb21cXHUwMDJGdWlcXHUwMDJGMS4xMi4xXFx1MDAyRmkxOG5cXHUwMDJGanF1ZXJ5LXVpLWkxOG4ubWluLmpzXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNjcmlwdFxcdTAwM0VcXHUwMDNDc2NyaXB0IHNyYz1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZjb2RlLmpxdWVyeS5jb21cXHUwMDJGdWlcXHUwMDJGMS4xMi4xXFx1MDAyRmpxdWVyeS11aS5qc1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzY3JpcHRcXHUwMDNFXFx1MDAzQ3NjcmlwdCBzcmM9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGY29kZS5qcXVlcnkuY29tXFx1MDAyRnVpXFx1MDAyRjEuMTIuMVxcdTAwMkZpMThuXFx1MDAyRmpxdWVyeS11aS1pMThuLm1pbi5qc1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzY3JpcHRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZodG1sXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuLzEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy8xLnBuZ1wiLFxuXHRcIi4vMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzLzIucG5nXCIsXG5cdFwiLi8zLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvMy5wbmdcIixcblx0XCIuLzQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy80LnBuZ1wiLFxuXHRcIi4vNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzLzUucG5nXCIsXG5cdFwiLi83LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvNy5wbmdcIixcblx0XCIuLzgucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy84LnBuZ1wiLFxuXHRcIi4vOS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzLzkucG5nXCIsXG5cdFwiLi9CaWxkIGljb24ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9CaWxkIGljb24ucG5nXCIsXG5cdFwiLi9Cb3kgY29weS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0JveSBjb3B5LnBuZ1wiLFxuXHRcIi4vQ2FzZV8yLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ2FzZV8yLnBuZ1wiLFxuXHRcIi4vQ2xvY2sucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DbG9jay5wbmdcIixcblx0XCIuL0NvdXBsZSBjb3B5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ291cGxlIGNvcHkucG5nXCIsXG5cdFwiLi9FbmVyZ2llLVZpdGFsaXTDpHQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9FbmVyZ2llLVZpdGFsaXTDpHQucG5nXCIsXG5cdFwiLi9FbmVyeS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0VuZXJ5LnBuZ1wiLFxuXHRcIi4vRXJmb2xncmVpY2hlLU1lbnNjaGVuLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvRXJmb2xncmVpY2hlLU1lbnNjaGVuLnBuZ1wiLFxuXHRcIi4vR2VuZGVyIGdyb8OfLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvR2VuZGVyIGdyb8OfLnBuZ1wiLFxuXHRcIi4vR2VuZGVyIGxpdHRsZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0dlbmRlciBsaXR0bGUucG5nXCIsXG5cdFwiLi9HZXN1bmRoZWl0LUhlcnoucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9HZXN1bmRoZWl0LUhlcnoucG5nXCIsXG5cdFwiLi9HaXJsIGNvcHkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9HaXJsIGNvcHkucG5nXCIsXG5cdFwiLi9IYXJ0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSGFydC5wbmdcIixcblx0XCIuL0hlYXJ0IGJpZy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0hlYXJ0IGJpZy5wbmdcIixcblx0XCIuL0hlYXJ0IGxpdHRsZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0hlYXJ0IGxpdHRsZS5wbmdcIixcblx0XCIuL0h1bWFuQm9keSAxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSHVtYW5Cb2R5IDEucG5nXCIsXG5cdFwiLi9IdW1hbl9Cb2R5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSHVtYW5fQm9keS5wbmdcIixcblx0XCIuL0thcnJpZXJlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvS2FycmllcmUucG5nXCIsXG5cdFwiLi9LaWRzIGNvcHkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9LaWRzIGNvcHkucG5nXCIsXG5cdFwiLi9MYXllciAxMTAuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9MYXllciAxMTAuc3ZnXCIsXG5cdFwiLi9MZWJlbnNhdWZnYWJlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTGViZW5zYXVmZ2FiZS5wbmdcIixcblx0XCIuL01hbiAyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFuIDIucG5nXCIsXG5cdFwiLi9NYW4gY29weSA1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFuIGNvcHkgNS5wbmdcIixcblx0XCIuL01hbitNYW5hZ2VyIGNvcHkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NYW4rTWFuYWdlciBjb3B5LnBuZ1wiLFxuXHRcIi4vTWFuLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFuLnBuZ1wiLFxuXHRcIi4vTWF0cml4LW1hbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01hdHJpeC1tYW4ucG5nXCIsXG5cdFwiLi9NYXRyaXhfUGljIGNvcHkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NYXRyaXhfUGljIGNvcHkucG5nXCIsXG5cdFwiLi9RdWVzdGlvbiBjb3B5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvUXVlc3Rpb24gY29weS5wbmdcIixcblx0XCIuL1ZpZGVvLUljb24ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9WaWRlby1JY29uLnBuZ1wiLFxuXHRcIi4vWm9vbV9waWMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9ab29tX3BpYy5wbmdcIixcblx0XCIuL2F1c3J1ZmV6ZWljaGVuIGhpbnRlcmdydW5kLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYXVzcnVmZXplaWNoZW4gaGludGVyZ3J1bmQucG5nXCIsXG5cdFwiLi9jYXJkLTEuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jYXJkLTEuc3ZnXCIsXG5cdFwiLi9jaGFrcmEtbmFtZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NoYWtyYS1uYW1lLnBuZ1wiLFxuXHRcIi4vY2hhbm5lbHM0X2Jhbm5lci5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NoYW5uZWxzNF9iYW5uZXIuanBnXCIsXG5cdFwiLi9jb250YWN0IGF1c3J1ZmV6ZWljaGVuLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY29udGFjdCBhdXNydWZlemVpY2hlbi5wbmdcIixcblx0XCIuL2RpYWdyYW0ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kaWFncmFtLnBuZ1wiLFxuXHRcIi4vZG9sbGFyIGJhY2sucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kb2xsYXIgYmFjay5wbmdcIixcblx0XCIuL2RvbGxhciBpY29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZG9sbGFyIGljb24ucG5nXCIsXG5cdFwiLi9lbWFpbCBpY29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZW1haWwgaWNvbi5wbmdcIixcblx0XCIuL2V1cm8gYmFjay5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2V1cm8gYmFjay5wbmdcIixcblx0XCIuL2V1cm8gaWNvbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2V1cm8gaWNvbi5wbmdcIixcblx0XCIuL2ZhY2Vib29rIGljb24ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9mYWNlYm9vayBpY29uLnBuZ1wiLFxuXHRcIi4vZmFjZWJvb2suc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9mYWNlYm9vay5zdmdcIixcblx0XCIuL2ZhbWlseS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ZhbWlseS5wbmdcIixcblx0XCIuL2Zhdmljb24ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ1wiLFxuXHRcIi4vZ2FsYXh5IGNvbnRhY3QucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9nYWxheHkgY29udGFjdC5wbmdcIixcblx0XCIuL2ljb24tYWpuYS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tYWpuYS5zdmdcIixcblx0XCIuL2ljb24tc2FoYS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tc2FoYS5zdmdcIixcblx0XCIuL2luc3RhIGljb24ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pbnN0YSBpY29uLnBuZ1wiLFxuXHRcIi4vaW5zdGEuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pbnN0YS5zdmdcIixcblx0XCIuL2xhdXRzcHJlY2hlciBpY29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF1dHNwcmVjaGVyIGljb24ucG5nXCIsXG5cdFwiLi9tYWlsLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbC5zdmdcIixcblx0XCIuL21haW4tYmcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluLWJnLnBuZ1wiLFxuXHRcIi4vbWFyay5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL21hcmsuc3ZnXCIsXG5cdFwiLi9tYXRyaXggYmVoaW5kIGdpcmwucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9tYXRyaXggYmVoaW5kIGdpcmwucG5nXCIsXG5cdFwiLi9tYXRyaXgga2luZGVyIHRlZW5hZ2VyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbWF0cml4IGtpbmRlciB0ZWVuYWdlci5wbmdcIixcblx0XCIuL3Bob3RvIGNvbnRhY3QucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9waG90byBjb250YWN0LnBuZ1wiLFxuXHRcIi4vcHJpbnQtY29tLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJpbnQtY29tLnN2Z1wiLFxuXHRcIi4vdGVsZWdyYW0gaWNvbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlbGVncmFtIGljb24ucG5nXCIsXG5cdFwiLi90ZWxlZ3JhbS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlbGVncmFtLnN2Z1wiLFxuXHRcIi4veW91dHViZSBpY29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMveW91dHViZSBpY29uLnBuZ1wiLFxuXHRcIi4veW91dHViZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3lvdXR1YmUuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBucHggcHJldHRpZXIgLS13cml0ZSBcIioqLyoucHVnXCJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiO1xuaW1wb3J0IFwiLi9jb3JlL3Jlc2l6ZXJcIjtcbmltcG9ydCBcIi4vY29yZS9tYWluXCI7XG5pbXBvcnQgXCIuL3ZpZXdzL2luZGV4LnB1Z1wiO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiZGF0ZXBpY2tlciIsInNldERlZmF1bHRzIiwicmVnaW9uYWwiLCJkYXRlRm9ybWF0IiwiY2hhbmdlTW9udGgiLCJjaGFuZ2VZZWFyIiwieWVhclJhbmdlIiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiZ2VuZGVyTWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsInZhbHVlIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiZ2V0UmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidXBkYXRlTnVtYmVycyIsIm51bWJlcjEiLCJudW1iZXIyIiwidGV4dENvbnRlbnQiLCJjb3JyZWN0U3VtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJTdW0iLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0Rm9udCIsIm1vYmlsZUZvbnQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRlZmF1bHRIZWlnaHQiLCJmU2l6ZSIsImRldmljZSIsInZXIiwidkgiLCJtaW4iLCJtYXgiLCJtb2RpZmllckRldmljZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiaXNNb2JpbGUiLCJib2R5Iiwic3R5bGUiLCJmb250U2l6ZSIsImRvY3VtZW50RWxlbWVudCIsImFkZCIsIm9ubG9hZCIsIm9ucmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==