 /**
  * Practice JS Features for Week 2
  * Sliding Window - Unique Characters
  */

 // 1. Set basics
 const set = new Set(['a', 'b', 'c']);
 console.log('Has a:', set.has('a')); // true
 set.add('d');
 set.delete('b');
 console.log('Set contents:', [...set]); // ['a','c','d']

 // 2. slice examples
 const str = 'javascript';
 console.log(str.slice(0, 4));  // 'java'
 console.log(str.slice(4));    // 'script'

 // 3. indexOf examples
 console.log('Index of s:', str.indexOf('s'));      // 4
 console.log('Index of z:', str.indexOf('z'));      // -1
 console.log('Index of a after 1:', str.indexOf('a', 1)); // 3

 // 4. Pointer movement example
 function slideWindowExample(s) {
   let left = 0;
   for (let right = 0; right < s.length; right++) {
     // move left pointer until no duplicate in current window
     while (s.indexOf(s[right], left) < right) {
       left++;
     }
     const window = s.slice(left, right + 1);
     console.log(`Window [${left}, ${right}]: "${window}"`);
   }
 }

 slideWindowExample('abca');