function pyramid(r){
    for(let i=1;i<=r;i++){
        let str ="";
        for(let j=1;j<=r-i;j++){
            str += " "
        }
        for(let k=1;k<=(2*i-1);k++){
            str +="*"
        }
            console.log(str)
    }
}
pyramid(5)