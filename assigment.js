let ma=document.getElementById("marks")
var marks = +prompt("enter your marks :")

if (marks > 100) {
    alert("Marks should be equal or less than 100");
}


else if (marks >= 90) {
    //alert("Marks " + marks + "\n Grade A");
      ma.innerHTML=marks;
}


else if (marks >= 80) {
    alert("Marks " + marks + " \n Grade B");
}


else if (marks >= 70) {
    alert("Marks " + marks + "\n Grade C");
}


else if (marks >= 60) {
    alert("Marks " + marks + "\n Grade D");
}


else {
    alert("Marks " + marks + " \n Grade F");
}


/* 
"Assignment: Grade and Marks Calculator

Write a program that uses else-if conditions to calculate and display a student's grade based on their marks.

Requirements:

- Ask the user to input their marks (out of 100)
- Use else-if conditions to determine the grade based on the following criteria:
    - 90-100: A
    - 80-89: B
    - 70-79: C
    - 60-69: D
    - Below 60: F
- Display the calculated grade to the user

Example output:
```
Enter your marks (out of 100): 85
Your grade is B
```
Note: Make sure to handle invalid input (e.g., marks outside the range of 0-100) and provide appropriate error messages."*/
