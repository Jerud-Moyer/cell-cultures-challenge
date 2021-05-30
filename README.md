***RULES***
- culture can only grow in livable areas (marked 'L')
- if an area is empty (of culture), but marked livable, culture can grow initially
- if a culture grows in an area with 4 or more adjacent locations are occupied, it will die back.
- culture should only regrow where there is currently no adjacent growth

***Objectives***
- count number of lifecycles needed to achieve stability
- get final number of growth cultures
- get percentage of growth culture to livable spaces

***Initial observations***
- each row has 10 positions (this I later realized was just the example and I broke the text file up by line.)
- if data were to be in an array, (array of arrays?) I could iterate over it recursively and determine outcomes based on positioning.
- need mathematical algorithm to determine relative positioning.
- need condition to stop recursion 

***Needed Functions***
- data reader

- check for growth medium

- function to check is field currently livable and will it be viable grid [col][row]

- grow initial growths

- check for number adjacent growths

- check growths for viablity

- dieBack

- regrow where no adjacent growths are present

- check for stability to end recursion
