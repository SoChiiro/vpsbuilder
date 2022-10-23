import { createStore } from 'vuex'

const store = createStore({
    state:{
        userLogged: {
            pseudo : '',
            pwd: '',
        },
        view : 'home',
        datas : {
            loginFields : {
                
                "pseudo":{
                    type: "text",
                    label: "PSEUDO",
                    placeholder: "ENTER YOUR PSEUDO",
                    value:""
                },
                "password":{
                    type: "password",
                    label: "PASSWORD",
                    placeholder: "ENTER YOUR PASSWORD",
                    value:""
                }
            },
            registerFields : {
                
                "pseudo":    {
                    type: "text",
                    label: "PSEUDO",
                    placeholder: "ENTER YOUR PSEUDO",
                    },
                "email":     {
                    type: "email",
                    label: "EMAIL",
                    placeholder: "ENTER YOUR EMAIL",
                    },    
                "password":  {
                    type: "password",
                    label: "PASSWORD",
                    placeholder: "ENTER YOUR PASSWORD",
                    },    
                "cfPassword":{
                    type: "password",
                    label: "CONFIRM PASSWORD",
                    placeholder: "CONFIRM YOUR PASSWORD",
                    },
                "birthDate": {
                    type: "date",
                    label: "BIRTHDATE",
                    placeholder: "ENTER YOUR BIRTHDATE",
                },
            },
            buildFields:    {
                
                "storage":{
                    type: "number",
                    label: "DISK STORAGE (MB)",
                    min: "8192",
                    max: "200480",
                    step: "1024",
                    name: "storage",
                    id: "storage",
                    placeholder: "ENTER THE DISK STORAGE (min : 8192 in MB)",
                },
                "core":   {
                    type: "number",
                    label: "CORE",
                    min: "2",
                    max: "8",
                    step: "2",  
                    name: "core",
                    id: "core",
                    placeholder: "ENTER THE NUMBER OF CORE",
                },
                "coreFreq":{
                    type: "number",
                    label: "CPU FREQUENCY",
                    min: "1",
                    max: "6",
                    step: "1",
                    name: "CPUFrenquency",
                    id: "CPUFrenquency",
                    placeholder: "ENTER THE FRENQUENCY OF CPU",
                },
                "IPV":     {
                    type: "number",
                    label: "IPV",
                    min: "4",
                    max: "6",
                    step: "2",
                    name: "IPV",
                    id: "IPV",
                    placeholder: "ENTER THE IPV(4/6)",
                },
                "RAM":      {
                    type: "number",
                    label: "MEMORY SIZE(MB)",
                    min: "2048",
                    max:"8192",
                    step: "1024",
                    name: "RAM",
                    id: "RAM",
                    placeholder: "ENTER THE MEMORY SIZE(min : 2048  in MB)",
                },
                "bandWidth":{
                    type: "number",
                    label: "BANDWIDTH",
                    min: "10",
                    max: "100",
                    step: "10",
                    name: "cpu",
                    id: "cpu",
                    placeholder: "ENTER THE BANDWIDTH ( min 10 to 100)",
                },
                "version":  {
                    type: "number",
                    label: "VERSION",
                    min: "10.0",
                    max: "10.9",
                    step: "0.1",
                    name: "version",
                    id: "version",
                    placeholder: "ENTER THE VERSION",
                }
            } 
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
    }
});

export default store;