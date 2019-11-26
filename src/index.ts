//let s : string = "Hello ,TypeScript"
//document.querySelectorAll('.app')[0].innerHTML = s

//vue

import Vue from 'vue'
import hello from './components/hello.vue'

let app1 = new Vue({
    el:'.app', 
    components:{
        hello
    },
    template:`<hello/>`
})