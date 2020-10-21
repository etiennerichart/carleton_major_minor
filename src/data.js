export const departments = [
    {
        "department": "Computer Science",
        "requirements": {
            "class": [
                "cs111",
                "cs201",
                "cs202",
                "cs208",
                "cs251",
                "cs252",
                "cs254",
                "cs257",
                "+2cs<200"
            ],
            "capstone": [
                "cs399",
                "cs400"
            ]

        },
        "classes": {
            "cs111": {
                "skip": [
                    "AP Computer Science A <4"
                ]
            },
            "cs201": {
                "prereq": [
                    "$or", 
                    "cs111",
                    "AP Computer Science A <4"
                ]
            },
            "cs202": {
                "prereq": [
                    "$or", 
                    "cs111",
                    "AP Computer Science A <4"
                ]
                },
                "cs208": {
                "prereq": [
                    "$or", 
                    "cs111",
                    "AP Computer Science A <4"
                ]
                },
                "cs231": {
                "prereq": [
                    "$or",
                    "cs201",
                    "$or",
                    "cs202",
                    "cs208"
                ]
                },
                "cs232": {
                    "prereq": [
                    "$or", 
                    "cs111",
                    "AP Computer Science A <4"
                    ]
                },
                "cs251": {
                "prereq": [
                    "cs201"
                ]
                },
                "cs252": {
                "prereq": [
                    "$and",
                    "cs201",
                    "$or",
                    "cs202",
                    "math236"
                ]
                },
                "cs254": {
                "prereq": [
                    "$and",
                    "cs201",
                    "$or",
                    "cs202",
                    "math236"
                ]
                },
                "cs257": {
                    "prereq": [
                        "cs201"
                    ]
                },
                "cs298": {
                    "prereq": [
                        "instructor"
                    ]
                },
                "cs301": {
                    "prereq": [
                    "$and",
                    "cs201",
                    "$or",
                    "cs202",
                    "math236"
                    ]
                },
                "cs304": {
                    "prereq": [
                        "cs201"
                    ]
                },
                "cs311": {
                "prereq": [
                    "cs201"
                ]
            },
            "cs312": {
                "prereq": [
                    "cs201"
                ]
            },
            "cs314": {
                "prereq": [
                    "cs201"
                ]
            },
            "cs318": {
                "prereq": [
                    "$or",
                    "cs111",
                    "AP Computer Science A <4",
                    "$or",
                    "cs201"
                ]
            },
            "cs320": {
                "prereq": [
                    "$and",
                    "cs201",
                    "$or",
                    "cs202",
                    "math236"
                ]
            },
            "cs321": {
                "prereq": [
                    "cs201",
                    "$recommend",
                    "$or",
                    "cs202",
                    "math236"
                ]
            },
            "cs322": {
                "prereq": [
                    "$and",
                    "cs201",
                    "$or",
                    "cs202",
                    "math236"
                ]
            },
            "cs324": {
                "prereq": [
                    "cs201",
                    "$recommend",
                    "$or",
                    "cs202",
                    "math236"
                ]
            },
            "cs328": {
                "prereq": [
                    "cs201",
                    "$recommend",
                    "$or",
                    "cs202",
                    "math236"
                ]
            },
            "cs330": {
                "prereq": [
                    "$and",
                    "cs201",
                    "$or",
                    "cs202",
                    "math236"
                ]
            },
            "cs331": {
                "prereq": [
                    "cs201"
                ]
            },
            "cs332": {
                "prereq": [
                    "$and",
                    "cs201",
                    "cs208"
                ]
            },
            "cs334": {
                "prereq": [
                    "cs201"
                ]
            },
            "cs341": {
                "prereq": [
                    "$and",
                    "cs201",
                    "$or",
                    "cs202",
                    "math236"
                ]
            },
            "cs344": {
                "prereq": [
                    "cs201"
                ]
            },
            "cs348": {
                "prereq": [
                    "cs201"
                ]
            },
            "cs352": {
                "prereq": [
                    "cs252"
                ]
            },
            "cs358": {
                "prereq": [
                    "$and",
                    "cs201",
                    "$or",
                    "cs202",
                    "math236"
                ]
            },
            "cs361": {
                "prereq": [
                    "cs201"
                ]
            },
            "cs362": {
                "prereq": [
                    "$and",
                    "cs201",
                    "$or",
                    "cs202",
                    "math236"
                ]
            },
            "cs364": {
                "prereq": [
                    "$and",
                    "cs201",
                    "$or",
                    "cs202",
                    "math236"
                ]
            },
            "cs399": {
                "prereq": [
                    "senior",
                    "$recommend",
                    "cs252",
                    "cs257"
                ]
            },
            "cs400": {
                "prereq": [
                    "cs399"
                ]
            }
        }
    },
    {
        "department": "Geology"
    },
    {
        "department": "Economics"
    }
    
]