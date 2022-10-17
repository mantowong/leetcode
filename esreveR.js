//esreveR.js
//https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript



console.log([1,2,3,4]);
    reverse = function(array) {
        var newArr = [];
        for (var i = array.length-1; i>=0; i--){
          newArr.push(array[i]);
        }
        return newArr;
        }

        //Einfach neuen Array machen und mit einem Zähler ab letzten Array-Object in neues Array pushen!