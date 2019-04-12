(function () {
    // check existance of a native CustomEvent 
    if (typeof window.CustomEvent === 'function') return false;

    // define CustomEvent constructor function
    function CustomEvent(event, params) {
        // define params
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };

        // create custom event object
        var evt = document.createEvent('CustomEvent');

        // initialize custom event object
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

        // return custom event object
        return evt;
    }

    // "tie" this custom constructor function to the "appropriate" ancestor 
    CustomEvent.prototype = window.Event.prototype;

    // make this custom constructor function available in the context of a window
    window.CustomEvent = CustomEvent;
})();