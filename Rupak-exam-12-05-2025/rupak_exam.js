let height = prompt('Write your Height');

if (height >= 6) {
    document.writeln('Very Tall');
} else if (height<6 && height>=5.5) {
    document.writeln('Good Height');
} else if (height<5.5 && height>=5) {
    document.writeln('Standard Height');
} else {
    document.writeln('You are Short');
}