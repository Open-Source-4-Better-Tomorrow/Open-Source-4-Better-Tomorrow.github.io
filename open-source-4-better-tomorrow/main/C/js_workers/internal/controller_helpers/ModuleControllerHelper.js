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
            moduleModel.GET_MAIN_MODEL.__init__();

            _moduleModel = {
                GET: moduleModel.GET_MAIN_MODEL
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
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/main/V/css/main-view/normalize.css',

                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/main/V/css/main-view/page__initialize.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/main/V/css/main-view/page__header___initialize.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/main/V/css/main-view/page__header___logo.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/main/V/css/main-view/page__header___leading_thought____initialize.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/main/V/css/main-view/page__header___leading_thought____explanation_1.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/main/V/css/main-view/page__header___leading_thought____explanation_2.css',

                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/main/V/css/main-view/page__main___initialize.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/main/V/css/main-view/page__main___content.css',

                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/main/V/css/main-view/page__footer.css',
                    '//' + _moduleModel.GET.Variables._serverRootDir + '/open-source-4-better-tomorrow/main/V/css/main-view/page__misc.css',
                    'https://fonts.googleapis.com/css?family=Aldrich',
                    'https://fonts.googleapis.com/css?family=Special+Elite',
                    'https://fonts.googleapis.com/css?family=Pompiere',
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
                    $('.year').prop('innerHTML', _moduleModel.GET.Variables._copyrightYear);

                    $('.explanation').prop('innerHTML', _moduleModel.GET.Variables._registeredExplanation);

                    $('.of_what').prop('innerHTML', _moduleModel.GET.Variables._currentYear);
                }

                function assignEventHandlers_I_3L() {
                    document.addEventListener(_moduleModel.GET.Variables._standardEvent_click, function (event) {
                        handleClick_I_1L(event);
                    });

                    setupGoToGitHubRepoAnimation_I_3L();

                    setupGoToC4BSolutionsAnimation_I_3L();

                    // go directly to GitHub repo
                    $('.open_source').click(function() {
                        goToGitHubRepo_I_3L();
                    });

                    // go back to C4B Solutions
                    $('.idea_powered_by').click(function () {
                        goToC4BSolutions_I_3L();
                    });

                    // download entire code
                    $('.download').click(function () {
                        goToDownloadCode_I_3L();
                    });

                    $('.json2sql').click(function (event) {
                        goToJson2sql_I_3L(event);
                    });

                    $('.sql2json').click(function (event) {
                        goToSql2json_I_3L(event);
                    });

                    $('.sql2sql').click(function (event) {
                        goToSql2sql_I_3L(event);
                    });

                    $('.project_website').click(function (event) {
                        goToProject_Website_I_3L(event);
                    });

                    setupDownloadZipAnimation_I_3L();



                    /**
                     * Local helper functions
                    */
                    function handleClick_I_1L(customEvent) {
                        $(customEvent.detail).css('box-shadow', '2px 2px 2px whitesmoke');

                        setTimeout(function () {
                            sessionStorage.setItem(_moduleModel.GET.Variables._openSourceProjectKey, customEvent.detail);

                            // generate token for this GET request
                            var token = activeBrowserAddressBarUtility.getToken();
                            window.open(_moduleModel.GET.Variables._projectDescriptionRedirectionUrl + token, '_self');
                        }, 500);
                    }

                    function setupGoToGitHubRepoAnimation_I_3L() {
                        customHoverAnimationAPI.GET_HOVER_OBJECT.Factory.HoverAnimationObject.createNewInstance(
                            '.open_source',
                            7000,
                            600,
                            function onHoverIn() {
                                $('.open_source').css('color', '#0062AF');
                                $('.open_source').css('cursor', 'pointer');
                                $('.open_source').css('text-decoration', 'underline');
                                $('.open_source').css('text-decoration-color', 'yellow');
                            },
                            function onHoverOut() {
                                $('.open_source').css('color', '#ffffff');
                                $('.open_source').css('text-decoration', 'none');
                            }
                        ).Functions.startAnimation();
                    }

                    function setupGoToC4BSolutionsAnimation_I_3L() {
                        customHoverAnimationAPI.GET_HOVER_OBJECT.Factory.HoverAnimationObject.createNewInstance(
                            '.idea_powered_by',
                            5000,
                            500,
                            function onHoverIn() {
                                $('.idea_powered_by').css('color', 'yellow');
                                $('.idea_powered_by').css('text-decoration', 'none');
                            },
                            function onHoverOut() {
                                $('.idea_powered_by').css('color', '#ffffff');
                                $('.idea_powered_by').css('cursor', 'pointer');
                                $('.idea_powered_by').css('text-decoration', 'underline');
                            }
                        ).Functions.startAnimation();
                    }

                    function goToGitHubRepo_I_3L() {
                        window.open(_moduleModel.GET.Variables._GitHub_repo_RedirectionUrl, '_blank');
                    }

                    function goToC4BSolutions_I_3L() {
                        window.open(_moduleModel.GET.Variables._C4B_Solutions_RedirectionUrl, '_self');
                    }

                    function goToDownloadCode_I_3L() {
                        window.open(_moduleModel.GET.Variables._downloadCode_RedirectionUrl, '_blank');
                    }

                    function goToJson2sql_I_3L(event) {
                        event.preventDefault();

                        document.dispatchEvent(new CustomEvent(_moduleModel.GET.Variables._standardEvent_click, {
                            bubbles: false,
                            cancelable: false,
                            detail: '.json2sql'
                        }));
                    }

                    function goToSql2json_I_3L(event) {
                        event.preventDefault();

                        document.dispatchEvent(new CustomEvent(_moduleModel.GET.Variables._standardEvent_click, {
                            bubbles: false,
                            cancelable: false,
                            detail: '.sql2json'
                        }));
                    }

                    function goToSql2sql_I_3L(event) {
                        event.preventDefault();

                        document.dispatchEvent(new CustomEvent(_moduleModel.GET.Variables._standardEvent_click, {
                            bubbles: false,
                            cancelable: false,
                            detail: '.sql2sql'
                        }));
                    }

                    function goToProject_Website_I_3L(event) {
                        event.preventDefault();

                        document.dispatchEvent(new CustomEvent(_moduleModel.GET.Variables._standardEvent_click, {
                            bubbles: false,
                            cancelable: false,
                            detail: '.project_website'
                        }));
                    }

                    function setupDownloadZipAnimation_I_3L() {
                        customHoverAnimationAPI.GET_HOVER_OBJECT.Factory.HoverAnimationObject.createNewInstance(
                            '.download',
                            5000,
                            500,
                            function onHoverIn() {
                                $('.download').css('background-color', '#ffffff');
                                $('.download').css('color', '#C10C06');
                            },
                            function onHoverOut() {
                                $('.download').css('background-color', '#C10C06');
                                $('.download').css('color', '#ffffff');
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

            _moduleModel.GET.Contexts.ProjectsContentContext.onReturnDataCallback = loadProjectsContent_I_2L;

            // load module data asynchronously given current configuration of module config and data loading context object
            window.rsaal.getModuleData(_moduleModel.GET.Variables._pathToConfig, _moduleModel.GET.Contexts.ProjectsContentContext, _moduleModel.GET.Constants._dataFetchingTimeInterval);



            /**
             * Local helper functions
            */
            function loadProjectsContent_I_2L(abstractionOfData) {
                processContent_I_3L();

                apply_Content_Defaults_I_3L();



                /**
                 * Local helper functions
                */
                function processContent_I_3L() {
                    // convert to JSON object
                    var projects = abstractionOfData.split('},{');

                    // iterate over all projects
                    for (var i = 0; i < projects.length; i++) {
                        // manage metadata of given project
                        manageProjectData_I_4L(projects[i]);
                    }



                    /**
                     * Local helper functions
                    */
                    function manageProjectData_I_4L(projectData) {
                        // get array of metadata
                        var metadata_array = projectData.split(';');

                        // clean metadata
                        for (var i = 0; i < metadata_array.length; i++) {
                            metadata_array[i] = metadata_array[i].replace('{', '').replace('\r\n', '').replace('\r\n', '').replace('}', '').trim();
                        }

                        /*
                         *  0 - id,
                         *  1 - type,
                         *  2 - description
                        */
                        switch (metadata_array[1]) {
                            case 'type=id':
                                updateProject_using_ID_I_5L(metadata_array[0], metadata_array[2]);
                                break;
                            case 'type=class':
                                updateProject_using_CLASS_I_5L(metadata_array[0], metadata_array[2]);
                                break;
                        }



                        /**
                         * Local helper functions
                        */
                        function updateProject_using_ID_I_5L(id_attr_metadata, description_metadata) {
                            // extract id and description attrs
                            var id_attr = id_attr_metadata.split('=')[1];
                            var description = description_metadata.split('=')[1];

                            // update DOM
                            document.getElementById(id_attr).innerHTML = description;
                        }

                        function updateProject_using_CLASS_I_5L(class_attr_metadata, description_metadata) {
                            // extract class and description attrs
                            var class_attr = class_attr_metadata.split('=')[1];
                            var description = description_metadata.split('=')[1];

                            // update DOM
                            document.getElementsByClassName(class_attr)[0].innerHTML = description;
                        }
                    }
                }

                function apply_Content_Defaults_I_3L() {
                    // adjust site height for large screens, i.e. 27'
                    if (screen.width === 2560 && screen.height === 1440) {
                        $('.page').css('height', '181.5em');

                        $('.footer').css('height', '11.5em');
                    }

                    setTimeout(function () {
                        // adjust height of the main container
                        $('.page').css(
                            'height',
                            (
                                parseInt($('.header').css('height')) +
                                parseInt($('.main').css('height')) +
                                parseInt($('.footer').css('height'))
                            ) + 'px'
                        );

                        // make main content visible
                        $('.page').css('visibility', 'visible');
                        $('.header').css('visibility', 'visible');
                        $('.main').css('visibility', 'visible');
                        $('.footer').css('visibility', 'visible');
                    }, 1000);
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