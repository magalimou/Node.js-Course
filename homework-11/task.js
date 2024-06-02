function myJSONParse(jsonString) {
    const tokens = tokenize(jsonString);
    let index = 0;
    let object = {};
    for(let i = 0; i < tokens.length; i++) {
        if(tokens[i] === '{') {
            object = parseObject(tokens, i);
            console.log(object);
        }
    }
    console.log(tokens);
    return object;
}

function parseObject(tokens, index) {
    let object = {};
    index++;
    while(index < tokens.length) {
        if(tokens[index] === '}') {
            return object;
        }else{
            const key = tokens[index];
            console.log(key);
            index++;
            if(tokens[index] === ':') {
                index++;
                if(tokens[index] === '[') {
                    object[key] = parseArray(tokens, index);
                } else if(tokens[index] === '{') {
                    object[key] = parseObject(tokens, index);
                } else if(tokens[index] === ','){
                    index++;
                }
                else {
                    //cast value to number, string, boolean or null
                    object[key] = tokens[index];
                    console.log(tokens[index]);  
                }
            }
        }
    }
}

function tokenize(jsonString) {
    const tokenRegExp = /"(?:\\["\\]|[^\n"\\])*"|\d+(?:\.\d*)?|true|false|null|-|[\[\]\{\}\:\,]/g;
    const tokens = jsonString.match(tokenRegExp);
    return tokens.map(token => token.replace(/"/g, ''));

}
  
  const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
  const jsonObject = myJSONParse(jsonString);

  console.log(jsonObject); // Should output the parsed JavaScript object.