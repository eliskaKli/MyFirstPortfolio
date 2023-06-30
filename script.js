// Mám podezření, že mi to nefunguje nějak kvůli aktivnímu Gitu (kterému nerozumím)


// --- TESTOVÁNÍ FUNKČNSTI ---
// tohle  jako jediné funguje:
console.log('čusík'); 

// háže mi nějaký prázdný NodeList (nerozumím):
document.addEventListener('DOMContentLoaded', function(){
    const buttons = window.document.querySelectorAll('button');
    console.log(buttons);    
})


// Vrací hodnotu null:
const myName = document.getElementById('nameEK');
console.log(myName);
 
// ------

// --- DOM kód (ale moc si to nepamatuji, tak jen pracovní pokus) ---
// CÍL: Po načtení stránky se udělá animace podbarvení .container-header

function changeBackgroundColor() {
    document.getElementsByClassName('container-header')[0].style.background = 'linear-gradient(90deg, #4F0E1A 0%, #443A53 21.92%, #3184B4 110.74%)';
    // 'linear-gradient(90deg, #4F0E1A 0%, #443A53 21.92%, #3184B4 110.74%)'; TADY JE TEN BAREVNÝ PROBLÉM
    console.log('tady')
    
    }

// let header = document.getElementByClassName('container-header');

window.onload= changeBackgroundColor;
// header.timeStamp

// About me - zobrazuje se správně #desktop/#tabletMobile
