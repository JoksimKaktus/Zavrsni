var btn = document.querySelector('#add');
btn.addEventListener('click',submit);
var btn2 = document.querySelector('#sr');
btn2.addEventListener('click',search);

var data = [];
var num = 0;

function submit(e){
    e.preventDefault();

    let namein = document.querySelector('#name-add').value;
    let authorin = document.querySelector('#auth-add').value;
    let yearin = document.querySelector('#year-add').value;

    data.push({
        name: namein,
        auth: authorin,
        year: yearin,
        ID: num
    });

    let tabela = document.getElementById('tabela');
    let tabelaRed = document.createElement('tr');

    let cname = document.createElement('td');
    let cauth = document.createElement('td');
    let cyear = document.createElement('td');
    let butrem = document.createElement('button');

    butrem.id = num;

    butrem.addEventListener('click', removebutton);

    cname.innerHTML = namein;
    cauth.innerHTML = authorin;
    cyear.innerHTML = yearin;
    butrem.innerHTML = "-";

    tabelaRed.appendChild(cname);
    tabelaRed.appendChild(cauth);
    tabelaRed.appendChild(cyear);
    tabelaRed.appendChild(butrem);

    tabela.appendChild(tabelaRed);
    num++;
}

function removebutton(){
    let btnid = event.target.id;
    for(let i = 0;i < data.length;i++){
        if(data[i].ID == btnid){
            data.splice(i,1);
            break;
        }
    }
    let tabela = document.getElementById('tabela');
    while(tabela.rows.length > 1){
        tabela.deleteRow(1);
    }
    for(let i = 0;i < data.length;i++){
        addElem(i);
    }
}

function addElem(i){
    let tabela = document.getElementById('tabela');
    let tabelaRed = document.createElement('tr');

    let cname = document.createElement('td');
    let cauth = document.createElement('td');
    let cyear = document.createElement('td');
    let butrem = document.createElement('button');

    butrem.id = data[i].ID;

    butrem.addEventListener('click', removebutton);

    cname.innerHTML = data[i].name;
    cauth.innerHTML = data[i].auth;
    cyear.innerHTML = data[i].year;
    butrem.innerHTML = "-";

    tabelaRed.appendChild(cname);
    tabelaRed.appendChild(cauth);
    tabelaRed.appendChild(cyear);
    tabelaRed.appendChild(butrem);

    tabela.appendChild(tabelaRed);
}

function search(e){
    e.preventDefault();

    let namein = document.querySelector('#name-sr').value;
    let authorin = document.querySelector('#auth-sr').value;
    let yearin = document.querySelector('#year-sr').value;

    let tabela = document.getElementById('tabela');
    while(tabela.rows.length > 1){
        tabela.deleteRow(1);
    }

    for(let i = 0;i < data.length;i++){
        if(namein != ""){
            if(namein != data[i].name)continue;
        }
        if(authorin != ""){
            if(authorin != data[i].auth)continue;
        }
        if(yearin != ""){
            if(yearin != data[i].year)continue;
        }
        addElem(i);
    }
}

function sort(col){
    let tabela = document.getElementById('tabela');
    while(tabela.rows.length > 1){
        tabela.deleteRow(1);
    }

    if(col == "name"){
        data.sort((a,b) =>{
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 0;
            return 1;
        });
    }else if(col == "auth"){
        data.sort((a,b) =>{
            if(a.auth < b.auth) return -1;
            if(a.auth > b.auth) return 0;
            return 1;
        });
    }else{
        data.sort((a,b) =>{
            if(parseInt(a.year) < parseInt(b.year)) return -1;
            if(parseInt(a.year) > parseInt(b.year)) return 0;
            return 1;
        });
    }

    for(let i = 0;i < data.length;i++){
        addElem(i);
    }
}