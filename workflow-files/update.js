(async () => {
    const args = process.argv.slice(2);
    const path = require("path")
    const adder = JSON.parse(args[0]);
    const output = '/' + args[1].replace("./", path.join(__dirname + '/../../..'));
    const names = [];
    const values = [];
    const includes = [];
    for (const item1 of adder) {
        for (const item2 of item1.values) {
            if (item1.tbl == "names") names.push(item2);
            else if (item1.tbl == "values") values.push(item2);
            else if (item1.tbl == "includes") includes.push(item2);
        }
    }
    const fs = require('fs')
    const data = await fetch("https://raw.githubusercontent.com/L8X/Roblox-Client-Optimizer/main/ClientAppSettings.json")
    const Settings = await data.json()
    const New = {};
    for (const name of Object.keys(Settings)) {
        if (includes.some((val) => name.includes(val)) || names.some((val) => name.startsWith(val)) || values.some((val) => Settings[name] == val)) {
            New[name] = Settings[name];
        }
    }
    if (fs.readFileSync(output, 'utf8') != JSON.stringify(New)) {
        fs.writeFileSync(output, JSON.stringify(New));
    }
})()
