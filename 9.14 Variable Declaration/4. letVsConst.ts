//Applying the principle of least privilege, all declarations other than those you plan to modify should use const

//THE REASON:
// 1. if a variable didn’t need to get written to, others working on the same codebase shouldn’t automatically be able to write to the object, and will need to consider whether they really need to reassign to the variable.
// 2. Using const also makes code more predictable when reasoning about flow of data.
