"use strict";
// child of question


function AnswerController(questionService) {

    const ctrl = this;
    ctrl.service = questionService;
    
    }

angular
.module('QuizApp')  
.component('answer', {
    template: `
   
        `,
    controller: AnswerController
});