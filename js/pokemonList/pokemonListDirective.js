/*
 * pokemonListDirective.js
 * Date of creation: 16.03.2016
 */

(function (angular) {
    'use strict';

    /**
     *
     * *HTML*
     * ```html
     *  <pokemon-list></pokemon-list>
     *
     */
    angular.module('pokemonApp').directive('pokemonList', [
        function () {
            return {
                restrict: 'E',
                scope: {},
                controller: 'pokemonListController',
                template: [
                    '<div class="row">',
                        '<div class="col-sm-5 col-md-4" ng-repeat="pokemon in model.objects">',
                            '<div class="thumbnail">',
                                '<img src="http://pokeapi.co/media/img/{{pokemon.pkdx_id}}.png " alt="..." class="pokemonPic">',
                                '<div class="caption">',
                                    '<h3>{{pokemon.name}}</h3>',
                                    '<h4><span class="label label-warning">{{getAbilities(pokemon)[0]}}</span></h4>',
                                '</div>',
                            '</div>',
                        '</div>',
                        '<div class=""col-sm-6 col-md-6"><button type="button" class="btn btn-info btn-lg btn-block" ng-click="loadMore(model.meta.next)">Load more</button></div>',
                    '</div>'
                ].join(' ')
            };
        }]);
}(angular));

