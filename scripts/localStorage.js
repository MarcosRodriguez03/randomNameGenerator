

const savelocalStorage = (input) => {
    //favorites wil get the current values in local storage
    //aka saves array in favories
    let favorites = getlocalStorage();
    //if the name is already included in the local storage we will not push into favorites
    if (!favorites.includes(input)) {
        favorites.push(input);
    }
    //json.stringify this ensures whatever we save into local storage is a string
    localStorage.setItem("Favorites", JSON.stringify(favorites))
}


const getlocalStorage = () => {
    //getting our values from local storage
    let localStorageData = localStorage.getItem("Favorites")
    //we check if that data is null if so we return an empty array
    if (localStorageData == null) {
        return [];
    }
    //we return an array of local storage
    return JSON.parse(localStorageData);
}

const removeFromLocalStorage = (input) => {
    // were saving local storage data into favorites variable
    let favories = getlocalStorage();
    // were finding the index of our parameter
    let namedIndex = favories.indexOf(input);
    //remove name from array using .splice method
    favories.splice(namedIndex, 1);
    //we set our new mutated favorites array inside our local storage
    localStorage.setItem("Favorites", JSON.stringify(favories));
}

export { savelocalStorage, getlocalStorage, removeFromLocalStorage };