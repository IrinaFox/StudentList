'use strict';

//Constructor for creating students
function Student (_name, _lastName, _gender, _skype, _phone, _email, _birthday) {
    var values = {
        name: _name,
        lastName: _lastName,
        gender: _gender,
        skype: _skype,
        phone: _phone,
        email:_email,
        birthdayDate: new Date(_birthday)
    };

    this.toJSON = function () {
        var students = {},
            key;

        for (key in values) {
            students[key] = values[key];
        }

        students['age'] = this.age();
        students['fullName'] = values.name + ' ' + values.lastName;

        return students;
    };

    this.get = function (key) {
      return values[key];
    };

    this.set = function (key, value) {
        values[key] = value;
    };

    this.age = function () {
        var date = new Date(),
            age;

        age = date.getFullYear() - values.birthdayDate.getFullYear();

        return age;
    };

    return this;
}