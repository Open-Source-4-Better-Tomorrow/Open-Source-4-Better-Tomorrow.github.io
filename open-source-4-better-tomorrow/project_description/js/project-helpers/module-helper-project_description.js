/*!
 * ModuleHelper
 * (c) Open Source 4 Better Tomorrow
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function (window) {

    var self = this;
	

    /* module scope variables begining */    

    var _siteRootFolder = "/open-source-4-better-tomorrow/";

    var _mobileVersionPrefix = "m-";

    var _disallowedResolutionsArray = ["640", "480", "800", "600", "1024", "600", "1024", "768", "1152", "864", "1280", "720"];

    var _notSupportedResolution = "This site does not support this browser or resolution." +
                                  "<br />" +
                                  "Please use Google Chrome, Opera, Safari, Firefox, Microsoft Edge or IE &gt; 8" +
                                  "<br />" +
                                  "Please use higher resolution." +
                                  "<br />" +
                                  "13\" Notebook is the base device supported. (1280 x 768)"; 


    var _trademarkExplanation = "This idea is not for sale.";

    var _openSourceProjectKey = "openSourceProjectKey";

    var _mainPageRedirectionUrl = "/";


    var _salmAccessName = "salm";

    var _salmLocation = "/open-source-4-better-tomorrow/salm.js";

    var _pathToConfig = "/open-source-4-better-tomorrow/project_description/config.txt";    
    
    var _currentStorageFormatExtension = ".txt";

    var _moduleDOM_Object = {
                parentContainerCssClass : null,
                dataDivContainerCssClassName : null,
                dataDivLineDefinitionContainerCssClassName : null,
                errorDivContainerCssClassName : null,
                isFirstLineHoldingTitle : false,
                isLastLineHoldingCreationDate : false,
                titleCssClassName : null,
                creationDateCssClassName : null,
                successfullCompletionCallback : null,
                return_data_instead_of_loading_into_DOM : true,
                use_flat_file_storage_view_bag_data : false,
                flat_file_storage_view_bag_data : null
    };

    /* module scope variables end */



    /* module scope private functions begining */

    function promise_SALM_Availability_and_Then_Internal(callback) {
        var exists = typeof(window.salm) !== "undefined";

        if(!exists) {
            jsUtilities.loadDynamicallyModuleFromDisk(_salmAccessName, _salmLocation, callback);
        }
    }

    /* module scope private functions end */



    /* Public API */

    self.getMobileVersionPrefix = function() {
        return _mobileVersionPrefix;
    }

    self.getDisallowedResolutionsArray = function() {
        return _disallowedResolutionsArray;
    }

    self.getTrademarkExplanation = function() {
        return _trademarkExplanation;
    }

    self.getNotSupportedResolution = function() {
        return _notSupportedResolution;
    } 

    self.getSalmAccessName = function() {
        return _salmAccessName;
    }

    self.promise_SALM_Availability_and_Then = function(callback) {
        return promise_SALM_Availability_and_Then_Internal(callback);
    }
    
    self.getModuleConfigLocation = function() {
        return _pathToConfig;
    }

    self.getCurrentStorageFormatExtension = function() {
        return _currentStorageFormatExtension;
    }

    self.getModuleDOM_Object = function() {
        return _moduleDOM_Object;
    }

    self.getOpenSourceProjectKey = function() {
        return _openSourceProjectKey;
    }

    self.getMainPageRedirectionUrl = function() {
        return _mainPageRedirectionUrl;
    }

    /* ~ Public API */


    
    /* Expose module API to the outside world */
    window.moduleHelperProjectDescription = window.moduleHelperProjectDescription || self;
})(window)