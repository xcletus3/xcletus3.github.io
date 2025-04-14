// // Form submission handling
// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contact-form');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // In a real implementation, you would send the form data to a server
//             // For now, we'll just simulate a successful submission
            
//             const name = document.getElementById('name').value;
//             const email = document.getElementById('email').value;
//             const message = document.getElementById('message').value;
            
//             // Form validation
//             if (!name || !email || !message) {
//                 alert('Please fill in all fields');
//                 return;
//             }
            
//             // Show success message
//             alert('Thank you for your message! I will get back to you soon.');
            
//             // Clear the form
//             contactForm.reset();
//         });
//     }

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Set up FormSubmit for email delivery
        contactForm.setAttribute('action', 'https://formsubmit.co/ajax/cletusxavier96@gmail.com');
        contactForm.setAttribute('method', 'POST');
        
        // Add honeypot field to prevent spam
        const honeyPot = document.createElement('input');
        honeyPot.type = 'text';
        honeyPot.name = '_honey';
        honeyPot.style.display = 'none';
        contactForm.prepend(honeyPot);
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Form validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation with regex
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Submit to FormSubmit via fetch for email delivery
            fetch('https://formsubmit.co/ajax/cletusxavier96@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            })
            .then(response => response.json())
            .then(data => {
                // Submit to Google Sheets
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
                
                // Replace with your actual Google Form IDs
                const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfuYKX4OaU4A2gsaLfNSpB2Qfrg7qyvSK-_N6DTNKrJNGaNCw/formResponse?` + 
                    `entry.1411746086=${encodeURIComponent(name)}&` + 
                    `entry.475157477=${encodeURIComponent(email)}&` + 
                    `entry.1061192304=${encodeURIComponent(message)}&submit=Submit`;
                
                iframe.src = googleFormUrl;
                
                // Remove iframe after Google submission
                setTimeout(() => {
                    document.body.removeChild(iframe);
                }, 2000);
                
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                
                // Clear the form
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong. Please try again later.');
            });
        });
    }
// });
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animations for skills
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
