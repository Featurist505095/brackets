module.exports = function check(str, bracketsConfig) {
    let strM = str.split('');
    let sameItems = [];
    let openedItems = [];
    let closedItems = [];
    let same = {};

    bracketsConfig.forEach((e, i) => {
        if (e[0] == e[1]) {
            sameItems.push(e[0]);
            same[e[0]] = 0;
        }
        openedItems.push(e[0]);
        closedItems.push(e[1]);
    });

    if (strM.length % 2 == 1)
        return false;

    for (let i = 0; i < strM.length; i++) {
        if (strM[i] == strM[i + 1] && sameItems.indexOf(strM[i]) >= 0) {
            strM.splice(i, 2);
            i = 0;
        }
    }

    let i = 0;
    while (strM.length > 0) {
        if (closedItems.indexOf(strM[i]) >= 0 && sameItems.indexOf(strM[i]) < 0) {
            if (strM[i - 1] == openedItems[closedItems.indexOf(strM[i])]) {
                strM.splice(i - 1, 2);
                for (var key in same) {
                    same[key] = 0;
                }
                i = 0;
                continue;
            }
            else {
                return false;
            }
        }
        if (sameItems.indexOf(strM[i]) >= 0) {
            if (same[strM[i]] == 0) {
                same[strM[i]] = 1;
                i++;
                continue;
            }
            else {
                if (strM[i - 1] == strM[i]) {
                    strM.splice(i - 1, 2);
                    same[strM[i]] = 0;
                    i = 0;
                    continue;
                }
                else {
                    return false;
                }
            }
        }

        i++;

    }
    
    return true;
}
