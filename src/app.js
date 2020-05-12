import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
 
   new Vue({
    el: "#app",
    data: {
      currencies: [],
      rates: []
    },
    mounted(){
      this.fetchCurrency();
    },
    methods: {
     fetchCurrency: function(){
       const request = fetch("https://api.exchangeratesapi.io/latest")
       .then(response => response.json())
       .then(data => this.currencies = data)
       
        }
    }
   })

})