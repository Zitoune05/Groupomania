<template>
	<div>
		<h2>Contactez nous</h2>
		<p>Adresse : {{ address }}</p>
		<p>Téléphone : {{ phone }}</p>
		<p>Email : {{ email }}</p>
		<p>Horaires :</p>
		<ul>
			<li>L-V: 06:00 à 16:00</li>
			<li>Samedi: 07:00 à 14:00</li>
			<li>Dimanche: 07:00 à 12:00</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Contact",
	data() {
		return {
			address: "Avenue Openclassrooms, Paris, France",
			email: "hello@groupomania.com",
			phone: "09 09 09 55 88"
		}
	}
}
</script>



<style>
div ul li{
    list-style-type: none;
}
</style>
