import * as ActionTypes from './ActionTypes';
import { FEATURES } from '../Shared/features';

export const fetchFeatures = () => (dispatch) => {

    dispatch(featuresLoading(true));

    setTimeout(() => {
        dispatch(addFeatures(FEATURES));
    }, 2000);
}

export const featuresLoading = () => ({
    type: ActionTypes.FEATURES_LOADING
});

export const featuresFailed = (errmess) => ({
    type: ActionTypes.FEATURES_FAILED,
    payload: errmess
});

export const addFeatures = (features) => ({
    type: ActionTypes.ADD_FEATURES,
    payload: features
});