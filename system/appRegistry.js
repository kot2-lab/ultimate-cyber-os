const apps = {};

export function registerApp(name, callback){

    apps[name] = callback;
}

export function launchApp(name){

    if(apps[name]){

        apps[name]();
    }
}
