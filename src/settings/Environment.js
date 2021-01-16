export const EnvironmentDev = {
    name: 'dev',
    production: false,
    apiUrl: 'http://127.0.0.1:5000/api',
};


export const EnvironmentProd = {
    name: 'prod',
    production: true,
    apiUrl: 'http://127.0.0.1:5000/api',
};

let Environment = {};

if (window.location.host.includes('localhost')) {
    Environment = EnvironmentDev;
}
else {
    Environment =  EnvironmentProd;
}

export default Environment;
