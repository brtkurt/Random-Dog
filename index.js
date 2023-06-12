document.getElementById('resimCek').addEventListener('click', function (){
       resimCek();
       sound();
}
);
    

async function resimCek() {
  try{ 
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
       if (!response.ok) 
        {
          throw new Error('Veri çekilemedi');
        }
        const data = await response.json();
        document.getElementById('hero').innerHTML = `<img src=${data.message} alt="Köpek Resmi">`;
    
        
    } 
     
    catch (error) {
       console.error('Hata:', error);
       document.getElementById('sonuc').innerText = 'Hata:' + error;
    }
}

function sound() {
    let kick = new Audio("click.wav");
    kick.play();
}
