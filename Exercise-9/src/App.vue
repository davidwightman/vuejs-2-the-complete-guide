<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" v-if="submitted === false">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <FullName vmodel="person.fullName" @sendFullName="sendFullName($event)" />
                    <!-- FirstName: <input v-model="person.firstName" placeholder="First Name"/>
                    LastName: <input v-model="person.lastName" placeholder="Last Name"/> -->
                    <!-- Mail -->
                    Mail: <input v-model="person.mail" placeholder="Mail"/>
                    <!-- Password -->
                    Password: <input v-model="person.password" placeholder="Password"/>
                    <!-- Store Data? Yes/No -->
                    <input type="radio" id="yes" value="Yes" v-model="person.storeData">
                    <label for="yes">Yes</label>
                    <br>
                    <input type="radio" id="no" value="No" v-model="person.storeData">
                    <label for="no">No</label>
                    <br>
                    <button type="submit" @click.prevent="onSubmit">submit</button>
    
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" v-if="submitted === true">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{person.fullName}}</p>
                        <p>Mail: <span>{{person.mail}}</span></p>
                        <p>Password: <span>{{person.password}}</span></p>
                        <p>Store in Database?: {{person.storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './FullName.vue'
    export default {
        components: {
            FullName
        },
        data: function(){
            return {
                submitted: false,
                person: {
                    fullName: '',
                    mail: '',
                    password: '',
                    storeData: 'No'
                }
                
            }
        },
        methods: {
            onSubmit(){
                this.sendFullName()
                this.submitted = true;
            },
            sendFullName(e){
                console.log(e)

            }
        }
        
    }
</script>

<style>
</style>
