 The function changeBgColor(row) is being used to  change background color of selected row
tdDeleteButton.innerHTML =
    '<button onClick="deleteRowDetails(this)">Delete</button>';
  tdEditButton.innerHTML = '<button onClick="editRowDetails()">Edit</button>'; are being used to add edit and delete buttons
  if (bgColor == "yellow") is being used to change the bg color to yellow when the row is selected and else part is being used to get everything back to how it was when the row is selected.
  function addHeadings() and function removeHeadings() are being used to add and remove header cells
  function addStudentRow() is being used to add a new student row to the table
  function openDropDown() is used for opening Drop down for each row on click of down arrow image.
  function editRowDetails() is used to edit the rows 
  function deleteRowDetails(row) is used to delete the selected row
  function enableSubmit() is used to enable the submit button when a row is selected
  