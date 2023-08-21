/* ACCEPTS, CHECKS, AND DISPLAYS INFORMATION ENTERED BY THE USER FROM THE FORM */
function submitReservation() {

  const blank = '';
  const name = document.getElementById('name').value;
  const name_capitalized = capitalizeName(name);
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const number_formatted = formatNumber(number);
  const party = document.getElementById('party').value;
  const birthday_yes = document.getElementById('birthday_yes');
  const birthday_no = document.getElementById('birthday_no');
  const anniversary_yes = document.getElementById('anniversary_yes');
  const anniversary_no = document.getElementById('anniversary_no');
  const graduation_yes = document.getElementById('graduation_yes');
  const graduation_no = document.getElementById('graduation_no');
  const comments = document.getElementById('comments').value;
  const comments_capitalized = capitalizeComments(comments);
  const reservation_info = {
    name: name_capitalized,
    email: email,
    number: number_formatted,
    party: party,
    occasion: [],
    comments: comments_capitalized
  }

  /* PERFORMS CHECKS ON ALL INFORMATION ENTERED */
  // Validates if yes is checked
  if (birthday_yes.checked === true) {
    reservation_info.occasion[0] = 'Yes Birthday';
    // Validates if no is checked
  } else if (birthday_no.checked === true) {
    reservation_info.occasion[0] = 'No Birthday';
  }
  // Validates if yes is checked
  if (anniversary_yes.checked === true) {
    reservation_info.occasion[1] = ' Yes Anniversary';
    // Validates if no is checked
  } else if (anniversary_no.checked === true) {
    reservation_info.occasion[1] = ' No Anniversary';
  }
  // Validates if yes is checked
  if (graduation_yes.checked === true) {
    reservation_info.occasion[2] = ' Yes Graduation';
    // Validates if no is checked
  } else if (graduation_no.checked === true) {
    reservation_info.occasion[2] = ' No Graduation';
  }
  // Validates if all no is checked
  if (birthday_no.checked === true && anniversary_no.checked === true && graduation_no.checked == true) {
    // Inserts response instead of all three nos
    reservation_info.occasion[0] = 'There are no special occasions.';
    // Removes anniversary response
    reservation_info.occasion.pop(reservation_info.occasion[1]);
    // Removes graduation response
    reservation_info.occasion.pop(reservation_info.occasion[2]);
  }
  // Validates if party is empty
  if (party == '0' || party == blank) {
    alert('You must have at least one person in your party.');
    return false;
  }
  if (comments == blank) {
    reservation_info.comments = 'There are no special comments.';
  }

  /* ADDS ALL USER ENTERED INFO INTO THE ALERT BOX */
  document.getElementById('alert_box').style.display = 'block';
  document.getElementById('name_display').innerHTML = `${reservation_info.name}`;
  document.getElementById('email_display').innerHTML = `${reservation_info.email}`;
  document.getElementById('phone_display').innerHTML = `${reservation_info.number}`;
  document.getElementById('party_display').innerHTML = `${reservation_info.party}`;
  document.getElementById('occasion_display').innerHTML = `${reservation_info.occasion}`;
  document.getElementById('comments_display').innerHTML = `${reservation_info.comments}`;

  // Closes alert box
  document.getElementById('close_alert').addEventListener('click', function () {
    document.getElementById('alert_box').style.display = 'none';
  });
  return false;
}
document.onsubmit = submitReservation;
