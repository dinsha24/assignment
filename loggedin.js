const array=[
    {id: 1, name: 'Amit Kumar',user:"false"},
    {id: 2, name: 'Rahul Dixit',user:"false"},
    {id: 3, name: 'Ravi Joshi',user:"true"},
    {id: 4, name: 'Rohit Verma',user:"false"},
    {id: 5, name: 'Ajay Jain',user:"true"}
    ];
    var isLoggedIn=array.filter(function(logged){
        return logged.user=='true'
    });
    console.log(isLoggedIn);
   
     
