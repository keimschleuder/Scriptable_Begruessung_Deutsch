# Scriptable Begruessung Deutsch
 Ein Deutsches Script für die iOS-App "Scriptable". Es generiert eine Zeitlich passende Begrüßung mit einem Namen, der in der Konfiguration mitgegeben wird.

Zum Anwenden:

    const Gruessen = importModule('Gruessen')

    let gruesse = new Gruessen("Herr Mustermann", "Max")
    console.log(gruesse.informellGruessen())
    console.log(gruesse.formellGruessen())