import React, { createContext, useReducer } from "react";

const initialState = {
  activeStep: 1,
  firstStep: {},
  secondStepStep: {},
  thirdStep: {},
  fourthStep: {},
};

export const MultiStepContext = createContext(initialState);
export const MultiStepContextDispatch = createContext(() => {});

export default function ProviderMultiStepFromRegister({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "add-first-step": {
        return {
          ...state,
          firstStep: {
            ...action.value,
          },
        };
      }
      case "add-second-step": {
        return {
          ...state,
          secondStepStep: {
            ...action.value,
          },
        };
      }
      case "add-third-step": {
        return {
          ...state,
          thirdStep: {
            ...action.value,
          },
        };
      }
      case "add-fourth-step": {
        return {
          ...state,
          fourthStep: {
            ...action.value,
          },
        };
      }
      case "increase-activeStep": {
        if (state.activeStep === 4) return state;
        return {
          ...state,
          activeStep: state.activeStep + 1,
        };
      }
      case "decrease-activeStep": {
        if (state.activeStep === 1) return state;
        return {
          ...state,
          activeStep: state.activeStep - 1,
        };
      }
      case "set-activeStep": {
        if (action.value < 1 || action.value > 4) return state;
        return {
          ...state,
          activeStep: action.value,
        };
      }
    }
    throw Error("Unknown action");
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MultiStepContext.Provider value={state}>
      <MultiStepContextDispatch.Provider value={dispatch}>
        {children}
      </MultiStepContextDispatch.Provider>
    </MultiStepContext.Provider>
  );
}
