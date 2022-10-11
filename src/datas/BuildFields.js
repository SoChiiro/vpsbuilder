export default [
    {
        type: "number",
        label: "DISK STORAGE (MB)",
        min: "8192",
        max: "200480",
        step: "1024",
        name: "storage",
        id: "storage",
        placeholder: "ENTER THE DISK STORAGE (min : 8192 in MB)",
    },
    {
        type: "number",
        label: "MEMORY SIZE(MB)",
        min: "2048",
        max:"8192",
        step: "1024",
        name: "RAM",
        id: "RAM",
        placeholder: "ENTER THE MEMORY SIZE(min : 2048  in MB)",
    },
    {
        type: "number",
        label: "CPU FREQUENCY(GHz)",
        min: "2",
        max: "6",
        step: "0.1",
        name: "cpu",
        id: "cpu",
        placeholder: "ENTER THE CPU FREQUENCY(min : 2 in GHz)",
    }
];