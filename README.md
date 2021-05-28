***RULES***
- culture can only grow in livable areas (marked 'L')
- if an area is empty (of culture), but marked livable, culture can grow
- if a culture grows in an area with 4 or more adjacent locations are occupied, it will die back.



***Initial observations***
- each row has 10 positions
- if data were to be in an array, I could iterate over it recursively and determine outcomes based on positioning.
- need mathematical algorithm to determine relative positioning.
- need condition to stop recursion 

![proof of concept diagram] (./diagram.png)
- function 1 is field currently livable and will it be viable grid [col][row]

- wasteLandGrid is an arr[arrs] all are true or false dependant of status
