# javascript
Difference among arrays containing JavaScript objects.

If we want to compare javascript objects inside a array and get the difference among them.

Example 1:
array_1 = [{a:1,b:2},{a:2,b:3}];
array_2 = [{a:2,b:3},{a:3,b:4},{a:4,b:5}];

diff array_2 -> array_1: [ { a: 3, b: 4 }, { a: 4, b: 5 } ]

Example 2:
a = [{name: "Joe",Company: "IBM"},{name: "Lisa",Company: "Microsoft"}];
b = [{name: "Abel",Company: "Google"},{name: "Lisa",Company: "Microsoft"}];

diff b->a:  [ { name: 'Abel', Company: 'Google' } ]


