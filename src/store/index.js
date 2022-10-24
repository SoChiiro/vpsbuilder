import { createStore } from 'vuex'
import { keys, getAll } from "../idb";

const store = createStore({
    state:{
        userLogged: {
            pseudo : '',
            pwd: '',
        },
        view : 'home',
        datas : {
            "PRICE": {
                CPU : 0.99,
                STORAGE : 0.05,
                FREQ : 0.3,
                RAM : 0.4,
                BAND : 0.1,
                CORE : 0.2,
                VERSION: 0.7,
            },
            loginFields: { 
                inputs : {
                    "pseudo":{
                        type: "text",
                        label: "PSEUDO",
                        placeholder: "ENTER YOUR PSEUDO",
                        value:"",
                    },
                    "password":{
                        type: "password",
                        label: "PASSWORD",
                        placeholder: "ENTER YOUR PASSWORD",
                        value:"",
                    }
                },
            },
            registerFields : {
                inputs:{    
                    "pseudo":    {
                        type: "text",
                        label: "PSEUDO",
                        placeholder: "ENTER YOUR PSEUDO",
                        value:"",    
                    },
                    "email":     {
                        type: "email",
                        label: "EMAIL",
                        placeholder: "ENTER YOUR EMAIL",
                        value:"",    
                    },    
                    "password":  {
                        type: "password",
                        label: "PASSWORD",
                        placeholder: "ENTER YOUR PASSWORD",
                        value:"",    
                    },    
                    "cfPassword":{
                        type: "password",
                        label: "CONFIRM PASSWORD",
                        placeholder: "CONFIRM YOUR PASSWORD",
                        value:"",    
                    },
                    "birthDate": {
                        type: "date",
                        label: "BIRTHDATE",
                        placeholder: "ENTER YOUR BIRTHDATE",
                    value:"",
                },

                },
            },
            OS:{    
                Mac:{
                    "LOW BUDGET":{
                        inputs :{
                            "CPU CORE":{
                                type: "number",
                                label:"CPU CORE",
                                min: "1",
                                max: '2',
                                step: "1",
                                placeholder: "CPU CORE",
                                value:"1",
                        },
                            
                            "RAM":   {
                                type: "number",
                                label:"RAM",
                                min: "2",
                                max: "4",
                                step: "2",
                                placeholder: "RAM",
                                value:"2",
                        },
                            
                            "STORAGE":{
                                type: "number",
                                label:"STORAGE",
                                min: "10",
                                max: "25",
                                step: "5",
                                placeholder: "STORAGE",
                                value:"10",
                        },
                            
                            "BANDWIDTH":     {
                                type: "number",
                                label:"BANDWIDTH",
                                min: "15",
                                max: "25",
                                step:"5",
                                placeholder: "BANDWIDTH",
                                value:"15",
                        },
                        
                        },
                        selects:[ 
                            {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            },
                        ]
                    },
                    "MIDDLE BUDGET":{
                        inputs :{
                            "CPU CORE":{
                                type: "number",
                                label:"CPU CORE",
                                min: "2",
                                max: '4',
                                step: "1",
                                placeholder: "CPU CORE",
                                value:"2",
                        },
                            
                            "RAM":   {
                                type: "number",
                                label:"RAM",
                                min: "4",
                                max: "6",
                                step: "2",
                                placeholder: "RAM",
                                value:"4",
                        },
                            
                            "STORAGE":{
                                type: "number",
                                label:"STORAGE",
                                min: "30",
                                max: "60",
                                step: "5",
                                placeholder: "STORAGE",
                                value:"30",
                        },
                            
                            "BANDWIDTH":     {
                                type: "number",
                                label:"BANDWIDTH",
                                min: "30",
                                max: "40",
                                placeholder: "BANDWIDTH",
                                value:"30",
                        },
                        
                        },
                        selects:[ 
                            {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            },
                        ]
                    },
                    "HIGH BUDGET":{
                        inputs :{
                                "CPU CORE":{
                                    type: "number",
                                    label:"CPU CORE",
                                    min: "4",
                                    max: '6',
                                    step: "1",
                                    placeholder: "CPU CORE",
                                    value:"4",
                            },
                                
                                "RAM":   {
                                    type: "number",
                                    label:"RAM",
                                    min: "6",
                                    max: "12",
                                    step: "2",
                                    placeholder: "RAM",
                                    value:"6",
                            },
                                
                                "STORAGE":{
                                    type: "number",
                                    label:"STORAGE",
                                    min: "70",
                                    max: "100",
                                    step: "5",
                                    placeholder: "STORAGE",
                                    value:"70",
                            },
                                
                                "BANDWIDTH":     {
                                    type: "number",
                                    label:"BANDWIDTH",
                                    min: "60",
                                    max: "100",
                                    placeholder: "BANDWIDTH",
                                    value:"60",
                            },
                            
                            },
                            selects:[ 
                                {
                                "name" : 'COUNTRY',
                                "options" : [
                                    "France",
                                    "Allemagne",
                                    "Espagne"
                                    ]
                                },
                            ]
                        }
                },
                Linux:{
                    "LOW BUDGET":{
                        inputs :{
                            "CPU CORE":{
                                type: "number",
                                label:"CPU CORE",
                                min: "2",
                                max: "4",
                                placeholder: "CPU CORE",
                                value:"2",
                        },
                            
                            "CPU FREQUENCY":{
                                type: "number",
                                label:"CPU FREQUENCY",
                                min: "2.5",
                                max: "3",
                                step: "0.1",
                                placeholder: "CPU FREQUENCY",
                                value:"2.5",
                        },
                            
                            "RAM":   {
                                type: "number",
                                label:"RAM",
                                min: "4",
                                max: "6",
                                step:"2",
                                placeholder: "RAM",
                                value:"4",
                        },
                            
                            "STORAGE":{
                                type: "number",
                                label:"STORAGE",
                                min: "15",
                                max: "30",
                                step: "5",
                                placeholder: "STORAGE",
                                value:"15",
                        },
                            
                            "BANDWIDTH":     {
                                type: "number",
                                label:"BANDWIDTH",
                                min: "20",
                                max: "30",
                                placeholder: "BANDWIDTH",
                                value:"20",
                        },
                        
                        },
                        selects:[ 
                            {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            },
                            {
                                "name" : "VM TYPE",
                                "options" : [
                                    "Debian",
                                    "Solaris",
                                    "Kali"
                                ]
                            }
                        ]
                    },
                    "MIDDLE BUDGET":{
                        inputs :{
                            "CPU CORE":{
                                type: "number",
                                label:"CPU CORE",
                                placeholder: "CPU CORE",
                                min:"2",
                                max:"4",
                                value:"2",
                        },
                            
                            "CPU FREQUENCY":{
                                type: "number",
                                label:"CPU FREQUENCY",
                                min: "2.5",
                                max: "3",
                                placeholder: "CPU FREQUENCY",
                                value:"2.5",
                        },
                            
                            "RAM":   {
                                type: "number",
                                label:"RAM",
                                min: "4",
                                max: "6",
                                step:"2",
                                placeholder: "RAM",
                                value:"4",
                        },
                            
                            "STORAGE":{
                                type: "number",
                                label:"STORAGE",
                                min: "40",
                                max: "70",
                                step:"5",
                                placeholder: "STORAGE",
                                value:"40",
                        },
                            
                            "BANDWIDTH":     {
                                type: "number",
                                label:"BANDWIDTH",
                                min: "40",
                                max: "50",
                                step:"0.1",
                                placeholder: "BANDWIDTH",
                                value:"40",
                        },
                        
                        },
                        selects:[ 
                            {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            },
                            {
                                "name" : "VM TYPE",
                                "options" : [
                                    "Debian",
                                    "Solaris",
                                    "Kali"
                                ]
                            }
                        ]
                    },
                    "HIGH BUDGET":{
                        inputs :{
                            "CPU CORE":{
                                type: "number",
                                label:"CPU CORE",
                                min:"4",
                                max:"6",
                                placeholder: "CPU CORE",
                                value:"4",
                        },
                            
                            "CPU FREQUENCY":{
                                type: "number",
                                label:"CPU FREQUENCY",
                                min: "3.5",
                                max: "4.2",
                                placeholder: "CPU FREQUENCY",
                                value:"3.5",
                        },
                            
                            "RAM":   {
                                type: "number",
                                label:"RAM",
                                min: "6",
                                max: "12",
                                step: "2",
                                placeholder: "RAM",
                                value:"6",
                        },
                            
                            "STORAGE":{
                                type: "number",
                                label:"STORAGE",
                                min: "70",
                                max: "100",
                                step: "5",
                                placeholder: "STORAGE",
                                value:"70",
                        },
                            
                            "BANDWIDTH":     {
                                type: "number",
                                label:"BANDWIDTH",
                                min: "60",
                                max: "100",
                                step:"0.1",
                                placeholder: "BANDWIDTH",
                                value:"60",
                        },

                        },
                        selects:[ 
                            {
                            "name" : 'country',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            },
                            {
                                "name" : "VM TYPE",
                                "options" : [
                                    "Debian",
                                    "Solaris",
                                    "Kali"
                                ]
                            }
                        ]
                        }
                },
                Windows:{
                    "LOW BUDGET":{
                        inputs :{
                            "CPU CORE":{
                                type: "number",
                                label:"CPU CORE",
                                min: "1",
                                max: "2",
                                placeholder: "CPU CORE",
                                value:"1",
                        },
    
                            "CPU FREQUENCY":{
                                type: "number",
                                label:"CPU FREQUENCY",
                                min: "2.5",
                                max: "3.2",
                                step:'0.1',
                                placeholder: "CPU FREQUENCY",
                                value:"2.5",
                        },
    
                            "RAM":   {
                                type: "number",
                                label:"RAM",
                                min: "2",
                                max: "4",
                                step: "2",
                                placeholder: "RAM",
                                value:"2",
                        },
    
                            "STORAGE":{
                                type: "number",
                                label:"STORAGE",
                                min: "25",
                                max: "50",
                                step: "5",
                                placeholder: "STORAGE",
                                value:"25",
                        },
    
                            "VERSION":  {
                                type: "number",
                                label:"VERSION",
                                min: "1.0",
                                max: "10.9",
                                step: "0.1",
                                name: "version",
                                id: "version",
                                placeholder: "ENTER THE VERSION",
                                value:"10.0",
                        }
    
                            },
                        selects:[ 
                            {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            },
                        ]
                    },
                    "MIDDLE BUDGET":{
                        inputs :{
                            "CPU CORE":{
                                type: "number",
                                label:"CPU CORE",
                                min: "2",
                                max: "4",
                                placeholder: "CPU CORE",
                                value:"2",
                        },
    
                            "CPU FREQUENCY":{
                                type: "number",
                                label:"CPU FREQUENCY",
                                min: "2.8",
                                max: "3.5",
                                step:"0.1",
                                placeholder: "CPU FREQUENCY",
                                value:"2.8",
                        },
    
                            "RAM":   {
                                type: "number",
                                label:"RAM",
                                min: "6",
                                max: "8",
                                step: "2",
                                placeholder: "RAM",
                                value:"6",
                        },
    
                            "STORAGE":{
                                type: "number",
                                label:"STORAGE",
                                min: "50",
                                max: "75",
                                step: "5",
                                placeholder: "STORAGE",
                                value:"50",
                        },
    
                            "BANDWIDTH":     {
                                type: "number",
                                label:"BANDWIDTH",
                                min: "30",
                                max: "50",
                                placeholder: "BANDWIDTH",
                                value:"30",
                        },
    
                                "VERSION":  {
                                    type: "number",
                                    label:"VERSION",
                                    min: "1.0",
                                    max: "10.9",
                                    step: "0.1",
                                    name: "version",
                                    id: "version",
                                    placeholder: "ENTER THE VERSION",
                                    value:"10.0",
                            }
    
                            },
                        selects:[ 
                            {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            },
                        ]
                    },
                    "HIGH BUDGET":{
                        inputs :{
                        "CPU CORE":{
                            type: "number",
                            label:"CPU CORE",
                            min: "5",
                            max: "8",
                            placeholder: "Choose the number of core",
                            value:"5",
                    },

                        "CPU FREQUENCY":{
                            type: "number",
                            label:"CPU FREQUENCY",
                            min: "3.5",
                            max: "4.2",
                            step: "0.1",
                            placeholder: "CPU FREQUENCY",
                            value:"3.5",
                    },

                        "RAM":   {
                            type: "number",
                            label:"RAM",
                            min: "8",
                            max: "16",
                            step: "2",
                            placeholder: "RAM",
                            value:"8",
                    },

                        "STORAGE":{
                            type: "number",
                            label:"STORAGE",
                            min: "100",
                            max: "150",
                            step: "5",
                            placeholder: "STORAGE",
                            value:"100",
                    },

                        "BANDWIDTH":     {
                            type: "number",
                            label:"BANDWIDTH",
                            min: "50",
                            max: "100",
                            placeholder: "BANDWIDTH",
                            value:"50",
                    },

                            "VERSION":  {
                                type: "number",
                                label:"VERSION",
                                min: "1.0",
                                max: "10.9",
                                step: "0.1",
                                name: "version",
                                id: "version",
                                placeholder: "ENTER THE VERSION",
                                value:"10.0",
                        }

                        },
                        selects:[ 
                            {
                            "name" : 'country',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            },
                        ]
                        }
                }
            },  
            savedVPS : []
        },
    },

    actions: {
        async POPULATE_FROM_CACHE({ state }) {
            let [keyss, values] = await Promise.all([keys(), getAll()])
            state.translations = keyss.map((key, index) => ({ id: key, name: values[index] }))
        }
    },
    getters: {
        getView(state) {
            return state.view;
        },
        getDatas(state){
            return state.datas;
        }
    },
    mutations: {
        setView(state, newView){
            state.view = newView;
        },
        setFieldsValues(state, budget){
            state.datas.OS.Windows["LOW BUDGET"] = budget;
        },
        addVPS(state, budget){
            state.datas.savedVPS.push(budget);
        }
    },
});

export default store;