


// Given a string, print the longest repeating subsequence such that the two subsequence don’t have same string character at 
// same position, i.e., any i’th character in the two subsequences shouldn’t have the same index in the original string.

// I/p- "AABEBCDD" , o/p-"ABD"





let s = 'AABEBCDD'

function subSeqString(s) {
  for (let i=0; i<s.length; i++) {
    let j=i+1
    while(s[i] === s[j]) {
      console.log(s[i])
      j = j+1
    }
    i=j-1
  }
}
  
subSeqString(s)
  
