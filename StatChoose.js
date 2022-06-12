const SetName = ["EOSF", "SR"]
// "Emblem of Severed Fates", "Shimenawa's Reminiscence"

var SetChoose = math.ceil(math.random() * 2)
var ChosenSet = []
if (SetChoose == 1) {
  ChosenSet = SetName[0]
} else {
  ChosenSet = SetName[1]
}

const Type = ["Flower", "Feather", "Sands", "Goblet", "Circlet"]

var TypeChoose = math.floor(math.random() * Type.length)
var ChosenType = Type[TypeChoose]

/*
if (TypeChoose == 1) {
  ChosenType = Type[0]
} else if (TypeChoose == 2) {
  ChosenType = Type[1]
} else if (TypeChoose == 3) {
  ChosenType = Type[2]
} else if (TypeChoose == 4) {
  ChosenType = Type[3]
} else if (TypeChoose == 5) {
  ChosenType = Type[4]
}
*/

var Mainstat = []
const FlowerMainStat = ["HP"]
const FeatherMainStat = ["ATK"]
const SandsMainStat = ["HP%", "ATK%", "DEF%", "ER%", "EM"]
const GobletMainStat = ["Ele%"]
const CircMainStat = ["HP%", "ATK%", "DEF%", "HEAL%", "CR%", "CD%", "EM"]
/*
HP%,ATK%,DEF%	22.00%
Healing%,CR,CD	10.00%
Elemental Mastery	4.00%
*/
if (ChosenType == Type[0]) {
  Mainstat = FlowerMainStat
} else if (ChosenType == Type[1]) {
  Mainstat = FeatherMainStat
} else if (ChosenType == Type[2]) {
  Mainstat = SandsMainStat
} else if (ChosenType == Type[3]) {
  Mainstat = GobletMainStat
} else if (ChosenType == Type[4]) {
  Mainstat = CircMainStat
}

  var MainStatChoose = math.ceil(math.random() * 100)
  var ChosenMainStat = []
  if (0 < MainStatChoose && MainStatChoose <= 22) {
    ChosenMainStat = MainStat[0]
  } else if (22 < MainStatChoose && MainStatChoose <= 44) {
    ChosenMainStat = MainStat[1]
  } else if (44 < MainStatChoose && MainStatChoose <= 66) {
    ChosenMainStat = MainStat[2]
  } else if (66 < MainStatChoose && MainStatChoose <= 76) {
    ChosenMainStat = MainStat[3]
  } else if (76 < MainStatChoose && MainStatChoose <= 86) {
    ChosenMainStat = MainStat[4]
  } else if (86 < MainStatChoose && MainStatChoose <= 96) {
    ChosenMainStat = MainStat[5]
  } else if (96 < MainStatChoose && MainStatChoose <= 100) {
    ChosenMainStat = MainStat[6]


  }

  const CircSubStat = ["HP%", "HP", "ATK%", "ATK", "DEF%", "DEF", "ER%", "EM", "Crit%"]
  /*
  HP	14.63%
  ATK	14.63%
  DEF	14.63%
  HP%	9.76%
  ATK%	9.76%
  DEF%	9.76%
  Energy Recharge%	9.76%
  Elemental Mastery	9.76%
  CRIT DMG%	7.31%
  */

  var SubStatChoose = math.ceil(math.random() * 1000)
  var ChosenSubStat = []

  console.log(ChosenMainStat + " " + ChosenSet + " " + ChosenType)
