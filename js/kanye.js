
// Get Api Call
const getQuotes= async ()=>{
    const BASEURL=`https://api.kanye.rest/`
    const res =await fetch(BASEURL);
    const data = await res.json();
    displayQuotes(data.quote)
}

// Display Quotes As Mouse Key Press

const displayQuotes=(data)=>{
    const displayQuoteId = document.getElementById('display-quote');
    displayQuoteId.textContent= data
    displayQuoteId.style.color=""
}


// Keyboard Key Press Events
document.body.addEventListener('keypress',(e)=>{
    const displayQuoteId = document.getElementById('display-quote');
    if(e.key==="Enter" || e.key===' '){
        displayQuoteId.style.color=""
        getQuotes()
    displayQuoteId.classList.remove('animate')
    }else{
    displayQuoteId.textContent= "Press Enter / Space To get Quote!!"
    displayQuoteId.style.color="red"
    animation(displayQuoteId)
}
}) 

// Add Animation
const animation=(id)=>{
    id.classList.add('animate')
    setTimeout(()=>{
    id.classList.remove('animate')
    },1000);

}