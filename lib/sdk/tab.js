
/**
 * Port Chrome Wrapper
 *
 * @param port
 * @constructor
 */
var Tab = function(tab) {
  var _tab = tab;
  //var url = tab.url;
};

/**
 * Triggers a callback for a given event name
 *
 * @param eventName
 * @param callback
 */
Tab.prototype.on = function(eventName, callback) {
  switch(eventName) {
    case 'detach' :
      console.log('notimplemented');
      break;
  }
};

/**
 * Triggers a callback for a given event name
 *
 * @param eventName
 * @param callback
 */
Tab.prototype.removeListener = function(eventName, callback) {
  switch(eventName) {
    case 'ready' :
      console.log('notimplemented');
      break;
  }
};

exports.Tab = Tab;