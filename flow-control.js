<<<<<<< HEAD
var basicTeenager = function(age) {
if (age >= 13 && age <= 19) {
return "You are a teenager!";
=======
function basicTeenager(age) {
if (13<=age<=19)
return "You are a teenager!"
>>>>>>> d77f94cfc0893b899e8d938bdb72495331ae5189
}
return undefined;
};

<<<<<<< HEAD

var teenager = function (age) {
  if(age >= 13 && age <= 19) {
  return "You are a teenager!";
} else {
return "You are not a teenager";
}
};

var ageChecker = function (age) {
if (age >= 13 && age <= 19) {
return "You are a teenager!";
} else if (age <= 12) {
return "You are a kid";
} else {
return "You are a grownup";
=======
function teenager(age) {
  if(13<=age<=19)
  return "You are a teenager!"
} else {
return "You are not a teenager"
}

function ageChecker(age) {
if (13<=age<=19) {
return "You are a teenager!"
} else if (age < 13) {
return "You are a kid"
} else if (age > 19) {
return "You are a grownup"
}
}

function ternaryTeenager(age) {

}

function switchAge(age) {

>>>>>>> d77f94cfc0893b899e8d938bdb72495331ae5189
}
};


var ternaryTeenager = function (age) {
  return ((age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager");
};

var switchAge = function(age) {
switch (age) {
    case 13:
     return ("You are a teenager");
    break;
    case 14:
    return ("You are a teenager");
    break;
    case 15:
    return ("You are a teenager");
    break;
    case 16:
    return ("You are a teenager");
    break;
    case 17:
    return ("You are a teenager");
    break;
    case 18:
    return ("You are a teenager");
    break;
    case 19:
    return ("You are a teenager");
    break;
    default:
    return ("You have an age");
    break;
  }
};
