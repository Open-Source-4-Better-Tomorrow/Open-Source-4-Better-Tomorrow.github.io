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

                this._downlodRootFolder = this._siteRootFolder + "project_description/M/data/dynamic_data/";

                this._mainPageRedirectionUrl = this._siteRootFolder + "main/V/View.html";

                this._trademarkDefinition = "Q&#8482;" + "&nbsp;" + _CUSTOM_MODEL_OBJECT.Functions.getFullYear();

                this._pathToConfig = this._siteRootFolder + "project_description/config.txt";
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

            _trademarkDefinition: "",
            _trademarkExplanation: "This idea is not for sale.",

            _openSourceProjectKey: "openSourceProjectKey",

            _mainPageRedirectionUrl: "",

            _currentStorageFormatExtension: ".txt",

            _standardEvent_click: "customClick",

            _pathToConfig: "",

            _zipDownloadAnimationHandler: null,

            _view_Template_Name: "main-view-template.html"
        },

        Functions: {
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
            ProjectDescriptionContext: {
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

    self.GET_PROJECT_DESCRIPTION_MODEL = _CUSTOM_MODEL_OBJECT;

    /* ~ Public API */



    /* Expose module API to the outside world */
    window.moduleModel = window.moduleModel || self;
})(window);