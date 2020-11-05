function main() {
    //Main program variables.
    const userInput = document.querySelector(`#userInput`);
    const submit = document.querySelector(`#submit`);
    const output = document.querySelector(`#output`);
    //Character counting event listener.
    submit.addEventListener(`click`, function(){
        //Prepare the user's data for analysis.
        const data = userInput.value.split(``);
        //Making sure that there is data, of any kind, submitted by the user.
        if (data.length >= 1) {
            //Where the analysis takes place.
            let answer = data.reduce(function(total,d){
                //Setting up variables for each pass.
                let isIn = false;
                let index = 0;
                //Determining whether or not a character has been detected already in the user's data.
                for (let i = 0; i < total.length; i++) {
                    if (total[i].ch === d) {
                        isIn = true;
                        index = i;
                    }
                }
                //If so, increase the number of times it has been counted by one. If not, add the unique character to the total array and make it available for future increment.
                if (isIn) {
                    total[index].times++;
                } else {
                    total.push({ch:d,times:1})
                }
                //Return the total array.
                return total;
            },[]);
            //Sort the results by descending order of instances.
            const finalAnswer = answer.sort(function(a,b){
                if (a.times > b.times) {
                    return -1;
                } else if (a.times < b.times) {
                    return 1;
                } else {
                    return 0;
                }
            })
            //Clear the output text from any previous uses and present the results in a meaningful way.
            output.innerHTML = ``;
            for (let a in finalAnswer) {
                output.innerHTML += `"<b>${answer[a].ch}</b>" - ${answer[a].times}, `;
            }
        }
    });
}
main();