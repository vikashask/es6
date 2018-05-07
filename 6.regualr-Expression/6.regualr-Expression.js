/* 
The sticky matching y flag introduced in ES6 is similar to the global g flag.
only difference is that a sticky regular expression must start matching where the previous match left off,
unlike global regular expressions that move onto the rest of the input string when the regular expression 
goes unmatched at any given position.
 */
function matcher(regex, input) {
    return () => {
      const match = regex.exec(input)
      const lastIndex = regex.lastIndex
      return { lastIndex, match }
    }
  }
  const input = 'haha haha haha'
  const nextGlobal = matcher(/ha/g, input)
  console.log(nextGlobal()) // <- { lastIndex: 2, match: ['ha'] }
  console.log(nextGlobal()) // <- { lastIndex: 4, match: ['ha'] }
  console.log(nextGlobal()) // <- { lastIndex: 7, match: ['ha'] }
  const nextSticky = matcher(/ha/y, input)
  console.log(nextSticky()) // <- { lastIndex: 2, match: ['ha'] }
  console.log(nextSticky()) // <- { lastIndex: 4, match: ['ha'] }
  console.log(nextSticky()) // <- { lastIndex: 0, match: null }

  