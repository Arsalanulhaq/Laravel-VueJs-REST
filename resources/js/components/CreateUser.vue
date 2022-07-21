<template>
    <div>
        <h3 class="text-center">Create User</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addUser">
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" v-model="user.first_name">
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" v-model="user.last_name">
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {}
        }
    },
    methods: {
        addUser() {
            this.axios
                .post('http://localhost:8000/api/users/create', this.user)
                .then(response => (
                    this.$router.push({ name: 'home' })
                ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
    }
}
</script>
