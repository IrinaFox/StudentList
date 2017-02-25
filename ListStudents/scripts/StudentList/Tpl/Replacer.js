'use strict';

function replacer (_student, tpl) {
    var student = _student.toJSON(),
        newTpl = tpl,
        key;

    for (key in student) {
        newTpl = newTpl.replace(':' + key, student[key]);
    }

    return newTpl;
}
