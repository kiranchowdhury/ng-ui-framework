export const configuration = ($locationProvider: angular.ILocationProvider,
    $mdThemingProvider: ng.material.IThemingProvider) => {
    'ngInject';
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('blue', {
        default: '500'
    });
    $locationProvider.hashPrefix('');
};
