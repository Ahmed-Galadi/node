const { readFile, writeFile } = require('fs');

console.log("start");

readFile('./content/first.txt', 'utf8', (error, result) => {
    if(error) {
        console.log(error);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, res) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = res;

        writeFile('./content/result-async.txt', 
                  `results: ${first}, ${second}`,
                (err, res) => {
                    if(err) {
                        console.log(err);
                        return;
                    }
                    console.log("done with this task");
                }
        );
    });
});
console.log("start the next task");
