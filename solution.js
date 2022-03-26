/*
Given a string only containing the following characters:
    (, ), {, }, [, and ],
return whether or not the opening and closing characters are in a valid
order.
Ex: Given the following strings...
"(){}[]", return true
"(({[]}))", return true
"{(})", return false
*/
const chars = "{(})"

function isValid(str){
  
  const map = {
    "(":")",
    "{":"}",
    "[":"]"
  }
  
  const stack = []
  
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      if (str[i+1] != map[str[i]]) {
      stack.push(str[i])
      }
    }else {
      if (str[i]==map[stack[stack.length-1]]) {
        stack.pop()
      }
    }
  }
  
  return stack.length == 0
}

// driver 
console.log("is valid?",isValid(chars))
