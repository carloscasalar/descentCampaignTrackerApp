'use strict';

/**
 * @ngdoc function
 * @name descentCampaignTrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the descentCampaignTrackerApp
 */
angular.module('descentCampaignTrackerApp')
  .controller('MainCtrl', ['$scope','desModel',function ($scope,desModel) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var main=this;
    main.model = angular.extend({},desModel.getModel());
    main.addInputs={
    	plotAdvance:   desModel.newAdvance(),
    	commonAdvance: desModel.newAdvance(),
    	lieutenant:    desModel.newLieutenant(),
    	hero:          desModel.newHero()               
    };

    main.api = {
    	addPlotAdvance:    addPlotAdvance,    	
    	removePlotAdvance: desModel.removePlotAdvance,
    	
    	addCommonAdvance: addCommonAdvance,
    	removeCommonAdvance: desModel.removeCommonAdvance,

    	addLieutenant: addLieutenant,
    	removeLieutenant: desModel.removeLieutenant,

    	addHero: addHero,
    	removeHero: desModel.removeHero
    };

    function addPlotAdvance(){ 
    	main.addInputs.plotAdvance = _addItem( main.addInputs.plotAdvance,
    		                                   desModel.addPlotAdvance,
    		                                   desModel.newAdvance);
    }

    function addCommonAdvance(){ 
    	main.addInputs.commonAdvance = _addItem( main.addInputs.commonAdvance,
    		                                     desModel.addCommonAdvance,
    		                                     desModel.newAdvance);
    }

    function addLieutenant(){
    	main.addInputs.lieutenant = _addItem( main.addInputs.lieutenant,
    		                                  desModel.addLieutenant,
    		                                  desModel.newLieutenant);
    }

    function addHero(){
    	main.addInputs.hero = _addItem( main.addInputs.hero,
    		                            desModel.addHero,
    		                            desModel.newHero);
    }

    /**
     * Add entity item with attribute name not null using an addItemToModelFunction 
     * if the name is not null. After that returns
     * a new instance of the entity.
     * If the name is null then returns de entity without adding the item to the model
     */
    function _addItem(item,addItemToModelFunction,newItemFunction){
    	if(item && angular.isDefined(item.name) && angular.isString(item.name) && item.name.length>0){
    		addItemToModelFunction(item);
    		return newItemFunction();
    	}else{
    		return item;
    	}

    }
  }]);