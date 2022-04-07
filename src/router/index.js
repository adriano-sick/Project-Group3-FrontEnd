import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Student from '../views/Student.vue'
import StudentGrade from '../views/StudentGrade.vue'
import StudentEvaluation from '../views/StudentEvaluation.vue'
import Teacher from '../views/Teacher.vue'
import TeacherGrades from '../views/TeacherGrades.vue'
import TeacherEvaluations from '../views/TeacherEvaluations.vue'


Vue.use(VueRouter)

const routes = [{
        path: '*',
        redirect: '/'
    },
      {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/student',
        name: 'Student',
        component: Student
    },
        {
        path: '/studentgrade',
        name: 'StudentGrade',
        component: StudentGrade
    },
     {
        path: '/studentevaluation',
        name: 'StudentEvaluation',
        component: StudentEvaluation
    },   
        {
        path: '/teacher',
        name: 'Teacher',
        component: Teacher
    },
     {
        path: '/teachergrades',
        name: 'TeacherGrades',
        component: TeacherGrades
    },
      {
        path: '/teacherevaluations',
        name: 'TeacherEvaluations',
        component: TeacherEvaluations
    }
    
  
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router