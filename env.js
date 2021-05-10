const variables = {
  development: {
    mapApiKey: '2PCN1qKhOdbAxEyGmNsbqOxOSPOlpFWc8sk2ICR6Vgc'
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