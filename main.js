function calculateAge() {
    document.getElementById('age').innerHTML = (new Date(new Date() - new Date('March 26, 1998')).getFullYear() - 1970);
    console.log(new Date(new Date() - new Date('March 26, 1998')).getFullYear() - 1970);
}

calculateAge();