const variables = {
  development: {
    mapApiKey: '9ff96aa687014fbaa1b9471eff92d524'
  },
  production: {
    mapApiKey: '1234TEST'
  }
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development; // return this if in development mode
  }
  return variables.production; // otherwise, return this
};

export default getEnvVariables; // export a reference to the function