/* CAPITALIZE ALL WORDS FOR THE USER NAME ENTERED*/
function capitalizeName(name) {
  'use strict';

  const split_name = name.toLowerCase().split(' ');// Splits at the space
  for (let i = 0; i < split_name.length; i++) {
    split_name[i] = split_name[i].charAt(0).toUpperCase() + split_name[i].substring(1); // Assign it back to the array
  }
  return split_name.join(' '); // Directly return the joined string
}

/* CHANGE PHONE NUMBER ENTERED INTO PROPER FORMAT USING REGEX */
function formatNumber(number) {
  'use strict';

    number = number.replace(/[^\d]/g, "");// Normalize string and remove all unnecessary characters
    if (number.length == 10) {// Check if number length equals to 10
        return number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");// Reformat and return phone number
    }
    return null;
}

/* CAPITALIZE FIRST LETTER IN EVERY SENTENCE */
function capitalizeComments(comments){
  'use strict';

  const split_content = comments.toLowerCase().split('. ');// Splits at the period
  for(let x = 0; x < split_content.length; x++){
    split_content[x] = split_content[x].charAt(0).toUpperCase() + split_content[x].substring(1);// Capitalize first letter after each period
  }
  const cap_content = split_content.join('. ');// Joins at the period
  const cap_i = cap_content.split(' i ').join(' I ');// Splits at lowercase i and joins with a capital I
  const cap_i_apostrophe = cap_i.split(" i'").join(" I'");// Splits at lowercase i' and joins with a capital I'

  return cap_i_apostrophe;// Directly return the joined string
}
