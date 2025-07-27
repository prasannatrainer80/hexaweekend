const initialState = {
    sname : ''
}

const NameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AJAY':
            return { ...state, sname: 'Hi I am Ajay' };
        case 'ABHIRAMI':
            return { ...state, sname: 'Hi I am Abhirami' };
        case 'AARTHI':
                return { ...state, sname: 'Hi I am Aarthi' };
    
        default:
            return state;
    }
}
// export const ajay = () => ({ type: 'AJAY' });
// export const aarthi = () => ({ type: 'AARTHI' });
// export const abhirami = () => ({type : 'ABHIRAMI'});

export default NameReducer;

