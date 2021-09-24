const chicos = [
    {
        id: 1,
        nombre: 'Nicolás',
        apellido: 'Pardo',
        edad: '2011-10-04',
        foto: '',
        enfermedades: [

        ],
        alergias:[
            {value:'pelo-animal', label:'pelo de animal'.toUpperCase()},
            {value:'picadura-insecto', label:'picadura insecto'.toUpperCase()},
            {value:'moho', label:'moho'.toUpperCase()}
        ],
        info: ''
    },
    {
        id: 2,
        nombre: 'Federico',
        apellido: 'Pardo',
        edad: '2016-12-24',
        foto: '',
        enfermedades: [
            {value:'otras', label:'otras'.toUpperCase()}
        ],
        alergias:[

        ],
        info:'',
        controles:[
            { 
                fecha: '',
                detalle: {
                    talla: '',
                    peso: '',
                }
            },
        ],
        vacunas: [
            {}
        ]
    },
]

const controles = [
    {
        chico: 1,
    }
]