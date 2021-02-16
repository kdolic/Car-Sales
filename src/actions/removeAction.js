export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = (oldFeature) => {
    return({type: REMOVE_FEATURE, payload: oldFeature})
}