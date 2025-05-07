let players = ['Tamim', 'Miraj', 'Litton'];

//to insert an element

players.unshift('Shanto'); // to insurt element at 1st
players.push('Tskin'); // to insurt element at end.
players.reverse(); // to reverse the element.

// document.writeln(players + '<br>');
// document.writeln(players.reverse()+ '<br>');

// players.pop(); //to remove element from end;
// players.shift(); // to remove element from beginning;

// document.writeln(players + '<br>');
// document.writeln(players.reverse()+ '<br>');

// players.shift();
document.writeln(players + '<br>');

string_array = players.toString();
document.writeln(string_array + '<br>');
document.writeln('Slice = ' + players.slice(1,4));

document.writeln('<br>' + players);


players.splice(1,4);
document.writeln('<br>' + 'Splice = ' +  players);