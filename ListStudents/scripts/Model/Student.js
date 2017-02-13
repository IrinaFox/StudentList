'use strict';

//Constructor for creating students
function Student (_name, _lastName, _gender, _skype, _phone, _email, _birthday) {
    var name = _name;
    var lastName = _lastName;
    var gender = _gender;
    var skype = _skype;
    var phone = _phone;
    var email = _email;
    var birthdayDate = new Date(_birthday);

    this.toJSON = function () {
      var date = new Date(),
          fullForm = {};

      fullForm.name = name;
      fullForm.lastName = lastName;
      fullForm.fullName = name  + " " +lastName;
      fullForm.gender = gender;
      fullForm.age = date.getFullYear() - birthdayDate.getFullYear();
      fullForm.skype = skype;
      fullForm.email = email;
      fullForm.phone = phone;

      return fullForm;
    };

    return this;
}