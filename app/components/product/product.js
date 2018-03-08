angular.module('ecommerce').component('product', {
    templateUrl: 'app/components/product/product.html',
    controller: function () {
        
    },
    controllerAs: 'pd',
    bindings: {
        //What you're allowed to give : how it interacts with it
        product: '<', // < One way data bind child cannot modify parent data 
                    // = Two way data bind child component can modify data
                    // @ String binding - passes down a string without using a variable?
                    // & Action binding - passes down code to be ran?
        buttonLabel: '@',
        buttonAction: '&'
    }
})