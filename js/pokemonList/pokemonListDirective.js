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
 * ```
 *
 */
angular.module('pokemonApp').directive('pokemonList', [
    function () {
        return {
            restrict: 'E',
            scope: {},
            controller: 'pokemonListController',
            template: [
                '   <div class="cgm-row">',
                '       <div>',
                '           <div>',
                '           </div>',
                '       </div>',
                '   </div>'
            ].join(' ')
        };
    }]);
}(angular));