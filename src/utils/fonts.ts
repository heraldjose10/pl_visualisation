import { Passion_One, Lexend_Deca, Overpass } from 'next/font/google'


export const passion_one = Passion_One({
    weight: "400",
    subsets: ['latin'],
    variable: '--font-passion-one',
});

export const lexend_deca = Lexend_Deca({
    weight: ["400", "700"],
    subsets: ['latin'],
    variable: '--font-lexend-deca'
})

export const overpass = Overpass({
    weight: ["700"],
    subsets: ['latin'],
    variable: '--font-overpass'
})