/*
 * pokemonListController.js
 * Date of creation: 16.03.2016
 *
 */

(function (angular) {

    /**
     * @ngdoc controller
     * @module pokemonApp
     * @name pokemonListController
     * @description Contains logic for pokemon list
     *
     */
    angular
        .module('pokemonApp')
        .controller('pokemonListController', function ($scope, $http) {

            function _loadDataFromApi() {
                $http({
                    method: 'GET',
                    url: 'http://pokeapi.co/api/v1/pokemon/?limit=9'
                }).then(function (data) {
                    $scope.model = data.data;
                });
            }

            $scope.getAbilities = function(objects) {
                return _.pluck(objects.abilities, 'name');
            };

            $scope.loadMore = function(url){
                $http.get('http://pokeapi.co/' + url).success(function(data){
                    $scope.meta = data.meta;
                    $scope.model.objects = $scope.model.objects.concat(data.objects);
                });
            };

            _loadDataFromApi();
        });
})(angular);