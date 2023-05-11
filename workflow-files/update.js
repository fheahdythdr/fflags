(async () => {
    const args = process.argv.slice(2);
    const namesadd = JSON.parse(args[0]);
    const valuesadd = JSON.parse(args[1]);
    const includesadd = JSON.parse(args[2]);
    const names = ["DFFlag"];
    const values = [500];
    const includes = ["FFlag"];
    function add(tbl, tbl2) {
       for (const property of tbl) {
          tbl2.push(property)
       }
    }
    add(namesadd, names);
    add(valuesadd, values);
    add(includesadd, includes);
    const fs = require('fs')
    const data = await fetch("https://raw.githubusercontent.com/L8X/Roblox-Client-Optimizer/main/ClientAppSettings.json")
    const Settings = await data.json()
    const New = {};
    for (const name of Object.keys(Settings)) {
        if (includes.some((val) => name.includes(val)) || names.some((val) => name.startsWith(val)) || values.some((val) => Settings[name] == val)) {
            New[name] = Settings[name];
        }
    }
    if (fs.readFileSync('./rco-fflags/ClientAppSettings.json', 'utf8') != JSON.stringify(New)) {
        fs.writeFileSync('./rco-fflags/ClientAppSettings.json', JSON.stringify(New));
    }
})()
