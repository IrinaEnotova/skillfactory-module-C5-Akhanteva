// ЗАДАНИЕ 1

const parser = new DOMParser();
// console.log('parser', parser);

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

// console.log('xmlString', xmlString);

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDOM.querySelector('list');
const studentNodes = listNode.querySelectorAll('student');

const nameNode1 = studentNodes[0].querySelector('name');
const firstNode1 = nameNode1.querySelector('first');
const secondNode1 = nameNode1.querySelector('second');
const ageNode1 = studentNodes[0].querySelector('age');
const profNode1 = studentNodes[0].querySelector('prof');

const nameNode2 = studentNodes[1].querySelector('name');
const firstNode2 = nameNode2.querySelector('first');
const secondNode2 = nameNode2.querySelector('second');
const ageNode2 = studentNodes[1].querySelector('age');
const profNode2 = studentNodes[1].querySelector('prof');

// console.log(listNode);
// console.log(studentNodes);
// console.log('Student 1', firstNode1, secondNode1, ageNode1, profNode1);
// console.log('Student 2', firstNode2, secondNode2, ageNode2, profNode2);

const langAttr1 = nameNode1.getAttribute('lang');
const langAttr2 = nameNode2.getAttribute('lang');

// console.log(langAttr1, langAttr2);

const result = {
  list: [
    {
      lang: langAttr1,
      name: `${firstNode1.textContent} ${secondNode1.textContent}`,
      age: Number(ageNode1.textContent),
      profession: profNode1.textContent
    },
    {
      lang: langAttr2,
      name: `${firstNode2.textContent} ${secondNode2.textContent}`,
      age: Number(ageNode2.textContent),
      profession: profNode2.textContent
    }
  ]
}

console.log('Result: ', result);
