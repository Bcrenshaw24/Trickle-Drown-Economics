export type Article = { 
    title: string, 
    description: string, 
    effects: {[key: string]: number}
} 

export const initial: Article[] = [ 
    {title: "New President", 
    description: "Citizens hooray over the election of a new president",
    effects: {}
    },
    {title: "Lizard People?", 
    description: "Recent reports and social media posts say that pur new president is a lizard person", 
    effects: {}
    }
]

export const add_taxes: Article[] = [
    {title: "Taxes raised", 
    description: "Citizens enraged from increased taxes, leading to a lower public reception.", 
    effects: {"Money": 3000, "Popularity": -20} 
    }, 
    {title: "Taxes raised", 
    description: "Citizens content from increased taxes, leading to no noticable changes.", 
    effects: {"Money": 2000} 
    }
]
export const lower_taxes: Article[] = [ 
    {title: "Tax reduction", 
    description: "Citizens rejoice with lower taxes, the mega corporations send you a thank you.", 
    effects: {"Popularity": 15} 
    }, 
    {title: "Tax cuts?", 
    description: "Citizens protest against your 'trickle-drown economics', lower public opinion but increased profit", 
    effects: {"Money": 3000, "Popularity": -15} 
    }
]


export const infra: Article[] = [
    {title: "More Buildings?!", 
    description: "Taxpayers disapprove of new additions to cities, what a disaster.", 
    effects: {"Money": -2000, "Popularity": -20} 
    }, 
    {title: "More Buildings", 
    description: "National public approval from increased infrastructre, several companies donated to help", 
    effects: {"Money": 9000, "Popularity": 20} 
    }, 
    {title: "New Roads", 
    description: "Say goodbye to potholes, massive public approval of fixing the roads", 
    effects: {"Money": -2000, "Popularity": 15} 
    }, 
    {title: "Who cares about parks?", 
    description: "Your endorsement of new national parks went horribly, guess nobody cares about the environment huh.", 
    effects: {"Money": -2000, "Popularity": -15} 
    },
    {title: "New Parks!!", 
    description: "People love the new national parks, non-profits support your decision", 
    effects: {"Money": 2000, "Popularity": 10} 
    },
]

export const education: Article[] = [ 
    {title: "Who hates kids?", 
    description: "Taxpayers disapprove of new libraries added to elementary schools", 
    effects: {"Popularity": -5} 
    }, 
    {title: "More Programs!", 
    description: "Parents love the dedication given to school programs, increased fundraising!", 
    effects: {"Money": 3000, "Popularity": 20} 
    }, 
    {title: "Get off the stage!", 
    description: "Some parents find the new music programs a bit deafaning", 
    effects: {"Money": -2000, "Popularity": -15} 
    }, 
    {title: "Sports!", 
    description: "Everyone loves the increased budget on sports, massive ticket sales", 
    effects: {"Money": 8000, "Popularity": 20} 
    },
] 

export const military: Article[] = [
    {title: "New Tank Fleet",
    description: "Citizens are impressed by the display of power, boosting national pride.",
    effects: { "Money": -10000, "Popularity": 15 }
    },
    {title: "Draft Controversy",
    description: "Forced conscription sparks protests among the youth and their families.",
    effects: { "Popularity": -25 }
    },
    {title: "War Games Success",
    description: "Successful military exercises impress allies and intimidate rivals, gaining international respect.",
    effects: { "Popularity": 20 }
    },
    {title: "Defense Contractor Scandal",
    description: "Overpriced contracts discovered, causing outrage over wasted taxpayer money.",
    effects: { "Money": -5000, "Popularity": -10 }
    },
    {title: "Veterans Parade",
    description: "Honoring veterans with a city-wide parade boosts community morale and pride.",
    effects: { "Popularity": 10 }
    },
] 

export const events: Article[] = [ 
    {title: "Shady Deal?", 
    description: "A corporation is offering money to lower enviromental standards", 
    effects: {"Money": 6000, "Popularity": -10} 
    }, 
    {title: "More Grocery Stores", 
    description: "You've just realized that there are numerous food deserts nearby, and you want to fix that", 
    effects: {"Money": -5000, "Popularity": 30} 
    }, 
    {title: "To The Stars", 
    description: "SpaceCorp just found an asteroid floating nearby with gold, maybe we should go after it.", 
    effects: {"Money": 8000, "Popularity": -15} 
    }, 
    {title: "Environmental Deal", 
    description: "Your PR team suggests you to team up with an environmental agency", 
    effects: {"Money": 2000, "Popularity": 20} 
    },
    {title: "Field Trip Act", 
    description: "Kids around your country complain about the lack of field trips, maybe we can endorse them", 
    effects: {"Money": -3000, "Popularity": 25} 
    },
    {title: "Off To Space", 
    description: "Your cabinet asks you to launch a new expidition to mine space rocks", 
    effects: {"Money": 3000, "Popularity": 25} 
    },
    {title: "Did You Say Oil?", 
    description: "You found a field of oil but you'll disturb the endangered species nearby", 
    effects: {"Money": 3000, "Popularity": -25} 
    },
]
