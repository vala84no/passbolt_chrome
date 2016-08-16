/**
 * ScriptExecution Helper
 * Make it easier to chrome.tabs.executeScript multiple scripts.
 *
 * @licence ISC
 * @credit https://github.com/ReeganExE/chrome-script-execution
 */
/**
 * ScriptExecution Constructor
 * @param tabId int
 * @constructor
 */
function ScriptExecution(tabId) {
  this.tabId = tabId;
  this.basePath = 'data/'
}

/**
 * Array of js file names with path
 * @param fileArray array
 * @returns ScriptExecution object
 */
ScriptExecution.prototype.injectScripts = function (fileArray) {
  var _this = this;
  return Promise.all(fileArray.map(function (file) {
    return exeScript(_this.tabId, _this.basePath + file);
  })).then(function () {
    return _this;
  });
};

/**
 * Array of css file names with path
 * @param fileArray array
 * @returns ScriptExecution object
 */
ScriptExecution.prototype.injectCss = function (fileArray) {
  var _this = this;
  return Promise.all(fileArray.map(function (file) {
    return exeCss(_this.tabId, _this.basePath + file);
  })).then(function () {
    return _this;
  });
};

/**
 * Call an async function of chrome.tabs and makes it a promise
 * @param fn function to execute
 * @param tabId int
 * @param info info object
 * @returns Promise
 */
function promiseTo(fn, tabId, info) {
  return new Promise(function (resolve) {
    fn.call(chrome.tabs, tabId, info, function () {
      return resolve();
    });
  });
}

/**
 * Insert a script in the page
 * @param tabId
 * @param path
 * @returns Promise
 */
function exeScript(tabId, path) {
  var info = { file: path, runAt: 'document_end' };
  return promiseTo(chrome.tabs.executeScript, tabId, info);
}

/**
 * Insert a stylesheet
 * @param tabId
 * @param path
 * @returns {Promise}
 */
function exeCss(tabId, path) {
  var info = { file: path, runAt: 'document_end' };
  return promiseTo(chrome.tabs.insertCSS, tabId, info);
}

exports.ScriptExecution = ScriptExecution;