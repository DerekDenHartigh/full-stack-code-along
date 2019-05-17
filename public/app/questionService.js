"use strict";

angular
.module("QuizApp")
.service("questionService", ($http, $q)=>{
    const service = this;

    service.getQuestions = ()=>{
        return $q(function(resolve, reject){
            $http.get('./questions') // calls our localhost:3000/questions endpoint
            .then((response)=>{ // takes response data, logs it, and returns it (via resolve)
                console.log(response.data)
                resolve(response.data);
            })
            .catch((err)=>{ // takes error if http get fails, logs and returns error (via reject)
                console.error(err);
                reject(err);
            })
        })
    }
})