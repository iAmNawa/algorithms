function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let obj1 = {}
  let obj2 = {}
  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]]) {
      obj1[str1[i]]++
    }
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 1
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (obj2[str2[i]]) {
      obj2[str2[i]]++
    }
    if (!obj2[str2[i]]) {
      obj2[str2[i]] = 1
    }
  }
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] == obj1[key]) {
        return true
      }
    } else {
      return false
    }
  }
  return false;
}

console.log(anagram('anagram', 'nagaram'))
