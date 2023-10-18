const FAKE_USER     = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    nationalId: "G300303",
    avatar: "https://i.pravatar.cc/100?u=zz",
};


const initialStateAccount   = {
    user: null,
    isAuth: false,
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false
};

export default function accountReducer(state = initialStateAccount, action) {
    switch(action.type) {
        case "account/login": 
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }

        case "account/logout":
            return initialStateAccount

        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload,
                isLoading: false
            }

        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload
            }

        case "account/convertingCurrency":
            return {
                ...state,
                isLoading: true
            }

        case "account/requestLoan":
            return {
                ...state,
                balance: state.balance + action.payload.amount,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose
            }

        case "account/payLoan":
            return {
                ...state,
                balance: state.balance - state.loan,
                loan: 0,
                loanPurpose: ""
            }

        default: 
            return state
    }
}

export function login(email, password) {
    if(FAKE_USER.email === email && FAKE_USER.password == password) {
        return {
            type: "account/login",
            payload: FAKE_USER
        }
    }
}

export function logout() {
    return {
        type: "account/logout"
    }
}

export function deposit(amount, currency) {
    if(currency === "USD") 
        return { type: "account/deposit", payload: amount }
    
    return async function(dispatch, getState) {
        dispatch({
            type: "account/convertingCurrency"
        });

        // API Call;
        const host  = "api.frankfurter.app";
        const res   = await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`);
        const data  = await res.json();
        const conv  = data.rates.USD;
        
        // return action;
        return dispatch({
            type: "account/deposit",
            payload: conv
        })
    }
    
}

export function withdraw(amount) {
    return {
        type: "account/withdraw",
        payload: amount
    }
}

export function requestLoan(amount, purpose) {
    return {
        type: "account/requestLoan",
        payload: {
            amount: amount,
            purpose: purpose
        }
    }
}

export function payLoan() {
    return {
        type: "account/payLoan"
    }
}