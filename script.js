<script type="text/javascript">
   document.getElementById('my-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_xxg5glw', 'template_35f7umm', this)
         .then(function() {
            console.log('SUCCESS!');
         }, function(error) {
            console.log('FAILED...', error);
         });
   });
</script>