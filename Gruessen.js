// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: handshake;
const NOW = new Date()

class Gruessen{
    constructor(formelleAnrede, informelleAnrede){
        this._formell = formelleAnrede
        this._informell = informelleAnrede
    }
    
    informellGruessen = function(){
        let greeting
        if (NOW.getHours() < 7) {
            greeting = "Schlaf weiter, "
        } else if (NOW.getHours() < 9) {
            greeting = "Guten Morgen, "
        } else if (NOW.getHours() < 19) {
            greeting = "Hallo "
        } else if (NOW.getHours() < 21) {
            greeting = "Guten Abend, "
        } else {
            greeting = "Gute Nacht, "
        }
        return greeting + this._informell + "."
    }
    
    formellGruessen = function(){
        let greeting
        if (NOW.getHours() < 7) {
            greeting = "Warum sind Sie so früh schon wach, "
        } else if (NOW.getHours() < 9) {
            greeting = "Guten Morgen, "
        } else if (NOW.getHours() < 19) {
            greeting = "Guten Tag "
        } else if (NOW.getHours() < 21) {
            greeting = "Guten Abend, "
        } else {
            greeting = "Gute Nacht, "
        }
        return greeting + this._formell + "."
    }
}

module.exports = Gruessen;