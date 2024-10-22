import AppLayout from '@/layout/AppLayout.vue';
import LayoutStudent from '@/views/pages/studentDashboard/LayoutStudent.vue';
import LayoutTeacher from '@/views/pages/teacherDashboard/LayoutTeacher.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/appLayout',
            component: AppLayout,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/InputDoc.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/ButtonDoc.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/TableDoc.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/ListDoc.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/TreeDoc.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/PanelsDoc.vue')
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/OverlayDoc.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/MediaDoc.vue')
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/MessagesDoc.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/FileDoc.vue')
                },
                {
                    path: '/uikit/menu',
                    name: 'menu',
                    component: () => import('@/views/uikit/MenuDoc.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/ChartDoc.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/MiscDoc.vue')
                },
                {
                    path: '/uikit/timeline',
                    name: 'timeline',
                    component: () => import('@/views/uikit/TimelineDoc.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/pages/Documentation.vue')
                }
            ]
        },
        {
            path: '/layoutStudent',
            component: LayoutStudent,
            children: [
                {
                    path: '/studentdashboard',
                    name: 'StudentDashboard',
                    component: () => import('@/views/pages/studentDashboard/StudentDashboard.vue')
                },
                {
                    path: '/calenders',
                    name: 'calenders',
                    component: () => import('@/views/pages/shared/Calenders.vue')
                },
                {
                    path: '/classrouting',
                    name: 'classrouting',
                    component: () => import('@/views/pages/shared/ClassRouting.vue')
                },
                {
                    path: '/eventlist',
                    name: 'eventlist',
                    component: () => import('@/views/pages/shared/EventList.vue')
                },
                {
                    path: '/examlist',
                    name: 'examlist',
                    component: () => import('@/views/pages/shared/ExamList.vue')
                },
                {
                    path: '/notice',
                    name: 'notice',
                    component: () => import('@/views/pages/shared/Notice.vue')
                }
            ]
        },
        {
            path: '/layoutTeacher',
            component: LayoutTeacher,
            children: [
                {
                    path: '/teacherdashboard',
                    name: 'TeacherDashboard',
                    component: () => import('@/views/pages/teacherDashboard/TeacherDashboard.vue')
                },
                {
                    path: '/calenders',
                    name: 'calenders',
                    component: () => import('@/views/pages/shared/Calenders.vue')
                },
                {
                    path: '/attendance',
                    name: 'attendance',
                    component: () => import('@/views/pages/teacherDashboard/Attendance.vue')
                },
                {
                    path: '/classrouting',
                    name: 'classrouting',
                    component: () => import('@/views/pages/shared/ClassRouting.vue')
                },
                {
                    path: '/eventlist',
                    name: 'eventlist',
                    component: () => import('@/views/pages/shared/EventList.vue')
                },
                {
                    path: '/examlist',
                    name: 'examlist',
                    component: () => import('@/views/pages/shared/ExamList.vue')
                },
                {
                    path: '/notice',
                    name: 'notice',
                    component: () => import('@/views/pages/shared/Notice.vue')
                }
            ]
        },
        {
            path: '/',
            name: 'WelcomePage',
            component: () => import('@/views/pages/WelcomePage.vue')
        },

        {
            path: '/ChoicesLogin',
            name: 'ChoicesLogin',
            component: () => import('@/views/pages/ChoicesLogin.vue')
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/adminlogin',
            name: 'adminlogin',
            component: () => import('@/views/pages/auth/adminAuth/AdminLogin.vue')
        },
        {
            path: '/studentlogin',
            name: 'studentlogin',
            component: () => import('@/views/pages/auth/studentAuth/StudentLogin.vue')
        },
        {
            path: '/studentsignup',
            name: 'studentsignup',
            component: () => import('@/views/pages/auth/studentAuth/StudentSignUp.vue')
        },
        {
            path: '/teacherlogin',
            name: 'teacherlogin',
            component: () => import('@/views/pages/auth/teacherAuth/TeacherLogin.vue')
        },
        {
            path: '/teachersignup',
            name: 'teachersignup',
            component: () => import('@/views/pages/auth/teacherAuth/TeacherSignUp.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;
