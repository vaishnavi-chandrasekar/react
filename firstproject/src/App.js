import logo from './logo.svg';
import './App.css';
import PriceCard from './PriceCard'

function App() {
  let List=[
    {
      plan : "Free",
      price : 20,
      currency :"$",
      period : "/month",
      features : [
        {
          name: "Single User",
          enable: true,
        },
        {
          name: "5GB Storage",
          enable: true,
        },
        {
          name: "Unlimited Public Projects",
          enable: true,
        },
        {
          name: "Community Access",
          enable: true,
        },
        {
          name: "Unlimited Private Projects",
          enable: false,
        },
        {
          name: "Dedicated phone support",
          enable: false
        },

        {
          name: "Free subdomain",
          enable: false
        },
        {
          name: "Monthly status report",
          enable: false
        },
      ]
    },
        {
          plan : "Pro",
          price : 50,
          currency :"$",
          period : "/month",
          features : [
            {
              name: "5 Users",
              enable: true,
              isStrong:true,
            },
            {
              name: "50GB Storage",
              enable: true
            },
            {
              name: "Unlimited Public Projects",
              enable: true
            },
            {
              name: "Community Access",
              enable: true
            },
            {
              name: "Unlimited Private Projects",
              enable: true
            },
            {
              name: "Dedicated phone support",
              enable: true
            },
    
            {
              name: "Free subdomain",
              enable: true
            },
            {
              name: "Monthly status report",
              enable: false
            },
          ]
        },
            {
              plan : "premium",
              price : 80,
              currency :"$",
              period : "/month",
              features : [
                {
                  name: "unlimited Users",
                  enable: true,
                  isStrong:true,
                },
                {
                  name: "150GB Storage",
                  enable: true
                },
                {
                  name: "Unlimited Public Projects",
                  enable: true
                },
                {
                  name: "Community Access",
                  enable: true
                },
                {
                  name: "Unlimited Private Projects",
                  enable: true
                },
                {
                  name: "Dedicated phone support",
                  enable: true
                },
        
                {
                  name: "Free subdomain",
                  enable: true
                },
                {
                  name: "Monthly status report",
                  enable: true
                },
              
              ]
            },

  ]
  return <section class="pricing py-5">
    <div class="container">
     <div class="row">
       {
     List.map(obj=><PriceCard data={obj}></PriceCard>)
       }
  
     </div>
    </div>
    </section>
    
}

export default App;
