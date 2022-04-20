import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Student from '../views/Student.vue'
import StudentGrade from '../views/StudentGrade.vue'
import StudentEvaluation from '../views/StudentEvaluation.vue'
import Teacher from '../views/Teacher.vue'
import TeacherGrades from '../views/TeacherGrades.vue'
import TeacherEvaluations from '../views/TeacherEvaluations.vue'
import TeacherGradesStudents from '../views/TeacherGradesStudents'
import TeacherStudentsQUestions from '../views/TeacherStudentsQuestions.vue'


Vue.use(VueRouter)

const routes = [{
        path: '*',
        redirect: '/'
    },
     {
        path: '/',
        name: 'Login',
        component:  () => import('../views/Login.vue')
    },
    {
        path: '/student',
        name: 'Student',
        component: () => import('../views/Student.vue')
    },
        {
        path: '/studentgrade',
        name: 'StudentGrade',
        component: () => import('../views/StudentGrade.vue')
    },
     {
        path: '/studentevaluation',
        name: 'StudentEvaluation',
        component: () => import('../views/StudentEvaluation.vue')
    },   
        {
        path: '/teacher',
        name: 'Teacher',
        component: () => import('../views/Teacher.vue')
    },
     {
        path: '/teachergrades',
        name: 'TeacherGrades',
        component: () => import('../views/TeacherGrades.vue')
    },
    {
        path: '/teacherevaluations',
        name: 'TeacherEvaluations',
        component: () => import('../views/TeacherEvaluations.vue')
    },
    {
        path: '/teacherevaluationsstudents',
        name: 'TeacherEvaluationsStudents',
        component: () => import('../views/TeacherEvaluationsStudents.vue')
    },
    {
        path: '/teacherquestions',
        name: 'TeacherQuestions',
        component: () => import('../views/TeacherQuestions.vue')
    },
    {
        path: '/teachergradesstudent',
        name: 'TeacherGradesStudent',
        component: () => import('../views/TeacherGradesStudents.vue')
    },
    {
        path: '/teacherstudentsquestions',
        name: 'TeacherStudentsQuestions',
        component: () => import('../views/TeacherStudentsQuestions.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router