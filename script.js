function testAdmin(){
    const val = confirm('Etes vous un administrateur du site')
    if (val == true){
        motDePasseAdmin = prompt("Entrer le mot de passe: ")
        if(motDePasseAdmin == 'D@taCorp 12'){
            document.querySelector('.sectionadmin').style.display = 'block'
        }
        else{
            alert('mot de passe incorrect veuillez ressayer')
        }
    }
}
function fermer(){
    document.querySelector('.sectionadmin').style.display = 'none'
}

//  function plus

function plus(){
    let equipe1 = document.querySelector('.equipe-1')
    equipe1.innerText = parseInt(equipe1.innerHTML) +1
    location.reload(true)
}
function moins(){
    let equipe2 = document.querySelector('.equipe-1')
    equipe2.innerText = parseInt(equipe2.innerHTML) - 1

}