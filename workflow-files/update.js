(async () => {
    const args = process.argv.slice(2);
    const path = require("path")
    const adder = JSON.parse(args[0]);
    const output = '/home/runner/work/rco-fflags/rco-fflags' + args[1];
    const names = [];
    const values = [];
    const includes = [];
    const custom = [];
    for (const item1 of adder) {
        if (item1.values.length) {
            for (const item2 of item1.values) {
                if (item1.tbl == "names") names.push(item2);
                else if (item1.tbl == "values") values.push(item2);
                else if (item1.tbl == "includes") includes.push(item2);
            }
        }
        else {
            custom.push(item1.values);
        }
    }
    const fs = require('fs')
    const data = await fetch("https://roblox-client-optimizer.simulhost.com/ClientAppSettings.json")
    const Settings = await data.json()
    const New = {};
    for (const name of Object.keys(Settings)) {
        if (includes.some((val) => name.includes(val)) || names.some((val) => name.startsWith(val)) || values.some((val) => Settings[name] == val)) {
            if (name.includes("TaskSchedulerTargetFps")) Settings[name] = 999999
            New[name] = Settings[name];
        }
    }
    
    for (const item of custom) {
        for (const name of Object.keys(item)) {
            New[name] = item[name];   
        }
    }
    
    fs.writeFileSync(output, JSON.stringify(New, null, 2));
})()
