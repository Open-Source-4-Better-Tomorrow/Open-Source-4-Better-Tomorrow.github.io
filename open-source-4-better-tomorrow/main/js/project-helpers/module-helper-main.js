/*!
 * ModuleHelper
 * (c) Dabrowski Software Development
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

								  
    var _downlodRootFolder = _siteRootFolder + "main/download/";

    var _getCopyrightYear = "Last modified on " + document.lastModified + " GMT+0200";

    var _registeredExplanation = "All rights reserved subject to MIT Licence";

    var _openSourceProjectKey = "openSourceProjectKey";

    var _projectDescriptionRedirectionUrl = "/open-source-4-better-tomorrow/project_description/";
	
    var _DSD_RedirectionUrl = "https://dabrowski-software-development.github.io";
    
    var _downloadCode_RedirectionUrl = "https://github.com/Open-Source-4-Better-Tomorrow/Open-Source-4-Better-Tomorrow.github.io/archive/master.zip";

    /* module scope variables end */



    /* Public API */

    self.getMobileVersionPrefix = function() {
        return _mobileVersionPrefix;
    }

    self.getDisallowedResolutionsArray = function() {
        return _disallowedResolutionsArray;
    }

    self.getCopyrightYear = function() {
        return _getCopyrightYear;
    }

    self.getRegisteredExplanation = function() {
        return _registeredExplanation;
    }

    self.getNotSupportedResolution = function() {
        return _notSupportedResolution;
    } 

    self.getOpenSourceProjectKey = function() {
        return _openSourceProjectKey;
    }

    self.getProjectDescriptionRedirectionUrl = function() {
        return _projectDescriptionRedirectionUrl;
    }

	self.get_DSD_RedirectionUrl = function() {
		return _DSD_RedirectionUrl;
	}
    
    self.get_downloadCode_RedirectionUrl = function() {
        return _downloadCode_RedirectionUrl;
    }
    
    /* ~ Public API */


    
    /* Expose module API to the outside world */
    window.moduleHelperMain = window.moduleHelperMain || self;
})(window)
