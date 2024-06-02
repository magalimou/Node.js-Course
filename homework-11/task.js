function myJSONParse(jsonString) {
    try {
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
                if (currentIndex >= tokens.length) {
                    throw new Error("Unexpected end of JSON input while parsing object");
                }
                const key = parseValue(); //remove quotes
                if (tokens[currentIndex] !== ':') {
                    throw new Error("Expected ':' after key in object");
                }
                currentIndex++; // Skip ':'
                const value = parseValue();
                obj[key] = value;

                if (tokens[currentIndex] === ',') {
                    currentIndex++; // Skip ','
                }else if (tokens[currentIndex] !== '}') {
                    throw new Error("Expected ',' or '}' after value in object");
                }
            }

            currentIndex++; // Skip '}'
            return obj;
        }

        function parseArray() {
            const arr = [];
            currentIndex++; // Skip '['

            while (tokens[currentIndex] !== ']') {
                if (currentIndex >= tokens.length) {
                    throw new Error("Unexpected end of JSON input while parsing array");
                }
                arr.push(parseValue());

                if (tokens[currentIndex] === ',') {
                    currentIndex++; // Skip ','
                }else if (tokens[currentIndex] !== ']') {
                    throw new Error("Expected ',' or ']' after value in array");
                }
            }

            currentIndex++; // Skip ']'
            return arr;
        }

        return parseValue();
    } catch (error) {
        console.error('Error parsing JSON:', error.message);
        throw error;
    }
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

  const jsonString3 = '[{"name": "Juan", "age": 30}, {"name": "Ana", "age": 25}]';
  const jsonObject3 = myJSONParse(jsonString3);
  console.log(jsonObject3);
  console.log(jsonObject3[1].name);

  const jsonString4 = '{}';
  const jsonObject4 = myJSONParse(jsonString4);
  console.log(jsonObject4);


  
