export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function addFeature(feature){
    return { type: ADD_FEATURE, payload: feature }
}

export function removeFeature(oldFeature){
    return { type: REMOVE_FEATURE, payload: oldFeature }
}
