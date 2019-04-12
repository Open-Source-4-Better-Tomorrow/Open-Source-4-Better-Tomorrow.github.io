/* eslint-disable valid-jsdoc */

/*
 * Module that delivers data for the view.
 * The goal is to make this module self-responsible for retrieving data from a database.
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


    /* private variables */

    var _CUSTOM_MODEL_OBJECT = {
        __init__: function () {
            this.Variables.__init__();
        },

        Constants: {
            _dataFetchingTimeInterval: 10 // in miliseconds
        },

        Variables: {
            __init__: function () {
                this._serverRootDir = window.location.hostname + ":" + window.location.port;

                this._downlodRootFolder = this._siteRootFolder + "main/download/";

                this._copyrightYear = "Last modified in " + _CUSTOM_MODEL_OBJECT.Functions.getLastModified();

                this._currentYear = _CUSTOM_MODEL_OBJECT.Functions.getFullYear();

                this._pathToConfig = this._siteRootFolder + "main/config.txt";
            },

            _serverRootDir: "",

            _siteRootFolder: "/open-source-4-better-tomorrow/",

            _mobileVersionPrefix: "m-",

            _disallowedResolutionsArray: ["640", "480", "800", "600", "1024", "600", "1024", "768", "1152", "864", "1280", "720"],

            _notSupportedResolution: "This site does not support this browser or resolution." +
                "<br />" +
                "Please use Google Chrome, Opera, Safari, Firefox, Microsoft Edge or IE &gt; 8" +
                "<br />" +
                "Please use higher resolution." +
                "<br />" +
                "13\" Notebook is the base device supported. (1280 x 768)",


            _downlodRootFolder: "",

            _copyrightYear: "",

            _currentYear: "",

            _registeredExplanation: "All rights reserved subject to MIT Licence && C4B Solutions philosophy",

            _openSourceProjectKey: "openSourceProjectKey",

            _projectDescriptionRedirectionUrl: "/open-source-4-better-tomorrow/project_description/V/View.html",

            _C4B_Solutions_RedirectionUrl: "https://c4b.solutions",

            _downloadCode_RedirectionUrl: "https://github.com/Open-Source-4-Better-Tomorrow/Open-Source-4-Better-Tomorrow.github.io/archive/master.zip",

            _standardEvent_click: "customClick",

            _pathToConfig: "",

            _zipDownloadAnimationHandler: null,

            _view_Template_Name: "main-view-template.html"
        },

        Functions: {
            getLastModified: function () {
                return getLastModified_I_1L();


                /**
                 * Local helper functions
                 */
                function getLastModified_I_1L() {
                    // convert document's lastModified to Date object
                    var d = new Date(document.lastModified);

                    // return custom date
                    return getMonthName_I_2L(d.getMonth()) + " " + d.getFullYear();



                    /**
                     * Local helper functions 
                     */
                    function getMonthName_I_2L(monthNumber) {
                        if (monthNumber === 0)
                            return "January";
                        else if (monthNumber === 1)
                            return "February";
                        else if (monthNumber === 2)
                            return "March";
                        else if (monthNumber === 3)
                            return "April";
                        else if (monthNumber === 4)
                            return "May";
                        else if (monthNumber === 5)
                            return "June";
                        else if (monthNumber === 6)
                            return "July";
                        else if (monthNumber === 7)
                            return "August";
                        else if (monthNumber === 8)
                            return "September";
                        else if (monthNumber === 9)
                            return "October";
                        else if (monthNumber === 10)
                            return "November";
                        else if (monthNumber === 11)
                            return "December";
                    }
                }
            },

            getFullYear: function () {
                return getFullYear_I_1L();



                /**
                 * Local helper functions
                 */
                function getFullYear_I_1L() {
                    var d = new Date();

                    return d.getFullYear();
                }
            }
        },

        Contexts: {
            ProjectsContentContext: {
                parentContainerCssClass: null,
                dataDivContainerCssClassName: null,
                dataDivLineDefinitionContainerCssClassName: null,
                errorDivContainerCssClassName: null,
                isFirstLineHoldingTitle: false,
                isLastLineHoldingCreationDate: false,
                titleCssClassName: null,
                creationDateCssClassName: null,

                return_data_instead_of_loading_into_DOM: true,
                onReturnDataCallback: null,
                onInternalDOMUploadDataCallback: null,

                use_flat_file_storage_view_bag_data: false,
                flat_file_storage_view_bag_data: null
            }
        }
    };

    /* ~ private variables */



    /* Public API */

    self.GET_MAIN_MODEL = _CUSTOM_MODEL_OBJECT;

    /* ~ Public API */



    /* Expose module API to the outside world */
    window.moduleModel = window.moduleModel || self;
})(window);