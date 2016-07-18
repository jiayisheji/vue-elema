export const queryCategory = function(Store, state) {
    Store.dispatch('SETCATEGORY', state);
};

export const querySearch = function(Store, state) {
    Store.dispatch('SETSEARCH', state);
};
