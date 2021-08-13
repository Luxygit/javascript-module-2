/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

//YOUR CODE HERE

/*1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."*/

mentors
.filter(mentor => {
  const isInBcn = mentor.job.city === "Barcelona"
  let knowsReact = mentor.skills.includes("React");
  return isInBcn && knowsReact
})
.forEach((mentor) => {
console.log("Hi, my name is " + mentor.firstName + " " + mentor.lastName + ". I work in Barcelona and i know React.")});

/*my original solution
.forEach((mentor) => {
   let knowsReact = mentor.skills.includes("React");
   let isInBcn = mentor.job.city === "Barcelona"
  if (knowsReact && isInBcn) {
console.log("Hi, my name is " + mentor.firstName + " " + mentor.lastName + ". I work in Barcelona and i know React.")}}); */

/*. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push() */

mentors.forEach((mentor) => {
  let checkIfBarcelona = mentor.job.city == "Barcelona";
  if (checkIfBarcelona) {
    mentor.skills.push("SQL")
    mentor.class = "Jun1";
    ///just checking**
   //console.log(mentor.class);
}});

// 3. Create an object method with the name .addSkill() to be able to add skills from it
mentors.forEach((mentor) => {
    mentor.addSkill = function addSkillFnc (skillX){
      return mentor.skills.push(skillX);
    }
    ///just checking**
    //mentor.addSkill("juggling");
    //console.log(mentor.skills);
});

/*4. Create a function to add a skill to all members in a list of */ 

  

function addSkill(mentors,newSkill){
    mentors.map(mentor => {
    return mentor.skills.push(newSkill);
    }
    
)};
   addSkill(mentors,"skating");
   ///just checking**
 //mentors.map((mentor) =>console.log(mentor.skills) )  ;

   
/* 5. Create a function to remove a skill to all members in a list of mentors*/

function removeSkill(mentorArray, newSkill){ 
  mentorArray.map((ment) => {

    var eachMentSkill = ment.skills;
    //console.log(eachMentSkill);
    //console.log(eachMentSkill.indexOf(newSkill));
    var indexOfSkill = eachMentSkill.indexOf(newSkill);
    eachMentSkill.splice(indexOfSkill, 1);
      return eachMentSkill;
    })
    
};
///just checking**
//removeSkill(mentors, "Node");
//removeSkill(mentors, "Play football");
//mentors.map((mentor) =>console.log(mentor.skills) );

//6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills
function mentorWithMoreSkills(mentors) {
  //just checking length of skills
  //mentors.map((mentor) =>console.log(mentor.skills.length) );
  let eachLength = mentors.map(mentor => mentor.skills.length);
  //this is the highest number of skills
  let highestLength = Math.max(...eachLength);
//now I filter the mentors whose skills length is equal to the highest
 let mostSkilledMentors = mentors.filter(z => z.skills.length == highestLength);
 //console.log(mostSkilledMentors); this is the whole array of highest skilled mentors
 //finally returning only the names of the filtered array.

 let namesOfSk = mostSkilledMentors.map((y) => y.firstName + " " + y.lastName);
 console.log(namesOfSk);
 
};
mentorWithMoreSkills(mentors);


//7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes
mentors.forEach((mentor) => {
    mentor.addStudentLikes = function (){
      return mentor.studentLikes++;
    }
    mentor.addStudentLikes();
    ///just checking**
    //console.log(mentor.studentLikes);
});
//8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  mentors.forEach((mentor) => {
       return mentor.addStudentLikes();
  })
}
///just checking**
//mentors.forEach(mentor => console.log(mentor.firstName, mentor.studentLikes));
//addStudentLikes(mentors);
//mentors.forEach(mentor => console.log(mentor.firstName, mentor.studentLikes));