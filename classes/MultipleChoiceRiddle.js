import Riddle from "./Riddle.js";
export default class MultipleChoiceRiddle extends Riddle{
    constructor(id,name,taskDescription,correctAnswer,c){
       super(id,name,taskDescription,correctAnswer)
       this.choices=c
    }
    ask(prompt){
        const showChoices=this.choices.map((item,index)=>{return `\n ${index+1}: ${item}`})
         let answer=prompt(`${this.name} :${this.taskDescription} ${showChoices}\n`)
         while(this.choices[answer-1]!=this.correctAnswer){
            answer=prompt(`${this.name} :${this.taskDescription} ${showChoices}\n`)
         }
    }
}