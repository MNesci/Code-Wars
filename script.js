function areYouPlayingBanjo(name) {
    // assign a variable to the first letter of name input, but always in lower case
    let firstLetterOfName = name[0].toLowerCase();
    // if first letter is r, plays banjo. otherwise, doesn't play banjo
    if (firstLetterOfName === 'r') {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}