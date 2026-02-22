/**
 * Configuración centralizada de la aplicación.
 * Origen de datos: Google Sheet vía Apps Script (APP_SCRIPT_URL).
 * El documento y las hojas están definidos en appscript/Code.gs (SPREADSHEET_ID y TABLAS).
 */
(function (global) {
  'use strict';

  /**
   * Intenta extraer el SPREADSHEET_ID desde una URL de Google Sheets.
   * - URL de edición: .../d/1R05n3t2cgmzX.../edit → devuelve el ID.
   * - URL publicada: .../d/e/2PACX-1vT28.../pub → no contiene el ID real; devuelve ''.
   * Si la URL es la publicada, hay que poner el ID a mano en SPREADSHEET_ID_FALLBACK o usar la URL de edición.
   */
  function extraerSpreadsheetIdDeUrl(url) {
    if (!url || typeof url !== 'string') return '';
    var m = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]{43,50})(?:\/|$|\?)/);
    return m ? m[1] : '';
  }

  var SHEET_WEB_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT28rd4v_LKDBh45YSVSCW3qhW2_HFkMR6ktjKaFGYFtM5D7iTtd4XYgSMoI15uRd0fH5c4Ir8jAFzg/pub?output=csv';

  var Config = {
    /**
     * ID del Google Sheet. Se calcula desde SHEET_WEB_CSV_URL cuando la URL es de edición (.../d/ID/edit).
     * Si SHEET_WEB_CSV_URL es la URL publicada (.../d/e/.../pub), no se puede extraer el ID; se usa SPREADSHEET_ID_FALLBACK.
     * Debe coincidir con SPREADSHEET_ID en appscript/Code.gs.
     */
    SPREADSHEET_ID: extraerSpreadsheetIdDeUrl(SHEET_WEB_CSV_URL) || '1R05n3t2cgmzX-z58b9Sgx4He9k9Y9NAm9myQXbEwv3Q',

    /**
     * URL del Web App de Google Apps Script.
     * De aquí se consumen los datos: productoLeer → hoja PRODUCTOS, clienteLeer → hoja CLIENTES, ventaAlta/ventaLeer → hojas ENERO..DICIEMBRE.
     */
    APP_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxSYy8d7pkdhmV2yYV_iS0m4sBG7p_lbQPW1-ND4BQdCsQIi2fsRYPEbg83KdCx1h8f/exec',

    HOJA_PRODUCTOS: 'PRODUCTOS',
    HOJA_CLIENTES: 'CLIENTES',

    /**
     * URL pública del Sheet publicado en la web (formato CSV).
     * A partir de esta URL se intenta calcular SPREADSHEET_ID (solo funciona si aquí usas la URL de edición del Sheet).
     */
    SHEET_WEB_CSV_URL: SHEET_WEB_CSV_URL,

    CORS_PROXY: ''
  };

  global.APP_CONFIG = Config;
})(typeof window !== 'undefined' ? window : this);
