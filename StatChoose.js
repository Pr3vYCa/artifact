//-----------------------------------------------ARTIFACT SET-----------------------------------------------
const SetName = ["Emblem of Severed Fates", "Shimenawa's Reminiscence"]
// "Emblem of Severed Fates", "Shimenawa's Reminiscence"

var SetChoose = math.ceil(math.random() * 2)
var ChosenSet = []
if (SetChoose == 1) {
  ChosenSet = SetName[0]
} else {
  ChosenSet = SetName[1]
}

//-----------------------------------------------ARTIFACT TYPE-----------------------------------------------

const Type = ["Flower", "Feather", "Sands", "Goblet", "Circlet"]
var TypeChoose = math.floor(math.random() * Type.length)
var ChosenType = Type[TypeChoose]

//-----------------------------------------------ARTIFACT MAINSTAT-----------------------------------------------

var MainStat = []
var MainStatRoll = math.ceil(math.random() * 100)
var ChosenMainStat = []
var MainChance = [0]

if (ChosenType == Type[0]) {
  MainStat = ["HP"]
  MainChanceIndiv =[100]

} else if (ChosenType == Type[1]) {
  MainStat = ["ATK"]
  MainChanceIndiv =[100]

} else if (ChosenType == Type[2]) {
  MainStat = ["HP%", "ATK%", "DEF%", "ER%", "EM"]
  MainChanceIndiv = [27, 27, 26, 10, 10] 

} else if (ChosenType == Type[3]) {
  MainStat = ["HP%", "ATK%", "DEF%", "Pyro%", "Electro%", "Cryo%", "Hydro%", "Anemo%", "Geo%", "Phys%", "EM"]
  MainChanceIndiv = [21, 21, 20, 5, 5, 5, 5, 5, 5, 5, 3]

} else if (ChosenType == Type[4]) {
  MainStat = ["HP%", "ATK%", "DEF%", "Heal%", "CR%", "CD%", "EM"]
  MainChanceIndiv = [22, 22, 22, 10, 10, 10, 4]
}

for (i = 1; i < MainChanceIndiv.length + 1; i++) {
  MainChance.push(MainChanceIndiv[i - 1] + MainChance[i - 1])
}
//starts at 0, adds first chance (27) to array, then 27 + second chance (27) = 54, 54 + third chance (26) = 80 and so on [27,54,80,90,100]

var MainStatChoose = MainChance.find(element => element > MainStatRoll)
//[27,54,80,90,100], makes the random roll of 1-100 become an array value ie 64->80

var MainStatIndex = MainChance.indexOf(MainStatChoose) - 1
//gives chosen index array, 80 = index [2]

ChosenMainStat = MainStat[MainStatIndex]
//[HP%,ATK%,DEF%,ER%,EM] , ie index [2] = DEF%

//-----------------------------------------------SUBSTAT-----------------------------------------------

var SubStatNumberRoll = math.ceil(math.random() * 4)
var StartingSubstatNumber = []
if (SubStatNumberRoll == 4) {
  StartingSubstatNumber = 4
} else {
  StartingSubstatNumber = 3
}
//gimana chancenya berubah 
//gimana biar ga sama dengan main stat dan substat 
//high roll low roll substat

const CircSubStat = ["HP", "ATK", "DEF", "HP%", "ATK%", "DEF%", "ER%", "EM", "Crit%"]
const CircSubChanceIndiv = [14, 14, 14, 10, 10, 10, 10, 10, 8]
var CircSubChance = [0]

for (i = 1; i < CircSubChanceIndiv.length + 1; i++) {
  CircSubChance.push(CircSubChanceIndiv[i - 1] + CircSubChance[i - 1])
}
var Substat = []

for (i = 0; i < StartingSubstatNumber; i++) {
  var SubStatRoll = math.ceil(math.random() * 100)

  SubStatChoose = CircSubChance.find(element => element > SubStatRoll)
  SubStatIndex = CircSubChance.indexOf(SubStatChoose) - 1
  ChosenSubStat = CircSubStat[SubStatIndex]
  Substat.push(ChosenSubStat)
}
/*
HP ATK DEF 14.63%
HP%	DEF% ATK% ER% EM 9.76%
CRIT%	7.31%
*/



console.log(ChosenMainStat + " " + ChosenSet + " " + ChosenType)
console.log("Your substats are : " + Substat+ " (still broken)")
