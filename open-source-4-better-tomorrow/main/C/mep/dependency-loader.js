/* eslint-disable valid-jsdoc */
/* eslint-disable no-empty */
/* eslint-disable react/require-extension */
/* eslint-disable react/wrap-multilines */

/*
 * Module that controls the critical loading process of this DHTML MVC module's dependencies.
 *
 *
 * Author: Łukasz Dąbrowski
 * Title : Software Engineer
 *
 * (c) C4B Solutions / C4B Software
 *
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
*/

(function (window) {

    var self = this;

    /* events */

    var _customEvent_requiredModulesLoaded = "requiredModulesLoaded";

    /* ~ events */


    /* private variables */

    var _array_of_current_view_urls_XHRs = [];

    var _array_of_currentView_pageTemplates = [
        location.href.substring(0, location.href.lastIndexOf('/') + 1) + "main-view-template.html"
    ];

    /* ~ private variables */


    /* private functions */

    function onAllLoaded_I_1L() {
        /**
         * Prefetch all critical templates of the current view, if they're not present in cache.
         * Cache is represented by Session Storage.
         * When all templates are in cache, proceed with further actions
        */
        prefetch_CurrentView_PageTemplates_I_2L(true, _array_of_currentView_pageTemplates);



        /**
         * Local helper functions
        */
        function prefetch_CurrentView_PageTemplates_I_2L(checkCache, url_address_array) {
            // if required templates are already cached, just dispatch the event to trigger further action
            if (checkCache && checkCache_I_3L(url_address_array)) {
                triggerFurtherAction_I_3L();
            } else {
                // ...otherwise fetch them, cache them and dispatch the event to trigger further action
                fetchAhead_PageTemplates_I_3L(url_address_array);
            }



            /**
             * Local helper functions
            */
            function checkCache_I_3L(url_address_array) {
                // define array of already cached items
                var cached = [];

                // loop over given array and determine cache presence
                for (var i = 0; i < url_address_array.length; i++) {
                    if (sessionStorage.getItem(url_address_array[i]))
                        cached.push(true);
                }

                // check if all items are cached
                return cached.length === url_address_array.length;
            }

            function triggerFurtherAction_I_3L() {
                document.dispatchEvent(new CustomEvent(_customEvent_requiredModulesLoaded));
            }

            function fetchAhead_PageTemplates_I_3L(url_address_array) {
                // create XHR for each url
                for (var i = 0; i < url_address_array.length; i++) {
                    // get current url to fetch content from
                    var url_address = url_address_array[i];

                    // create XHR object
                    var xhr = new XMLHttpRequest();
                    xhr.cid = i;
                    xhr.isCompleted = false;
                    xhr.url_address = url_address;

                    // handle only completed state
                    xhr.onreadystatechange = function () {
                        try {
                            if (this.status === 200 && this.readyState === 4) {
                                // cache fetched content
                                sessionStorage.setItem(this.responseURL || this.url_address, this.responseText);

                                // update that this XHR completed
                                _array_of_current_view_urls_XHRs[this.cid].isCompleted = true;

                                // define the required number of completed XHRs
                                var allCompleted = _array_of_current_view_urls_XHRs.length;

                                // check if all XHRs completed
                                for (var k = 0; k < _array_of_current_view_urls_XHRs.length; k++) {
                                    // if not break further logic
                                    if (!_array_of_current_view_urls_XHRs[k].isCompleted)
                                        allCompleted--;
                                }

                                // if all XHRs are completed, dispatch the event to trigger further action
                                if (allCompleted === _array_of_current_view_urls_XHRs.length) {
                                    triggerFurtherAction_I_3L();
                                }
                            }
                        } catch (error) {}
                    };

                    // store in a module-wide global array this newly created XHR object
                    _array_of_current_view_urls_XHRs.push(xhr);
                }

                // send each created XHR
                for (var j = 0; j < _array_of_current_view_urls_XHRs.length; j++) {
                    // reference a request (current XHR object)
                    var request = _array_of_current_view_urls_XHRs[j];

                    // open the request (current XHR object)
                    request.open("GET", request.url_address, true);

                    // send the request (current XHR object)
                    request.send(null);
                }
            }
        }
    }

    /* ~ private functions */



    /* Public API */

    self.onAllLoaded = function () {
        return onAllLoaded_I_1L();
    };

    /* ~ Public API */



    // Expose module API to the outside world
    window.dependencyLoader = window.dependencyLoader || self;
})(window);