export const getFacebookURL = (from) => {
    const rootUrl = `https://www.facebook.com/v16.0/dialog/oauth`;

    const options = {
        redirect_uri: process.env.REACT_APP_FACEBOOK_OAUTH_REDIRECT,
        client_id: process.env.REACT_APP_FACEBOOK_OAUTH_CLIENT_ID,
        state: from,
    };

    const qs = new URLSearchParams(options);

    return `${rootUrl}?${qs.toString()}`;
};