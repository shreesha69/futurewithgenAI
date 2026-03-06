import emailjs from '@emailjs/browser';

console.log('emailjs loaded');

emailjs.send('service_g2sa715','template_yc7x3jo',{test:'value'},'I6ahiif8WoVyzhdym')
  .then(res=>console.log('success',res))
  .catch(err=>{
     console.error('error', err);
     if (err && err.text) console.error('text', err.text);
  });
