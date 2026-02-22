/**
 * Configuración centralizada de la aplicación.
 * Rutas para Google Sheet (lectura CSV) y Apps Script (operaciones).
 */
(function (global) {
  'use strict';

  var Config = {
    /** URL pública del Google Sheet en formato CSV (solo lectura). */
    GOOGLE_SHEET_CSV_URL:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRNYUmSj5Zpu85PtNg_8ZQPXbj1HsL8H8Or06RpoHpDW5EPj4TpXwVWvumDpujNQdlBnQhXDIujlt2A/pub?output=csv',

    /** URL del Web App de Google Apps Script para operaciones con la hoja (guardar, actualizar, etc.). */
    APP_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwUs1DNO6FcI2sO1sad3ibUTxYoj285cOdUqYvcL9NibOu5mJKzSIPrja8yqkq4TCtj/exec',

    /**
     * Proxy CORS opcional para poder leer la respuesta del Apps Script desde localhost.
     * Si lo dejas vacío, la venta se enviará igual y se asumirá éxito (el navegador bloqueará la respuesta).
     * Ejemplo: 'https://corsproxy.io/?' (la URL del script se añade después, codificada).
     */
    CORS_PROXY: ''
  };

  global.APP_CONFIG = Config;
})(typeof window !== 'undefined' ? window : this);
