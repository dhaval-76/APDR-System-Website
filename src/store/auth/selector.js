export const authUserIdSelector = (state) => state.auth.userId;

export const authEmailSelector = (state) => state.auth.email;

export const authNameSelector = (state) => state.auth.name;

export const authIsAuthenticatedSelector = (state) => state.auth.isAuthenticated;

export const authIsLoadingSelector = (state) => state.auth.isLoading;

export const authAccessTokenSelector = (state) => state.auth.accessToken;

export const authErrorSelector = (state) => state.auth.error;
