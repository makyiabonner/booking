
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


export const getDropdownOptions = (selectedOption) => {
    const options = [];
    for (let i = 0; i <= 6; i++){
        options.push(<option onClick={selectedOption = i} value={i}>{i}</option>);
    };
    return options;
}