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
        var student = {},
            key;

        for (key in values) {
            student[key] = values[key];
        }

        student['age'] = getAge();
        student['fullName'] = values.name + ' ' + values.lastName;

        return student;
    };

    this.get = function (key) {
        return (key === 'age')? getAge(): values[key];
    };

    this.set = function (key, value) {
        values[key] = value;
    };

    function getAge () {
        var date = new Date(),
            age;

        age = date.getFullYear() - values.birthdayDate.getFullYear();

        return age;
    }

    return this;
}