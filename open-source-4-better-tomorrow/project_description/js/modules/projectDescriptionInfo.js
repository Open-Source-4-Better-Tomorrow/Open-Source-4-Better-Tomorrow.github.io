(
 function (window) {
    var self = this;
    

    /* module scope variables begining */

    var _mobileVersionPrefix = moduleHelperProjectDescription.getMobileVersionPrefix();
    
    var _disallowedResolutionsArray = moduleHelperProjectDescription.getDisallowedResolutionsArray();
    
    var _openSource = moduleHelperProjectDescription.getOpenSourceProjectKey();

    var _mainPageRedirectionUrl = moduleHelperProjectDescription.getMainPageRedirectionUrl();


    var _salmName = moduleHelperProjectDescription.getSalmAccessName();

    var _moduleDOM_Object = moduleHelperProjectDescription.getModuleDOM_Object();    
    
    var _currentStorageFormatExtension = moduleHelperProjectDescription.getCurrentStorageFormatExtension();

    /* module scope variables end */


    
    /* module scope private functions begining */
        
    function displayMessageForNotSupportedBrowser_Internal() {
        document.getElementsByTagName("body")[0].innerHTML = "<div class='notSupported'>" + moduleHelperProjectDescription.getNotSupportedResolution() + "</div>";
    }

    function loadProjectDetails_Internal(projectStorageData) {
        var projectDataObject = JSON.parse(projectStorageData);
        
        mapObjectToContainers_Internal(projectDataObject);
    }

    function mapObjectToContainers_Internal(projectDataObject) {
        for(var property in projectDataObject) {

            var container = projectDataObject[property];

            var containerSelector = container.containerSelector;
            var propertyName = container.propertyName;
            var propertyValue = container.propertyValue;

            $(containerSelector).prop(propertyName, propertyValue);
        }
    }

    function assignEventHandlers_Internal() {
        // assign main page redirection url
        $(".logo").click(function() {
            return goToMainPage_Internal();
        });
    }

    function applyCustomSettingsBasedOnCurrentResolution_Internal() {
        // adjust site height for large screens, i.e. 27"
        if(screen.width === 2560 && screen.height === 1440) {
            $(".leading_thought").css("margin-top",  "12%");
        }
    }    

    function showPage_Internal() {
        $(".page").css("visibility", "visible");
    }

    function goToMainPage_Internal() {
        window.location.href = _mainPageRedirectionUrl;
    }

    function on_SALM_BeingAccessible_Internal() {
        // expose SALM to current window, i.e. make it accessible via window object
        jsUtilities.exposeToCurrentWindowDynamicallyLoadedModuleFromDisk(_salmName);

        // get module config location
        var configFileLocation = moduleHelperProjectDescription.getModuleConfigLocation();

        // set callback to invoke on successfull completion
        _moduleDOM_Object.successfullCompletionCallback = finalizeProcessOfDataLoading_Internal;

        // set project context of loading data
        setProjectContext_Internal();

        // load module config asynchronously
        window.salm.getModuleData(configFileLocation, _moduleDOM_Object);
    }

    function setProjectContext_Internal() {
        var openSourceProject_Id_Attr = sessionStorage.getItem(_openSource);
        openSourceProject_Id_Attr = openSourceProject_Id_Attr.substring(1).toLowerCase();
        
        // set context for being used only if config file uses flat file storage, otherwise it has no effect
        _moduleDOM_Object.use_flat_file_storage_view_bag_data = true;
        _moduleDOM_Object.flat_file_storage_view_bag_data = openSourceProject_Id_Attr + _currentStorageFormatExtension;
    }

    function finalizeProcessOfDataLoading_Internal(projectStorageData) {
        // load data into DOM
        loadProjectDetails_Internal(projectStorageData);

        // assign necessary event handlers
        assignEventHandlers_Internal();

        // apply large screen support
        applyCustomSettingsBasedOnCurrentResolution_Internal();

        // show main page
		showPage_Internal();
    }

    /* module scope private functions end */

    

    /* Public API */
    
    self.loadApplicationModule = function () {
     var canCurrentBrowserHandleThisPage = activeBrowser.browserUtility.checkMinAllowedResolution_2(screen.width, screen.height, true, _disallowedResolutionsArray) &&
                                           activeBrowser.browserUtility.detectCompatibilityWithCurrentInternetExplorerVersion(9);
                                           
     if (!canCurrentBrowserHandleThisPage) {
        displayMessageForNotSupportedBrowser_Internal();         
     }
     else {
         // make sure SALM object is accessible at this point if not previously loaded by any other module
         moduleHelperProjectDescription.promise_SALM_Availability_and_Then(on_SALM_BeingAccessible_Internal);
     }
    }

    self.goToMainPage = function() {
        return goToMainPage_Internal();
    }
	
    /* ~ Public API */



    /* Expose module API to the outside world */
    window.projectDescriptionInfo = window.projectDescriptionInfo || self;

    /* redirect to mobile version in case of mobile browser */    
    jsUtilities.redirectToMobileVersionIfMobileBrowserDetected(_mobileVersionPrefix);
 }
)(window)
