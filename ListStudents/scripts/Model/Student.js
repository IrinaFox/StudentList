//Constructor for creating students
function Student (name, lastName, gender, skype, phone, email, birthday) {
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
    this.skype = skype;
    this.phone = phone;
    this.email = email;
    this.birthdayDate = new Date(birthday);

    this.toJSON = function () {
      var date = new Date(),
          fullForm = {};

      fullForm.name = name;
      fullForm.lastName = lastName;
      fullForm.fullName = name  + " " +lastName;
      fullForm.gender = gender;
      fullForm.age = date.getFullYear() - this.birthdayDate.getFullYear();
      fullForm.skype = skype;
      fullForm.email = email;
      fullForm.phone = phone;

      return fullForm;
    };

    return this;
}