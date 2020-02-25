import React from 'react'

export function ConditionalWrapper({ condition, test, control, children, ...props }) {
  // * https://stackoverflow.com/questions/40642314/change-the-element-wrapping-its-children-based-on-a-condition-in-jsx
  const Wrapper = condition ? test : control
  return <Wrapper {...props}>{children}</Wrapper>
}

export function shortid() {
  //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function stringUtils(str, cmd) {
  // * https://gist.github.com/jonlabelle/5375315

  let command = (typeof str == 'string' || str instanceof String) ? cmd.command : cmd

  switch (command) {
    case "unCamelCase":
      return unCamelCase(str)

    case "slugifiy":
      return slugify(str)

    case "lowerCase":
      return lowerCase(str)

    case "upperCase":
      return upperCase(str)

    case "properCase":
      return properCase(str)

    case "camelToProper":
      return properCase(unCamelCase(str))

    case "crop":
      return crop(str, cmd.maxChars)

    default:
      return properCase(str)
  }

}


function slugify(string) {
  // https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}


/**
 * Add space between camelCase text.
*/
function unCamelCase(str) {
  str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
  str = str.toLowerCase(); //add space between camelCase text
  return str;
}

/**
 * "Safer" String.toLowerCase()
 */
function lowerCase(str) {
  return str.toLowerCase();
}

/**
 * "Safer" String.toUpperCase()
 */
function upperCase(str) {
  return str.toUpperCase();
}


/**
 * UPPERCASE first char of each word.
 */
function properCase(str) {
  return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
}



/**
* Truncate string at full words.
*/
function crop(str, maxChars, append) {
  return truncate(str, maxChars, append, true);
}

/**
* Limit number of chars.
*/
function truncate(str, maxChars, append, onlyFullWords) {
  append = append || "...";
  maxChars = onlyFullWords ? maxChars + 1 : maxChars;

  str = trim(str);
  if (str.length <= maxChars) {
    return str;
  }
  str = str.substr(0, maxChars - append.length);
  //crop at last space or remove trailing whitespace
  str = onlyFullWords ? str.substr(0, str.lastIndexOf(" ")) : trim(str);
  return str + append;
}



const WHITE_SPACES = [
  " ",
  "\n",
  "\r",
  "\t",
  "\f",
  "\v",
  "\u00A0",
  "\u1680",
  "\u180E",
  "\u2000",
  "\u2001",
  "\u2002",
  "\u2003",
  "\u2004",
  "\u2005",
  "\u2006",
  "\u2007",
  "\u2008",
  "\u2009",
  "\u200A",
  "\u2028",
  "\u2029",
  "\u202F",
  "\u205F",
  "\u3000"
];

/**
 * Remove chars from beginning of string.
 */
function ltrim(str, chars) {
  chars = chars || WHITE_SPACES;

  var start = 0,
    len = str.length,
    charLen = chars.length,
    found = true,
    i,
    c;

  while (found && start < len) {
    found = false;
    i = -1;
    c = str.charAt(start);

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true;
        start++;
        break;
      }
    }
  }

  return start >= len ? "" : str.substr(start, len);
}

/**
 * Remove chars from end of string.
 */
function rtrim(str, chars) {
  chars = chars || WHITE_SPACES;

  var end = str.length - 1,
    charLen = chars.length,
    found = true,
    i,
    c;

  while (found && end >= 0) {
    found = false;
    i = -1;
    c = str.charAt(end);

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true;
        end--;
        break;
      }
    }
  }

  return end >= 0 ? str.substring(0, end + 1) : "";
}

/**
 * Remove white-spaces from beginning and end of string.
 */
function trim(str, chars) {
  chars = chars || WHITE_SPACES;
  return ltrim(rtrim(str, chars), chars);
}
