export default [
    {
        type: "number",
        label: "DISK STORAGE (MB)",
        min: "8192",
        step: "1024",
        name: "storage",
        id: "storage",
        placeholder: "ENTER THE DISK STORAGE (in MB)",
    },
    {
        type: "number",
        label: "MEMORY SIZE(MB)",
        min: "2048",
        step: "1024",
        name: "RAM",
        id: "RAM",
        placeholder: "ENTER THE MEMORY SIZE(in MB)",
    },
    {
        type: "number",
        label: "CPU FREQUENCY(GHz)",
        min: "2",
        step: "0.1",
        name: "cpu",
        id: "cpu",
        placeholder: "ENTER THE CPU FREQUENCY(in GHz)",
    }
];