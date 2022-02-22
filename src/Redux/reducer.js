import { FEATURES } from '../Shared/features';
import { LEADERS } from '../Shared/leaders';

export const initialState = {
    features: FEATURES,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};