import { createStore } from 'vuex'

const store = createStore({
    state:{
        userLogged: {
            pseudo : '',
            pwd: '',
        },
        view : 'home',
        datas : {
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
                Linux:{
                    "LOW BUDGET":{
                        inputs :{
                            "CPU TYPE":{
                                type: "text",
                                placeholder: "CPU TYPE",
                            value:"",
                        },

                            "RAM":   {
                                type: "number",
                                min: "2048",
                                max: "4096",
                                step: "1024",
                                placeholder: "RAM",
                            value:"",
                        },

                            "STORAGE":{
                                type: "number",
                                min: "8192",
                                max: "200480",
                                step: "1024",
                                placeholder: "STORAGE",
                            value:"",
                        },

                            "BANDWIDTH":     {
                                type: "number",
                                min: "2",
                                max: "6",
                                placeholder: "BANDWIDTH",
                            value:"",
                        },

                        },
                        select: {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            }
                    },
                    "MIDDLE BUDGET":{
                        inputs :{
                            "VM TYPE":{
                                type: "text",
                                placeholder: "VM TYPE",
                            value:"",
                        },

                            "CPU FREQUENCY":{
                                type: "number",
                                min: "2",
                                max: "6",
                                placeholder: "CPU FREQUENCY",
                            value:"",
                        },

                            "RAM":   {
                                type: "number",
                                min: "2048",
                                max: "4096",
                                step: "1024",
                                placeholder: "RAM",
                            value:"",
                        },

                            "STORAGE":{
                                type: "number",
                                min: "8192",
                                max: "200480",
                                step: "1024",
                                placeholder: "STORAGE",
                            value:"",
                        },

                            "BANDWIDTH":     {
                                type: "number",
                                min: "2",
                                max: "6",
                                placeholder: "BANDWIDTH",
                            value:"",
                        },

                        },
                        select: {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            }
                    },
                    "HIGH BUDGET":{
                        inputs :{
                        "CORE":{
                            type: "number",
                            min: "2",
                            max: "6",
                            placeholder: "CORE",
                        value:"",
                    },

                        "CPU FREQUENCY":{
                            type: "number",
                            min: "2",
                            max: "6",
                            placeholder: "CPU FREQUENCY",
                        value:"",
                    },

                        "RAM":   {
                            type: "number",
                            min: "2048",
                            max: "4096",
                            step: "1024",
                            placeholder: "RAM",
                        value:"",
                    },

                        "STORAGE":{
                            type: "number",
                            min: "8192",
                            max: "200480",
                            step: "1024",
                            placeholder: "STORAGE",
                        value:"",
                    },

                        "BANDWIDTH":     {
                            type: "number",
                            min: "2",
                            max: "6",
                            placeholder: "BANDWIDTH",
                        value:"",
                    },

                            "VERSION":  {
                                type: "number",
                                min: "10.0",
                                max: "10.9",
                                step: "0.1",
                                name: "version",
                                id: "version",
                                placeholder: "ENTER THE VERSION",
                            value:"",
                        }

                        },
                        select: {
                            "name" : 'country',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            }
                        }
                },
                Mac:{
                    "LOW BUDGET":{
                        inputs :{
                            "CPU TYPE":{
                                type: "text",
                                placeholder: "CPU TYPE",
                            value:"",
                        },

                            "RAM":   {
                                type: "number",
                                min: "2048",
                                max: "4096",
                                step: "1024",
                                placeholder: "RAM",
                            value:"",
                        },

                            "STORAGE":{
                                type: "number",
                                min: "8192",
                                max: "200480",
                                step: "1024",
                                placeholder: "STORAGE",
                            value:"",
                        },

                            "BANDWIDTH":     {
                                type: "number",
                                min: "2",
                                max: "6",
                                placeholder: "BANDWIDTH",
                            value:"",
                        },

                        },
                        select: {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            }
                    },
                    "MIDDLE BUDGET":{
                        inputs :{
                            "VM TYPE":{
                                type: "text",
                                placeholder: "VM TYPE",
                            value:"",
                        },

                            "CPU FREQUENCY":{
                                type: "number",
                                min: "2",
                                max: "6",
                                placeholder: "CPU FREQUENCY",
                            value:"",
                        },

                            "RAM":   {
                                type: "number",
                                min: "2048",
                                max: "4096",
                                step: "1024",
                                placeholder: "RAM",
                            value:"",
                        },

                            "STORAGE":{
                                type: "number",
                                min: "8192",
                                max: "200480",
                                step: "1024",
                                placeholder: "STORAGE",
                            value:"",
                        },

                            "BANDWIDTH":     {
                                type: "number",
                                min: "2",
                                max: "6",
                                placeholder: "BANDWIDTH",
                            value:"",
                        },

                        },
                        select: {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            }
                    },
                    "HIGH BUDGET":{
                        inputs :{
                        "CORE":{
                            type: "number",
                            min: "2",
                            max: "6",
                            placeholder: "CORE",
                            value:""
                        },
                        "CPU FREQUENCY":{
                            type: "number",
                            min: "2",
                            max: "6",
                            placeholder: "CPU FREQUENCY",
                            value:""
                        },
                        "RAM":   {
                            type: "number",
                            min: "2048",
                            max: "4096",
                            step: "1024",
                            placeholder: "RAM",
                            value:""
                        },
                        "STORAGE":{
                            type: "number",
                            min: "8192",
                            max: "200480",
                            step: "1024",
                            placeholder: "STORAGE",
                            value:""
                        },
                        "BANDWIDTH":     {
                            type: "number",
                            min: "2",
                            max: "6",
                            placeholder: "BANDWIDTH",
                            value:""
                        },
                            "VERSION":  {
                                type: "number",
                                min: "10.0",
                                max: "10.9",
                                step: "0.1",
                                name: "version",
                                id: "version",
                                placeholder: "ENTER THE VERSION",
                                value:""
                            }
                        },
                        select: {
                            "name" : 'country',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            }
                        }
                },
                Windows:{
                    "LOW BUDGET":{
                        inputs :{
                            "CPU TYPE":{
                                type: "text",
                                placeholder: "CPU TYPE",
                            value:"",
                        },

                            "RAM":   {
                                type: "number",
                                min: "2048",
                                max: "4096",
                                step: "1024",
                                placeholder: "RAM",
                            value:"",
                        },

                            "STORAGE":{
                                type: "number",
                                min: "8192",
                                max: "200480",
                                step: "1024",
                                placeholder: "STORAGE",
                            value:"",
                        },

                            "BANDWIDTH":     {
                                type: "number",
                                min: "2",
                                max: "6",
                                placeholder: "BANDWIDTH",
                            value:"",
                        },

                        },
                        select: {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            }
                    },
                    "MIDDLE BUDGET":{
                        inputs :{
                            "VM TYPE":{
                                type: "text",
                                placeholder: "VM TYPE",
                            value:"",
                        },

                            "CPU FREQUENCY":{
                                type: "number",
                                min: "2",
                                max: "6",
                                placeholder: "CPU FREQUENCY",
                            value:"",
                        },

                            "RAM":   {
                                type: "number",
                                min: "2048",
                                max: "4096",
                                step: "1024",
                                placeholder: "RAM",
                            value:"",
                        },

                            "STORAGE":{
                                type: "number",
                                min: "8192",
                                max: "200480",
                                step: "1024",
                                placeholder: "STORAGE",
                            value:"",
                        },

                            "BANDWIDTH":     {
                                type: "number",
                                min: "2",
                                max: "6",
                                placeholder: "BANDWIDTH",
                            value:"",
                        },

                        },
                        select: {
                            "name" : 'COUNTRY',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            }
                    },
                    "HIGH BUDGET":{
                        inputs :{
                        "CORE":{
                            type: "number",
                            min: "2",
                            max: "6",
                            placeholder: "CORE",
                        value:"",
                    },

                        "CPU FREQUENCY":{
                            type: "number",
                            min: "2",
                            max: "6",
                            placeholder: "CPU FREQUENCY",
                        value:"",
                    },

                        "RAM":   {
                            type: "number",
                            min: "2048",
                            max: "4096",
                            step: "1024",
                            placeholder: "RAM",
                        value:"",
                    },

                        "STORAGE":{
                            type: "number",
                            min: "8192",
                            max: "200480",
                            step: "1024",
                            placeholder: "STORAGE",
                        value:"",
                    },

                        "BANDWIDTH":     {
                            type: "number",
                            min: "2",
                            max: "6",
                            placeholder: "BANDWIDTH",
                        value:"",
                    },

                            "VERSION":  {
                                type: "number",
                                min: "10.0",
                                max: "10.9",
                                step: "0.1",
                                name: "version",
                                id: "version",
                                placeholder: "ENTER THE VERSION",
                            value:"",
                        }

                        },
                        select: {
                            "name" : 'country',
                            "options" : [
                                "France",
                                "Allemagne",
                                "Espagne"
                                ]
                            }
                        }
                }
            },  
        },
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
    }
});

export default store;