/*Task 2: Advanced Tagged Template*/

function highlightKeywords(string, keywords){
    let result = string;
    let regExp = /\$\{\d+\}/g;
    const found  = string.match(regExp);
    
    for (let i = 0; i < keywords.length; i++) {
        let highlighted = `<span class="highlight"> ${keywords[i]} </span>`;
        result = result.replace(found[i], highlighted);
    }
    return result;
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."

