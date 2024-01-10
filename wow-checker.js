// wow name checker
let _realm = "hyjal"
let wordlist = [];


async function request (realm, name) {
    let retvalue = false
    await fetch(`https://worldofwarcraft.blizzard.com/en-us/character/us/${realm}/${name}/achievements`)
    .then((response) => response)
    .then((json) => {
        if(json.status == 404) return
        if(json.status != 404) { retvalue = true; return }
    });
    return retvalue
}

async function main () {
    let taken = [];
    let free = [];

    for(_name of wordlist){
        let value = await request(_realm, _name);
        if(value == false) {
            free.push(_name);
        } else {
            taken.push(_name);
        }
    }
    console.log(`Total names: ${wordlist.length}\nTaken names (${taken.length}): ${taken}\nFree names (${free.length}): ${free}`);
}

await main()