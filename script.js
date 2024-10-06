const body = document.querySelector("body"),
   hourHand = document.querySelector(".hour"),
   minuteHand = document.querySelector(".minute"),
   secondHand = document.querySelector(".second"),
   swicthMode = document.querySelector(".mode-switch")

const currantYear = document.querySelector('.year')
   currantMonth = document.querySelector('.month')
   currantDate = document.querySelector('.currant-date')
   fullDate = document.querySelector('.full-date')

   if(localStorage.getItem("mode") === "Drak Mode" ){
      body.classList.add('drak');
      swicthMode.textContent = "Light Mode";
   }  

  
  swicthMode.addEventListener('click' , () => {
    body.classList.toggle('drak');

    const isDrakMode = body.classList.contains('drak') 
    
    swicthMode.textContent = isDrakMode ? "Light Mode" : "Drak Mode";

    localStorage.setItem("mode" , isDrakMode ? "Drak Mode" : "Light Mode" )

  })

  const updateTime = () => {
    let date = new Date() ,
      scoToDeg = (date.getSeconds() / 60) * 360;
      minToDeg = (date.getMinutes() / 60) * 360;
      hourToDeg = (date.getHours() / 12) * 360;

    
    secondHand.style.transform = `rotate(${scoToDeg}deg)`
    minuteHand.style.transform = `rotate(${minToDeg}deg)`
    hourHand.style.transform = `rotate(${hourToDeg}deg)`
  };

   setInterval(updateTime,1000);
   updateTime();


   const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

   const upodateDate = () => {
    let date = new Date(),
      year = date.getFullYear();
      month = monthNames[date.getMonth()];
      nowdate = days[date.getDate()];
      monthNomber = date.getMonth() + 1
      nowdateNumber = date.getDate()
      fullyear = (nowdate + ' / ' + month + ' / ' + year);


      if(monthNomber.length < 2){
        monthNomber = '0' + monthNomber;
        console.log(monthNomber)
      }

      if(nowdateNumber.length < 2) {
        nowdateNumber = '0' + nowdateNumber
      }
      currantYear.textContent = year;
      currantMonth.textContent = monthNomber;
      currantDate.textContent = nowdateNumber;
      fullDate.textContent = fullyear;
    }

   upodateDate();