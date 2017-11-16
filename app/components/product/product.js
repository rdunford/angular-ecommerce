angular.module('ecommerce').component('product', {
  templateUrl:'app/components/product/product.html',
  controller:function(cartSrvc){
    this.addToCart = cartSrvc.addItem;
  },
  controllerAs:'pd',
  bindings:{
    product:'<', // < One Way Binding
                 // = Two Way Binding
    buttonLabel:'@', // @ String Binding
    buttonAction:'&' // & Action Binding
  },
})
