# Scriptable Begruessung Deutsch
 Ein Deutsches Script für die iOS-App "Scriptable". Es generiert eine Zeitlich passende Begrüßung mit einem Namen, der in der Konfiguration mitgegeben wird.

Zum Anwenden:
    const Gruessen = importModule('Gruessen')
    let gruesseNiklas = new Gruessen("Herr Mustermann", "Max")
    console.log(gruesseNiklas.informellGruessen())
    console.log(gruesseNiklas.formellGruessen())