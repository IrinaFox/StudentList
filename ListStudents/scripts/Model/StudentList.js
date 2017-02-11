//function for creating array with list of students
function StudentList () {
    this.irina = new Student("Irina", 'Ruban', "female", "princess_rina88", "+380505610891", "irina.fox88@gmail.com", '22');
    this.svetlana = new Student("Svetlana", 'Ovcharenko', "female", "ami-caty", "+380663334455", "svetlana.sunny@gmail.com", '18');
    this.polina = new Student("Polina", 'Zhylyaeva', "female", "polina_volna", "+380934445566", "poluina.catty3@gmail.com", '18');
    this.elena = new Student("Elena", 'Ryndina', "female", "izaya256", "+380666668888", "elena.flower123@gmail.com", '18');
    this.alexey = new Student("Alexey", 'Grigoryev', "male", "dn100980rev", "+380998885511", "alexey.rembo25@gmail.com", '20');
    this.vladimir = new Student("Vladimir", 'Timofeev', "male", "vovanium", "+380634207163", "vladivir.terminator55@gmail.com", '20');

    this.students = [this.irina, this.svetlana, this.polina, this.elena, this.alexey, this.vladimir];

    return this;
}