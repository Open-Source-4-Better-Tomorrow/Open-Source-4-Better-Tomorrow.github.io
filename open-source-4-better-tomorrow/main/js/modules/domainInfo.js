(
 function (window) {
    var self = this;
    

    /* module scope variables begining */

    var _mobileVersionPrefix = moduleHelperMain.getMobileVersionPrefix();
	var _disallowedResolutionsArray = moduleHelperMain.getDisallowedResolutionsArray();
    var _openSource = moduleHelperMain.getOpenSourceProjectKey();

    var _projectDescription = moduleHelperMain.getProjectDescriptionRedirectionUrl();
	
    var _DSD_RedirectionUrl = moduleHelperMain.get_DSD_RedirectionUrl();
    
    var _downloadCode_RedirectionUrl = moduleHelperMain.get_downloadCode_RedirectionUrl();

    /* module scope variables end */


    
    /* module scope private functions begining */
    
    function displayMessageForNotSupportedBrowser_Internal() {
        document.getElementsByTagName("body")[0].innerHTML = "<div class='notSupported'>" + moduleHelperMain.getNotSupportedResolution() + "</div>";
    }
    
	function assignEventHandlers_Internals() {
        // go (back) to D-S-D
		$(".idea_supported_by").click(function() {
			return goToDSD_Internal();
        });
        
        // download entire code
        $(".download").click(function() {
            return goToDownloadCode_Internal();
        });
	}
    
    function applyCustomSettingsBasedOnCurrentResolution_Internal() {
        // adjust site height for large screens, i.e. 27"
        if(screen.width === 2560 && screen.height === 1440) {
            $(".page").css("height",  "181.5em");
            $(".footer").css("height",  "11.5em");
        }
    }
    
    function showSplash_Internal() {

        $("body").css("overflow-y", "hidden");

        /* create Splash DIV */
        var splashDiv = document.createElement("div");
        splashDiv.className = "splash";

        $(splashDiv).prependTo("body");
        /* ~ create Splash DIV */

        setTimeout(function() {
            $(".splash").css("opacity", "0.05");
        }, 500);

        setTimeout(function() {
            $(".splash").css("opacity", "0.1");
        }, 1000);

        setTimeout(function() {
            $(".splash").css("opacity", "0.25");
        }, 1500);        

        setTimeout(function() {
            $(".splash").css("opacity", "0.4");
        }, 3000);

        setTimeout(function() {
            $(".splash").css("opacity", "0.6");
        }, 4000);

        setTimeout(function() {
            $(".splash").css("opacity", "0.8");
        }, 5000);

        setTimeout(function() {
            $(".splash").css("opacity", "1");
            $(".splash").css("height", "0");
            $("body").css("overflow-y", "auto");
            $("body").css("background", "#505153");
            $(".page").css("top", "0");

            /* remove Splash DIV */
            $(splashDiv).remove();

            showMainContent_Internal();
        }, 7000);
    }

    function showMainContent_Internal() {
		showPage_Internal();
    }

    function showPage_Internal() {
        $(".page").css("visibility", "visible");
    }

	function goToDSD_Internal() {
		window.location.href = _DSD_RedirectionUrl;
    }
    
    function goToDownloadCode_Internal() {
        window.open(_downloadCode_RedirectionUrl, "_blank");
    }
	
    function handleClick_Internal(class_attr) {
        $(class_attr).css("box-shadow", "2px 2px 2px whitesmoke");
        setTimeout(function() {
            sessionStorage.setItem(_openSource, class_attr);
            window.location.href =_projectDescription;
        }, 500);
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
        assignEventHandlers_Internals();
        applyCustomSettingsBasedOnCurrentResolution_Internal();
        showSplash_Internal();
     }
    }

    self.handleClick = function(class_attr) {
        return handleClick_Internal(class_attr);
    }
	
    /* ~ Public API */



    /* Expose module API to the outside world */
    window.domainInfo = window.domainInfo || self;

    /* redirect to mobile version in case of mobile browser */    
    jsUtilities.redirectToMobileVersionIfMobileBrowserDetected(_mobileVersionPrefix);
 }
)(window)