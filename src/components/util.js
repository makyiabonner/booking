

export const debounce = (func, delay) =>{
    let timer;
    return function (...args){
        if (timer) {
            clearTimeout(timer);
        }
    timer = setTimeout(() => func(...args), delay);
    }
}


export const getDropdownOptions = () => {
    const options = [];
    for (let i = 0; i <= 6; i++){
        options.push(<option value={i}>{i}</option>);
    };
    return options;
}