/**
 * 一个类似业务规则的题目，没有什么难度
 * 
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
const checkVowel = (pre, next) => {
    if (pre.length !== next.length) {
        return false;
    }
    const vowelList = ['a', 'e', 'i', 'o', 'u'];
    const preWord = pre.toLowerCase();
    const nextWord = next.toLowerCase();
    for (let i = 0; i < pre.length; i ++) {
        if (preWord[i] === nextWord[i]) {
            continue;
        }
        if (vowelList.includes(preWord[i]) && vowelList.includes(nextWord[i])){
            continue;
        }
        return false;
    }
    return true;
}

var spellchecker = function(wordlist, queries) {
    const answer = [];
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        let target = wordlist.find(word => {
            return query === word;
        });
        if (!target) {
            target = wordlist.find(word => {
                return query.toLowerCase() === word.toLowerCase()
            })
        }
        if (!target) {
            target = wordlist.find(word => {
                return checkVowel(query, word);
            })
        }
        if (target) {
            answer.push(target);
        } else {
            answer.push('');
        }
    }
    return answer;
};