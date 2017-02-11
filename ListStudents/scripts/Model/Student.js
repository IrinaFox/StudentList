//Constructor for creating students
function Student (name, lastName, gender, skype, phone, email, age, birthdayDate) {
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
    this.skype = skype;
    this.phone = phone;
    this.email = email;
    this.age = age;
    this.birthdayDate = new Date(1997, 1, 1);

    this.toJSON = function () {
      var fullForm = {};

      fullForm.name = name;
      fullForm.lastName = lastName;
      fullForm.fullName = name  + " " +lastName;
      fullForm.gender = gender;
      fullForm.age = new Date() - birthdayDate;
      fullForm.skype = skype;
      fullForm.email = email;
      fullForm.phone = phone;

      return fullForm;
    };

    return this;
}