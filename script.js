let var1=document.getElementById("location")
let var2=document.getElementById("first")
let var3=document.getElementById("sec1")
let var4=document.getElementById("sec2")
let var14=document.getElementById("message")
let var15=document.getElementById("check1")
window.onload = function() {
    const flagAfterReload = sessionStorage.getItem('flagAfterReload');
    if (flagAfterReload === 'true') {
        var14.setAttribute("id","displaymess")
    var15.setAttribute("id","first")
    }
   else{
setTimeout(()=>{
    var14.setAttribute("id","displaymess")
    var15.setAttribute("id","first")
},3000)
   }
}
var1.addEventListener("keydown",handlekeypress)
function handlekeypress(event){
    if(event.keyCode===13)
    {
    weather()
    var15.setAttribute("id","second")
    var3.setAttribute("id","section1")
    setTimeout(()=>{var4.setAttribute("id","section2")},600)
    }
}
async function weather()
{
    let cityname=document.getElementById("location").value
    if(cityname=="")
    {
            refresh()
    }
    else{
    let apiurl="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=00f45270b91b8b027b59f56776d406f8&units=metric"
    const response = await fetch(apiurl)
    const data=await response.json()
    if(data.cod=="404")
    {
            refresh()
    }
    else
    {
        let var9=document.getElementById("city")
        var9.textContent=cityname.toUpperCase()

        let var5=document.getElementById("celsius")
        var5.textContent=data.main.temp+"°C"

        let var6=document.getElementById("desc")
        let descrip=data.weather[0].main

        var6.textContent=descrip

        let var7=document.getElementById("image")

        switch(descrip)
        {
            case "Clouds":
                var7.src="icons/icons8-cloud-48.png"
                break
            case "Rain":
                var7.src="icons/icons8-heavy-rain-48.png"
                break
            case "Snow":
                var7.src="icons/icons8-snow-48.png"
                break
            case "Clear":
                var7.src="icons/icons8-summer-48.png"
                break
            case "Thunderstorm":
                var7.src="icons/icons8-thunderstorm-48.png"
                break
            case "Drizzle":
                var7.src="icons/icons8-drizzle-16.png"
                break
            case "Dust":
                var7.src="icons/icons8-dust-48.png"
                break
            case "Fog":
                var7.src="icons/icons8-fog-100.png"
                break
            case "Haze":
                var7.src="icons/icons8-haze-48.png"
                break
            case "Sand":
                var7.src="icons/icons8-sand-48.png"
                break
            case "Smoke":
                var7.src="icons/icons8-smog-32.png"
                break
            case "Squall":
                var7.src="icons/icons8-waterspout-48.png"
                break
            case "Tornado":
                var7.src="icons/icons8-tornado-48.png"
                break
            case "Mist":
                var7.src="icons/icons8-mist-100.png"
                break
            default:
                var7.src=".png"
        }
        let var10=document.getElementById("feeltemp")
        var10.textContent=data.main.feels_like+"°C"

        let var11=document.getElementById("mintemperature")
        var11.textContent=data.main.temp_min+"°C"

        let var12=document.getElementById("percentage")
        var12.textContent=data.main.humidity+"%"

        let var13=document.getElementById("km/hr")
        var13.textContent=data.wind.speed+"km/hr"

        let var14=document.getElementById("maxtemperature")
        var14.textContent=data.main.temp_max+"°C"

        let var15=document.getElementById("mbar")
        var15.textContent=data.main.pressure+"mbar"

        let notfound=document.getElementById("nf")
        notfound.style.display="none"
    }
    }
}

function refresh()
{
    if(var4.children){
        let arr=var4.children
        for(let val of arr)
        {
            val.style.display="none"
        }
    }

    let it=document.createElement("h1")
    it.textContent="No city found ! please refresh to get started"
    it.style.color="black"
    it.style.marginTop="150px"
    it.style.marginLeft="40px"
    it.setAttribute("id","nf")
    var4.appendChild(it)

    let bt=document.createElement("button")
    bt.innerHTML="Refresh"
    bt.addEventListener("click",()=>{

        sessionStorage.setItem('flagAfterReload', 'true');
        location.reload()
    })
    var3.style.display="none"
    var15.style.display="flex"
    var15.style.alignItems="center"
    var15.style.justifyContent="center"
    bt.setAttribute("id","btnn")
    var4.appendChild(bt)
}

