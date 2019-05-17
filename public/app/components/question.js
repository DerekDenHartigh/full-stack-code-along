"use strict";
// parent of answer, child of questionList

function QuestionController(questionService) {

    const ctrl = this;
    ctrl.service = questionService;
    
    }

angular
.module('QuizApp')  
.component('question', {
    template: `
   
        `,
    controller: QuestionController
});