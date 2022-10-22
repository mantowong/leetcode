//node TwoSums.js
//https://leetcode.com/problems/two-sum/



n = [2,5,5,11]; 
t = 10;
var twoSum = function(nums, target) {
    var o= [];
    for(var i = 0; i < nums.length-1; i++){ 
        for(var j = i+1; j <= nums.length-1; j++){  
            if(nums[i]+nums[j]==target){
              o.push(i);
              o.push(j); 
              return o;
             }
            else{
              continue;  
            }
        }
    }
}

result = twoSum(n,t);
console.log(result);

//Learnings
/* Verschachtelte 
- <= arr.length-1, wenn das letzte Array-Element geprüft werden soll
- < arr-length-1, wenn das letzte Array Element nicht geprüft werden soll
-> Das letzte Array-Element kann nicht mehr mit weiteren verglichen werden
- return verlässt funktion -> break verlässt Schleifen Durchgang
- i+1 wenn benachbarte Array-paare verglichen werden sollen
*/