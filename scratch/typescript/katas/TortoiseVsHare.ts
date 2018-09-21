/**
 * Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. 
 * Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) 
and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes 
and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin or "-1 -1 -1".

Examples:
(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"

solution:

v = d/t


time for B to cover lead:
Tb1 = lead / Vb
distance covered by A while B reached the lead:
Da1 = Va * Tb1 = Va * (lead / Vb)
time for B to cover Da1:
Tb2 = Da1 / Vb
Distance covered by A during Tb2:
Da2 = Va * Tb2 = Va * (Da1 / Vb) = Va * (Va * lead / (Vb * Vb)) = Va^2 / Vb^2 * lead

*/

export const race = (Va: number, Vb: number, lead: number): number[] => {
    if (Va > Vb) return null;

    // let totalSeconds = lead / (Va - Va * Va / Vb);
    let totalSeconds = lead / (Vb -  Va) * 3600;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return [hours, minutes, seconds];
}