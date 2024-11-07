// Create AngularJS module and controller
var app = angular.module('BuZzApp', []);

app.controller('MainController', ['$scope', function($scope) {
    // Variables for search form
    $scope.booking = {
        origin: '',
        destination: '',
        date: ''
    };

    // Variables for contact form
    $scope.contact = {
        name: '',
        email: '',
        message: ''
    };

    $scope.showContactModal = false;

    // Function to swap origin and destination
    $scope.swapOriginDestination = function() {
        let temp = $scope.booking.origin;
        $scope.booking.origin = $scope.booking.destination;
        $scope.booking.destination = temp;
    };

    // Function to search buses
    $scope.searchBuses = function() {
        console.log('Searching buses from', $scope.booking.origin, 'to', $scope.booking.destination, 'on', $scope.booking.date);
        // You can replace this with actual API call for bus search
    };

    // Function to show the contact modal
    $scope.openContactModal = function() {
        $scope.showContactModal = true;
    };

    // Function to close the contact modal
    $scope.closeModal = function() {
        $scope.showContactModal = false;
    };

    // Function to handle contact form submission
    $scope.sendMessage = function() {
        console.log('Sending message from', $scope.contact.name, 'with email', $scope.contact.email);
        // Implement form submission logic here
    };

    // Function to search via search box
    $scope.search = function() {
        console.log('Searching for', $scope.searchText);
        // You can replace this with search logic
    };
}]);
