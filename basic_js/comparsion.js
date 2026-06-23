console.log(null>0); //it will not give output as expected bcz of different datatype prefer same type
console.log(null==0);
console.log(null>=0);//it will give correct out
/*the reason is that equality check(==) and comparsion operator works differently comparsion
operator convert null to number treating it as zero that why (3)give as true output*/


console.log("2"==2);// ya datatype ki conversion ker deta auto or batata k equal dono
console.log("2"===2);//ya datatype ki conversion nai kerta simple check kerta k different type tu notequal



