function gameObject(){
    return {
        home:{
            teamName:"Brooklyn Nets",
            colors:["black","White"],
            players:{
                'Alan Anderson':
                {
                    number: "0",
                    shoe:"16",
                    points:"22",
                    rebounds:"12",
                    assists:"12",
                    steals:"3",
                    blocks:"1",
                    slamDunks:"1",
                },
                'Reggie Evans':
                {
                        number: "30",
                        shoe:"14",
                        points:"12",
                        rebounds:"12",
                        assists:"12",
                        steals:"12",
                        blocks:"12",
                        slamDunks:"7",
                },
                'Brook Lopez':
                {
                            number: "11",
                            shoe:"17",
                            points:"17",
                            rebounds:"19",
                            assists:"10",
                            steals:"3",
                            blocks:"1",
                            slamDunks:"15",
                },
                "Mason Plumlee":
                {
                            number: "1",
                            shoe:"19",
                            points:"26",
                            rebounds:"12",
                            assists:"6",
                            steals:"3",
                            blocks:"8",
                            slamDunks:"5",
                },
                "Jason Terry":
                {
                        number: "31",
                        shoe:"15",
                        points:"19",
                        rebounds:"2",
                        assists:"2",
                        steals:"4",
                        blocks:"11",
                        slamDunks:"1",
                }       

            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:['Turquoise','Purple'],
            players:{
                "Jeff Adrien":
                {
                    number:"4",
                    shoe:"18",
                    points:"10",
                    rebounds:"1",
                    assists:"1",
                    steals:"2",
                    blocks:"7",
                    slamDunks:"2",
                },
                "Bismak Biyombo":
                {
                    number:"0",
                    shoe:"16",
                    points:"12",
                    rebounds:"4",
                    assists:"7",
                    steals:"7",
                    blocks:"15",
                    slamDunks:"10",
                },
                "DeSagna Diop":
                {
                    number:"2",
                    shoe:"14",
                    points:"24",
                    rebounds:"12",
                    assists:"12",
                    steals:"4",
                    blocks:"5",
                    slamDunks:"5",
                },
                "Ben Gordon":
                {
                    number:"8",
                    shoe:"15",
                    points:"33",
                    rebounds:"3",
                    assists:"2",
                    steals:"1",
                    blocks:"1",
                    slamDunks:"0",
                },
                "Brendan Haywood":
                {
                    number:"33",
                    shoe:"15",
                    points:"6",
                    rebounds:"12",
                    assists:"12",
                    steals:"22",
                    blocks:"5",
                    slamDunks:"12",
                }

            }
        }
    }
}
function numPointsScored(playerName){
    return ((gameObject().home.players[playerName]) ? (gameObject().home.players[playerName].points) : (gameObject().away.players[playerName].points))
}
console.log(numPointsScored())
debugger
function shoeSize(playerName){
    return ((gameObject().home.players[playerName]) ? (gameObject().home.players[playerName].shoe):(gameObject().away.players[playerName].shoe))
}
function teamColors(teamName){
    return ((gameObject().home)?(gameObject().home.colors):(gameObject().away.colors))
}
function playerNumbers(jina){
    return ((gameObject().home.teamName[jina]) ? ( Object.values(gameObject().home.players).map(el=>el.number) ) : (Object.values(gameObject().away.players).map(el=>el.number)))
}
function playerStats(playerName){
    return ((gameObject().home.players[playerName]) ? ((Object.values(gameObject().home.players[playerName]))) : (Object.values(gameObject().away.players[playerName])))
}
debugger
function players(){
    return Object.assign (gameObject().home.players,gameObject().away.players);
}
function bigShoeRebounds(){
    let biggestShoe=Object.keys(players()).reduce((startValue,endValue)=>players()[startValue].shoe>players()[endValue].shoe ? startValue : endValue);
    return players()[biggestShoe].rebounds;
}