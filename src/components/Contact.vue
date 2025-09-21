<template>
  <section id="contact" class="py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-4">Contact Me</h2>
      <form @submit.prevent="send">
        <div class="grid md:grid-cols-2 gap-4">
          <input v-model="name" required class="form-control p-2 border rounded" placeholder="Name" />
          <input v-model="email" required type="email" class="form-control p-2 border rounded" placeholder="Email" />
        </div>
        <textarea v-model="message" required class="form-control mt-4 p-2 border rounded" placeholder="Message"></textarea>
        <div class="mt-3">
          <button class="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data(){ return { name:'', email:'', message:'' } },
  methods:{
    send(){ alert('Use email/WhatsApp to contact: vigneshbabutm@gmail.com') }
  }
}
</script>
