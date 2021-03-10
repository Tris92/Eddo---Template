// GET de l'api pour récupérer l'ID, le temps réel fitnet et le nom de l'affaire
var url = await fetch('https://forecast7-api.lineup7-platform.fr/contract');
var json = await url.json();
//let data = JSON.parse(json);
var forecast = []
//console.log(await json);
for (var i = 0; i < json.length; i++) {
    var contractDispatch = json[i];
    var contractString = JSON.stringify(contractDispatch);
      var contractJSON = JSON.parse(contractString);
      var customer_name = contractJSON["customer_name"];
    var contractsInner = contractJSON["contracts"]
    //console.log(contractsInner)
    contractsInner.forEach(function(elem,i) {
    forecast.push([elem["contract_id"],elem["completed_planned_cumulative"]]/*,elem["title"]*/)
    // Ici le contract_id peut être utilisé comme clé de match entre airtable et cet api car sur les projets existant sur Airtable 'jai ajouté l'ID fitnet dans la colonne "fitnet affaire ID"
    // contractID = ID fitnet à utiliser pour le matching
    // completed_planned_cumulative = temps réel de fitnet donc la valeur à ajouter dans airtable
    })
  };
  console.log(forecast)

// Cette partie là permet d'aller chercher tous les fitnet affaire ID de Airtable
let table = base.getTable("Projets");
let view = table.getView('Test table');
let queryResult = await view.selectRecordsAsync();
let table_result = []
for (var i = 0; i < queryResult.records.length; i++) {
    let record = queryResult.records[i];
    output.inspect(record.getCellValue("fitnet affaire ID"));
}


//et la airtable m'a filé un script qu'on peut utiliser pour trouver et remplacer les valeurs de la colonne Conso Fitnet
// edit these values to customize your script!
let field_ID = table.getField("fitnet affaire ID");
let field = table.getField("Conso fitnet");
let regex = /.*|0/gi;
//let found = paragraph.match(regex);
// Load all of the records in the table
let result = await table.selectRecordsAsync();
// Find every record we need to update
let replacements = [];
for (let record of result.records) {
    let originalValue = record.getCellValue(field);
    // Skip records which don't have the value set, so the value is null
    //console.log(originalValue)
    if (!originalValue) {
        continue;
    }
    let newValue = originalValue.replace(regex, 1);
    if (originalValue !== newValue) {
        replacements.push({
            record,
            before: originalValue,
            after: newValue,
        });
    }
}
if (!replacements.length) {
    output.text('No replacements found');
} else {
    output.markdown('## Replacements');
    output.table(replacements);
    let shouldReplace = await input.buttonsAsync('Are you sure you want to save these changes?', [
        {label: 'Save', variant: 'danger'},
        {label: 'Cancel'},
    ]);
    if (shouldReplace === 'Save') {
        // Update the records
        let updates = replacements.map(replacement => ({
            id: replacement.record.id,
            fields: {
                [field.id]: replacement.after,
            }
        }));
        // Only up to 50 updates are allowed at one time, so do it in batches
        while (updates.length > 0) {
            await table.updateRecordsAsync(updates.slice(0, 50));
            updates = updates.slice(50);
        }
    }
}
