import AllUsers from './components/AllUsers.vue';
import CreateUser from './components/CreateUser.vue';
import EditUser from './components/EditUser.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllUsers
    },
    {
        name: 'create',
        path: '/create',
        component: CreateUser
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditUser
    }
];
