module.exports = function toReadable (number) {
    let nums = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
      }
      
      let stringNum = number.toString();
      if (stringNum in nums) return nums[stringNum];
      if (stringNum.length < 3) {
        return `${nums[stringNum[0] + '0']} ${nums[stringNum[1]]}`;
      }else if (stringNum.length < 4) {
        
        if (+stringNum.slice(1) == '00') {
          return `${nums[stringNum[0]]} hundred`;
        } else {
          return `${nums[stringNum[0]]} hundred ${toReadable(+stringNum.slice(1))}`;
        }
        
      }else if (stringNum.length > 3) {
        
        return `${toReadable(+stringNum.slice(0, stringNum.length - 3))} thousand ${toReadable(+stringNum.slice(-3))}`;
      }
}
