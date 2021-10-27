const joinList = function(conceptList){
   const ans = conceptList.join(",");
    return ans;
}
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);