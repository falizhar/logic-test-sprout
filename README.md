# logic-test-sprout

(1) Name Validator (Logic Test)

Write a function to validate a name,

Definitions:
1. A term is either an initials or word.
2. initials = 1 character
3. words = 2+ characters (no dots allowed)

A “valid name” is a name written in one of the following ways:
* A. Kesya
* A. K. Putri
* Angelina K. Putri
* Angelina Kesya Putri

The following names are “invalid”:
* Angelina or Kesya (single names not allowed)
* A Kesya or A. K Putri (initials must end with dot)
* a. Kesya or A. kesya or a. k. Putri (incorrect capitalization)
* A. Kesya Putri (middle name expanded, while first still left as initial)
* A. K. P. (last name is not a word)
* Angelina. K. Putri (dot only allowed after initial, not word)

Rules
1. Both initials and words must be capitalized.
2. Initials must end with a dot.
3. A name must be either 2 or 3 terms long.
4. If the name is 3 words long, you can expand the first and middle name or expand the first name only. You cannot keep the first name as an initial and expand the middle name only.
5. The last name must be a word (not an initial).
Your task is to write a function that determines whether a name is valid or not. Return true if the name is valid, false otherwise.

Examples:
 validName(“A. Kesya”) ➞ true

validName(“A. K. Putri) ➞ true

validName(“Angelina K. Putri”) ➞ true

validName(“Angelina”) ➞ false
// Must be 2 or 3 words

validName(“a. Kesya”) ➞ false
// Incorrect capitalization

validName(“A Kesya”) ➞ false
// Missing dot after initial

validName(“A. Kesya Putri”) ➞ false
// Cannot have: initial first name + word middle name

validName(“A. Kesya P.”) ➞ false
// Last name cannot be initial

validName(“Angelina. Kesya Putri”) ➞ false
// Words cannot end with a dot (only initials can)


(2) Find All Numbers Disappeared in an Array (Logic Test)

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Constraints:
* n == nums.length
* 1 <= n <= 105
* 1 <= nums[i] <= n

Examples:
const nums = [4,3,2,7,8,2,3,1]
findDisapperared(nums)  ➞ [5,6]

const nums = [1,1]
findDisapperared(nums)  ➞ [2]  
