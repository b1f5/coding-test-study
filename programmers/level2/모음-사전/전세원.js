function solution(word) {
    const dictionary = [];
    for(let i=1; i<=5; i++){
        const list = ['A', 'E', 'I', 'O', 'U'];
        const pick = i;
        const result = [];

        function pwr(items) {
          if(items.length === pick) {
            result.push(items);
            return;
          }

          for (let i = 0; i < list.length; i ++) {
            pwr(`${items}${list[i]}`);
          }
        }

        pwr("");
        dictionary.push(...result);
        }
    dictionary.sort();
    const answer = dictionary.indexOf(word);
    return answer+1;
}