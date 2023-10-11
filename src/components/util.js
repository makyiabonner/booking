
export const TODAY = new Date();
export const TOMORROW = new Date(TODAY);

export const debounce = (func, delay) =>{
    let timer;
    return function (...args){
        if (timer) {
            clearTimeout(timer);
        }
    timer = setTimeout(() => func(...args), delay);
    }
}

export const checkValidInputs = (city,checkIn,checkOut, func) => {
    if (!city) {
        return 'Please enter city';
    }

    if (!checkIn) {
        return 'Please enter check-in date';
    }

    if (!checkOut) {
        return 'Please enter check-out date';
    }

    if (checkOut < checkIn || checkOut < TODAY) {
        return 'Check-out dates cannot be before Check-in dates';
    }

    if (checkIn < TODAY) {
        return 'Check-in dates cannot be before the current date';
    }

    if (typeof func === 'function') {
        return func;
    }
}

export const getDropdownOptions = (selectedOption) => {
    const options = [];
    for (let i = 0; i <= 6; i++){
        options.push(<option onClick={selectedOption = i} value={i}>{i}</option>);
    };
    return options;
}