'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
$scope.phones = [
  {'name': 'Nexus S',
   'snippet': 'Fast just got faster with Nexus S',
   'size': '5.5 inch'},

  {'name': 'Motorola XOOM™ with Wi-Fi',
   'snippet': 'The Next, Next Generation tablet',
    'size':'5.0 inch'},

  {'name': 'MOTOROLA XOOM™',
   'snippet': 'The Next, Next Generation tablet.'}
];
});