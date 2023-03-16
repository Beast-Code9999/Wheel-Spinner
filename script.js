const WheelSpinnerUI = (function WheelSpinnerUI() {
    const WheelChildElem = (function WheelChildElem() {





        const updateWheel = function updateWheel() {
            
        }

        return {
            updateWheel,
        }
    })();


    const init = function init() {
        WheelChildElem.updateWheel();
    }
    
    return {
        init:init
    }
})();

const WheelSpinner = (function WheelSpinner() {

    const init = function init() {
        WheelSpinnerUI.init()
    }

    return {
        init: init
    }
})();

$(document).ready(function() {
    WheelSpinner.init();
});