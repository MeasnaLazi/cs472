const anime = {
        id: 1,
        name: "Seal of Throne",
        type: "tv",
        thumbnial: "./img/thumbnail.jpg",
        src: "",
        description: "6000 years ago, the Demon God Emperor, Feng Xiu and the 72 Demon God Pillars descended from the sky, all creatures were contaminated with the breath of the Demon God Pillar, and instantly mutated into demon creatures and then humans entered the dark age. After which, the human practitioners arranged from the six Temples stood up to block the progress of the demons, and gradually formed a situation d where humans and demons coexisted. Protagonist Long Haochen joins forces with the Knight Temple, one of the six great temples, to become a knight to save his mother. In the adventure of step-by-step growth, the adventures, tricks, and the destined love and friendship continue to be revealed. He, Long Haochen embraced the spirit of the knight and won the recognition of others through his personality and hard work. He first formed the “No. 1 Demon Hunting Group” with other talented teenagers in the Six Temples to fight demons, fighting for human survival and dignity. At the same time, he sacrificed his life to protect his partner and most precious lover. And the situation in the world changed unexpectedly, more conspiracies were going on, and deeper secrets were waiting for him to be revealed. In the end, whether Long Haochen can win the approval of the Divine Throne and rise to the highest honor in the Knight Temple, and whether he can face the moment when all the truth is revealed, and solve the biggest crisis in the whole world. , everything still has to be disclosed.",
        upload_date: "10/10/2023"
}


let gridView;


window.addEventListener("load", () => {
    _initComponent();
    _initDummy();
});

const _initComponent = () => {
    gridView= document.getElementById("gridView");
}

const _initDummy = () => {
    for (let i = 0; i < 10; i++) {
        gridView.appendChild(_createItem(anime));
    }
}

const _createItem = (anime) => {
    let div= document.createElement("div");
    div.setAttribute("id", anime.id);
    div.classList.add("col", "mt-2", "anime-list-item");
    
    let img= document.createElement("img");
    img.style.width= '100%';
    img.src= anime.thumbnial;

    let titleH3= document.createElement("h6");
    titleH3.classList.add("mt-2", "pb-2", "anime-name");
    titleH3.appendChild(document.createTextNode(anime.name))

    div.appendChild(img);
    div.appendChild(titleH3);
    
    div.addEventListener("click", _onItemClick);

    return div;
}

const _onItemClick = function() {
    console.log("item click: " + this.id);
}