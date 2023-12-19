function getTweetData(tweet) {
  // Your code here

  const myObj = {
    tags: [],
    mentions: [],
    tagCount: 0,
    mentionCount: 0,
    length: 0,
  };

  myObj.length = tweet.trim().length;
  const regMatch = tweet.match(/@[A-Za-z]*/g);
  let array1 = regMatch === null ? [] : regMatch;
  myObj.mentions = [...new Set(array1)];
  myObj.mentionCount = myObj.mentions.length;

  const regMatch2 = tweet.match(/#[A-Za-z]*/g);
  let array2 = regMatch2 === null ? [] : regMatch2;
  myObj.tags = [...new Set(array2)];
  myObj.tagCount = myObj.tags.length;

  return myObj;
}

module.exports = getTweetData;
