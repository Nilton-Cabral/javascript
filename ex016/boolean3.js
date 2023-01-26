// only this cases in JavaScript are false

console.log(`
False cases:
!!0 : ${!!0}
!!NaN : ${!!NaN}
!!"" : ${!!""}
!!false : ${!!false}
!!undefined : ${!!undefined}
!!null : ${!!null}
`);

// except the above cases everething in JavaScript is true

// some true cases
console.log(`
True cases:
!!' ' : ${!!' '}
!![] : ${!![]}
!!-1 : ${!!-1}
!!{} : ${!!{}}
!!/JavaScript/ : ${!!/JavaScript/}
!!new Date : ${!!new Date}
!!function () {} ${!!function () {}}
`);