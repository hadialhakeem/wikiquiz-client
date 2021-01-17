export const EnvironmentDev = {
    name: 'dev',
    production: false,
    apiUrl: 'http://127.0.0.1:5000',
};


export const EnvironmentProd = {
    name: 'prod',
    production: true,
    apiUrl: 'https://wikiquiz-serve.herokuapp.com',
};

let Environment = {};

if (window.location.host.includes('localhost')) {
    Environment = EnvironmentDev;
}
else {
    Environment =  EnvironmentProd;
}

export default Environment;
