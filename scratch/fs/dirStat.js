const _getAllFilesFromFolder = (dir) => {

    const filesystem = require("fs");
    let results = [];

    filesystem.readdirSync(dir).forEach( (file) => {

        file = dir + '/' + file;
        const stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};

console.info(_getAllFilesFromFolder("."));