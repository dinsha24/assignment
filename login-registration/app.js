Vue.component("tab-login", {
    template: "#login",
    data(){
      return{
        email:'',
        password:''
      }
    },
    methods:{
      login:function(){
        if(localStorage.getItem('email')===this.email && localStorage.getItem('password')===this.password )
        {
          alert("Login Successful");
        }
        else{
          alert("No such user");
        }
      }
    }
  });
  Vue.component("tab-register", {
    template: "#register",
    data(){
      return{
        name:'',
        email:'',
        password:''
      }
  
    },
    methods:{
      register: function(){
        localStorage.setItem('name',this.name);
        localStorage.setItem('email',this.email);
        localStorage.setItem('password',this.password);
        alert("User registered");
        
      }
    }
  });
  
  
  new Vue({
    el: "#login-registration",
    data: {
      currentTab: "login",
      tabs: ["Login", "Register"],
     
    },
    computed: {
      currentTabComponent: function() {
        return "tab-" + this.currentTab.toLowerCase();
      },
      
  
    },
    
  });