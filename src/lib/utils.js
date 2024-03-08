export function getMarks(marks){
    // sort 
    // let marks = [50,78,34,56,90,99,37,88,67,75];
    // a = 50, b = 78 if 50 - 78 = -28 if negtive move a first 
    // a = 78, b = 34 if 78 - 34 = 44 if positive move b first 
    // a = 78, b = 78 if 78 - 78 = 0 if same  do not move  
    let pass = marks.filter(m => m >= 50).sort((a, b) => a - b);
    let fail = marks.filter(m => m < 50).sort((a, b) => a - b);
    return {pass, fail};
}