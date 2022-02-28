var arr = $('[vd-cms-calc="category"]');
var array = [];

var tag = $('[vd-cms-calc="tag"]');
var tagArr = [];

var cmsTagIdentifier = $('[vd-cms-calc="cms-tag-item"]');

for (let i = 0; i < arr.length; i++) {
  var name = $(arr[i]).text();
  array.push(name);
}
for (let i = 0; i < tag.length; i++) {
  var name = $(tag[i]).text();
  tagArr.push(name);
}

function getWordCount() {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    map[item] = map[item] + 1 || 1;
  }
  return map;
}

var countedData = getWordCount(array);

for (let i = 0; i < tagArr.length; i++) {
  var name = tagArr[i];
  var cmsTagName = $(cmsTagIdentifier[i]).find('[vd-cms-calc="tag"]').text();

  if (name === cmsTagName) {
    console.log(name);
    $(cmsTagIdentifier[i])
      .find('[vd-cms-calc="number"]')
      .text(countedData[name]);
  } else {
    console.log("TEST");
  }
}
