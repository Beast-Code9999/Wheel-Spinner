const WheelSpinnerUI = (function WheelSpinnerUI() {
    const WheelChildElem = (function WheelChildElem() {
        let _wheelNum = 6;

        const _updateWheelNum = function _updateWheelNum() {
            const select = document.getElementById('wheel-numbers');

            $("#wheel-numbers").click(function(){
                console.log(select.value);
            })
        }


        const updateWheel = function updateWheel() {
            _updateWheelNum();
        }   

        return {
            updateWheel,
        }
    })();

    const Fidget = (function Fidget() {

        const updateFidget = function updateFidget() {

        }

        return {
            updateFidget,
        }
    })();

    const init = function init() {
        WheelChildElem.updateWheel();
        Fidget.updateFidget();
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