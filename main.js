function findMissingNumber(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
  
    for (const num of nums) {
      actualSum += num;
    }
  
    return expectedSum - actualSum;
  }

//   example to text  the function 
//   const nums = [0,5,1,6,3,2,7,9,4];
// const missingNumber = findMissingNumber(nums);
// console.log(missingNumber);
