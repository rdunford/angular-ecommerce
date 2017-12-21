angular.module('ecommerce').component('product', {
    templateUrl:'app/components/product/product.html',
    controller:function(cartSrvc){
        // this.product = {name:'Shoes',
        //     imageUrl:'https://m.media-amazon.com/images/G/01/6pm/landing/2017/shoes/April/Boat_Shoes._V530666624_.jpg',
        //     description:'These stylish shoes are great for throwing at people.  Holding pencils.  Also could be worn on feet.',
        //     price:40.25
        // }

        this.addItem = ()=>{
            cartSrvc.addItem(this.product)
        }

    },
    controllerAs:'pd',
    bindings:{
        product:'<', // One Way Data Bind
                    // '=' Two way data bind
        buttonLabel:'@', // String Brinding
        buttonAction:'&' // Action Binding
    }


})