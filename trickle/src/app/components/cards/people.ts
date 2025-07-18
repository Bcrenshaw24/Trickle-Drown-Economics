export type Person = { 
    photo: string 
    name: string 
    effects: {[key: string]: number}
    requirements: {[key: string]: number}
}

export const barbara: Person = { 
    photo: "/people/Barbara.jpg",
    name: "Barbara", 
    effects: {"Popularity": 30},
    requirements: {"Money": 10000}
} 

export const bethany: Person = { 
    photo: "/people/Bethany.jpg", 
    name: "Bethany", 
    effects: {"Money": 6000},
    requirements: {"Popularity": 70}
} 

export const carl: Person = { 
    photo: "/people/Carl.jpg", 
    name: "Carl",
    effects: {"Popularity": 20},
    requirements: {"Money": 0}
}

export const emma: Person = { 
    photo: "/people/Emma.jpg", 
    name: "Emma", 
    effects: {"Money": 6000}, 
    requirements: {"Popularity": 90}
}

export const mike: Person = { 
    photo: "/people/Mike.jpg", 
    name: "Mike", 
    effects: {"Popularity": 15}, 
    requirements: {"Money": 5000}
} 

export const skeleton: Person = { 
    photo: "/people/Skeleton.jpg",
    name: "Mr. Skeleton", 
    effects: {"Popularity": 40},
    requirements: {"Money": 20000}
} 

export const susan: Person = { 
    photo: "/people/Susan.jpg", 
    name: "Susan", 
    effects: {"Money": 2000},
    requirements: {"Popularity": 20}

}

export const walter: Person = { 
    photo: "/people/Walter.jpg", 
    name: "Walter White", 
    effects: {"Popularity": 25}, 
    requirements: {"Money": 10000}
}