const REGISTRATION_SENT = "modules/Registration/SENT";

export const registrationSent = values => {
  return {
    type: REGISTRATION_SENT,
    payload: values
  };
};

const initialState = {
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_SENT:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};
