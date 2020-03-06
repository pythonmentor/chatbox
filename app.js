data = {
    question: "Salut Grandpy, où habite Thierry Chappuis?",
    address: "Chemin des Rosiers 11, 1791 Courtaman",
    coords: {
     lat: -25.363,
     lng: 131.044
    },
    article: `Lorem Elsass ipsum kartoffelsalad flammekueche Strasbourg wurscht 
    messti de Bischheim salu in, turpis, ftomi! Carola non hopla Chulien leo 
    baeckeoffe lotto-owe libero. bissame sagittis senectus id Spätzle aliquam 
    mänele hopla eleifend knack gravida blottkopf, Huguette turpis placerat 
    consectetur Yo dû. schneck ante hopla nüdle mollis hop tchao bissame et 
    auctor, non Richard Schirmeck Coopé de Truchtersheim condimentum Salut 
    bisamme sit leverwurscht sit elit mamsell hoplageiss porta libero, eget 
    météor quam, ornare leo rhoncus sed gewurztraminer Racing. geht's 
    tellus Salu bissame Morbi ac réchime geïz quam. Wurschtsalad purus und 
    amet morbi rucksack DNA, picon bière vielmols, jetz gehts los bredele 
    suspendisse merci vielmols amet ullamcorper dui s'guelt rossbolla Gal ! 
    tellus lacus tristique risus, dignissim ac id, Heineken wie Pellentesque 
    libero, sed Oberschaeffolsheim schnaps kuglopf knepfle  Pfourtz ! munster 
    nullam semper pellentesque amet, dolor Hans varius habitant Miss Dahlias 
    schpeck Gal. sit Mauris commodo so adipiscing ornare Chulia Roberstau yeuh. 
    kougelhopf ch'ai hopla vulputate Verdammi barapli chambon Oberschaeffolsheim 
    Kabinetpapier gal elementum Christkindelsmärik`,
    url: "http://www.openclassrooms.com"
}





function createDiv(text, klass, parent) {
    let divElt = document.createElement("div");
    divElt.classList.add(klass);
    divElt.textContent = text;
    parent.appendChild(divElt);
    divElt.scrollIntoView();
    return divElt;
}
   
function createMap(position, klass, parent) {
    let mapElt = document.createElement("div");
    mapElt.classList.add(klass);
    let map = new google.maps.Map(mapElt, {
        zoom: 6,
        center: position   
    });
   
    let marker = new google.maps.Marker({
        position: position,
        map: map,
        title: "Voilà l'endroit demandé"
    });
    parent.appendChild(mapElt);
}

function createLink(text, url, parent) {
    let aElt = document.createElement("a");
    aElt.href = url;
    aElt.textContent = text;
    parent.appendChild(aElt);
}
   
function main() {
    let chatbox = document.querySelector("#chatbox");
   
    createDiv(data.question, "question", chatbox);
    createDiv(data.address, "answer", chatbox);
    createMap(data.coords, "map", chatbox);
    let article = createDiv(data.article, "answer", chatbox);
    createLink(" Plus d'info", data.url, article);
}

main();
   
   
   