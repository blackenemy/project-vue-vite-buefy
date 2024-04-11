<template>
    <section class="section ">
        <div class="content">
            <h1 class="title">Contact</h1>
                <b-field>
                    <b-input placeholder="Name" type="text" required pattern="[a-z]*">
                    </b-input>
                </b-field>
                <b-field>
                    <b-input placeholder="Email" type="email"></b-input>
                </b-field>
                <b-field>
                    <b-input type="textarea" minlength="10" maxlength="100"
                        placeholder="โปรดระบุข้อความมากกว่า 10 ตัวอักษร">
                    </b-input>
                </b-field>
                <b-button class="button is-fullwidth" type="is-success" >submit</b-button><br />
            </div>
    </section>
</template>
<script setup>


</script>
