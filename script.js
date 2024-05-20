function indexOfIgnoreCase(s1, s2) {
	  s1=toUpperCase(s1);
	s2=toUpperCase(s2);
	if(s1.indexOf(s2)<s1.length) return s1.indexOf(s2);
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
