"use strict";
// parent of question

function QuestionListController(questionService) {

    const ctrl = this;
    ctrl.service = questionService;
    
    ctrl.getList = ()=>{
        ctrl.service.getQuestions() // returns data from resolve or err from reject
        .then((data)=>{
            ctrl.questions = data;
        })
        .catch((err)=>{
            console.error(err);
        })
    };

    ctrl.getList();  // runs the get from our stuff

    }

angular
.module('QuizApp')  
.component('questionList', {
    template: `
        <div>
            <h2>Questions: </h2>
            <div ng-repeat="questionItem in $ctrl.questions">
                <p>{{questionItem.question}}</p>
                <p ng-hide="!hide" style="background-color: orange; color: blue;">{{questionItem.answer}}</p>
                <button ng-click="hide=!hide" ng-hide="hide">Check Answer</button>
                <button ng-click="hide=!hide" ng-hide="!hide">Hide Answer</button>
            </div>
        </div>
        `,
    controller: QuestionListController
});