<template>
    <div>
        FirstName: <input v-model="firstName" placeholder="First Name"/>
        LastName: <input v-model="lastName" placeholder="Last Name"/>
    </div>
</template>
<script>
export default {
    props: ['lastName', 'firstName'],
    data: function(){
        return {
            person: {
                firstName: '',
                lastName: ''
            }
        }
    },
    methods: {

        sendFullName () {
            this.$emit('sendFullName', fullName)
        },
    },
    computed:{ 
        fullName() {
            return person.firstName + ' ' + person.lastName
        }
    }

}
</script>