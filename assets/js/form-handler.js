const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        statusMsg.style.display = 'block';
        statusMsg.style.color = 'var(--color-text-light)';
        statusMsg.textContent = 'Sending message...';

        const formData = new FormData(contactForm);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock success
        statusMsg.style.color = 'green';
        statusMsg.textContent = 'Message sent successfully! We will get back to you soon.';
        contactForm.reset();

        // In reality, this would POST to a backend or service like Formspree
        /*
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });
            if (response.ok) {
                 statusMsg.style.color = 'green';
                 statusMsg.textContent = 'Message sent!';
            } else {
                 throw new Error('Form submission failed');
            }
        } catch (error) {
            statusMsg.style.color = 'red';
            statusMsg.textContent = 'Error sending message. Please try again.';
        }
        */
    });
}
