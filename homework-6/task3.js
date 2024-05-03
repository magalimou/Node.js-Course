/*Task 3: Multiline Tagged Template*/
function multiline(strings) {

    let string= strings[0].trim();
    let lines = string.split('\n');
    const numberedLines = lines.map((line, index) => `${index + 1} ${line.trim()}`);
    
    return numberedLines.join('\n');
}

const code = multiline`
function add(a, b) {  
return a + b;  
}  
`;

console.log(code);
// Expected:  
// 1 function add(a, b) {
// 2 return a + b;  
// 3 }