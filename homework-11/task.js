function myJSONParse(jsonString) {
    const tokens = tokenize(jsonString);
    let currentIndex = 0;

    function parseValue() {
        const token = tokens[currentIndex];

        if (token === '{') {
            return parseObject();
        } else if (token === '[') {
            return parseArray();
        } else if (token === 'true') {
            currentIndex++;
            return true;
        } else if (token === 'false') {
            currentIndex++;
            return false;
        } else if (token === 'null') {
            currentIndex++;
            return null;
        } else if (/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(token)) {
            currentIndex++;
            return parseFloat(token);
        } else {
            currentIndex++;
            return token;
        }
    }

    function parseObject() {
        const obj = {};
        currentIndex++; // Skip '{'

        while (tokens[currentIndex] !== '}') {
            const key = parseValue(); //remove quotes
            currentIndex++; // Skip ':'
            const value = parseValue();
            obj[key] = value;

            if (tokens[currentIndex] === ',') {
                currentIndex++; // Skip ','
            }
        }

        currentIndex++; // Skip '}'
        return obj;
    }

    function parseArray() {
        const arr = [];
        currentIndex++; // Skip '['

        while (tokens[currentIndex] !== ']') {
            arr.push(parseValue());

            if (tokens[currentIndex] === ',') {
                currentIndex++; // Skip ','
            }
        }

        currentIndex++; // Skip ']'
        return arr;
    }

    return parseValue();
}

function tokenize(jsonString) {
    const tokenRegExp = /"(?:\\["\\]|[^\n"\\])*"|\d+(?:\.\d*)?|true|false|null|[\[\]\{\}\:\,]/g;
    const tokens = jsonString.match(tokenRegExp);
    return tokens.map(token => {
        if (token.startsWith('"') && token.endsWith('"')) {
            return token.slice(1, -1);
        }
        return token;
    });
}

  const jsonString = '{"name": "John", "age": 30, "city": "New York"}';;
  const jsonObject = myJSONParse(jsonString);

  console.log(jsonObject); // Should output the parsed JavaScript object.
  console.log(jsonObject.name); 

  const jsonString2 = '{"name": "Juan", "age": 30, "isStudent": false, "courses": ["maths", "history", "science]}';
  const jsonObject2 = myJSONParse(jsonString2);
  console.log(jsonObject2); 
  console.log(jsonObject2.courses[0]);


  
