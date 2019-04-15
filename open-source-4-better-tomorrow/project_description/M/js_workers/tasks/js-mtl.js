/* eslint-disable no-empty */
/* eslint-disable valid-jsdoc */

/*
 * Module Task Library
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


    /* private methods */

    function doInternalConversion_2_I_1L(storageData, moduleDOM_Object) {
        // reference required CSS selectors
        var parentContainerCssClass = moduleDOM_Object.parentContainerCssClass;
        var dataDivContainerCssClassName = moduleDOM_Object.dataDivContainerCssClassName;
        var dataDivLineDefinitionContainerCssClassName = moduleDOM_Object.dataDivLineDefinitionContainerCssClassName;
        var errorDivContainerCssClassName = moduleDOM_Object.errorDivContainerCssClassName;
        var isFirstLineHoldingTitle = moduleDOM_Object.isFirstLineHoldingTitle;
        var isLastLineHoldingCreationDate = moduleDOM_Object.isLastLineHoldingCreationDate;
        var titleCssClassName = moduleDOM_Object.titleCssClassName;
        var creationDateCssClassName = moduleDOM_Object.creationDateCssClassName;

        // core logic
        var emptyString = "";
        var dataObjectArray = storageData.split("},");
        var dataObjectArrayLength = dataObjectArray.length;

        for (i = 0; i < dataObjectArrayLength; i++) {
            var dataEntryArray = dataObjectArray[i].replace("{", emptyString).replace("}", emptyString).split("\n");
            dataEntryArray = removeEmptyArrayItems_I_2L(dataEntryArray);
            var dataEntryArrayLength = dataEntryArray.length;

            var dynamicDiv = $("<div class=\"" + dataDivContainerCssClassName + "\" />");

            var lineDefinitionDiv;
            for (j = 0; j < dataEntryArrayLength; j++) {
                if (j === 0 && isFirstLineHoldingTitle) {
                    lineDefinitionDiv = $("<div class=\"" + titleCssClassName + "\" />");
                    $(lineDefinitionDiv).prop("innerHTML", dataEntryArray[j]);

                    $(dynamicDiv).append(lineDefinitionDiv);
                } else if (j === dataEntryArrayLength - 1 && isLastLineHoldingCreationDate) {
                    lineDefinitionDiv = $("<div class=\"" + creationDateCssClassName + "\" />");
                    $(lineDefinitionDiv).prop("innerHTML", dataEntryArray[j]);

                    $(dynamicDiv).append(lineDefinitionDiv);
                } else {
                    lineDefinitionDiv = $("<div class=\"" + dataDivLineDefinitionContainerCssClassName + "\" />");
                    $(lineDefinitionDiv).prop("innerHTML", dataEntryArray[j]);

                    $(dynamicDiv).append(lineDefinitionDiv);
                }
            }
            $(parentContainerCssClass).append(dynamicDiv);
        }



        /**
         * Local helper functions
        */
        function removeEmptyArrayItems_I_2L(inputArray) {
            var outputArray = [];

            var outputArrayIndex = -1;
            for (indexStart = 0; indexStart < inputArray.length; indexStart++) {
                if (validateAgainstNonPrintableChars_I_3L(inputArray[indexStart])) {
                    outputArray.push(null);
                    outputArrayIndex += 1;
                    outputArray[outputArrayIndex] = inputArray[indexStart];
                }
            }

            return outputArray;



            /**
             * Local helper functions
            */
            function validateAgainstNonPrintableChars_I_3L(inputString) {
                if (inputString.length === 0)
                    return false;
                if (inputString.length === 1 && (inputString.charCodeAt(0) === 13 || inputString.charCodeAt(0) === 10))
                    return false;

                return true;
            }
        }
    }

    function loadDynamicallyContent_I_1L(itemPath, callback) {
        if (typeof Storage !== "undefined") {
            var xhr = createXmlHttpRequest_I_2L("", callback, false);

            xhr.open("GET", itemPath, true);
            xhr.send(null);
        }



        /**
         * Local helper functions
        */
        function createXmlHttpRequest_I_2L(itemNameForLaterAccess, callback, doCache) {
            // create request
            var xhr = new XMLHttpRequest();

            // store custom variable into request
            xhr.itemNameForLaterAccess = itemNameForLaterAccess;

            // handle request flow change
            xhr.onreadystatechange = function () {
                try {
                    if (this.status === 200 && this.readyState === 4) {
                        if (doCache) {
                            sessionStorage.setItem(this.itemNameForLaterAccess, this.responseText);
                            callback();
                        } else {
                            callback(this.responseText);
                        }
                    }
                } catch (error) {}
            };

            return xhr;
        }
    }

    /* ~ private methods */



    /* Public API */

    self.fillChildContainersUnderGivenParentContainer_2 = function (storageData, moduleDOM_Object) {
        return doInternalConversion_2_I_1L(storageData, moduleDOM_Object);
    };

    self.loadDynamicallyContent = function (itemPath, callback) {
        return loadDynamicallyContent_I_1L(itemPath, callback);
    };

    /* ~ Public API */



    // Expose module API to the outside world
    window.jsUtilities = window.jsUtilities || self;
})(window);