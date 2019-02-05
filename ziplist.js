const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];

function zipList(dataOne, dataTwo) {
  const result = [];
  for (let i = 0; i < dataOne.length; i++) {
    result.push(dataOne[i]);
    result.push(dataTwo[i]);
  }
  return result;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(dataOne, dataTwo) {
  let result = _.zip(dataOne, dataTwo);
  result = _.flatten(result);
  return result;
}

console.log(zipListTheSimpleWay(list1, list2));
