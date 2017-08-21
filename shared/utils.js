import {ListItem} from './models'


/* 
    This function gets a unique list item with the count set
    on the subtitle of the item component

    The result looks as follows:

    {
        "foo": {
            title: "Some title",
            subtitle: 5,
            uri: "some-uri"
        }
    }
*/
export function getUniqueCrimesByProperty(crimesArray, property){
    const result = {}

    for (var i = 0; i < crimesArray.length; i++) {
        let crime = crimesArray[i]
        let crimeFromResult = result[crime[property]]

        if (!crimeFromResult){
            // If the crime "Delito" name does not exist in the result object,
            // then we add a property to the result object using the "Delito" name
            // and set this property to a new instance of ListItem
            result[crime[property]] = new ListItem(crime[property], 1, crime[property])
        } else {
            // If the crime already exists in the result object then we
            // increment the current crime counter (subtitle) to reflect
            // the number of matches for this crime name
            crimeFromResult.subtitle++
        }
    }

    // Transform object properties into array items
    const resultAsArray = []
    for(crime in result){
        resultAsArray.push(result[crime])
    }

    return resultAsArray
}