const students = [
  {
    userid: 'stevenh',
    name: 'Steven',
    passFail: true
  },
  {
    userid: 'debbw',
    name: 'Debbie',
    passFail: true
  },
  {
    userid: 'maxv',
    name: 'Max',
    passFail: false
  }
];

const studentsObj = students.reduce(function(acc, student) {
  return { ...acc, [student.userid]: student };
}, {});
