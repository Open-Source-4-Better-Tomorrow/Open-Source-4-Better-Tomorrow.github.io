/* eslint-disable valid-jsdoc */

/*
 * Module that provides some help in navigation between Model and View.
 * This single module is part of the bigger one, that stands for Controller in the MVC design pattern.
 *
 *
 * Author: Łukasz Dąbrowski
 * Title : Software Engineer
 *
 * (c) C4B Solutions / C4B Software
 *
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
*/

(
    function () {
        var self = this;


        /* private variables */

        var _moduleModel;

        /* ~ private variables */




        /* private functions */

        function initializeModel_I_1L() {
            // force initialization of a model
            moduleModel.GET_PROJECT_DESCRIPTION_MODEL.__init__();

            _moduleModel = {
                GET: moduleModel.GET_PROJECT_DESCRIPTION_MODEL
            };
        }

        function updateMainView_I_1L() {
            // get current main view's url
            var currentUrl = location.href.substring(0, location.href.lastIndexOf('/') + 1) + _moduleModel.GET.Variables._view_Template_Name;

            var currentUrl_HTML = sessionStorage.getItem(currentUrl);

            var pageHEAD = currentUrl_HTML.substring(currentUrl_HTML.indexOf('<head>'), currentUrl_HTML.lastIndexOf('</head>'));

            var pageBody = currentUrl_HTML.substring(currentUrl_HTML.indexOf('<body>'), currentUrl_HTML.lastIndexOf('</body>'));

            $('head').prop('innerHTML', pageHEAD);
            $('body').prop('innerHTML', pageBody);
        }

        function loadCSS_I_1L() {
            ral.GET_RAL_OBJECT.Loader.loadAsync(
                [
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/project_description/V/css/main-view/normalize.css',

                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/project_description/V/css/main-view/page__initialize.css',

                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/project_description/V/css/main-view/page__header___initialize.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/project_description/V/css/main-view/page__header___logo.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/project_description/V/css/main-view/page__header___leading_thought.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/project_description/V/css/main-view/page__header___motto.css',

                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/project_description/V/css/main-view/page__main___initialize.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/project_description/V/css/main-view/page__main___content.css',

                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/project_description/V/css/main-view/page__footer.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/project_description/V/css/main-view/page__misc.css',
                    'https://fonts.googleapis.com/css?family=Aldrich',
                    'https://fonts.googleapis.com/css?family=Pompiere',
                    'https://fonts.googleapis.com/css?family=Special+Elite',
                    'https://fonts.googleapis.com/icon?family=Material+Icons'
                ],
                'css',
                function () {
                    // on having all CSS loaded, inject all static text, enable navigation, and handle all visual issues
                    injectStaticLabels_and_BindActions_I_2L();
                }
            );



            /**
             * Local helper functions
            */
            function injectStaticLabels_and_BindActions_I_2L() {
                stopProgressBar_I_3L();

                setDefaults_I_3L();

                assignEventHandlers_I_3L();



                /**
                 * Local helper functions
                */
                function stopProgressBar_I_3L() {
                    // clear animation interval that is a window-wide accessible
                    clearInterval(window._animationIntervalHandler);
                }

                function setDefaults_I_3L() {
                    $('.trademark').prop('innerHTML', _moduleModel.GET.Variables._trademarkDefinition);

                    $('.explanation').prop('innerHTML', _moduleModel.GET.Variables._trademarkExplanation);
                }

                function assignEventHandlers_I_3L() {
                    // setup go back to C4B Software landing page animation
                    setupGoToC4BSolutionsAnimation_I_4L();

                    // go back to C4B Software landing page
                    $(".logo").click(function () {
                        return goToMainPage_I_4L();
                    });

                    // setup download zip animation handler
                    setupDownloadZipAnimation_I_3L();



                    /**
                     * Local helper functions
                    */
                    function setupGoToC4BSolutionsAnimation_I_4L() {
                        customHoverAnimationAPI.GET_HOVER_OBJECT.Factory.HoverAnimationObject.createNewInstance(
                            '.logo',
                            5000,
                            500,
                            function onHoverIn() {
                                $('.logo').css('background-image', 'url("/open-source-4-better-tomorrow/project_description/V/images/logo_hover.png")');
                            },
                            function onHoverOut() {
                                $('.logo').css('background-image', 'url("/open-source-4-better-tomorrow/project_description/V/images/logo.png")');
                            }
                        ).Functions.startAnimation();
                    }

                    function goToMainPage_I_4L() {
                        // generate token for this GET request
                        var token = activeBrowserAddressBarUtility.getToken();

                        window.location.href = _moduleModel.GET.Variables._mainPageRedirectionUrl + token;
                    }

                    function setupDownloadZipAnimation_I_3L() {
                        customHoverAnimationAPI.GET_HOVER_OBJECT.Factory.HoverAnimationObject.createNewInstance(
                            '.project_download .value a',
                            5000,
                            500,
                            function onHoverIn() {
                                $('.project_download .value a').css('background-color', '#ffffff');
                                $('.project_download .value a').css('color', '#C10C06');
                            },
                            function onHoverOut() {
                                $('.project_download .value a').css('background-color', '#C10C06');
                                $('.project_download .value a').css('color', '#ffffff');
                            }
                        ).Functions.startAnimation();
                    }
                }
            }
        }

        function on_SAAL_BeingAccessible_I_1L() {
            /**
             * Setup two callbacks:
             *  - [onInternalDOMUploadDataCallback] - set callback to do internal DOM data upload [in this case no such requirement !]
             *
             *  - [onReturnDataCallback] - set callback to invoke on successfull completion of returning external data or notify about successfull completion of internal DOM data upload
            */

            _moduleModel.GET.Contexts.ProjectDescriptionContext.onReturnDataCallback = finalizeProcessOfDataLoading_I_2L;

            // set project context
            setProjectContext_I_2L();

            // load module data asynchronously given current configuration of module config and data loading context object
            window.rsaal.getModuleData(_moduleModel.GET.Variables._pathToConfig, _moduleModel.GET.Contexts.ProjectDescriptionContext, _moduleModel.GET.Constants._dataFetchingTimeInterval);



            /**
             * Local helper functions
            */
            function setProjectContext_I_2L() {
                // fetch id of project
                var openSourceProject_Id_Attr = sessionStorage.getItem(_moduleModel.GET.Variables._openSourceProjectKey);
                // clean it
                openSourceProject_Id_Attr = openSourceProject_Id_Attr.substring(1).toLowerCase();

                // set context for being used only if config file uses flat file storage, otherwise it has no effect
                _moduleModel.GET.Contexts.ProjectDescriptionContext.use_flat_file_storage_view_bag_data = true;
                _moduleModel.GET.Contexts.ProjectDescriptionContext.flat_file_storage_view_bag_data = openSourceProject_Id_Attr + _moduleModel.GET.Variables._currentStorageFormatExtension;
            }

            function finalizeProcessOfDataLoading_I_2L(abstractionOfData) {
                // load data into DOM
                loadProjectDetails_I_3L(abstractionOfData);

                // apply large screen support
                applyCustomSettingsBasedOnCurrentResolution_I_3L();

                // show main page
                showPage_I_3L();



                /**
                 * Local helper functions
                */
                function loadProjectDetails_I_3L(abstractionOfData) {
                    // convert to JSON object
                    var projectDataObject = JSON.parse(abstractionOfData);

                    // proceed with DOM update
                    mapObjectToContainers_I_4L(projectDataObject);



                    /**
                     * Local helper functions
                    */
                    function mapObjectToContainers_I_4L(projectDataObject) {
                        // iterate over all project description props
                        for (var property in projectDataObject) {

                            // access proper HTML container metadata
                            var container = projectDataObject[property];

                            // access some core props of this container
                            var containerSelector = container.containerSelector;
                            var propertyName = container.propertyName;
                            var propertyValue = container.propertyValue;

                            // update DOM HTML container
                            $(containerSelector).prop(propertyName, propertyValue);
                        }
                    }
                }

                function applyCustomSettingsBasedOnCurrentResolution_I_3L() {
                    // adjust site height for large screens, i.e. 27"
                    if (screen.width === 2560 && screen.height === 1440) {
                        $(".leading_thought").css("margin-top", "12%");
                    }
                }

                function showPage_I_3L() {
                    $(".page").css("visibility", "visible");
                }
            }
        }

        /* ~ private functions */



        /* Public API */

        /**
         * Run necessary pending operations after the fast initial view,
         * the most important of which is initializing the model.
        */
        self.runPendingOperationsAfterFastInitialView = function () {
            initializeModel_I_1L();

            updateMainView_I_1L();

            loadCSS_I_1L();

            //loadCacheIfAny_I_1L();

            on_SAAL_BeingAccessible_I_1L();
        };

        /* ~ Public API */



        // Expose module API to the outside world
        window.moduleControllerHelper = window.moduleControllerHelper || self;
    }
)();